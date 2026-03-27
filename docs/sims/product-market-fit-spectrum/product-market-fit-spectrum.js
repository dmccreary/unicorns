// Product-Market Fit Spectrum MicroSim
// Students drag startup scenario cards to positions on a PMF continuum.

let canvasWidth = 750;
let drawHeight = 450;
let controlHeight = 50;
let canvasHeight = 500;

// Spectrum zones: 0=Verified (left), 1=Aspirational (center), 2=Mythical (right)
const zoneLabels = ["Verified PMF", "Aspirational", "Mythical PMF"];
const zoneColors = [
  [60, 180, 75],    // green
  [220, 190, 50],   // gold
  [210, 60, 60]     // red
];

const spectrumMarkers = [
  { label: "Revenue exceeds\ncosts",         xFrac: 0.10 },
  { label: "Organic\ngrowth",                xFrac: 0.30 },
  { label: "Growth requires\nsubsidy",       xFrac: 0.50 },
  { label: "Metrics\nselective",             xFrac: 0.70 },
  { label: "Product doesn't\nexist yet",     xFrac: 0.90 }
];

const scenarios = [
  { text: "2M MAU, 40% organic growth, 85% retention",          correct: 0 },
  { text: "$50M ARR; $48M from one contract",                    correct: 1 },
  { text: "Hockey stick growth starting yesterday",              correct: 2 },
  { text: "100K free users, 12 paying",                          correct: 1 },
  { text: "$500B TAM if we capture 1% of China",                 correct: 2 },
  { text: "Revenue doubled after 80% price cut",                 correct: 1 },
  { text: "95% annual renewal, zero marketing",                  correct: 0 },
  { text: "Demo works on founder's laptop only",                 correct: 2 }
];

let cards = [];
let checkBtn, resetBtn;
let checked = false;
let score = 0;
let dragIndex = -1;
let dragOffX = 0;
let dragOffY = 0;

// Spectrum geometry
let specLeft, specRight, specY, specH;

function updateCanvasSize() {
  const container = document.querySelector('main');
  if (container) {
    canvasWidth = container.offsetWidth;
  }
  canvasHeight = drawHeight + controlHeight;
}

function getZoneForX(x) {
  // 0=Verified (left third), 1=Aspirational (middle third), 2=Mythical (right third)
  let frac = (x - specLeft) / (specRight - specLeft);
  frac = constrain(frac, 0, 1);
  if (frac < 0.333) return 0;
  if (frac < 0.666) return 1;
  return 2;
}

function initCards() {
  cards = [];
  let cardW = 130;
  let cardH = 65;
  let startY = specY + specH + 60;
  let cols = 4;
  let rows = 2;
  let gapX = 12;
  let gapY = 14;
  let totalW = cols * cardW + (cols - 1) * gapX;
  let startX = (canvasWidth - totalW) / 2;

  for (let i = 0; i < scenarios.length; i++) {
    let col = i % cols;
    let row = Math.floor(i / cols);
    cards.push({
      x: startX + col * (cardW + gapX),
      y: startY + row * (cardH + gapY),
      w: cardW,
      h: cardH,
      text: scenarios[i].text,
      correct: scenarios[i].correct,
      placed: -1  // -1 = not placed on spectrum
    });
  }
}

function setup() {
  updateCanvasSize();
  const canvas = createCanvas(canvasWidth, canvasHeight);
  canvas.parent(document.querySelector('main'));
  textFont('Arial');

  checkBtn = createButton('Check Answers');
  checkBtn.parent(document.querySelector('main'));
  checkBtn.mousePressed(() => {
    checked = true;
    score = 0;
    for (let c of cards) {
      if (c.placed === c.correct) score++;
    }
  });

  resetBtn = createButton('Reset');
  resetBtn.parent(document.querySelector('main'));
  resetBtn.mousePressed(() => {
    checked = false;
    score = 0;
    initCards();
  });

  initCards();
}

function draw() {
  updateCanvasSize();
  resizeCanvas(canvasWidth, canvasHeight);

  // Recalculate spectrum geometry
  specLeft = canvasWidth * 0.08;
  specRight = canvasWidth * 0.92;
  specY = 60;
  specH = 36;

  // Reposition cards on resize (only the initial grid, not dragged ones)
  // We handle this in initCards and rely on relative positions

  // Draw area background
  fill('aliceblue');
  stroke('silver');
  rect(0, 0, canvasWidth, drawHeight);

  // Control area background
  fill('white');
  noStroke();
  rect(0, drawHeight, canvasWidth, controlHeight);

  // Position buttons
  let btnY = drawHeight + 12;
  checkBtn.position(canvasWidth * 0.28, btnY);
  resetBtn.position(canvasWidth * 0.55, btnY);

  // Title
  noStroke();
  fill(30);
  textSize(16);
  textAlign(CENTER, TOP);
  text("Product-Market Fit Spectrum", canvasWidth / 2, 10);
  textSize(11);
  fill(100);
  text("Drag each scenario card to its position on the spectrum", canvasWidth / 2, 32);

  // Draw spectrum gradient bar
  noStroke();
  let barW = specRight - specLeft;
  for (let px = 0; px < barW; px++) {
    let frac = px / barW;
    let r, g, b;
    if (frac < 0.5) {
      let t = frac / 0.5;
      r = lerp(zoneColors[0][0], zoneColors[1][0], t);
      g = lerp(zoneColors[0][1], zoneColors[1][1], t);
      b = lerp(zoneColors[0][2], zoneColors[1][2], t);
    } else {
      let t = (frac - 0.5) / 0.5;
      r = lerp(zoneColors[1][0], zoneColors[2][0], t);
      g = lerp(zoneColors[1][1], zoneColors[2][1], t);
      b = lerp(zoneColors[1][2], zoneColors[2][2], t);
    }
    fill(r, g, b);
    rect(specLeft + px, specY, 1, specH);
  }

  // Spectrum border
  noFill();
  stroke(120);
  strokeWeight(1);
  rect(specLeft, specY, barW, specH, 4);

  // Zone labels on the bar
  noStroke();
  textSize(11);
  textAlign(CENTER, CENTER);
  let thirdW = barW / 3;
  for (let i = 0; i < 3; i++) {
    fill(255);
    text(zoneLabels[i], specLeft + thirdW * i + thirdW / 2, specY + specH / 2);
  }

  // Spectrum markers below bar
  noStroke();
  fill(70);
  textSize(9);
  textAlign(CENTER, TOP);
  for (let m of spectrumMarkers) {
    let mx = specLeft + m.xFrac * barW;
    // Tick mark
    stroke(100);
    strokeWeight(1);
    line(mx, specY + specH, mx, specY + specH + 8);
    // Label
    noStroke();
    let lines = m.label.split('\n');
    for (let li = 0; li < lines.length; li++) {
      text(lines[li], mx, specY + specH + 10 + li * 11);
    }
  }

  // Draw cards
  let cardW = 130;
  let cardH = 65;

  for (let i = 0; i < cards.length; i++) {
    let c = cards[i];

    // Card background
    strokeWeight(1);

    if (checked) {
      c.placed = getZoneForX(c.x + c.w / 2);
      if (c.placed === c.correct) {
        fill(200, 240, 200);
        stroke(60, 160, 60);
      } else {
        fill(255, 210, 210);
        stroke(200, 60, 60);
      }
    } else {
      fill(255);
      stroke(160);
    }

    // Highlight if dragging
    if (i === dragIndex) {
      strokeWeight(2);
      stroke(70, 100, 200);
    }

    rect(c.x, c.y, c.w, c.h, 5);

    // Card text
    noStroke();
    fill(40);
    textSize(9);
    textAlign(CENTER, CENTER);
    wrapText(c.text, c.x + c.w / 2, c.y + c.h / 2, c.w - 10, c.h - 8);

    // Correct/incorrect indicator
    if (checked) {
      noStroke();
      textSize(14);
      textAlign(RIGHT, TOP);
      c.placed = getZoneForX(c.x + c.w / 2);
      if (c.placed === c.correct) {
        fill(40, 150, 40);
        text('\u2713', c.x + c.w - 4, c.y + 2);
      } else {
        fill(200, 40, 40);
        text('\u2717', c.x + c.w - 4, c.y + 2);
      }
    }
  }

  // Score display
  if (checked) {
    noStroke();
    fill(30);
    textSize(14);
    textAlign(CENTER, BOTTOM);
    text("Score: " + score + " / " + cards.length + " correct", canvasWidth / 2, drawHeight - 10);
  }

  // Instructions at bottom of draw area
  if (!checked) {
    noStroke();
    fill(120);
    textSize(10);
    textAlign(CENTER, BOTTOM);
    text("Drag cards onto the spectrum, then click Check Answers.", canvasWidth / 2, drawHeight - 10);
  }
}

function wrapText(txt, cx, cy, maxW, maxH) {
  // Simple word-wrap centered at (cx, cy)
  let words = txt.split(' ');
  let lines = [];
  let current = '';
  textSize(9);

  for (let w of words) {
    let test = current.length === 0 ? w : current + ' ' + w;
    if (textWidth(test) > maxW && current.length > 0) {
      lines.push(current);
      current = w;
    } else {
      current = test;
    }
  }
  if (current.length > 0) lines.push(current);

  let lineH = 12;
  let totalH = lines.length * lineH;
  let startY = cy - totalH / 2 + lineH / 2;

  for (let i = 0; i < lines.length; i++) {
    text(lines[i], cx, startY + i * lineH);
  }
}

function mousePressed() {
  if (checked) return;

  // Check cards in reverse order (top card first)
  for (let i = cards.length - 1; i >= 0; i--) {
    let c = cards[i];
    if (mouseX >= c.x && mouseX <= c.x + c.w &&
        mouseY >= c.y && mouseY <= c.y + c.h) {
      dragIndex = i;
      dragOffX = mouseX - c.x;
      dragOffY = mouseY - c.y;
      // Move to end of array for top rendering
      let card = cards.splice(i, 1)[0];
      cards.push(card);
      dragIndex = cards.length - 1;
      return;
    }
  }
}

function mouseDragged() {
  if (dragIndex >= 0 && dragIndex < cards.length) {
    let c = cards[dragIndex];
    c.x = mouseX - dragOffX;
    c.y = mouseY - dragOffY;
    // Constrain within draw area
    c.x = constrain(c.x, 0, canvasWidth - c.w);
    c.y = constrain(c.y, 0, drawHeight - c.h);
  }
}

function mouseReleased() {
  dragIndex = -1;
}

function windowResized() {
  updateCanvasSize();
  resizeCanvas(canvasWidth, canvasHeight);
}

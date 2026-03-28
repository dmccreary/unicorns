// Product-Market Fit Spectrum MicroSim
// Drag startup scenario cards into drop zones for immediate feedback.

let canvasWidth = 750;
let canvasHeight = 500;

const zoneLabels = ["Verified PMF", "Aspirational", "Mythical PMF"];
const zoneDescriptions = [
  "Real revenue, real users",
  "Some traction, much spin",
  "Pure fantasy metrics"
];
const zoneColors = [
  [60, 180, 75],   // green
  [220, 190, 50],  // gold
  [210, 60, 60]    // red
];

const scenarios = [
  { text: "2M MAU, 40% organic growth, 85% retention",   correct: 0 },
  { text: "$50M ARR; $48M from one contract",             correct: 1 },
  { text: "Hockey stick growth starting yesterday",       correct: 2 },
  { text: "100K free users, 12 paying",                   correct: 1 },
  { text: "$500B TAM if we capture 1% of China",          correct: 2 },
  { text: "Revenue doubled after 80% price cut",          correct: 1 },
  { text: "95% annual renewal, zero marketing",           correct: 0 },
  { text: "Demo works on founder's laptop only",          correct: 2 }
];

let cards = [];
let resetBtn;
let dragIndex = -1;
let dragOffX = 0;
let dragOffY = 0;
let score = 0;
let correctCount = 0;

// Zone geometry (recalculated on resize)
let zones = [];
let zoneTop, zoneH;

// Card tray geometry
let trayTop;
const cardW = 140;
const cardH = 58;

// Flash animation for wrong answers
let flashCard = -1;
let flashTimer = 0;
const FLASH_DURATION = 30;

function updateCanvasSize() {
  const container = document.querySelector('main');
  if (container) {
    canvasWidth = container.offsetWidth;
  }
  canvasHeight = 500;
}

function updateZoneGeometry() {
  let margin = canvasWidth * 0.04;
  let gap = 12;
  let totalGap = gap * 2;
  let zoneW = (canvasWidth - margin * 2 - totalGap) / 3;
  zoneTop = 55;
  zoneH = 160;

  zones = [];
  for (let i = 0; i < 3; i++) {
    zones.push({
      x: margin + i * (zoneW + gap),
      y: zoneTop,
      w: zoneW,
      h: zoneH
    });
  }

  trayTop = zoneTop + zoneH + 30;
}

function initCards() {
  cards = [];
  score = 0;
  correctCount = 0;
  flashCard = -1;
  flashTimer = 0;

  // Shuffle scenarios for variety
  let indices = scenarios.map((_, i) => i);
  for (let i = indices.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [indices[i], indices[j]] = [indices[j], indices[i]];
  }

  let cols = 4;
  let gapX = 10;
  let gapY = 10;
  let totalW = cols * cardW + (cols - 1) * gapX;
  let startX = (canvasWidth - totalW) / 2;

  for (let i = 0; i < indices.length; i++) {
    let si = indices[i];
    let col = i % cols;
    let row = Math.floor(i / cols);
    cards.push({
      x: startX + col * (cardW + gapX),
      y: trayTop + row * (cardH + gapY),
      homeX: startX + col * (cardW + gapX),
      homeY: trayTop + row * (cardH + gapY),
      w: cardW,
      h: cardH,
      text: scenarios[si].text,
      correct: scenarios[si].correct,
      locked: false,     // true after correct placement
      placedZone: -1     // which zone the card is snapped into
    });
  }
}

function getZoneAtPoint(px, py) {
  for (let i = 0; i < zones.length; i++) {
    let z = zones[i];
    if (px >= z.x && px <= z.x + z.w && py >= z.y && py <= z.y + z.h) {
      return i;
    }
  }
  return -1;
}

const lockedCardH = Math.round(cardH / 3);

function snapCardToZone(card, zoneIdx) {
  // Count how many cards are already in this zone
  let count = 0;
  for (let c of cards) {
    if (c.locked && c.placedZone === zoneIdx) count++;
  }
  let z = zones[zoneIdx];
  let padX = 8;
  let padY = 30;
  let stackGap = 4;
  // Shrink card and stack vertically within the zone
  card.x = z.x + padX;
  card.w = z.w - padX * 2;
  card.h = lockedCardH;
  card.y = z.y + padY + count * (lockedCardH + stackGap);
}

function setup() {
  updateCanvasSize();
  const canvas = createCanvas(canvasWidth, canvasHeight);
  canvas.parent(document.querySelector('main'));
  textFont('Arial');

  resetBtn = createButton('Reset');
  resetBtn.parent(document.querySelector('main'));
  resetBtn.mousePressed(() => {
    updateZoneGeometry();
    initCards();
  });

  updateZoneGeometry();
  initCards();
}

function draw() {
  updateCanvasSize();
  resizeCanvas(canvasWidth, canvasHeight);
  updateZoneGeometry();

  // Background
  background(240, 248, 255); // aliceblue

  // Title
  noStroke();
  fill(30);
  textSize(16);
  textAlign(CENTER, TOP);
  text("Product-Market Fit Spectrum", canvasWidth / 2, 8);
  textSize(11);
  fill(100);
  text("Drag each scenario into the correct zone", canvasWidth / 2, 28);

  // Score
  noStroke();
  textSize(13);
  textAlign(RIGHT, TOP);
  fill(50);
  text(correctCount + " / " + cards.length + " placed", canvasWidth - 16, 10);

  // Draw drop zones
  for (let i = 0; i < 3; i++) {
    let z = zones[i];
    let zc = zoneColors[i];
    let isHover = false;

    // Highlight zone if dragging a card over it
    if (dragIndex >= 0) {
      let c = cards[dragIndex];
      let cx = c.x + c.w / 2;
      let cy = c.y + c.h / 2;
      if (getZoneAtPoint(cx, cy) === i) {
        isHover = true;
      }
    }

    // Zone background
    if (isHover) {
      fill(zc[0], zc[1], zc[2], 60);
      stroke(zc[0], zc[1], zc[2]);
      strokeWeight(3);
    } else {
      fill(zc[0], zc[1], zc[2], 25);
      stroke(zc[0], zc[1], zc[2], 150);
      strokeWeight(2);
    }
    drawingContext.setLineDash(isHover ? [] : [8, 5]);
    rect(z.x, z.y, z.w, z.h, 8);
    drawingContext.setLineDash([]);

    // Zone label
    noStroke();
    fill(zc[0] * 0.6, zc[1] * 0.6, zc[2] * 0.6);
    textSize(13);
    textAlign(CENTER, TOP);
    text(zoneLabels[i], z.x + z.w / 2, z.y + 6);
    textSize(9);
    fill(zc[0] * 0.7, zc[1] * 0.7, zc[2] * 0.7, 200);
    text(zoneDescriptions[i], z.x + z.w / 2, z.y + 22);
  }

  // Flash timer
  if (flashTimer > 0) flashTimer--;

  // Draw cards (locked first, then unlocked, dragged last)
  let drawOrder = cards.map((_, i) => i);
  // Sort: locked cards first, then unlocked, dragged card last
  drawOrder.sort((a, b) => {
    if (a === dragIndex) return 1;
    if (b === dragIndex) return -1;
    if (cards[a].locked && !cards[b].locked) return -1;
    if (!cards[a].locked && cards[b].locked) return 1;
    return 0;
  });

  for (let idx of drawOrder) {
    let c = cards[idx];
    strokeWeight(1);

    if (c.locked) {
      // Correct card in zone — green tint
      fill(210, 245, 210);
      stroke(60, 160, 60);
      strokeWeight(2);
    } else if (idx === flashCard && flashTimer > 0) {
      // Wrong answer flash — red
      let pulse = Math.sin(flashTimer * 0.5) * 0.5 + 0.5;
      fill(255, 200 + pulse * 55, 200 + pulse * 55);
      stroke(210, 60, 60);
      strokeWeight(2);
    } else if (idx === dragIndex) {
      // Currently dragging
      fill(255, 255, 240);
      stroke(70, 100, 200);
      strokeWeight(2);
    } else {
      // Default card
      fill(255);
      stroke(160);
    }

    rect(c.x, c.y, c.w, c.h, 5);

    // Card text
    noStroke();
    fill(40);
    textSize(9);
    textAlign(CENTER, CENTER);
    wrapText(c.text, c.x + c.w / 2, c.y + c.h / 2, c.w - 12, c.h - 8);

    // Checkmark on locked cards
    if (c.locked) {
      noStroke();
      fill(40, 150, 40);
      textSize(16);
      textAlign(RIGHT, TOP);
      text('\u2713', c.x + c.w - 4, c.y + 2);
    }
  }

  // Completion message
  if (correctCount === cards.length) {
    noStroke();
    fill(30);
    textSize(15);
    textAlign(CENTER, TOP);
    text("All scenarios correctly classified.", canvasWidth / 2, trayTop + 10);
  }

  // Instruction
  if (correctCount < cards.length && dragIndex < 0) {
    noStroke();
    fill(140);
    textSize(10);
    textAlign(CENTER, BOTTOM);
    text("Drag cards into the drop zones. Correct placements lock in place.", canvasWidth / 2, canvasHeight - 8);
  }
}

function wrapText(txt, cx, cy, maxW, maxH) {
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
  // Check cards in reverse order (top card first), skip locked
  for (let i = cards.length - 1; i >= 0; i--) {
    let c = cards[i];
    if (c.locked) continue;
    if (mouseX >= c.x && mouseX <= c.x + c.w &&
        mouseY >= c.y && mouseY <= c.y + c.h) {
      dragIndex = i;
      dragOffX = mouseX - c.x;
      dragOffY = mouseY - c.y;
      return;
    }
  }
}

function mouseDragged() {
  if (dragIndex >= 0 && dragIndex < cards.length) {
    let c = cards[dragIndex];
    c.x = mouseX - dragOffX;
    c.y = mouseY - dragOffY;
    c.x = constrain(c.x, 0, canvasWidth - c.w);
    c.y = constrain(c.y, 0, canvasHeight - c.h);
  }
}

function mouseReleased() {
  if (dragIndex < 0) return;

  let c = cards[dragIndex];
  let cx = c.x + c.w / 2;
  let cy = c.y + c.h / 2;
  let zone = getZoneAtPoint(cx, cy);

  if (zone >= 0) {
    if (zone === c.correct) {
      // Correct — lock card into zone
      c.locked = true;
      c.placedZone = zone;
      correctCount++;
      snapCardToZone(c, zone);
    } else {
      // Wrong — flash and return to tray
      flashCard = dragIndex;
      flashTimer = FLASH_DURATION;
      c.x = c.homeX;
      c.y = c.homeY;
    }
  } else {
    // Dropped outside any zone — return home
    c.x = c.homeX;
    c.y = c.homeY;
  }

  dragIndex = -1;
}

function windowResized() {
  updateCanvasSize();
  resizeCanvas(canvasWidth, canvasHeight);
}

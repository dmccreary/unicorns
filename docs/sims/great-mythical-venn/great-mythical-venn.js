// Great Mythical Venn Diagram MicroSim
// Drag concept cards into the correct region of a 3-circle Venn diagram.
// Immediate feedback on drop with celebration particles.

let canvasWidth = 750;
let drawHeight = 520;
let controlHeight = 60;
let canvasHeight = drawHeight + controlHeight;

// Circle centers and radius (recalculated on resize)
let cx1, cy1, cx2, cy2, cx3, cy3, cr;

// Card dimensions
const CARD_W = 115;
const CARD_H = 28;

// Regions: "fictional", "real", "both"
const concepts = [
  { label: "Sparkle the Unicorn",      answer: "fictional" },
  { label: "Venture Capital",           answer: "real" },
  { label: "Unicorn Startup Metaphor",  answer: "both" },
  { label: "The Grand Council",         answer: "fictional" },
  { label: "AI Hallucination",          answer: "real" },
  { label: "Dragon Layoffs",            answer: "both" },
  { label: "The Ostrich Academy",       answer: "fictional" },
  { label: "Committee Paralysis",       answer: "both" },
  { label: "Gartner Hype Cycle",        answer: "real" },
  { label: "Mythical Product-Market Fit", answer: "both" },
  { label: "Kraken-as-a-Service",       answer: "fictional" },
  { label: "LinkedIn Skill Inflation",  answer: "real" },
  { label: "This Textbook",             answer: "both" },
  { label: "Beast Classification System", answer: "both" },
  { label: "AGI Timeline Claims",       answer: "real" }
];

let cards = [];
let draggingCard = null;
let dragOffsetX = 0;
let dragOffsetY = 0;
let score = 0;
let totalPlaced = 0;

// Timer
let startTime = 0;
let endTime = 0;
let gameComplete = false;
let finalCelebrationSpawned = false;

// Celebration particles
let particles = [];
const celebrationColors = ['#FF6B6B', '#FF8E53', '#FFD93D', '#6BCB77', '#4D96FF', '#9B59B6', '#FF6B9D'];

// Wrong answer shake
let shakeCards = []; // { card, startFrame }

let resetBtn, okBtn;

function updateCanvasSize() {
  const container = document.querySelector('main');
  if (container) {
    canvasWidth = container.offsetWidth;
  }
  canvasHeight = drawHeight + controlHeight;
}

function calculateCirclePositions() {
  let centerX = canvasWidth / 2;
  let centerY = 210;
  cr = min(canvasWidth * 0.18, 130);
  let spread = cr * 0.7;
  cx1 = centerX - spread;
  cy1 = centerY - spread * 0.3;
  cx2 = centerX + spread;
  cy2 = centerY - spread * 0.3;
  cx3 = centerX;
  cy3 = centerY + spread * 0.6;
}

function initCards() {
  cards = [];
  let startY = drawHeight - 105;
  let cols = 5;
  let padX = 8;
  let padY = 6;
  let totalW = cols * (CARD_W + padX) - padX;
  let startX = (canvasWidth - totalW) / 2;

  for (let i = 0; i < concepts.length; i++) {
    let col = i % cols;
    let row = floor(i / cols);
    cards.push({
      label: concepts[i].label,
      answer: concepts[i].answer,
      x: startX + col * (CARD_W + padX),
      y: startY + row * (CARD_H + padY),
      homeX: startX + col * (CARD_W + padX),
      homeY: startY + row * (CARD_H + padY),
      result: null, // null, "correct", "wrong"
      locked: false // locked after correct placement
    });
  }
}

function setup() {
  updateCanvasSize();
  const canvas = createCanvas(canvasWidth, canvasHeight);
  canvas.parent(document.querySelector('main'));
  textFont('Arial');

  calculateCirclePositions();
  initCards();

  resetBtn = createButton('Reset');
  resetBtn.parent(document.querySelector('main'));
  resetBtn.mousePressed(resetSim);

  okBtn = createButton('OK');
  okBtn.parent(document.querySelector('main'));
  okBtn.mousePressed(resetSim);
  okBtn.hide();
}

function draw() {
  updateCanvasSize();
  resizeCanvas(canvasWidth, canvasHeight);
  calculateCirclePositions();

  // Draw area background
  fill('aliceblue');
  stroke('silver');
  rect(0, 0, canvasWidth, drawHeight);

  // Control area background
  fill('white');
  rect(0, drawHeight, canvasWidth, controlHeight);

  // Title
  noStroke();
  fill(50);
  textSize(16);
  textAlign(CENTER, TOP);
  text("The Great Mythical Venn Diagram", canvasWidth / 2, 10);

  textSize(11);
  fill(100);
  text("Drag each concept to the correct region", canvasWidth / 2, 30);

  // Draw Venn circles
  drawVennCircles();

  // Draw cards with shake effect
  for (let c of cards) {
    let shakeX = 0;
    let shakeEntry = shakeCards.find(s => s.card === c);
    if (shakeEntry) {
      let elapsed = frameCount - shakeEntry.startFrame;
      if (elapsed < 20) {
        shakeX = sin(elapsed * 1.5) * 6 * (1 - elapsed / 20);
      } else {
        shakeCards = shakeCards.filter(s => s.card !== c);
      }
    }
    drawCard(c, shakeX);
  }

  // Draw celebration particles
  updateAndDrawParticles();

  // Congratulations overlay
  if (gameComplete) {
    drawCongratulationsPanel();
  }

  // Score display
  noStroke();
  fill(50);
  textSize(14);
  textAlign(CENTER, TOP);
  text("Score: " + score + " / " + concepts.length, canvasWidth / 2, drawHeight + 10);

  // Position button
  let btnY = drawHeight + 30;
  resetBtn.position(canvasWidth / 2 - 25, btnY);
}

function drawVennCircles() {
  strokeWeight(2);

  // Fictional (left) - lavender
  stroke(150, 130, 200);
  fill(200, 180, 240, 60);
  ellipse(cx1, cy1, cr * 2, cr * 2);

  // Real (right) - gold
  stroke(200, 180, 80);
  fill(240, 220, 120, 60);
  ellipse(cx2, cy2, cr * 2, cr * 2);

  // Both (bottom) - green
  stroke(100, 180, 100);
  fill(140, 220, 140, 60);
  ellipse(cx3, cy3, cr * 2, cr * 2);

  // Labels
  noStroke();
  fill(80, 50, 130);
  textSize(14);
  textAlign(CENTER, CENTER);
  textStyle(BOLD);
  text("Fictional", cx1 - cr * 0.45, cy1 - cr * 0.5);

  fill(130, 110, 20);
  text("Real", cx2 + cr * 0.45, cy2 - cr * 0.5);

  fill(40, 110, 40);
  text("Both", cx3, cy3 + cr * 0.55);
  textStyle(NORMAL);
}

function drawCard(c, shakeX) {
  let col;
  if (c.result === "correct") {
    col = color(180, 240, 180);
  } else if (c.result === "wrong") {
    col = color(240, 180, 180);
  } else {
    col = color(255, 255, 240);
  }

  let drawX = c.x + shakeX;

  stroke(150);
  strokeWeight(1);
  fill(col);
  rect(drawX, c.y, CARD_W, CARD_H, 4);

  noStroke();
  fill(40);
  textSize(9);
  textAlign(CENTER, CENTER);
  text(c.label, drawX + CARD_W / 2, c.y + CARD_H / 2);

  // Show a small checkmark for correct cards
  if (c.result === "correct") {
    fill(40, 160, 40);
    textSize(12);
    textAlign(RIGHT, CENTER);
    text("\u2713", drawX + CARD_W - 4, c.y + CARD_H / 2);
  }

  // Show correct region hint for wrong cards
  if (c.result === "wrong") {
    fill(180, 0, 0);
    textSize(8);
    textAlign(LEFT, CENTER);
    text("\u2192 " + c.answer, drawX + CARD_W + 3, c.y + CARD_H / 2);
  }
}

function getRegion(px, py) {
  let inFictional = dist(px, py, cx1, cy1) < cr;
  let inReal = dist(px, py, cx2, cy2) < cr;
  let inBoth = dist(px, py, cx3, cy3) < cr;

  if (inBoth) return "both";
  if (inFictional && inReal) return "both";
  if (inFictional) return "fictional";
  if (inReal) return "real";
  return "none";
}

// Spawn celebration particles at a position
function spawnCelebration(px, py) {
  for (let i = 0; i < 25; i++) {
    let angle = random(TWO_PI);
    let speed = random(2, 6);
    particles.push({
      x: px,
      y: py,
      vx: cos(angle) * speed,
      vy: sin(angle) * speed - 2,
      size: random(4, 10),
      rotation: random(TWO_PI),
      rotationSpeed: random(-0.2, 0.2),
      alpha: 255,
      color: celebrationColors[floor(random(celebrationColors.length))],
      shape: random() > 0.5 ? 'rect' : 'circle'
    });
  }
}

function updateAndDrawParticles() {
  noStroke();
  for (let i = particles.length - 1; i >= 0; i--) {
    let p = particles[i];

    // Update
    p.x += p.vx;
    p.y += p.vy;
    p.vy += 0.15; // gravity
    p.rotation += p.rotationSpeed;
    p.alpha -= 4;

    if (p.alpha <= 0) {
      particles.splice(i, 1);
      continue;
    }

    // Draw
    push();
    translate(p.x, p.y);
    rotate(p.rotation);
    let c = color(p.color);
    c.setAlpha(p.alpha);
    fill(c);
    if (p.shape === 'rect') {
      rectMode(CENTER);
      rect(0, 0, p.size, p.size * 1.5, 1);
      rectMode(CORNER);
    } else {
      ellipse(0, 0, p.size, p.size);
    }
    pop();
  }
}

function formatTime(seconds) {
  let mins = floor(seconds / 60);
  let secs = floor(seconds % 60);
  if (mins > 0) {
    return mins + " minute" + (mins !== 1 ? "s" : "") + " and " + secs + " second" + (secs !== 1 ? "s" : "");
  }
  return secs + " second" + (secs !== 1 ? "s" : "");
}

function getTimeWasteComment(seconds) {
  if (seconds < 30) return "A remarkably efficient waste of time.";
  if (seconds < 60) return "The committee would have taken longer to approve the agenda.";
  if (seconds < 120) return "That is time you will never recover. The unicorns thank you for your sacrifice.";
  if (seconds < 300) return "In the time you spent here, three new AI startups were funded and two pivoted to blockchain.";
  return "At this rate, you could have formed a committee, studied the problem, and still accomplished nothing. Which, to be fair, is also what happened here.";
}

function drawCongratulationsPanel() {
  // Spawn continuous celebration particles
  if (!finalCelebrationSpawned || frameCount % 8 === 0) {
    spawnCelebration(random(canvasWidth * 0.2, canvasWidth * 0.8), random(60, 160));
    finalCelebrationSpawned = true;
  }

  // Semi-transparent overlay
  noStroke();
  fill(0, 0, 0, 140);
  rect(0, 0, canvasWidth, drawHeight);

  // Panel
  let panelW = min(canvasWidth - 60, 500);
  let panelH = 280;
  let panelX = (canvasWidth - panelW) / 2;
  let panelY = (drawHeight - panelH) / 2;

  // Panel shadow
  fill(0, 0, 0, 40);
  rect(panelX + 4, panelY + 4, panelW, panelH, 12);

  // Panel background
  fill(255, 255, 245);
  stroke(200, 180, 80);
  strokeWeight(3);
  rect(panelX, panelY, panelW, panelH, 12);

  noStroke();
  let cx = canvasWidth / 2;
  let elapsed = (endTime - startTime) / 1000;

  // Title
  fill(80, 50, 130);
  textSize(24);
  textAlign(CENTER, TOP);
  textStyle(BOLD);
  text("Congratulations", cx, panelY + 20);

  // Subtitle
  fill(130, 110, 20);
  textSize(14);
  textStyle(NORMAL);
  text("All 15 concepts correctly classified.", cx, panelY + 55);

  // Divider
  stroke(220);
  strokeWeight(1);
  line(panelX + 30, panelY + 80, panelX + panelW - 30, panelY + 80);

  // Time report
  noStroke();
  fill(50);
  textSize(13);
  textAlign(CENTER, TOP);
  text("Time wasted: " + formatTime(elapsed), cx, panelY + 95);

  // Snarky comment - word wrap in panel
  fill(100, 60, 60);
  textSize(12);
  textStyle(ITALIC);
  let comment = getTimeWasteComment(elapsed);
  text(comment, panelX + 30, panelY + 125, panelW - 60, 80);
  textStyle(NORMAL);

  // Sparkle quote
  fill(80, 50, 130);
  textSize(11);
  textStyle(ITALIC);
  text('"The data is unambiguous. You have successfully\nsorted fictional nonsense from real nonsense.\nFurther research is needed to determine why."', cx, panelY + 200);
  textStyle(NORMAL);

  fill(100);
  textSize(10);
  text("— Sparkle, Professor of Applied Mythozoology", cx, panelY + 252);

  // Position OK button in lower-right of panel
  okBtn.position(panelX + panelW - 60, panelY + panelH - 40);
  okBtn.show();
}

function resetSim() {
  score = 0;
  totalPlaced = 0;
  particles = [];
  shakeCards = [];
  gameComplete = false;
  finalCelebrationSpawned = false;
  okBtn.hide();
  startTime = millis();
  endTime = 0;
  initCards();
}

function mousePressed() {
  if (gameComplete) return;
  for (let i = cards.length - 1; i >= 0; i--) {
    let c = cards[i];
    if (c.locked) continue; // don't allow dragging locked cards
    if (mouseX >= c.x && mouseX <= c.x + CARD_W &&
        mouseY >= c.y && mouseY <= c.y + CARD_H) {
      draggingCard = c;
      dragOffsetX = mouseX - c.x;
      dragOffsetY = mouseY - c.y;
      // Start timer on first drag
      if (startTime === 0) startTime = millis();
      // Move to top of draw order
      cards.splice(i, 1);
      cards.push(c);
      // Clear wrong result on re-drag
      if (c.result === "wrong") {
        c.result = null;
      }
      break;
    }
  }
}

function mouseDragged() {
  if (draggingCard) {
    draggingCard.x = mouseX - dragOffsetX;
    draggingCard.y = mouseY - dragOffsetY;
  }
}

function mouseReleased() {
  if (!draggingCard) return;

  let c = draggingCard;
  draggingCard = null;

  let cardCenterX = c.x + CARD_W / 2;
  let cardCenterY = c.y + CARD_H / 2;
  let region = getRegion(cardCenterX, cardCenterY);

  // Only evaluate if dropped inside a circle
  if (region === "none") return;

  if (region === c.answer) {
    // Correct
    c.result = "correct";
    c.locked = true;
    score++;
    spawnCelebration(cardCenterX, cardCenterY);
    // Check for completion
    if (score === concepts.length) {
      endTime = millis();
      gameComplete = true;
    }
  } else {
    // Wrong - shake and snap back home
    c.result = "wrong";
    shakeCards.push({ card: c, startFrame: frameCount });
    // Snap back to home position after a brief moment
    c.x = c.homeX;
    c.y = c.homeY;
  }
}

// Great Mythical Venn Diagram MicroSim
// Drag concept cards into the correct region of a 3-circle Venn diagram.

let canvasWidth = 750;
let drawHeight = 420;
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
let checked = false;
let showAnswers = false;
let score = 0;

let checkBtn, showBtn, resetBtn;

function updateCanvasSize() {
  const container = document.querySelector('main');
  if (container) {
    canvasWidth = container.offsetWidth;
  }
  canvasHeight = drawHeight + controlHeight;
}

function calculateCirclePositions() {
  let centerX = canvasWidth / 2;
  let centerY = 170;
  cr = min(canvasWidth * 0.18, 130);
  let spread = cr * 0.7;
  // Left: Fictional, Right: Real, Bottom: Both overlap trick
  // Use classic 3-circle Venn: left, right, bottom
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
      result: null // null, "correct", "wrong"
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

  // Buttons
  checkBtn = createButton('Check Answers');
  checkBtn.parent(document.querySelector('main'));
  checkBtn.mousePressed(checkAnswers);

  showBtn = createButton('Show All Answers');
  showBtn.parent(document.querySelector('main'));
  showBtn.mousePressed(showAllAnswers);

  resetBtn = createButton('Reset');
  resetBtn.parent(document.querySelector('main'));
  resetBtn.mousePressed(resetSim);
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

  // Draw cards
  for (let c of cards) {
    drawCard(c);
  }

  // Score display
  if (checked || showAnswers) {
    noStroke();
    fill(50);
    textSize(14);
    textAlign(CENTER, TOP);
    text("Score: " + score + " / 15", canvasWidth / 2, drawHeight + 10);
  }

  // Position buttons
  let btnY = drawHeight + 30;
  let btnSpacing = 130;
  let btnStartX = canvasWidth / 2 - btnSpacing * 1.2;
  checkBtn.position(btnStartX, btnY);
  showBtn.position(btnStartX + btnSpacing, btnY);
  resetBtn.position(btnStartX + btnSpacing * 2, btnY);
}

function drawVennCircles() {
  // Semi-transparent circles
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

function drawCard(c) {
  let col;
  if (c.result === "correct") {
    col = color(180, 240, 180);
  } else if (c.result === "wrong") {
    col = color(240, 180, 180);
  } else {
    col = color(255, 255, 240);
  }

  stroke(150);
  strokeWeight(1);
  fill(col);
  rect(c.x, c.y, CARD_W, CARD_H, 4);

  noStroke();
  fill(40);
  textSize(9);
  textAlign(CENTER, CENTER);
  text(c.label, c.x + CARD_W / 2, c.y + CARD_H / 2);

  // Show correct region label if showing answers
  if (showAnswers && c.result === "wrong") {
    fill(180, 0, 0);
    textSize(8);
    textAlign(LEFT, CENTER);
    text("→ " + c.answer, c.x + CARD_W + 3, c.y + CARD_H / 2);
  }
}

function getRegion(px, py) {
  let inFictional = dist(px, py, cx1, cy1) < cr;
  let inReal = dist(px, py, cx2, cy2) < cr;
  let inBoth = dist(px, py, cx3, cy3) < cr;

  // Priority: if in the "Both" circle, count as "both"
  // If in overlap of Fictional+Real but not Both circle, also count as "both"
  // If only in Fictional circle, count as "fictional"
  // If only in Real circle, count as "real"

  if (inBoth) return "both";
  if (inFictional && inReal) return "both";
  if (inFictional) return "fictional";
  if (inReal) return "real";
  return "none";
}

function checkAnswers() {
  checked = true;
  showAnswers = false;
  score = 0;
  for (let c of cards) {
    let cardCenterX = c.x + CARD_W / 2;
    let cardCenterY = c.y + CARD_H / 2;
    let region = getRegion(cardCenterX, cardCenterY);
    if (region === c.answer) {
      c.result = "correct";
      score++;
    } else {
      c.result = "wrong";
    }
  }
}

function showAllAnswers() {
  showAnswers = true;
  checked = true;
  score = 0;
  for (let c of cards) {
    let cardCenterX = c.x + CARD_W / 2;
    let cardCenterY = c.y + CARD_H / 2;
    let region = getRegion(cardCenterX, cardCenterY);
    if (region === c.answer) {
      c.result = "correct";
      score++;
    } else {
      c.result = "wrong";
    }
  }
}

function resetSim() {
  checked = false;
  showAnswers = false;
  score = 0;
  initCards();
}

function mousePressed() {
  // Find topmost card under mouse
  for (let i = cards.length - 1; i >= 0; i--) {
    let c = cards[i];
    if (mouseX >= c.x && mouseX <= c.x + CARD_W &&
        mouseY >= c.y && mouseY <= c.y + CARD_H) {
      draggingCard = c;
      dragOffsetX = mouseX - c.x;
      dragOffsetY = mouseY - c.y;
      // Move to top of draw order
      cards.splice(i, 1);
      cards.push(c);
      // Clear result on re-drag
      c.result = null;
      checked = false;
      showAnswers = false;
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
  draggingCard = null;
}

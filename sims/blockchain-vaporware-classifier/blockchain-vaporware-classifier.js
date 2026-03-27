// Blockchain Vaporware Classifier MicroSim
// Drag blockchain applications onto a 5-level vaporware spectrum.

let canvasWidth = 750;
let drawHeight = 430;
let controlHeight = 50;
let canvasHeight = 480;

const spectrumLabels = [
  "Shipping Product",
  "Works in Lab",
  "Aspirational",
  "Announced",
  "Pure Unicorn"
];

const spectrumColors = [
  [76, 175, 80],    // green
  [139, 195, 74],   // yellow-green
  [255, 235, 59],   // yellow
  [255, 152, 0],    // orange
  [244, 67, 54]     // red
];

const cards = [
  { label: "Bitcoin for\nremittances",              correct: 0 },
  { label: "Ethereum smart\ncontracts for DeFi",    correct: 0 },
  { label: "Walmart lettuce\ntracking",             correct: 1 },
  { label: "Self-sovereign\ndigital identity",      correct: 2 },
  { label: "National election\nvoting",             correct: 3 },
  { label: "NFT-based real\nestate deeds",          correct: 2 },
  { label: "Blockchain organic\nfood cert",         correct: 3 },
  { label: "Decentralized\nautonomous country",     correct: 4 }
];

let cardPositions = [];
let dragging = -1;
let dragOffsetX = 0;
let dragOffsetY = 0;
let checked = false;
let cardResults = [];
let score = 0;

const CARD_W = 140;
const CARD_H = 50;
const SPECTRUM_Y = 50;
const SPECTRUM_H = 50;

let checkBtn, resetBtn;

function updateCanvasSize() {
  const container = document.querySelector('main');
  if (container) {
    canvasWidth = container.offsetWidth;
  }
  canvasHeight = drawHeight + controlHeight;
}

function initCardPositions() {
  let startX = 20;
  let startY = SPECTRUM_Y + SPECTRUM_H + 80;
  let cols = 4;
  let gapX = 10;
  let gapY = 15;
  let totalRowW = cols * CARD_W + (cols - 1) * gapX;
  startX = (canvasWidth - totalRowW) / 2;

  cardPositions = [];
  for (let i = 0; i < cards.length; i++) {
    let col = i % cols;
    let row = Math.floor(i / cols);
    cardPositions.push({
      x: startX + col * (CARD_W + gapX),
      y: startY + row * (CARD_H + gapY)
    });
  }
  checked = false;
  cardResults = [];
  score = 0;
}

function setup() {
  updateCanvasSize();
  const canvas = createCanvas(canvasWidth, canvasHeight);
  canvas.parent(document.querySelector('main'));
  textFont('Arial');

  initCardPositions();

  checkBtn = createButton('Check Answers');
  checkBtn.parent(document.querySelector('main'));
  checkBtn.mousePressed(checkAnswers);

  resetBtn = createButton('Reset');
  resetBtn.parent(document.querySelector('main'));
  resetBtn.mousePressed(doReset);
}

function draw() {
  updateCanvasSize();
  resizeCanvas(canvasWidth, canvasHeight);

  // Draw area background
  fill('aliceblue');
  stroke('silver');
  rect(0, 0, canvasWidth, drawHeight);

  // Control area background
  fill('white');
  rect(0, drawHeight, canvasWidth, controlHeight);

  // Title
  fill(30);
  noStroke();
  textSize(18);
  textAlign(CENTER, TOP);
  text("Blockchain Vaporware Classifier", canvasWidth / 2, 10);

  // Instruction
  textSize(12);
  fill(80);
  text("Drag each card onto the spectrum zone where you think it belongs.", canvasWidth / 2, 34);

  // Draw spectrum bar
  let spectrumLeft = 20;
  let spectrumRight = canvasWidth - 20;
  let spectrumW = spectrumRight - spectrumLeft;
  let zoneW = spectrumW / 5;

  for (let i = 0; i < 5; i++) {
    let c = spectrumColors[i];
    fill(c[0], c[1], c[2]);
    stroke(100);
    strokeWeight(1);
    rect(spectrumLeft + i * zoneW, SPECTRUM_Y, zoneW, SPECTRUM_H, i === 0 ? 6 : 0, i === 4 ? 6 : 0, i === 4 ? 6 : 0, i === 0 ? 6 : 0);

    // Label
    fill(i < 3 ? 30 : 255);
    noStroke();
    textSize(11);
    textAlign(CENTER, CENTER);
    text(spectrumLabels[i], spectrumLeft + i * zoneW + zoneW / 2, SPECTRUM_Y + SPECTRUM_H / 2);
  }

  // Draw zone divider lines
  stroke(80);
  strokeWeight(1);
  for (let i = 1; i < 5; i++) {
    let lx = spectrumLeft + i * zoneW;
    line(lx, SPECTRUM_Y, lx, SPECTRUM_Y + SPECTRUM_H);
  }

  // Draw cards
  for (let i = 0; i < cards.length; i++) {
    let cx = cardPositions[i].x;
    let cy = cardPositions[i].y;

    // Card border color based on check results
    if (checked && cardResults.length > i) {
      if (cardResults[i]) {
        stroke(0, 180, 0);
        strokeWeight(3);
      } else {
        stroke(220, 0, 0);
        strokeWeight(3);
      }
    } else {
      stroke(100);
      strokeWeight(1);
    }

    // Card fill
    fill(255, 255, 255);
    rect(cx, cy, CARD_W, CARD_H, 6);

    // Card text
    fill(30);
    noStroke();
    textSize(11);
    textAlign(CENTER, CENTER);
    let lines = cards[i].label.split('\n');
    let lineH = 14;
    let textStartY = cy + CARD_H / 2 - (lines.length - 1) * lineH / 2;
    for (let l = 0; l < lines.length; l++) {
      text(lines[l], cx + CARD_W / 2, textStartY + l * lineH);
    }
  }

  // Score display
  if (checked) {
    fill(30);
    noStroke();
    textSize(16);
    textAlign(CENTER, CENTER);
    text("Score: " + score + " / " + cards.length, canvasWidth / 2, drawHeight - 30);
  }

  // Position buttons
  let btnY = drawHeight + 12;
  checkBtn.position(canvasWidth / 2 - 120, btnY);
  resetBtn.position(canvasWidth / 2 + 20, btnY);
}

function getZoneForX(cx) {
  let spectrumLeft = 20;
  let spectrumRight = canvasWidth - 20;
  let spectrumW = spectrumRight - spectrumLeft;
  let zoneW = spectrumW / 5;
  let cardCenter = cx + CARD_W / 2;

  if (cardCenter < spectrumLeft || cardCenter > spectrumRight) return -1;
  let zone = Math.floor((cardCenter - spectrumLeft) / zoneW);
  return constrain(zone, 0, 4);
}

function checkAnswers() {
  cardResults = [];
  score = 0;
  for (let i = 0; i < cards.length; i++) {
    let zone = getZoneForX(cardPositions[i].x);
    let correct = zone === cards[i].correct;
    cardResults.push(correct);
    if (correct) score++;
  }
  checked = true;
}

function doReset() {
  initCardPositions();
}

function mousePressed() {
  for (let i = cards.length - 1; i >= 0; i--) {
    let cx = cardPositions[i].x;
    let cy = cardPositions[i].y;
    if (mouseX >= cx && mouseX <= cx + CARD_W && mouseY >= cy && mouseY <= cy + CARD_H) {
      dragging = i;
      dragOffsetX = mouseX - cx;
      dragOffsetY = mouseY - cy;
      checked = false;
      cardResults = [];
      return;
    }
  }
}

function mouseDragged() {
  if (dragging >= 0) {
    cardPositions[dragging].x = constrain(mouseX - dragOffsetX, 0, canvasWidth - CARD_W);
    cardPositions[dragging].y = constrain(mouseY - dragOffsetY, 0, drawHeight - CARD_H);
  }
}

function mouseReleased() {
  dragging = -1;
}

// Touch support
function touchStarted() {
  mousePressed();
  return false;
}

function touchMoved() {
  mouseDragged();
  return false;
}

function touchEnded() {
  mouseReleased();
  return false;
}

// AI Hype Cycle Beasts MicroSim
// Interactive hype cycle curve with AI technologies and mythical beasts at each phase.

let canvasWidth = 750;
let drawHeight = 430;
let controlHeight = 50;
let canvasHeight = 480;

// Hype cycle phases
const phases = [
  { name: "Technology\nTrigger",              beast: "Pegasus",  beastDesc: "Winged horse takes flight — the technology launches with soaring ambition.", xFrac: 0.08 },
  { name: "Peak of Inflated\nExpectations",   beast: "Unicorn",  beastDesc: "Mythical valuation achieved. Nobody questions whether it actually exists.", xFrac: 0.28 },
  { name: "Trough of\nDisillusionment",       beast: "Dragon",   beastDesc: "Fire destroys hype. Layoffs. Pivots. LinkedIn posts about 'exciting new chapters.'", xFrac: 0.50 },
  { name: "Slope of\nEnlightenment",          beast: "Centaur",  beastDesc: "Human and machine working together. Quietly. Without a press release.", xFrac: 0.72 },
  { name: "Plateau of\nProductivity",         beast: "Phoenix",  beastDesc: "Reborn as something genuinely useful. Nobody writes articles about it anymore.", xFrac: 0.92 }
];

// Technology markers with correct phase index (0-4)
let techMarkers = [
  { label: "AGI",                    correctPhase: 1, x: 0, y: 0, dragging: false },
  { label: "Self-driving (L5)",      correctPhase: 1, x: 0, y: 0, dragging: false },
  { label: "Generative AI (text)",   correctPhase: 2, x: 0, y: 0, dragging: false },
  { label: "AI code assistants",     correctPhase: 3, x: 0, y: 0, dragging: false },
  { label: "Spam filters",          correctPhase: 4, x: 0, y: 0, dragging: false },
  { label: "Machine translation",   correctPhase: 4, x: 0, y: 0, dragging: false }
];

let showExpertBtn, resetBtn;
let hoveredPhase = -1;
let dragIndex = -1;
let dragOffX = 0;
let dragOffY = 0;

// Curve geometry cache
let curvePoints = [];
const CURVE_SAMPLES = 200;

function updateCanvasSize() {
  const container = document.querySelector('main');
  if (container) {
    canvasWidth = container.offsetWidth;
  }
  canvasHeight = drawHeight + controlHeight;
}

function hypeValue(t) {
  // t in [0, 1] -> y value (0=bottom, 1=top) for hype cycle shape
  // Trigger rise -> Peak -> Trough -> Slope -> Plateau
  if (t < 0.15) {
    // Trigger: gentle rise
    return 0.15 + 0.25 * (t / 0.15);
  } else if (t < 0.30) {
    // Rise to peak
    let p = (t - 0.15) / 0.15;
    return 0.40 + 0.55 * Math.sin(p * Math.PI / 2);
  } else if (t < 0.50) {
    // Peak to trough
    let p = (t - 0.30) / 0.20;
    return 0.95 - 0.75 * Math.sin(p * Math.PI / 2);
  } else if (t < 0.75) {
    // Trough to slope
    let p = (t - 0.50) / 0.25;
    return 0.20 + 0.30 * p;
  } else {
    // Slope to plateau
    let p = (t - 0.75) / 0.25;
    return 0.50 + 0.10 * (1 - Math.exp(-3 * p));
  }
}

function getCurveX(t) {
  let marginL = canvasWidth * 0.06;
  let marginR = canvasWidth * 0.04;
  return marginL + t * (canvasWidth - marginL - marginR);
}

function getCurveY(t) {
  let topMargin = 60;
  let bottomMargin = 100;
  let h = drawHeight - topMargin - bottomMargin;
  return topMargin + h * (1 - hypeValue(t));
}

function buildCurvePoints() {
  curvePoints = [];
  for (let i = 0; i <= CURVE_SAMPLES; i++) {
    let t = i / CURVE_SAMPLES;
    curvePoints.push({ x: getCurveX(t), y: getCurveY(t), t: t });
  }
}

function nearestCurvePoint(mx, my) {
  let bestDist = Infinity;
  let bestIdx = 0;
  for (let i = 0; i < curvePoints.length; i++) {
    let d = dist(mx, my, curvePoints[i].x, curvePoints[i].y);
    if (d < bestDist) {
      bestDist = d;
      bestIdx = i;
    }
  }
  return curvePoints[bestIdx];
}

function snapToCorrectPosition(marker) {
  let phase = phases[marker.correctPhase];
  let t = phase.xFrac;
  marker.x = getCurveX(t);
  marker.y = getCurveY(t);
}

function scatterMarkers() {
  // Place markers at semi-random positions along the curve
  let offsets = [0.25, 0.32, 0.55, 0.65, 0.80, 0.88];
  for (let i = 0; i < techMarkers.length; i++) {
    let t = offsets[i];
    techMarkers[i].x = getCurveX(t);
    techMarkers[i].y = getCurveY(t);
  }
}

function setup() {
  updateCanvasSize();
  const canvas = createCanvas(canvasWidth, canvasHeight);
  canvas.parent(document.querySelector('main'));
  textFont('Arial');

  showExpertBtn = createButton('Show Expert Placement');
  showExpertBtn.parent(document.querySelector('main'));
  showExpertBtn.mousePressed(() => {
    for (let m of techMarkers) {
      snapToCorrectPosition(m);
    }
  });

  resetBtn = createButton('Reset');
  resetBtn.parent(document.querySelector('main'));
  resetBtn.mousePressed(() => {
    buildCurvePoints();
    scatterMarkers();
  });

  buildCurvePoints();
  scatterMarkers();
}

function draw() {
  updateCanvasSize();
  resizeCanvas(canvasWidth, canvasHeight);
  buildCurvePoints();

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
  showExpertBtn.position(canvasWidth * 0.25, btnY);
  resetBtn.position(canvasWidth * 0.55, btnY);

  // Title
  noStroke();
  fill(30);
  textSize(16);
  textAlign(CENTER, TOP);
  text("The AI Hype Cycle: A Bestiary", canvasWidth / 2, 10);

  // Y axis label
  push();
  textSize(11);
  fill(100);
  textAlign(CENTER, CENTER);
  translate(14, drawHeight / 2 - 20);
  rotate(-HALF_PI);
  text("EXPECTATIONS", 0, 0);
  pop();

  // X axis label
  noStroke();
  fill(100);
  textSize(11);
  textAlign(CENTER, TOP);
  text("TIME", canvasWidth / 2, drawHeight - 22);

  // Draw curve
  stroke(70, 100, 180);
  strokeWeight(3);
  noFill();
  beginShape();
  for (let pt of curvePoints) {
    vertex(pt.x, pt.y);
  }
  endShape();
  strokeWeight(1);

  // Draw phase labels and beast icons
  hoveredPhase = -1;
  let beastRadius = 18;

  for (let i = 0; i < phases.length; i++) {
    let ph = phases[i];
    let px = getCurveX(ph.xFrac);
    let py = getCurveY(ph.xFrac);

    // Phase label below curve
    noStroke();
    fill(80);
    textSize(9);
    textAlign(CENTER, TOP);
    let lines = ph.name.split('\n');
    for (let li = 0; li < lines.length; li++) {
      text(lines[li], px, py + 28 + li * 12);
    }

    // Beast circle above curve
    let bx = px;
    let by = py - 30;

    // Check hover
    if (dist(mouseX, mouseY, bx, by) < beastRadius + 5) {
      hoveredPhase = i;
      fill(70, 100, 180, 40);
      stroke(70, 100, 180);
      strokeWeight(1);
      ellipse(bx, by, beastRadius * 2 + 8, beastRadius * 2 + 8);
    }

    // Beast icon circle
    let beastColors = [
      color(100, 180, 240),  // Pegasus - sky blue
      color(200, 140, 255),  // Unicorn - purple
      color(220, 70, 70),    // Dragon - red
      color(140, 180, 100),  // Centaur - green
      color(240, 160, 50)    // Phoenix - orange
    ];
    fill(beastColors[i]);
    stroke(255);
    strokeWeight(2);
    ellipse(bx, by, beastRadius * 2, beastRadius * 2);

    // Beast symbol
    noStroke();
    fill(255);
    textSize(11);
    textAlign(CENTER, CENTER);
    let symbols = ['\u2727', '\u2726', '\u2736', '\u2694', '\u2744'];
    text(symbols[i], bx, by - 2);

    // Beast name
    fill(40);
    textSize(9);
    textAlign(CENTER, BOTTOM);
    noStroke();
    text(ph.beast, bx, by - beastRadius - 3);
  }

  // Draw tech markers
  for (let i = 0; i < techMarkers.length; i++) {
    let m = techMarkers[i];
    let isHovered = dist(mouseX, mouseY, m.x, m.y) < 14;

    // Dot
    stroke(40);
    strokeWeight(1);
    fill(isHovered ? color(255, 220, 80) : color(255, 255, 255));
    ellipse(m.x, m.y, 12, 12);

    // Label
    noStroke();
    fill(30);
    textSize(10);
    textAlign(LEFT, CENTER);
    // Alternate label above/below to reduce overlap
    let labelOffset = (i % 2 === 0) ? -14 : 14;
    textAlign(CENTER, (i % 2 === 0) ? BOTTOM : TOP);
    text(m.label, m.x, m.y + labelOffset);
  }

  // Tooltip area for hovered phase
  if (hoveredPhase >= 0) {
    let ph = phases[hoveredPhase];
    noStroke();
    fill(255, 255, 255, 230);
    let tooltipY = drawHeight - 55;
    let tooltipW = canvasWidth * 0.8;
    let tooltipX = (canvasWidth - tooltipW) / 2;
    rect(tooltipX, tooltipY, tooltipW, 42, 6);
    stroke(180);
    strokeWeight(1);
    noFill();
    rect(tooltipX, tooltipY, tooltipW, 42, 6);

    noStroke();
    fill(50);
    textSize(11);
    textAlign(CENTER, TOP);
    text(ph.beast + " Phase: " + ph.beastDesc, tooltipX + 10, tooltipY + 6, tooltipW - 20, 36);
  }

  // Instructions
  noStroke();
  fill(120);
  textSize(10);
  textAlign(CENTER, TOP);
  text("Drag technology markers along the curve. Hover over beast icons for phase descriptions.", canvasWidth / 2, drawHeight - 14);
}

function mousePressed() {
  for (let i = 0; i < techMarkers.length; i++) {
    if (dist(mouseX, mouseY, techMarkers[i].x, techMarkers[i].y) < 14) {
      dragIndex = i;
      dragOffX = mouseX - techMarkers[i].x;
      dragOffY = mouseY - techMarkers[i].y;
      return;
    }
  }
}

function mouseDragged() {
  if (dragIndex >= 0) {
    let pt = nearestCurvePoint(mouseX - dragOffX, mouseY - dragOffY);
    techMarkers[dragIndex].x = pt.x;
    techMarkers[dragIndex].y = pt.y;
  }
}

function mouseReleased() {
  dragIndex = -1;
}

function windowResized() {
  updateCanvasSize();
  resizeCanvas(canvasWidth, canvasHeight);
  buildCurvePoints();
}

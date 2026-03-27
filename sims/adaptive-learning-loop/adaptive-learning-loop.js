// Adaptive Learning Feedback Loop - Step-Through Workflow
// Shows 6 stages of an adaptive learning system with circular node layout
// MicroSim template version 2026.02

let containerWidth;
let canvasWidth = 400;
let drawHeight = 420;
let controlHeight = 50;
let canvasHeight = drawHeight + controlHeight;
let containerHeight = canvasHeight;
let margin = 15;

let currentStage = 0;
let nextBtn, prevBtn, resetBtn;

const STAGES = [
  {
    title: "Student Responds",
    desc: "The student answers: \"What is a unicorn?\" Their response: \"A horse with a horn.\" This is marked correct. The system records the interaction and timestamps it for the learning record.",
    activeNode: 0,
    data: { question: "What is a unicorn?", answer: "A horse with a horn", result: "Correct" }
  },
  {
    title: "Assessment Scores",
    desc: "The assessment engine evaluates cumulative performance. The student has answered 4 of 5 questions correctly, producing a mastery score of 80%. This score feeds into the AI decision engine.",
    activeNode: 1,
    data: { score: "4/5", mastery: "80%", trend: "Stable" }
  },
  {
    title: "AI Decides Difficulty",
    desc: "The AI engine applies its routing logic: above 85% mastery triggers harder content, 60-85% stays at the same level, below 60% drops to easier material. At 80%, the student remains at the current difficulty.",
    activeNode: 2,
    data: { threshold: ">85% = harder", current: "80% = same level", rule: "60-85% range" }
  },
  {
    title: "Content Selection",
    desc: "The content library presents a pool of 3 eligible questions at the current difficulty level. The system selects one based on topic coverage and recency, avoiding questions the student has seen recently.",
    activeNode: 3,
    data: { pool: "3 questions", selected: "Question #2", difficulty: "Same level" }
  },
  {
    title: "Student Answers Incorrectly",
    desc: "The student encounters the new question and answers incorrectly. Their cumulative mastery drops from 80% to 67%. The system logs the error pattern for future adaptive routing.",
    activeNode: 0,
    data: { result: "Incorrect", mastery: "67% (was 80%)", score: "4/6" }
  },
  {
    title: "System Adjusts Path",
    desc: "With mastery now at 67%, the AI engine re-evaluates. The student is still in the 60-85% range but trending downward. The system selects easier reinforcement content to rebuild confidence before advancing.",
    activeNode: 2,
    data: { mastery: "67%", decision: "Easier content", reason: "Downward trend" }
  }
];

const NODE_LABELS = ["Student", "Assessment", "AI Engine", "Content\nLibrary"];
const NODE_COLORS = [
  [66, 133, 244],   // blue
  [251, 188, 4],    // yellow
  [234, 67, 53],    // red
  [52, 168, 83]     // green
];

function setup() {
  updateCanvasSize();
  const canvas = createCanvas(canvasWidth, canvasHeight);
  canvas.parent(document.querySelector('main'));

  prevBtn = createButton('Previous');
  prevBtn.position(10, drawHeight + 12);
  prevBtn.mousePressed(() => { if (currentStage > 0) currentStage--; });

  nextBtn = createButton('Next Step');
  nextBtn.position(95, drawHeight + 12);
  nextBtn.mousePressed(() => { if (currentStage < STAGES.length - 1) currentStage++; });

  resetBtn = createButton('Reset');
  resetBtn.position(185, drawHeight + 12);
  resetBtn.mousePressed(() => { currentStage = 0; });

  describe('Step-through diagram of an adaptive learning feedback loop with 4 nodes and 6 stages', LABEL);
}

function draw() {
  updateCanvasSize();

  // Draw area background
  fill('aliceblue');
  stroke('silver');
  strokeWeight(1);
  rect(0, 0, canvasWidth, drawHeight);

  // Control area background
  fill('white');
  noStroke();
  rect(0, drawHeight, canvasWidth, controlHeight);

  // Title
  fill('#1a1a1a');
  noStroke();
  textAlign(CENTER, TOP);
  textSize(18);
  textStyle(BOLD);
  text('Adaptive Learning Feedback Loop', canvasWidth / 2, 8);
  textStyle(NORMAL);

  // Stage indicator
  fill('#888');
  textSize(12);
  text('Stage ' + (currentStage + 1) + ' of ' + STAGES.length, canvasWidth / 2, 30);

  drawCircularNodes();
  drawArrows();
  drawDataPanel();

  // Control area label
  fill('#555');
  noStroke();
  textAlign(LEFT, CENTER);
  textSize(12);
  text('Stage ' + (currentStage + 1) + '/' + STAGES.length + ': ' + STAGES[currentStage].title, 255, drawHeight + 22);
}

function getNodePositions() {
  let cx = canvasWidth / 2;
  let cy = 135;
  let rx = Math.min(canvasWidth * 0.22, 110);
  let ry = 70;
  let nodeW = Math.min(canvasWidth * 0.18, 90);
  let nodeH = 42;

  // Top, Right, Bottom, Left
  let angles = [-HALF_PI, 0, HALF_PI, PI];
  let positions = [];
  for (let i = 0; i < 4; i++) {
    positions.push({
      x: cx + cos(angles[i]) * rx - nodeW / 2,
      y: cy + sin(angles[i]) * ry - nodeH / 2,
      cx: cx + cos(angles[i]) * rx,
      cy: cy + sin(angles[i]) * ry,
      w: nodeW,
      h: nodeH
    });
  }
  return positions;
}

function drawCircularNodes() {
  let positions = getNodePositions();
  let activeNode = STAGES[currentStage].activeNode;

  for (let i = 0; i < 4; i++) {
    let p = positions[i];
    let isActive = (i === activeNode);
    let col = NODE_COLORS[i];

    // Node background
    if (isActive) {
      fill(col[0], col[1], col[2], 200);
      stroke(col[0], col[1], col[2]);
      strokeWeight(3);
    } else {
      fill(col[0], col[1], col[2], 60);
      stroke(col[0], col[1], col[2], 150);
      strokeWeight(1);
    }
    rect(p.x, p.y, p.w, p.h, 10);

    // Node label
    fill(isActive ? 255 : 100);
    noStroke();
    textAlign(CENTER, CENTER);
    textSize(11);
    textStyle(BOLD);
    text(NODE_LABELS[i], p.cx, p.cy);
    textStyle(NORMAL);
  }
}

function drawArrows() {
  let positions = getNodePositions();

  // Draw arrows between consecutive nodes: 0→1, 1→2, 2→3, 3→0
  let connections = [[0, 1], [1, 2], [2, 3], [3, 0]];

  for (let c of connections) {
    let from = positions[c[0]];
    let to = positions[c[1]];

    // Calculate edge points
    let angle = atan2(to.cy - from.cy, to.cx - from.cx);
    let fromX = from.cx + cos(angle) * (from.w / 2 + 2);
    let fromY = from.cy + sin(angle) * (from.h / 2 + 2);
    let toX = to.cx - cos(angle) * (to.w / 2 + 8);
    let toY = to.cy - sin(angle) * (to.h / 2 + 8);

    stroke(150);
    strokeWeight(2);
    line(fromX, fromY, toX, toY);

    // Arrowhead
    fill(150);
    noStroke();
    let ax = to.cx - cos(angle) * (to.w / 2 + 2);
    let ay = to.cy - sin(angle) * (to.h / 2 + 2);
    let perpAngle = angle + HALF_PI;
    triangle(
      ax, ay,
      ax - cos(angle) * 8 + cos(perpAngle) * 4,
      ay - sin(angle) * 8 + sin(perpAngle) * 4,
      ax - cos(angle) * 8 - cos(perpAngle) * 4,
      ay - sin(angle) * 8 - sin(perpAngle) * 4
    );
  }
}

function drawDataPanel() {
  let stage = STAGES[currentStage];
  let panelY = 200;
  let panelH = drawHeight - panelY - 10;

  fill(255, 255, 255, 230);
  stroke(200);
  strokeWeight(1);
  rect(margin, panelY, canvasWidth - margin * 2, panelH, 8);

  let tx = margin + 12;
  let tw = canvasWidth - margin * 2 - 24;

  // Stage title
  fill('#1a1a1a');
  noStroke();
  textAlign(LEFT, TOP);
  textSize(14);
  textStyle(BOLD);
  text(stage.title, tx, panelY + 10);
  textStyle(NORMAL);

  // Description
  fill('#444');
  textSize(11);
  text(stage.desc, tx, panelY + 30, tw, 80);

  // Data panel
  let dataY = panelY + 115;
  fill(240, 245, 255);
  stroke(66, 133, 244, 80);
  strokeWeight(1);
  rect(tx, dataY, tw, panelH - 125, 6);

  fill(66, 133, 244);
  noStroke();
  textSize(11);
  textStyle(BOLD);
  text('Data:', tx + 8, dataY + 8);
  textStyle(NORMAL);

  fill('#333');
  textSize(11);
  let dataKeys = Object.keys(stage.data);
  let dy = dataY + 24;
  for (let k of dataKeys) {
    let label = k.charAt(0).toUpperCase() + k.slice(1) + ': ';
    let val = stage.data[k];
    textStyle(BOLD);
    text(label, tx + 8, dy);
    textStyle(NORMAL);
    text(val, tx + 8 + textWidth(label), dy);
    dy += 18;
  }
}

function windowResized() {
  updateCanvasSize();
  resizeCanvas(containerWidth, containerHeight);
  redraw();
}

function updateCanvasSize() {
  const container = document.querySelector('main').getBoundingClientRect();
  containerWidth = Math.floor(container.width);
  canvasWidth = containerWidth;
}

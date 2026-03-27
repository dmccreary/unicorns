// Claim Verification Decision Tree - Interactive
// Navigate Yes/No decisions to classify AI claims
// MicroSim template version 2026.02

let containerWidth;
let canvasWidth = 400;
let drawHeight = 450;
let controlHeight = 80;
let canvasHeight = drawHeight + controlHeight;
let containerHeight = canvasHeight;
let margin = 15;

let claimSelector;
let yesBtn, noBtn, resetBtn;
let currentNode = 0;
let path = [];
let result = null;

const CLAIMS = [
  { text: "Our AI reduces customer churn by 40%", expectedResult: "Plausible but self-reported" },
  { text: "GPT-4 passes the bar exam in 90th percentile", expectedResult: "Verified" },
  { text: "Our quantum AI solves problems 1M times faster", expectedResult: "Not a claim — it's marketing" },
  { text: "AI diagnosis improves cancer detection by 11%", expectedResult: "Verified" },
  { text: "Our platform will achieve AGI within 3 years", expectedResult: "Not a claim — it's marketing" }
];

// Decision tree nodes
// Each node: { question, yesNode, noNode }
// Leaf nodes: { result, color }
const TREE = {
  0: { question: "Is the claim specific\nand falsifiable?", yesNode: 1, noNode: "leaf_marketing" },
  1: { question: "Is evidence\nprovided?", yesNode: 2, noNode: "leaf_unsupported" },
  2: { question: "Is the evidence\nindependent?", yesNode: 3, noNode: "leaf_selfreported" },
  3: { question: "Has the result\nbeen replicated?", yesNode: "leaf_verified", noNode: 4 },
  4: { question: "Are limitations\ndisclosed?", yesNode: "leaf_plausible", noNode: "leaf_suspicious" },
  leaf_marketing:    { result: "Not a claim — it's marketing", color: [234, 67, 53] },
  leaf_unsupported:  { result: "Unsupported", color: [234, 67, 53] },
  leaf_selfreported: { result: "Plausible but self-reported", color: [251, 188, 4] },
  leaf_verified:     { result: "Verified", color: [52, 168, 83] },
  leaf_plausible:    { result: "Plausible", color: [52, 168, 83] },
  leaf_suspicious:   { result: "Treat with suspicion", color: [234, 67, 53] }
};

// Visual positions for tree nodes (calculated in draw based on canvasWidth)
function getTreePositions() {
  let cx = canvasWidth / 2;
  let startY = 90;
  let yStep = 65;
  let spread = Math.min(canvasWidth * 0.35, 160);

  return {
    0: { x: cx, y: startY },
    1: { x: cx - spread * 0.15, y: startY + yStep },
    "leaf_marketing": { x: cx + spread * 0.7, y: startY + yStep },
    2: { x: cx - spread * 0.3, y: startY + yStep * 2 },
    "leaf_unsupported": { x: cx + spread * 0.5, y: startY + yStep * 2 },
    3: { x: cx - spread * 0.4, y: startY + yStep * 3 },
    "leaf_selfreported": { x: cx + spread * 0.4, y: startY + yStep * 3 },
    4: { x: cx - spread * 0.2, y: startY + yStep * 4 },
    "leaf_verified": { x: cx + spread * 0.5, y: startY + yStep * 4 },
    "leaf_plausible": { x: cx - spread * 0.55, y: startY + yStep * 5 },
    "leaf_suspicious": { x: cx + spread * 0.2, y: startY + yStep * 5 }
  };
}

function setup() {
  updateCanvasSize();
  const canvas = createCanvas(canvasWidth, canvasHeight);
  canvas.parent(document.querySelector('main'));

  // Claim selector
  claimSelector = createSelect();
  claimSelector.position(10, drawHeight + 10);
  for (let i = 0; i < CLAIMS.length; i++) {
    let label = (i + 1) + '. ' + CLAIMS[i].text;
    if (label.length > 50) label = label.substring(0, 47) + '...';
    claimSelector.option(label, i);
  }
  claimSelector.changed(resetTree);
  claimSelector.style('max-width', '300px');
  claimSelector.style('font-size', '12px');

  yesBtn = createButton('Yes');
  yesBtn.position(10, drawHeight + 45);
  yesBtn.mousePressed(answerYes);
  yesBtn.style('background-color', '#e8f5e9');
  yesBtn.style('padding', '4px 20px');

  noBtn = createButton('No');
  noBtn.position(80, drawHeight + 45);
  noBtn.mousePressed(answerNo);
  noBtn.style('background-color', '#fce4ec');
  noBtn.style('padding', '4px 20px');

  resetBtn = createButton('Reset');
  resetBtn.position(145, drawHeight + 45);
  resetBtn.mousePressed(resetTree);

  describe('Interactive decision tree for verifying AI claims with yes/no navigation', LABEL);
}

function answerYes() {
  if (result !== null) return;
  let node = TREE[currentNode];
  if (!node || node.result) return;
  path.push({ node: currentNode, answer: 'Yes' });
  let nextNode = node.yesNode;
  if (typeof nextNode === 'string' && TREE[nextNode].result) {
    currentNode = nextNode;
    result = TREE[nextNode];
  } else {
    currentNode = nextNode;
  }
}

function answerNo() {
  if (result !== null) return;
  let node = TREE[currentNode];
  if (!node || node.result) return;
  path.push({ node: currentNode, answer: 'No' });
  let nextNode = node.noNode;
  if (typeof nextNode === 'string' && TREE[nextNode].result) {
    currentNode = nextNode;
    result = TREE[nextNode];
  } else {
    currentNode = nextNode;
  }
}

function resetTree() {
  currentNode = 0;
  path = [];
  result = null;
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
  text('Claim Verification Tree', canvasWidth / 2, 8);
  textStyle(NORMAL);

  // Show current claim
  let claimIdx = parseInt(claimSelector.value());
  fill('#555');
  textSize(11);
  textAlign(CENTER, TOP);
  let claimText = '"' + CLAIMS[claimIdx].text + '"';
  text(claimText, canvasWidth / 2, 30, canvasWidth - 40);

  drawTree();
  drawPathIndicator();

  if (result) {
    drawResult();
  }

  // Update selector width based on canvas
  claimSelector.style('max-width', Math.min(canvasWidth - 20, 350) + 'px');
}

function drawTree() {
  let positions = getTreePositions();
  let nodeW = Math.min(canvasWidth * 0.2, 110);
  let nodeH = 38;
  let leafW = Math.min(canvasWidth * 0.22, 120);
  let leafH = 32;

  // Draw edges first
  let edges = [
    [0, 1, 'Yes'], [0, 'leaf_marketing', 'No'],
    [1, 2, 'Yes'], [1, 'leaf_unsupported', 'No'],
    [2, 3, 'Yes'], [2, 'leaf_selfreported', 'No'],
    [3, 'leaf_verified', 'Yes'], [3, 4, 'No'],
    [4, 'leaf_plausible', 'Yes'], [4, 'leaf_suspicious', 'No']
  ];

  for (let e of edges) {
    let fromPos = positions[e[0]];
    let toPos = positions[e[1]];
    if (!fromPos || !toPos) continue;

    let isOnPath = false;
    for (let p of path) {
      if (p.node === e[0] && p.answer === e[2]) {
        isOnPath = true;
        break;
      }
    }

    stroke(isOnPath ? (e[2] === 'Yes' ? color(52, 168, 83) : color(234, 67, 53)) : color(200));
    strokeWeight(isOnPath ? 3 : 1);
    line(fromPos.x, fromPos.y + nodeH / 2, toPos.x, toPos.y - (TREE[e[1]] && TREE[e[1]].result ? leafH / 2 : nodeH / 2));

    // Edge label
    let midX = (fromPos.x + toPos.x) / 2;
    let midY = (fromPos.y + nodeH / 2 + toPos.y - nodeH / 2) / 2;
    noStroke();
    fill(e[2] === 'Yes' ? color(52, 168, 83) : color(234, 67, 53));
    textAlign(CENTER, CENTER);
    textSize(9);
    textStyle(BOLD);
    text(e[2], midX + (e[2] === 'Yes' ? -12 : 12), midY);
    textStyle(NORMAL);
  }

  // Draw decision nodes
  for (let key of [0, 1, 2, 3, 4]) {
    let pos = positions[key];
    if (!pos) continue;
    let node = TREE[key];
    let isCurrent = (currentNode === key && result === null);
    let isVisited = path.some(p => p.node === key);

    if (isCurrent) {
      fill(66, 133, 244, 200);
      stroke(66, 133, 244);
      strokeWeight(3);
    } else if (isVisited) {
      fill(66, 133, 244, 80);
      stroke(66, 133, 244, 150);
      strokeWeight(1);
    } else {
      fill(230, 240, 255);
      stroke(180, 200, 230);
      strokeWeight(1);
    }
    rect(pos.x - nodeW / 2, pos.y - nodeH / 2, nodeW, nodeH, 8);

    fill(isCurrent ? 255 : (isVisited ? 50 : 120));
    noStroke();
    textAlign(CENTER, CENTER);
    textSize(9);
    text(node.question, pos.x, pos.y);
  }

  // Draw leaf nodes
  let leaves = ['leaf_marketing', 'leaf_unsupported', 'leaf_selfreported', 'leaf_verified', 'leaf_plausible', 'leaf_suspicious'];
  for (let key of leaves) {
    let pos = positions[key];
    if (!pos) continue;
    let leaf = TREE[key];
    let isResult = (currentNode === key);

    if (isResult) {
      fill(leaf.color[0], leaf.color[1], leaf.color[2], 200);
      stroke(leaf.color[0], leaf.color[1], leaf.color[2]);
      strokeWeight(3);
    } else {
      fill(leaf.color[0], leaf.color[1], leaf.color[2], 40);
      stroke(leaf.color[0], leaf.color[1], leaf.color[2], 100);
      strokeWeight(1);
    }
    rect(pos.x - leafW / 2, pos.y - leafH / 2, leafW, leafH, 14);

    fill(isResult ? 255 : color(leaf.color[0], leaf.color[1], leaf.color[2], 150));
    noStroke();
    textAlign(CENTER, CENTER);
    textSize(8);
    textStyle(BOLD);
    text(leaf.result, pos.x, pos.y, leafW - 8);
    textStyle(NORMAL);
  }
}

function drawPathIndicator() {
  if (path.length === 0 && result === null) {
    fill('#888');
    noStroke();
    textAlign(CENTER, TOP);
    textSize(11);
    text('Press Yes or No to evaluate the claim.', canvasWidth / 2, 55);
    return;
  }

  let pathStr = 'Path: ';
  for (let i = 0; i < path.length; i++) {
    let node = TREE[path[i].node];
    let shortQ = node.question.replace('\n', ' ').split('?')[0] + '?';
    pathStr += path[i].answer;
    if (i < path.length - 1) pathStr += ' → ';
  }

  fill('#666');
  noStroke();
  textAlign(CENTER, TOP);
  textSize(10);
  text(pathStr, canvasWidth / 2, 55, canvasWidth - 30);
}

function drawResult() {
  let panelY = drawHeight - 55;
  let panelH = 50;
  let col = result.color;

  fill(col[0], col[1], col[2], 30);
  stroke(col[0], col[1], col[2]);
  strokeWeight(2);
  rect(margin, panelY, canvasWidth - margin * 2, panelH, 8);

  fill(col[0], col[1], col[2]);
  noStroke();
  textAlign(CENTER, CENTER);
  textSize(13);
  textStyle(BOLD);
  text('Classification: ' + result.result, canvasWidth / 2, panelY + 15);
  textStyle(NORMAL);

  // Show expected result comparison
  let claimIdx = parseInt(claimSelector.value());
  let expected = CLAIMS[claimIdx].expectedResult;
  let match = (result.result === expected);
  fill(match ? color(52, 168, 83) : color(150));
  textSize(10);
  text('Expected: ' + expected + (match ? ' (match)' : ''), canvasWidth / 2, panelY + 35);
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

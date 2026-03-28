// How a Large Language Model Works - Step-through Visualization
// 7-stage pipeline from raw input to generated text
// MicroSim version 2026.03

// Canvas dimensions
let containerWidth;
let canvasWidth = 400;
let drawHeight = 420;
let controlHeight = 50;
let canvasHeight = drawHeight + controlHeight;
let margin = 25;
let defaultTextSize = 16;

// Controls
let prevButton, nextButton, resetButton;

// State
let currentStage = 1;
let totalStages = 7;

// Token data
let tokens = ["What", " is", " a", " un", "icorn", "?"];
let tokenColors = ['gold', 'cornflowerblue', 'mediumseagreen', 'coral', 'mediumpurple', 'teal'];

// Embedding data (simplified vector heights per token)
let embeddings = [
  [0.8, 0.3, 0.5, 0.2, 0.9, 0.1, 0.4, 0.7],
  [0.1, 0.7, 0.2, 0.8, 0.3, 0.6, 0.5, 0.4],
  [0.3, 0.1, 0.9, 0.4, 0.2, 0.7, 0.6, 0.8],
  [0.6, 0.9, 0.4, 0.1, 0.7, 0.3, 0.8, 0.5],
  [0.5, 0.4, 0.7, 0.6, 0.8, 0.2, 0.1, 0.9],
  [0.2, 0.6, 0.1, 0.9, 0.4, 0.8, 0.3, 0.5]
];

// Attention weights (from token index -> to token index -> weight)
let attentionPairs = [
  {from: 0, to: 4, weight: 0.9},
  {from: 0, to: 3, weight: 0.7},
  {from: 1, to: 0, weight: 0.5},
  {from: 2, to: 4, weight: 0.4},
  {from: 3, to: 4, weight: 0.95},
  {from: 4, to: 0, weight: 0.6},
  {from: 4, to: 3, weight: 0.8},
  {from: 5, to: 0, weight: 0.3}
];

// Probability data
let firstProbs = [
  {word: "A", pct: 32},
  {word: "The", pct: 18},
  {word: "Un", pct: 12},
  {word: "In", pct: 8},
  {word: "It", pct: 6},
  {word: "other", pct: 24}
];

let secondProbs = [
  {word: "unicorn", pct: 45},
  {word: "mythical", pct: 15},
  {word: "horse", pct: 10},
  {word: "magical", pct: 8},
  {word: "creature", pct: 7},
  {word: "other", pct: 15}
];

// Generated output words
let generatedWords = ["A", " unicorn", " is", " a", " mythical", " creature", " that", " symbolizes", " unrealistic", " valuations."];
let generatedIndex = 0;
let generatedTimer = 0;

function setup() {
  updateCanvasSize();
  const canvas = createCanvas(canvasWidth, canvasHeight);
  canvas.parent(document.querySelector('main'));

  prevButton = createButton('Previous');
  prevButton.position(10, drawHeight + 12);
  prevButton.mousePressed(prevStage);

  nextButton = createButton('Next');
  nextButton.position(90, drawHeight + 12);
  nextButton.mousePressed(nextStage);

  resetButton = createButton('Reset');
  resetButton.position(150, drawHeight + 12);
  resetButton.mousePressed(resetSim);

  describe('Step-through visualization of how a large language model processes a prompt through 7 stages from input to generated text', LABEL);
}

function draw() {
  updateCanvasSize();

  // Drawing area
  fill('aliceblue');
  stroke('silver');
  strokeWeight(1);
  rect(0, 0, canvasWidth, drawHeight);

  // Control area
  fill('white');
  stroke('silver');
  rect(0, drawHeight, canvasWidth, controlHeight);

  // Update button states
  if (currentStage <= 1) prevButton.attribute('disabled', '');
  else prevButton.removeAttribute('disabled');
  if (currentStage >= totalStages) nextButton.attribute('disabled', '');
  else nextButton.removeAttribute('disabled');

  // Stage indicator
  noStroke();
  fill(60);
  textSize(14);
  textAlign(RIGHT, TOP);
  text('Stage ' + currentStage + '/' + totalStages, canvasWidth - 15, 12);

  // Stage title
  textAlign(LEFT, TOP);
  textSize(18);
  fill(30);
  let titles = [
    '',
    'Stage 1: Raw Input',
    'Stage 2: Tokenization',
    'Stage 3: Embedding',
    'Stage 4: Attention',
    'Stage 5: Next-Word Probabilities',
    'Stage 6: Selection and Prediction',
    'Stage 7: Text Generation'
  ];
  text(titles[currentStage], 15, 12);

  // Draw subtitle
  textSize(12);
  fill(100);
  let subtitles = [
    '',
    'The prompt enters the model as plain text.',
    'Text is split into tokens — subword units the model can process.',
    'Each token is converted to a numerical vector (embedding).',
    'Tokens attend to each other to build contextual understanding.',
    'The model predicts a probability distribution over possible next words.',
    'The highest-probability word is selected; the process repeats.',
    'Words are generated one at a time until a response is complete.'
  ];
  text(subtitles[currentStage], 15, 36);

  // Draw current stage
  switch(currentStage) {
    case 1: drawRawInput(); break;
    case 2: drawTokenization(); break;
    case 3: drawEmbedding(); break;
    case 4: drawAttention(); break;
    case 5: drawProbabilities(firstProbs, 'Predicting the first word of the response:'); break;
    case 6: drawSelection(); break;
    case 7: drawGeneration(); break;
  }
}

function drawRawInput() {
  let cx = canvasWidth / 2;
  let cy = drawHeight / 2 + 20;

  // Draw a text box
  noStroke();
  fill(255);
  stroke(100);
  strokeWeight(2);
  rectMode(CENTER);
  rect(cx, cy, 340, 70, 10);
  rectMode(CORNER);

  noStroke();
  fill(30);
  textSize(24);
  textAlign(CENTER, CENTER);
  text('"What is a unicorn?"', cx, cy);

  // Label
  textSize(13);
  fill(120);
  text('User prompt (plain text string)', cx, cy + 55);
}

function drawTokenization() {
  let startX = 30;
  let y = drawHeight / 2 + 10;
  let boxH = 50;
  let gap = 8;

  // Calculate total width to center
  let totalW = 0;
  textSize(18);
  for (let i = 0; i < tokens.length; i++) {
    totalW += textWidth(tokens[i]) + 24 + gap;
  }
  totalW -= gap;
  startX = (canvasWidth - totalW) / 2;

  let x = startX;
  for (let i = 0; i < tokens.length; i++) {
    let tw = textWidth(tokens[i]) + 24;
    // Box
    fill(tokenColors[i]);
    stroke(80);
    strokeWeight(1.5);
    rect(x, y - boxH/2, tw, boxH, 6);

    // Text
    noStroke();
    fill(255);
    textSize(18);
    textAlign(CENTER, CENTER);
    text(tokens[i], x + tw/2, y);

    // Index label
    textSize(11);
    fill(80);
    textAlign(CENTER, TOP);
    text('Token ' + i, x + tw/2, y + boxH/2 + 6);

    x += tw + gap;
  }

  // Arrow from top
  noStroke();
  fill(120);
  textSize(13);
  textAlign(CENTER, BOTTOM);
  text('"What is a unicorn?"  -->  split into subword tokens', canvasWidth/2, y - boxH/2 - 15);
}

function drawEmbedding() {
  let tokenW = 70;
  let gap = 12;
  let totalW = tokens.length * tokenW + (tokens.length - 1) * gap;
  let startX = (canvasWidth - totalW) / 2;
  let baseY = drawHeight - 80;
  let maxBarH = 180;

  for (let i = 0; i < tokens.length; i++) {
    let x = startX + i * (tokenW + gap);

    // Token label
    noStroke();
    fill(tokenColors[i]);
    textSize(13);
    textAlign(CENTER, TOP);
    text(tokens[i], x + tokenW/2, baseY + 8);

    // Draw embedding bars
    let barW = tokenW / embeddings[i].length - 1;
    for (let j = 0; j < embeddings[i].length; j++) {
      let bh = embeddings[i][j] * maxBarH;
      let bx = x + j * (barW + 1);
      let by = baseY - bh;

      fill(tokenColors[i]);
      noStroke();
      rect(bx, by, barW, bh);
    }
  }

  // Label
  noStroke();
  fill(100);
  textSize(13);
  textAlign(CENTER, TOP);
  text('Each token mapped to a numerical vector (simplified as colored bars)', canvasWidth/2, 55);
}

function drawAttention() {
  // Draw tokens in a row
  let tokenW = 65;
  let gap = 10;
  let totalW = tokens.length * tokenW + (tokens.length - 1) * gap;
  let startX = (canvasWidth - totalW) / 2;
  let tokenY = 120;
  let boxH = 35;

  // Token positions
  let tokenCenters = [];
  for (let i = 0; i < tokens.length; i++) {
    let x = startX + i * (tokenW + gap);
    fill(tokenColors[i]);
    stroke(80);
    strokeWeight(1);
    rect(x, tokenY, tokenW, boxH, 4);

    noStroke();
    fill(255);
    textSize(13);
    textAlign(CENTER, CENTER);
    text(tokens[i], x + tokenW/2, tokenY + boxH/2);

    tokenCenters.push({x: x + tokenW/2, y: tokenY + boxH});
  }

  // Draw attention arrows
  for (let a of attentionPairs) {
    let fromX = tokenCenters[a.from].x;
    let toX = tokenCenters[a.to].x;
    let fromY = tokenCenters[a.from].y + 5;

    // Arc below tokens
    let midX = (fromX + toX) / 2;
    let dist = abs(fromX - toX);
    let arcY = fromY + dist * 0.3 + 20;

    stroke(tokenColors[a.from]);
    strokeWeight(a.weight * 5);
    noFill();
    beginShape();
    vertex(fromX, fromY);
    quadraticVertex(midX, arcY, toX, fromY);
    endShape();

    // Arrowhead
    let angle2 = atan2(fromY - arcY, toX - midX);
    fill(tokenColors[a.from]);
    noStroke();
    push();
    translate(toX, fromY);
    rotate(angle2 + PI/2);
    triangle(0, -4, -4, 4, 4, 4);
    pop();
  }

  // Legend
  noStroke();
  fill(100);
  textSize(12);
  textAlign(CENTER, BOTTOM);
  text('Thicker arrows = stronger attention. Tokens build context from each other.', canvasWidth/2, drawHeight - 20);
}

function drawProbabilities(probs, label) {
  noStroke();
  fill(80);
  textSize(14);
  textAlign(CENTER, TOP);
  text(label, canvasWidth/2, 60);

  let barMaxW = canvasWidth * 0.5;
  let barH = 32;
  let gap = 8;
  let startY = 100;
  let labelX = canvasWidth * 0.25;

  let probColors = ['gold', 'cornflowerblue', 'mediumpurple', 'coral', 'mediumseagreen', 'silver'];

  for (let i = 0; i < probs.length; i++) {
    let y = startY + i * (barH + gap);
    let bw = (probs[i].pct / 50) * barMaxW;

    // Bar
    fill(probColors[i % probColors.length]);
    noStroke();
    rect(labelX + 5, y, bw, barH, 4);

    // Word label
    fill(40);
    textSize(16);
    textAlign(RIGHT, CENTER);
    text('"' + probs[i].word + '"', labelX - 5, y + barH/2);

    // Percentage
    noStroke();
    fill(40);
    textSize(14);
    textAlign(LEFT, CENTER);
    text(probs[i].pct + '%', labelX + bw + 12, y + barH/2);
  }
}

function drawSelection() {
  // Show "A" selected
  noStroke();
  fill(30);
  textSize(15);
  textAlign(CENTER, TOP);
  text('Step 1: "A" selected (32% probability) — appended to output.', canvasWidth/2, 60);

  // Selected word box
  fill('gold');
  stroke(30);
  strokeWeight(2);
  rectMode(CENTER);
  rect(canvasWidth/2, 110, 60, 40, 6);
  rectMode(CORNER);
  noStroke();
  fill(30);
  textSize(20);
  textAlign(CENTER, CENTER);
  text('"A"', canvasWidth/2, 110);

  // Arrow down
  stroke(100);
  strokeWeight(2);
  line(canvasWidth/2, 132, canvasWidth/2, 155);
  fill(100);
  noStroke();
  triangle(canvasWidth/2, 162, canvasWidth/2 - 5, 155, canvasWidth/2 + 5, 155);

  // Now show second prediction
  noStroke();
  fill(30);
  textSize(15);
  textAlign(CENTER, TOP);
  text('Step 2: Predict next word after "A":', canvasWidth/2, 175);

  // Mini probability bars for second prediction
  let barMaxW = canvasWidth * 0.4;
  let barH = 26;
  let gap2 = 6;
  let startY2 = 210;
  let labelX2 = canvasWidth * 0.28;
  let probColors2 = ['mediumpurple', 'cornflowerblue', 'coral', 'mediumseagreen', 'gold', 'silver'];

  for (let i = 0; i < secondProbs.length; i++) {
    let y = startY2 + i * (barH + gap2);
    let bw = (secondProbs[i].pct / 50) * barMaxW;

    fill(probColors2[i % probColors2.length]);
    noStroke();
    rect(labelX2 + 5, y, bw, barH, 4);

    fill(40);
    textSize(14);
    textAlign(RIGHT, CENTER);
    text('"' + secondProbs[i].word + '"', labelX2 - 5, y + barH/2);

    noStroke();
    fill(40);
    textSize(12);
    textAlign(LEFT, CENTER);
    text(secondProbs[i].pct + '%', labelX2 + bw + 10, y + barH/2);
  }
}

function drawGeneration() {
  // Update generation animation
  generatedTimer++;
  if (generatedTimer > 20 && generatedIndex < generatedWords.length - 1) {
    generatedIndex++;
    generatedTimer = 0;
  }

  noStroke();
  fill(30);
  textSize(14);
  textAlign(CENTER, TOP);
  text('The model generates one word at a time, each conditioned on all previous words:', canvasWidth/2, 60);

  // Build the output string so far
  let outputStr = '';
  for (let i = 0; i <= generatedIndex; i++) {
    outputStr += generatedWords[i];
  }

  // Display generated text in a box
  fill(255);
  stroke(100);
  strokeWeight(2);
  let boxW = canvasWidth - 60;
  let boxX = 30;
  let boxY = 110;
  let boxH2 = 80;
  rect(boxX, boxY, boxW, boxH2, 8);

  noStroke();
  fill(30);
  textSize(20);
  textAlign(LEFT, CENTER);
  text(outputStr, boxX + 15, boxY + boxH2/2);

  // Blinking cursor
  if (generatedIndex < generatedWords.length - 1 && frameCount % 30 < 15) {
    let cursorX = boxX + 15 + textWidth(outputStr);
    fill(30);
    rect(cursorX + 2, boxY + boxH2/2 - 12, 2, 24);
  }

  // Show word-by-word list below
  let listY = 220;
  textSize(13);
  fill(100);
  textAlign(CENTER, TOP);
  text('Words generated in sequence:', canvasWidth/2, listY - 20);

  let wordX = 30;
  for (let i = 0; i < generatedWords.length; i++) {
    let w = textWidth(generatedWords[i].trim()) + 20;
    if (wordX + w > canvasWidth - 20) {
      wordX = 30;
      listY += 36;
    }
    if (i <= generatedIndex) {
      fill('mediumseagreen');
      stroke(60);
      strokeWeight(1);
    } else {
      fill(230);
      stroke(180);
      strokeWeight(1);
    }
    rect(wordX, listY, w, 28, 4);

    noStroke();
    fill(i <= generatedIndex ? 255 : 180);
    textSize(13);
    textAlign(CENTER, CENTER);
    text(generatedWords[i].trim(), wordX + w/2, listY + 14);

    wordX += w + 6;
  }
}

function prevStage() {
  if (currentStage > 1) {
    currentStage--;
    resetStageState();
  }
}

function nextStage() {
  if (currentStage < totalStages) {
    currentStage++;
    resetStageState();
  }
}

function resetSim() {
  currentStage = 1;
  resetStageState();
}

function resetStageState() {
  generatedIndex = 0;
  generatedTimer = 0;
}

function updateCanvasSize() {
  const container = document.querySelector('main').getBoundingClientRect();
  containerWidth = Math.floor(container.width);
  canvasWidth = containerWidth;
}

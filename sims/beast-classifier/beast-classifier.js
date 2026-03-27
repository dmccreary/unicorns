// Beast Classifier MicroSim
// Students adjust 6 sliders to create a beast profile,
// then find the closest matching mythical beast using Euclidean distance.

// Beast data: [Morphology, Ability, Disposition, Habitat, Rarity, Allegory]
const beasts = [
  { name: "Dragon",   data: [3, 5, -2, 3, 2, 5], desc: "Enormous fire-breathing reptile with wings and armored scales.",   allegory: "Disruptive AI that automates entire departments" },
  { name: "Phoenix",  data: [2, 5,  1, 4, 5, 4], desc: "Immortal bird that bursts into flame and is reborn from its ashes.", allegory: "Industries that repeatedly die and claim rebirth" },
  { name: "Griffin",  data: [4, 3,  0, 3, 3, 3], desc: "Hybrid creature with an eagle's head and a lion's body.",           allegory: "Hybrid technologies guarding treasure that may not exist" },
  { name: "Centaur",  data: [4, 2,  1, 2, 2, 5], desc: "Half-human, half-horse scholar of the ancient world.",              allegory: "Human-AI collaboration that sounds better in theory" },
  { name: "Mermaid",  data: [3, 3,  0, 4, 3, 3], desc: "Aquatic humanoid dwelling in oceans and coastal waters.",            allegory: "Platforms that look inviting from the surface" },
  { name: "Minotaur", data: [3, 2, -2, 1, 5, 4], desc: "Bull-headed beast trapped in an inescapable labyrinth.",             allegory: "Committees trapped in procedural labyrinths of their own design" },
  { name: "Pegasus",  data: [2, 3,  2, 4, 4, 3], desc: "Winged horse capable of flight but prone to overextension.",         allegory: "Useful technologies oversold beyond their actual capabilities" },
  { name: "Kraken",   data: [2, 5, -2, 5, 4, 4], desc: "Massive sea creature that surfaces unpredictably to destroy ships.", allegory: "Massive platforms that surface unpredictably and sink competitors" },
  { name: "Siren",    data: [2, 4, -2, 3, 3, 4], desc: "Enchanting vocalist who lures the unwary to their doom.",            allegory: "Technologies with irresistible interfaces and hidden costs" },
  { name: "Cyclops",  data: [2, 2, -1, 2, 3, 3], desc: "One-eyed giant of limited intelligence but considerable strength.",  allegory: "Brute-force solutions that lack nuance or foresight" }
];

const challenges = [
  { tech: "Blockchain",               beastName: "Griffin" },
  { tech: "ChatGPT",                  beastName: "Siren" },
  { tech: "Self-driving car",         beastName: "Pegasus" },
  { tech: "Cryptocurrency",           beastName: "Phoenix" },
  { tech: "The Metaverse",            beastName: "Kraken" },
  { tech: "A committee studying AI",  beastName: "Minotaur" }
];

const dimLabels = [
  "Morphology Complexity",
  "Ability Power",
  "Disposition",
  "Habitat Accessibility",
  "Rarity",
  "Allegorical Weight"
];

const dimMin = [1, 1, -2, 1, 1, 1];
const dimMax = [5, 5,  2, 5, 5, 5];
const dimDefault = [3, 3, 0, 3, 3, 3];

let canvasWidth = 750;
let drawHeight = 400;
let controlHeight = 250;
let canvasHeight = drawHeight + controlHeight;

let sliders = [];
let findBtn, challengeBtn, resetBtn;

let matchedBeast = null;
let challengeMode = false;
let currentChallenge = null;
let challengeRevealed = false;
let challengeIndex = 0;

function updateCanvasSize() {
  const container = document.querySelector('main');
  if (container) {
    canvasWidth = container.offsetWidth;
  }
  canvasHeight = drawHeight + controlHeight;
}

function setup() {
  updateCanvasSize();
  const canvas = createCanvas(canvasWidth, canvasHeight);
  canvas.parent(document.querySelector('main'));
  textFont('Arial');

  // Create 6 sliders
  let sliderLeftMargin = 180;
  let sliderY0 = drawHeight + 12;
  let sliderSpacing = 30;
  let sliderWidth = 180;

  for (let i = 0; i < 6; i++) {
    let step = (i === 2) ? 1 : 1; // all integer steps
    let s = createSlider(dimMin[i], dimMax[i], dimDefault[i], step);
    s.position(sliderLeftMargin, sliderY0 + i * sliderSpacing);
    s.size(sliderWidth);
    s.parent(document.querySelector('main'));
    sliders.push(s);
  }

  // Create buttons
  let btnY = sliderY0 + 6 * sliderSpacing + 10;

  findBtn = createButton('Find Closest Beast');
  findBtn.position(20, btnY);
  findBtn.parent(document.querySelector('main'));
  findBtn.mousePressed(findClosest);

  challengeBtn = createButton('Challenge Mode');
  challengeBtn.position(180, btnY);
  challengeBtn.parent(document.querySelector('main'));
  challengeBtn.mousePressed(startChallenge);

  resetBtn = createButton('Reset');
  resetBtn.position(330, btnY);
  resetBtn.parent(document.querySelector('main'));
  resetBtn.mousePressed(resetAll);
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
  stroke('silver');
  rect(0, drawHeight, canvasWidth, controlHeight);

  // Get current slider values
  let vals = [];
  for (let i = 0; i < 6; i++) {
    vals.push(sliders[i].value());
  }

  // Layout zones
  let radarCx = canvasWidth * 0.38;
  let radarCy = drawHeight * 0.48;
  let radarR = min(canvasWidth * 0.2, drawHeight * 0.35);
  let rightX = canvasWidth * 0.62;
  let rightW = canvasWidth * 0.35;

  // Draw title
  noStroke();
  fill(30);
  textSize(16);
  textAlign(CENTER, TOP);
  text("Beast Classifier", canvasWidth / 2, 8);

  // Draw radar chart
  drawRadar(radarCx, radarCy, radarR, vals);

  // Draw slider labels in draw area (left side)
  drawSliderLabels();

  // Draw right panel: match result or challenge
  if (challengeMode && currentChallenge) {
    drawChallengePanel(rightX, 40, rightW);
  } else if (matchedBeast) {
    drawMatchPanel(rightX, 40, rightW);
  } else {
    drawInstructions(rightX, 40, rightW);
  }
}

function drawSliderLabels() {
  noStroke();
  fill(60);
  textSize(12);
  textAlign(RIGHT, CENTER);

  let sliderY0 = drawHeight + 22;
  let sliderSpacing = 30;

  for (let i = 0; i < 6; i++) {
    let y = sliderY0 + i * sliderSpacing;
    text(dimLabels[i] + ":", 170, y);

    // Show value
    textAlign(LEFT, CENTER);
    let val = sliders[i].value();
    let label = "" + val;
    if (i === 2) {
      if (val < 0) label = val + " (Hostile)";
      else if (val > 0) label = "+" + val + " (Benevolent)";
      else label = "0 (Neutral)";
    }
    text(label, 370, y);
    textAlign(RIGHT, CENTER);
  }
}

function drawRadar(cx, cy, r, vals) {
  let n = 6;
  let angleStep = TWO_PI / n;

  // Normalize values to 0-1 range
  let norm = [];
  for (let i = 0; i < n; i++) {
    norm.push(map(vals[i], dimMin[i], dimMax[i], 0, 1));
  }

  // Draw grid rings
  stroke(200);
  strokeWeight(0.5);
  noFill();
  for (let ring = 1; ring <= 5; ring++) {
    let rr = (ring / 5) * r;
    beginShape();
    for (let i = 0; i < n; i++) {
      let angle = -HALF_PI + i * angleStep;
      vertex(cx + cos(angle) * rr, cy + sin(angle) * rr);
    }
    endShape(CLOSE);
  }

  // Draw axes
  stroke(180);
  strokeWeight(0.5);
  for (let i = 0; i < n; i++) {
    let angle = -HALF_PI + i * angleStep;
    line(cx, cy, cx + cos(angle) * r, cy + sin(angle) * r);
  }

  // Draw axis labels
  noStroke();
  fill(60);
  textSize(10);
  let shortLabels = ["Morph", "Ability", "Disp", "Habitat", "Rarity", "Allegory"];
  for (let i = 0; i < n; i++) {
    let angle = -HALF_PI + i * angleStep;
    let lx = cx + cos(angle) * (r + 18);
    let ly = cy + sin(angle) * (r + 18);
    textAlign(CENTER, CENTER);
    text(shortLabels[i], lx, ly);
  }

  // Draw matched beast overlay if available
  if (matchedBeast) {
    let matchNorm = [];
    for (let i = 0; i < n; i++) {
      matchNorm.push(map(matchedBeast.data[i], dimMin[i], dimMax[i], 0, 1));
    }
    fill(255, 140, 0, 40);
    stroke(255, 140, 0);
    strokeWeight(1.5);
    beginShape();
    for (let i = 0; i < n; i++) {
      let angle = -HALF_PI + i * angleStep;
      let rr = matchNorm[i] * r;
      vertex(cx + cos(angle) * rr, cy + sin(angle) * rr);
    }
    endShape(CLOSE);
  }

  // Draw user polygon
  fill(100, 149, 237, 60);
  stroke(100, 149, 237);
  strokeWeight(2);
  beginShape();
  for (let i = 0; i < n; i++) {
    let angle = -HALF_PI + i * angleStep;
    let rr = norm[i] * r;
    vertex(cx + cos(angle) * rr, cy + sin(angle) * rr);
  }
  endShape(CLOSE);

  // Draw user dots
  fill(100, 149, 237);
  noStroke();
  for (let i = 0; i < n; i++) {
    let angle = -HALF_PI + i * angleStep;
    let rr = norm[i] * r;
    ellipse(cx + cos(angle) * rr, cy + sin(angle) * rr, 7, 7);
  }

  // Legend
  if (matchedBeast) {
    let legY = cy + r + 40;
    textSize(10);
    textAlign(LEFT, CENTER);

    fill(100, 149, 237);
    noStroke();
    rect(cx - 60, legY - 5, 10, 10);
    fill(60);
    text("Your profile", cx - 45, legY);

    fill(255, 140, 0);
    noStroke();
    rect(cx - 60, legY + 12, 10, 10);
    fill(60);
    text(matchedBeast.name, cx - 45, legY + 17);
  }
}

function drawMatchPanel(x, y, w) {
  noStroke();
  fill(30);
  textSize(14);
  textAlign(LEFT, TOP);
  textStyle(BOLD);
  text("Closest Match", x, y);
  textStyle(NORMAL);

  // Beast name
  fill(100, 149, 237);
  textSize(20);
  text(matchedBeast.name, x, y + 25);

  // Distance
  fill(120);
  textSize(11);
  let d = computeDistance(getSliderValues(), matchedBeast.data);
  text("Euclidean distance: " + nf(d, 1, 2), x, y + 55);

  // Description
  fill(50);
  textSize(12);
  drawWrappedText(matchedBeast.desc, x, y + 80, w);

  // Allegory
  fill(100, 80, 40);
  textSize(11);
  textStyle(ITALIC);
  let alY = y + 130;
  text("Allegorical function:", x, alY);
  textStyle(NORMAL);
  drawWrappedText(matchedBeast.allegory, x, alY + 18, w);
}

function drawChallengePanel(x, y, w) {
  noStroke();
  fill(30);
  textSize(14);
  textAlign(LEFT, TOP);
  textStyle(BOLD);
  text("Challenge Mode", x, y);
  textStyle(NORMAL);

  // Technology name
  fill(180, 60, 60);
  textSize(13);
  text("Classify this technology:", x, y + 28);
  fill(30);
  textSize(18);
  text('"' + currentChallenge.tech + '"', x, y + 50);

  fill(80);
  textSize(11);
  drawWrappedText("Adjust the sliders to classify this technology, then press 'Find Closest Beast' to see which beast it matches.", x, y + 85, w);

  if (challengeRevealed) {
    let targetBeast = beasts.find(b => b.name === currentChallenge.beastName);
    fill(30, 120, 30);
    textSize(13);
    textStyle(BOLD);
    text("Expected match: " + currentChallenge.beastName, x, y + 160);
    textStyle(NORMAL);

    if (matchedBeast) {
      if (matchedBeast.name === currentChallenge.beastName) {
        fill(30, 130, 30);
        textSize(12);
        text("Correct. Your classification aligns with the", x, y + 185);
        text("established literature.", x, y + 200);
      } else {
        fill(180, 60, 60);
        textSize(12);
        text("Your classification yielded: " + matchedBeast.name, x, y + 185);
        drawWrappedText("The literature suggests " + currentChallenge.beastName + " is the accepted classification. Further study is recommended.", x, y + 205, w);
      }
    }

    // Show target beast data
    if (targetBeast) {
      fill(100);
      textSize(10);
      let dataStr = "Reference profile: [" + targetBeast.data.join(", ") + "]";
      text(dataStr, x, y + 250);
    }
  }
}

function drawInstructions(x, y, w) {
  noStroke();
  fill(100);
  textSize(13);
  textAlign(LEFT, TOP);
  drawWrappedText("Adjust the six sliders to create a beast profile, then press 'Find Closest Beast' to identify which mythical creature most closely matches your configuration.", x, y, w);

  fill(130);
  textSize(11);
  drawWrappedText("Press 'Challenge Mode' to classify a real-world technology as a mythical beast.", x, y + 80, w);

  // Show the dimension scale reference
  fill(80);
  textSize(10);
  let refY = y + 140;
  textStyle(BOLD);
  text("Dimension Scales:", x, refY);
  textStyle(NORMAL);
  textSize(9);
  text("Morphology: 1 (Simple) to 5 (Complex)", x, refY + 18);
  text("Ability: 1 (Weak) to 5 (Devastating)", x, refY + 32);
  text("Disposition: -2 (Hostile) to +2 (Benevolent)", x, refY + 46);
  text("Habitat: 1 (Confined) to 5 (Everywhere)", x, refY + 60);
  text("Rarity: 1 (Common) to 5 (Legendary)", x, refY + 74);
  text("Allegory: 1 (Decorative) to 5 (Central)", x, refY + 88);
}

function drawWrappedText(txt, x, y, maxW) {
  let words = txt.split(' ');
  let line = '';
  let lineY = y;
  let lineH = 16;

  for (let i = 0; i < words.length; i++) {
    let testLine = line + words[i] + ' ';
    if (textWidth(testLine) > maxW && line.length > 0) {
      text(line.trim(), x, lineY);
      line = words[i] + ' ';
      lineY += lineH;
    } else {
      line = testLine;
    }
  }
  if (line.trim().length > 0) {
    text(line.trim(), x, lineY);
  }
}

function getSliderValues() {
  let vals = [];
  for (let i = 0; i < 6; i++) {
    vals.push(sliders[i].value());
  }
  return vals;
}

function computeDistance(a, b) {
  let sum = 0;
  for (let i = 0; i < a.length; i++) {
    sum += (a[i] - b[i]) * (a[i] - b[i]);
  }
  return sqrt(sum);
}

function findClosest() {
  let vals = getSliderValues();
  let bestDist = Infinity;
  let bestBeast = null;

  for (let b of beasts) {
    let d = computeDistance(vals, b.data);
    if (d < bestDist) {
      bestDist = d;
      bestBeast = b;
    }
  }

  matchedBeast = bestBeast;

  if (challengeMode && currentChallenge) {
    challengeRevealed = true;
  }
}

function startChallenge() {
  challengeMode = true;
  challengeRevealed = false;
  matchedBeast = null;
  currentChallenge = challenges[challengeIndex % challenges.length];
  challengeIndex++;

  // Reset sliders to default
  for (let i = 0; i < 6; i++) {
    sliders[i].value(dimDefault[i]);
  }
}

function resetAll() {
  challengeMode = false;
  currentChallenge = null;
  challengeRevealed = false;
  matchedBeast = null;

  for (let i = 0; i < 6; i++) {
    sliders[i].value(dimDefault[i]);
  }
}

// Beast Classification Framework - Radar/Spider Chart MicroSim
// Interactive comparison of mythical beast characteristics

let canvasWidth = 400;
let canvasHeight = 500;
let drawHeight = 430;
let instructionHeight = 20;
let controlHeight = 50;

let beastSelect, compareSelect, compareBtn, randomBtn;
let compareMode = false;

const dimensions = ['Morphology', 'Ability', 'Disposition', 'Habitat', 'Rarity', 'Allegory'];

const beasts = {
  Dragon: {
    stats: [3, 5, -2, 3, 2, 5],
    description: 'A large, fire-breathing reptilian creature of considerable destructive capacity.',
    allegory: 'Disruptive technologies that incinerate existing industries and the jobs within them.',
    modern: 'Generative AI wiping out entire departments while the CEO calls it "exciting."'
  },
  Phoenix: {
    stats: [2, 5, 1, 4, 5, 4],
    description: 'An immortal avian that cyclically combusts and regenerates from its own ashes.',
    allegory: 'Industries that claim reinvention while changing nothing of substance.',
    modern: 'Any company that "pivots to AI" by renaming its analytics dashboard.'
  },
  Griffin: {
    stats: [4, 3, 0, 3, 3, 3],
    description: 'A lion-eagle hybrid combining terrestrial dominance with aerial superiority.',
    allegory: 'Cross-functional teams that sound impressive in org charts but satisfy neither domain.',
    modern: 'The "full-stack developer" who is mediocre at both frontend and backend.'
  },
  Centaur: {
    stats: [4, 2, 1, 2, 2, 5],
    description: 'A human-equine hybrid representing the uneasy fusion of intellect and animal instinct.',
    allegory: 'Human-AI collaboration, in which neither party trusts the other.',
    modern: 'A knowledge worker who uses ChatGPT but tells HR they did it themselves.'
  },
  Mermaid: {
    stats: [3, 3, 0, 4, 3, 3],
    description: 'An aquatic humanoid whose beauty conceals an incompatible operating environment.',
    allegory: 'Products with gorgeous interfaces that cannot function in real-world conditions.',
    modern: 'Any demo that works flawlessly on stage and crashes in production.'
  },
  Minotaur: {
    stats: [3, 2, -2, 1, 5, 4],
    description: 'A bovine-human hybrid confined to an inescapable labyrinth of its own making.',
    allegory: 'Legacy systems so complex that no one can navigate or escape them.',
    modern: 'Enterprise software that requires 14 consultants and a Jira board to configure.'
  },
  Pegasus: {
    stats: [2, 3, 2, 4, 4, 3],
    description: 'A winged horse of noble temperament and implausible aerodynamics.',
    allegory: 'Aspirational technologies that promise transcendence but violate basic physics.',
    modern: 'Quantum computing solving your business problems by 2027, as promised since 2017.'
  },
  Kraken: {
    stats: [2, 5, -2, 5, 4, 4],
    description: 'A colossal cephalopod capable of dragging entire vessels to the ocean floor.',
    allegory: 'Platform monopolies that consume everything in their ecosystem.',
    modern: 'Any company whose business model is "be the ocean."'
  },
  Siren: {
    stats: [2, 4, -2, 3, 3, 4],
    description: 'A vocal enchantress whose irresistible song lures victims to destruction.',
    allegory: 'Marketing narratives so compelling they override rational evaluation.',
    modern: 'A VC pitch deck with hockey-stick projections and no revenue.'
  },
  Cyclops: {
    stats: [2, 2, -1, 2, 3, 3],
    description: 'A one-eyed giant of limited perspective but considerable brute force.',
    allegory: 'Single-metric optimization that ignores all context and nuance.',
    modern: 'A manager who evaluates everything by lines of code produced per sprint.'
  }
};

const beastNames = Object.keys(beasts);

function updateCanvasSize() {
  const main = document.querySelector('main');
  if (main) {
    canvasWidth = Math.max(500, main.offsetWidth);
  }
  canvasHeight = drawHeight + instructionHeight + controlHeight;
}

function setup() {
  updateCanvasSize();
  const canvas = createCanvas(canvasWidth, canvasHeight);
  const mainEl = document.querySelector('main');
  canvas.parent(mainEl);

  // Make main position-relative so we can overlay controls on the canvas
  mainEl.style.position = 'relative';

  // Controls container positioned over the canvas control region
  let controlsDiv = createDiv('');
  controlsDiv.parent(mainEl);
  controlsDiv.style('position', 'absolute');
  controlsDiv.style('bottom', '0');
  controlsDiv.style('left', '0');
  controlsDiv.style('width', '100%');
  controlsDiv.style('height', controlHeight + 'px');
  controlsDiv.style('display', 'flex');
  controlsDiv.style('align-items', 'center');
  controlsDiv.style('box-sizing', 'border-box');

  // Left section: beast select, compare toggle, compare select
  let leftSection = createDiv('');
  leftSection.parent(controlsDiv);
  leftSection.style('flex', '1');
  leftSection.style('display', 'flex');
  leftSection.style('justify-content', 'flex-end');
  leftSection.style('align-items', 'center');
  leftSection.style('gap', '8px');

  beastSelect = createSelect();
  beastSelect.parent(leftSection);
  for (let name of beastNames) {
    beastSelect.option(name);
  }
  beastSelect.style('font-size', '14px');
  beastSelect.style('padding', '4px');

  compareBtn = createButton('Compare: OFF');
  compareBtn.parent(leftSection);
  compareBtn.mousePressed(toggleCompare);
  compareBtn.style('font-size', '14px');
  compareBtn.style('padding', '4px 10px');

  compareSelect = createSelect();
  compareSelect.parent(leftSection);
  for (let name of beastNames) {
    compareSelect.option(name);
  }
  compareSelect.selected('Phoenix');
  compareSelect.style('font-size', '14px');
  compareSelect.style('padding', '4px');
  compareSelect.attribute('disabled', '');
  compareSelect.style('opacity', '0.4');

  // Center section: Randomize button (fixed center)
  let centerSection = createDiv('');
  centerSection.parent(controlsDiv);
  centerSection.style('flex', '0 0 auto');
  centerSection.style('padding', '0 16px');

  randomBtn = createButton('Randomize');
  randomBtn.parent(centerSection);
  randomBtn.mousePressed(randomizeBeast);
  randomBtn.style('font-size', '14px');
  randomBtn.style('padding', '4px 10px');

  // Right spacer to balance the layout
  let rightSection = createDiv('');
  rightSection.parent(controlsDiv);
  rightSection.style('flex', '1');
}

function toggleCompare() {
  compareMode = !compareMode;
  compareBtn.html(compareMode ? 'Compare: ON' : 'Compare: OFF');
  if (compareMode) {
    compareSelect.removeAttribute('disabled');
    compareSelect.style('opacity', '1');
  } else {
    compareSelect.attribute('disabled', '');
    compareSelect.style('opacity', '0.4');
  }
}

function randomizeBeast() {
  let idx = floor(random(beastNames.length));
  beastSelect.selected(beastNames[idx]);
  if (compareMode) {
    let idx2 = floor(random(beastNames.length));
    while (idx2 === idx) {
      idx2 = floor(random(beastNames.length));
    }
    compareSelect.selected(beastNames[idx2]);
  }
}

function normalizeStats(stats) {
  // Normalize all to 0-5 range; Disposition is -2 to +2, map to 0-5
  return stats.map((val, i) => {
    if (i === 2) { // Disposition
      return map(val, -2, 2, 0, 5);
    }
    return val;
  });
}

function drawRadar(cx, cy, radius, stats, col, label) {
  let n = dimensions.length;
  let normalized = normalizeStats(stats);
  let angleStep = TWO_PI / n;

  // Draw filled shape
  fill(red(col), green(col), blue(col), 60);
  stroke(col);
  strokeWeight(2);
  beginShape();
  for (let i = 0; i < n; i++) {
    let angle = -HALF_PI + i * angleStep;
    let r = map(normalized[i], 0, 5, 0, radius);
    vertex(cx + cos(angle) * r, cy + sin(angle) * r);
  }
  endShape(CLOSE);

  // Draw dots at vertices
  fill(col);
  noStroke();
  for (let i = 0; i < n; i++) {
    let angle = -HALF_PI + i * angleStep;
    let r = map(normalized[i], 0, 5, 0, radius);
    ellipse(cx + cos(angle) * r, cy + sin(angle) * r, 7, 7);
  }
}

function drawRadarGrid(cx, cy, radius) {
  let n = dimensions.length;
  let angleStep = TWO_PI / n;

  // Concentric pentagons (grid rings)
  noFill();
  stroke(200);
  strokeWeight(1);
  for (let ring = 1; ring <= 5; ring++) {
    let r = map(ring, 0, 5, 0, radius);
    beginShape();
    for (let i = 0; i < n; i++) {
      let angle = -HALF_PI + i * angleStep;
      vertex(cx + cos(angle) * r, cy + sin(angle) * r);
    }
    endShape(CLOSE);
  }

  // Axis lines
  stroke(180);
  strokeWeight(1);
  for (let i = 0; i < n; i++) {
    let angle = -HALF_PI + i * angleStep;
    line(cx, cy, cx + cos(angle) * radius, cy + sin(angle) * radius);
  }

  // Axis labels
  noStroke();
  fill(40);
  textAlign(CENTER, CENTER);
  textSize(12);
  let labelOffset = radius + 22;
  for (let i = 0; i < n; i++) {
    let angle = -HALF_PI + i * angleStep;
    let lx = cx + cos(angle) * labelOffset;
    let ly = cy + sin(angle) * labelOffset;
    text(dimensions[i], lx, ly);
  }

  // Scale numbers on first axis (top)
  textSize(9);
  fill(130);
  textAlign(LEFT, CENTER);
  for (let ring = 1; ring <= 5; ring++) {
    let r = map(ring, 0, 5, 0, radius);
    let angle = -HALF_PI;
    text(ring, cx + cos(angle) * r + 4, cy + sin(angle) * r);
  }
}

function drawInfoCard(x, y, w, h, name, data) {
  // Card background
  fill(252);
  stroke(200);
  strokeWeight(1);
  rect(x, y, w, h, 8);

  let px = x + 12;
  let py = y + 20;

  // Beast name
  noStroke();
  fill(50);
  textAlign(LEFT, TOP);
  textSize(18);
  textStyle(BOLD);
  text(name, px, py);
  py += 28;

  // Description
  textSize(11);
  textStyle(NORMAL);
  fill(60);
  let descLines = wrapText(data.description, w - 24, 11);
  for (let line of descLines) {
    text(line, px, py);
    py += 15;
  }
  py += 8;

  // Allegorical function
  fill(100);
  textSize(10);
  textStyle(BOLD);
  text('ALLEGORICAL FUNCTION', px, py);
  py += 16;
  textStyle(NORMAL);
  fill(60);
  textSize(11);
  let allegLines = wrapText(data.allegory, w - 24, 11);
  for (let line of allegLines) {
    text(line, px, py);
    py += 15;
  }
  py += 8;

  // Modern equivalent
  fill(100);
  textSize(10);
  textStyle(BOLD);
  text('MODERN EQUIVALENT', px, py);
  py += 16;
  textStyle(NORMAL);
  fill(60);
  textSize(11);
  let modLines = wrapText(data.modern, w - 24, 11);
  for (let line of modLines) {
    text(line, px, py);
    py += 15;
  }
  py += 10;

  // Raw stats
  fill(100);
  textSize(10);
  textStyle(BOLD);
  text('RAW SCORES', px, py);
  py += 16;
  textStyle(NORMAL);
  fill(70);
  textSize(10);
  for (let i = 0; i < dimensions.length; i++) {
    let val = data.stats[i];
    let label = dimensions[i] + ': ' + val;
    if (i === 2) label += '  (range: -2 to +2)';
    text(label, px, py);
    py += 14;
  }
}

function wrapText(txt, maxW, sz) {
  textSize(sz);
  let words = txt.split(' ');
  let lines = [];
  let current = '';
  for (let word of words) {
    let test = current.length === 0 ? word : current + ' ' + word;
    if (textWidth(test) > maxW) {
      if (current.length > 0) lines.push(current);
      current = word;
    } else {
      current = test;
    }
  }
  if (current.length > 0) lines.push(current);
  return lines;
}

function draw() {
  updateCanvasSize();
  resizeCanvas(canvasWidth, canvasHeight);

  // Draw area background
  fill('aliceblue');
  stroke('silver');
  strokeWeight(1);
  rect(0, 0, canvasWidth, drawHeight);

  // Instruction text area
  fill('aliceblue');
  stroke('silver');
  rect(0, drawHeight, canvasWidth, instructionHeight);

  // Control area background
  fill('white');
  stroke('silver');
  rect(0, drawHeight + instructionHeight, canvasWidth, controlHeight);

  // Title
  noStroke();
  fill(40);
  textAlign(CENTER, TOP);
  textSize(16);
  textStyle(BOLD);
  text('Beast Classification Framework', canvasWidth / 2, 10);
  textStyle(NORMAL);
  textSize(11);
  fill(100);
  text('Taxonomic Radar Analysis', canvasWidth / 2, 30);

  let selectedName = beastSelect.value();
  let selectedBeast = beasts[selectedName];

  // Layout calculations
  let radarCx, radarCy, radarR, infoX, infoW;

  if (canvasWidth > 700) {
    // Wide layout: radar left, info right
    radarR = min(140, (canvasWidth * 0.45 - 60) / 2);
    radarCx = canvasWidth * 0.3;
    radarCy = drawHeight / 2 + 15;
    infoX = canvasWidth * 0.55;
    infoW = canvasWidth * 0.42;
  } else {
    // Narrow layout: radar centered, info below (compact)
    radarR = min(120, (canvasWidth - 80) / 2);
    radarCx = canvasWidth / 2;
    radarCy = 195;
    infoX = 10;
    infoW = canvasWidth - 20;
  }

  // Draw radar grid
  drawRadarGrid(radarCx, radarCy, radarR);

  // Draw comparison beast first (underneath)
  if (compareMode) {
    let compName = compareSelect.value();
    let compBeast = beasts[compName];
    let compColor = color(70, 130, 220);
    drawRadar(radarCx, radarCy, radarR, compBeast.stats, compColor, compName);
  }

  // Draw primary beast
  let primaryColor = color(200, 160, 40);
  drawRadar(radarCx, radarCy, radarR, selectedBeast.stats, primaryColor, selectedName);

  // Legend
  let legendY = radarCy + radarR + 35;
  noStroke();
  textAlign(LEFT, CENTER);
  textSize(11);

  fill(200, 160, 40);
  ellipse(radarCx - 60, legendY, 10, 10);
  fill(60);
  text(selectedName, radarCx - 50, legendY);

  if (compareMode) {
    let compName = compareSelect.value();
    fill(70, 130, 220);
    ellipse(radarCx + 20, legendY, 10, 10);
    fill(60);
    text(compName, radarCx + 30, legendY);
  }

  // Draw info card
  if (canvasWidth > 700) {
    drawInfoCard(infoX, 50, infoW, drawHeight - 70, selectedName, selectedBeast);
  } else {
    // In narrow mode, skip info card to avoid clutter — show minimal info
    let infoY = radarCy + radarR + 52;
    noStroke();
    fill(50);
    textAlign(CENTER, TOP);
    textSize(12);
    textStyle(BOLD);
    text(selectedName, canvasWidth / 2, infoY);
    textStyle(NORMAL);
    textSize(10);
    fill(80);
    let descLines = wrapText(selectedBeast.allegory, canvasWidth - 40, 10);
    let dy = infoY + 18;
    for (let line of descLines) {
      text(line, canvasWidth / 2, dy);
      dy += 14;
    }
  }

  // Instruction text just above control region
  noStroke();
  fill(120);
  textAlign(CENTER, CENTER);
  textSize(10);
  text('Select a beast to examine. Toggle Compare to overlay a second specimen.', canvasWidth / 2, drawHeight + instructionHeight / 2);
}

function windowResized() {
  updateCanvasSize();
  resizeCanvas(canvasWidth, canvasHeight);
}

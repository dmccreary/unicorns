// Unicorn Population Dynamics MicroSim
// Simulates startup unicorn population with adjustable hype parameters

let canvasWidth = 750;
let drawHeight = 350;
let controlHeight = 220;
let canvasHeight = drawHeight + controlHeight;

let beliefSlider, fundingSlider, instagramSlider, realitySlider, decaySlider;
let runBtn, resetBtn, hypeBtn, correctionBtn;

let simData = null;
let simYears = 20;
let maxPopulation = 2000;

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

  let sliderX = 140;
  let sliderW = 140;
  let y0 = drawHeight + 14;
  let rowH = 26;

  // Belief Level slider
  beliefSlider = createSlider(0, 100, 50, 1);
  beliefSlider.parent(document.querySelector('main'));
  beliefSlider.position(sliderX, y0);
  beliefSlider.size(sliderW);

  // VC Funding Rate slider
  fundingSlider = createSlider(0, 100, 40, 1);
  fundingSlider.parent(document.querySelector('main'));
  fundingSlider.position(sliderX, y0 + rowH);
  fundingSlider.size(sliderW);

  // Instagram Exposure slider
  instagramSlider = createSlider(0, 100, 30, 1);
  instagramSlider.parent(document.querySelector('main'));
  instagramSlider.position(sliderX, y0 + rowH * 2);
  instagramSlider.size(sliderW);

  // Reality Checking slider
  realitySlider = createSlider(0, 100, 20, 1);
  realitySlider.parent(document.querySelector('main'));
  realitySlider.position(sliderX, y0 + rowH * 3);
  realitySlider.size(sliderW);

  // Sparkle Decay slider
  decaySlider = createSlider(0, 100, 10, 1);
  decaySlider.parent(document.querySelector('main'));
  decaySlider.position(sliderX, y0 + rowH * 4);
  decaySlider.size(sliderW);

  // Buttons
  let btnX = canvasWidth > 500 ? 340 : 300;
  let btnY = y0;
  let btnSpacing = 34;

  runBtn = createButton('Run Simulation');
  runBtn.parent(document.querySelector('main'));
  runBtn.position(btnX, btnY);
  runBtn.mousePressed(runSimulation);

  resetBtn = createButton('Reset');
  resetBtn.parent(document.querySelector('main'));
  resetBtn.position(btnX + 130, btnY);
  resetBtn.mousePressed(resetAll);

  hypeBtn = createButton('Scenario: Hype Bubble');
  hypeBtn.parent(document.querySelector('main'));
  hypeBtn.position(btnX, btnY + btnSpacing);
  hypeBtn.mousePressed(function () {
    beliefSlider.value(90);
    fundingSlider.value(90);
    instagramSlider.value(80);
    realitySlider.value(5);
    decaySlider.value(5);
  });

  correctionBtn = createButton('Scenario: Correction');
  correctionBtn.parent(document.querySelector('main'));
  correctionBtn.position(btnX, btnY + btnSpacing * 2);
  correctionBtn.mousePressed(function () {
    beliefSlider.value(20);
    fundingSlider.value(10);
    instagramSlider.value(10);
    realitySlider.value(90);
    decaySlider.value(50);
  });

  // Run initial simulation
  runSimulation();
}

function draw() {
  updateCanvasSize();
  resizeCanvas(canvasWidth, canvasHeight);

  // Draw area
  fill('aliceblue');
  stroke('silver');
  rect(0, 0, canvasWidth, drawHeight);

  // Control area
  fill('white');
  stroke('silver');
  rect(0, drawHeight, canvasWidth, controlHeight);

  // Title
  noStroke();
  fill(30);
  textSize(16);
  textAlign(CENTER, TOP);
  text("Unicorn Population Dynamics", canvasWidth / 2, 8);

  // Draw chart
  if (simData) {
    drawChart();
  }

  // Draw slider labels
  drawControlLabels();
}

function runSimulation() {
  let belief0 = beliefSlider.value() / 100;
  let funding = fundingSlider.value() / 100;
  let instagram = instagramSlider.value() / 100;
  let realityCheck = realitySlider.value() / 100;
  let sparkleDecay = decaySlider.value() / 100;

  let steps = simYears * 10; // 10 steps per year for smoother curves
  let dt = 0.1; // time step = 0.1 years

  let population = 50; // initial unicorn count
  let reality = 100;   // reality index (percentage)
  let belief = belief0 * 100; // belief index (percentage)

  let popData = [];
  let realData = [];
  let beliefData = [];

  for (let i = 0; i <= steps; i++) {
    let t = i * dt;

    popData.push({ x: t, y: population });
    realData.push({ x: t, y: reality });
    beliefData.push({ x: t, y: belief });

    // Differential equations (Euler integration)
    // Population grows with belief * funding, decays with reality_checking * sparkle_decay
    let growthRate = (belief / 100) * funding * 0.8;
    let decayRate = realityCheck * sparkleDecay * 0.3;
    let dPop = population * (growthRate - decayRate) * dt;
    population = max(1, population + dPop);
    population = min(maxPopulation, population);

    // Reality index decreases as population outpaces sustainable levels
    // Sustainable = ~200 unicorns with real revenue
    let sustainable = 200;
    let realityPressure = -((population - sustainable) / sustainable) * realityCheck * 0.5;
    let hypeBoost = (1 - realityCheck) * instagram * 0.2;
    let dReality = (realityPressure + hypeBoost) * dt * 100;
    reality = constrain(reality + dReality, 1, 100);

    // Belief follows a feedback loop
    // Instagram boosts belief, reality checking and sparkle decay reduce it
    let instagramEffect = instagram * (1 - reality / 200) * 0.6;
    let realityDrag = realityCheck * (100 - reality) / 100 * 0.4;
    let fundingSignal = funding * 0.2;
    let dBelief = (instagramEffect + fundingSignal - realityDrag - sparkleDecay * 0.15) * dt * 100;
    belief = constrain(belief + dBelief, 1, 100);
  }

  simData = {
    population: popData,
    reality: realData,
    belief: beliefData
  };

  // Recalculate max for population axis
  let maxPop = 0;
  for (let p of popData) {
    if (p.y > maxPop) maxPop = p.y;
  }
  maxPopulation = max(200, ceil(maxPop / 100) * 100 + 100);
}

function drawChart() {
  let chartLeft = 65;
  let chartRight = canvasWidth - 20;
  let chartTop = 35;
  let chartBottom = drawHeight - 40;
  let chartW = chartRight - chartLeft;
  let chartH = chartBottom - chartTop;

  // Grid lines
  stroke(220);
  strokeWeight(0.5);
  for (let i = 0; i <= 5; i++) {
    let y = chartTop + (i / 5) * chartH;
    line(chartLeft, y, chartRight, y);
  }
  for (let i = 0; i <= simYears; i += 5) {
    let x = chartLeft + (i / simYears) * chartW;
    line(x, chartTop, x, chartBottom);
  }

  // Axes
  stroke(120);
  strokeWeight(1);
  line(chartLeft, chartTop, chartLeft, chartBottom);
  line(chartLeft, chartBottom, chartRight, chartBottom);

  // Y-axis labels (left: population)
  noStroke();
  fill(180, 150, 0);
  textSize(10);
  textAlign(RIGHT, CENTER);
  for (let i = 0; i <= 5; i++) {
    let val = (maxPopulation / 5) * (5 - i);
    let y = chartTop + (i / 5) * chartH;
    text(nf(val, 0, 0), chartLeft - 5, y);
  }

  // Y-axis label
  push();
  translate(14, chartTop + chartH / 2);
  rotate(-HALF_PI);
  fill(100);
  textSize(10);
  textAlign(CENTER, CENTER);
  text("Population", 0, 0);
  pop();

  // Right Y-axis labels (0-100% for reality and belief)
  fill(120);
  textSize(10);
  textAlign(LEFT, CENTER);
  for (let i = 0; i <= 5; i++) {
    let val = (100 / 5) * (5 - i);
    let y = chartTop + (i / 5) * chartH;
    text(val + "%", chartRight + 3, y);
  }

  // X-axis labels
  fill(80);
  textSize(10);
  textAlign(CENTER, TOP);
  for (let i = 0; i <= simYears; i += 5) {
    let x = chartLeft + (i / simYears) * chartW;
    text("Yr " + i, x, chartBottom + 5);
  }

  // X-axis label
  textSize(10);
  fill(100);
  textAlign(CENTER, TOP);
  text("Years", chartLeft + chartW / 2, chartBottom + 20);

  // Draw population line (gold)
  drawLine(simData.population, chartLeft, chartTop, chartW, chartH, 0, maxPopulation, color(200, 170, 0), 2.5);

  // Draw reality line (red) - scale 0-100
  drawLine(simData.reality, chartLeft, chartTop, chartW, chartH, 0, 100, color(220, 60, 60), 2);

  // Draw belief line (blue) - scale 0-100
  drawLine(simData.belief, chartLeft, chartTop, chartW, chartH, 0, 100, color(60, 100, 220), 2);

  // Legend
  let legX = chartLeft + 15;
  let legY = chartTop + 8;
  noStroke();

  fill(200, 170, 0);
  rect(legX, legY, 18, 3);
  fill(60);
  textSize(10);
  textAlign(LEFT, CENTER);
  text("Unicorn Population", legX + 22, legY + 2);

  fill(220, 60, 60);
  rect(legX, legY + 16, 18, 3);
  fill(60);
  text("Reality Index (%)", legX + 22, legY + 18);

  fill(60, 100, 220);
  rect(legX, legY + 32, 18, 3);
  fill(60);
  text("Belief Index (%)", legX + 22, legY + 34);
}

function drawLine(data, chartLeft, chartTop, chartW, chartH, minVal, maxVal, col, weight) {
  stroke(col);
  strokeWeight(weight);
  noFill();
  beginShape();
  for (let i = 0; i < data.length; i++) {
    let px = chartLeft + (data[i].x / simYears) * chartW;
    let py = chartTop + chartH - ((data[i].y - minVal) / (maxVal - minVal)) * chartH;
    py = constrain(py, chartTop, chartTop + chartH);
    vertex(px, py);
  }
  endShape();
}

function drawControlLabels() {
  noStroke();
  fill(60);
  textSize(11);
  textAlign(RIGHT, CENTER);

  let y0 = drawHeight + 24;
  let rowH = 26;

  text("Belief Level:", 132, y0);
  text("VC Funding Rate:", 132, y0 + rowH);
  text("Instagram Exposure:", 132, y0 + rowH * 2);
  text("Reality Checking:", 132, y0 + rowH * 3);
  text("Sparkle Decay:", 132, y0 + rowH * 4);

  // Show values
  textAlign(LEFT, CENTER);
  let valX = 290;
  text(beliefSlider.value(), valX, y0);
  text(fundingSlider.value(), valX, y0 + rowH);
  text(instagramSlider.value(), valX, y0 + rowH * 2);
  text(realitySlider.value(), valX, y0 + rowH * 3);
  text(decaySlider.value(), valX, y0 + rowH * 4);
}

function resetAll() {
  beliefSlider.value(50);
  fundingSlider.value(40);
  instagramSlider.value(30);
  realitySlider.value(20);
  decaySlider.value(10);
  simData = null;
  maxPopulation = 2000;
}

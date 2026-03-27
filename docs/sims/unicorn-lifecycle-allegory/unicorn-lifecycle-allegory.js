// Unicorn Lifecycle Allegory MicroSim
// Step-through showing startup lifecycle mapped to mythical beasts (5 stages)

let canvasWidth = 750;
let drawHeight = 430;
let controlHeight = 50;
let canvasHeight = drawHeight + controlHeight;

let currentStage = 0;
let chosenPath = -1; // -1 = not chosen, 0 = kraken, 1 = unicorn

let nextBtn, prevBtn, resetBtn;
let krakenBtn, unicornBtn;

const stages = [
  {
    name: "The Founding",
    beast: "Pegasus",
    icon: "~*~",
    metrics: [
      { label: "Revenue", value: "$0", color: [180, 60, 60] },
      { label: "Valuation", value: "$0", color: [180, 60, 60] },
      { label: "Employees", value: "3", color: [60, 60, 60] }
    ],
    claim: "\"We can fly.\"",
    desc: "Three co-founders in a garage with a whiteboard, a dream, and a dangerously optimistic financial model. The Pegasus represents useful technology oversold beyond its actual capabilities. At this stage, the founders genuinely believe they have wings."
  },
  {
    name: "Series A",
    beast: "Unicorn",
    icon: "U*U",
    metrics: [
      { label: "Revenue", value: "$200K", color: [180, 120, 30] },
      { label: "Valuation", value: "$50M", color: [30, 130, 30] },
      { label: "Employees", value: "20", color: [60, 60, 60] }
    ],
    claim: "\"We are worth $50M because we could be worth $1B.\"",
    desc: "The company has achieved product-market fit, defined here as 'at least one customer who did not attend the founder's wedding.' The Unicorn emerges: a creature whose defining characteristic is a valuation untethered from revenue by a factor of 250."
  },
  {
    name: "Series B",
    beast: "Siren",
    icon: "S~S",
    metrics: [
      { label: "Revenue", value: "$2M", color: [180, 120, 30] },
      { label: "Valuation", value: "$500M", color: [30, 130, 30] },
      { label: "Employees", value: "150", color: [60, 60, 60] }
    ],
    claim: "\"Our TAM is $200B if you count everyone with a phone.\"",
    desc: "The Siren stage. The pitch deck now contains the phrase 'AI-powered' on every slide. The total addressable market calculation includes the population of countries where the product is not available and, in one memorable instance, the estimated population of Mars by 2040."
  },
  {
    name: "The Scale",
    beast: "Phoenix",
    icon: "P*P",
    metrics: [
      { label: "Revenue", value: "$30M", color: [30, 130, 30] },
      { label: "Burn Rate", value: "$80M/yr", color: [180, 60, 60] },
      { label: "Employees", value: "800", color: [60, 60, 60] }
    ],
    claim: "\"We are reinventing ourselves.\"",
    desc: "The Phoenix stage. The company has pivoted twice, rebranded once, and acquired three startups whose products were quietly discontinued. The burn rate exceeds revenue by a factor that the CFO describes as 'investment in future growth' and the board describes as 'concerning.'"
  },
  {
    name: "The Reckoning",
    beast: "???",
    icon: "?*?",
    metrics: [],
    claim: "\"Every mythical journey ends at a fork in the road.\"",
    desc: "Two paths diverge. The Kraken surfaces to drag the company to the depths: total collapse, 90% layoffs, a TechCrunch post-mortem. Or the Unicorn ascends to IPO, a $5B valuation, and a founder who writes a memoir called 'Against All Odds' despite having attended Stanford."
  }
];

const krakenOutcome = {
  beast: "Kraken",
  icon: "K*K",
  metrics: [
    { label: "Revenue", value: "$0", color: [180, 60, 60] },
    { label: "Valuation", value: "$0", color: [180, 60, 60] },
    { label: "Employees", value: "80 (90% laid off)", color: [180, 60, 60] }
  ],
  claim: "\"We remain committed to our core mission.\"",
  desc: "The Kraken has surfaced. The all-hands meeting is scheduled for 4:00 PM on a Friday, which every employee recognizes as the universal signal for catastrophic news. The press release uses the phrase 'strategic realignment' three times and 'exciting new chapter' twice."
};

const unicornOutcome = {
  beast: "Unicorn (Ascended)",
  icon: "U*U",
  metrics: [
    { label: "IPO Valuation", value: "$5B", color: [30, 130, 30] },
    { label: "Founder Net Worth", value: "$1.2B", color: [30, 130, 30] },
    { label: "Employees", value: "800 (for now)", color: [180, 120, 30] }
  ],
  claim: "\"We always believed.\"",
  desc: "The Unicorn ascends. The IPO prices above range. The founder rings the bell at NASDAQ wearing the same hoodie from the garage, which has been dry-cleaned exactly once. The memoir is already in production. The first round of post-IPO layoffs is scheduled for Q2."
};

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

  let btnY = drawHeight + 14;
  let btnX = 20;

  prevBtn = createButton('Previous Stage');
  prevBtn.position(btnX, btnY);
  prevBtn.parent(document.querySelector('main'));
  prevBtn.mousePressed(goPrev);

  nextBtn = createButton('Next Stage');
  nextBtn.position(btnX + 130, btnY);
  nextBtn.parent(document.querySelector('main'));
  nextBtn.mousePressed(goNext);

  resetBtn = createButton('Reset');
  resetBtn.position(btnX + 240, btnY);
  resetBtn.parent(document.querySelector('main'));
  resetBtn.mousePressed(doReset);

  krakenBtn = createButton('The Kraken Path');
  krakenBtn.position(btnX + 320, btnY);
  krakenBtn.parent(document.querySelector('main'));
  krakenBtn.mousePressed(chooseKraken);
  krakenBtn.style('background-color', '#e8c0c0');
  krakenBtn.hide();

  unicornBtn = createButton('The Unicorn Path');
  unicornBtn.position(btnX + 460, btnY);
  unicornBtn.parent(document.querySelector('main'));
  unicornBtn.mousePressed(chooseUnicorn);
  unicornBtn.style('background-color', '#c0e8c0');
  unicornBtn.hide();
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

  // Determine what to show
  let stage = stages[currentStage];
  let displayData = stage;

  if (currentStage === 4 && chosenPath === 0) {
    displayData = krakenOutcome;
  } else if (currentStage === 4 && chosenPath === 1) {
    displayData = unicornOutcome;
  }

  // Title
  noStroke();
  fill(30);
  textSize(16);
  textAlign(CENTER, TOP);
  textStyle(BOLD);
  text("The Startup Lifecycle: A Bestiary", canvasWidth / 2, 12);
  textStyle(NORMAL);

  // Progress bar
  drawProgressBar(canvasWidth / 2, 42, canvasWidth * 0.6);

  // Stage name
  fill(50);
  textSize(14);
  textAlign(CENTER, TOP);
  textStyle(BOLD);
  let stageName = (currentStage === 4 && chosenPath >= 0)
    ? "Stage 5: The Reckoning - " + (chosenPath === 0 ? "Kraken" : "Unicorn") + " Path"
    : "Stage " + (currentStage + 1) + ": " + stage.name;
  text(stageName, canvasWidth / 2, 60);
  textStyle(NORMAL);

  // Layout: left = beast icon area, right = metrics + quote
  let centerX = canvasWidth * 0.28;
  let rightX = canvasWidth * 0.52;
  let rightW = canvasWidth * 0.44;

  // Beast icon area
  drawBeastIcon(centerX, 170, displayData);

  // Metrics panel
  if (displayData.metrics.length > 0) {
    drawMetrics(rightX, 100, rightW, displayData.metrics);
  } else if (currentStage === 4 && chosenPath === -1) {
    // Fork display
    drawForkDisplay(rightX, 100, rightW);
  }

  // Quote bubble
  drawQuote(canvasWidth / 2, 290, canvasWidth * 0.8, displayData.claim);

  // Description
  fill(60);
  textSize(11);
  textAlign(LEFT, TOP);
  drawWrappedText(displayData.desc, canvasWidth * 0.08, 330, canvasWidth * 0.84);

  // Button visibility
  if (currentStage === 4 && chosenPath === -1) {
    nextBtn.hide();
    krakenBtn.show();
    unicornBtn.show();
  } else {
    krakenBtn.hide();
    unicornBtn.hide();
    if (currentStage < 4 && chosenPath === -1) {
      nextBtn.show();
    } else {
      nextBtn.hide();
    }
  }

  prevBtn.elt.disabled = (currentStage === 0 && chosenPath === -1);
}

function drawProgressBar(cx, cy, w) {
  let x0 = cx - w / 2;
  let dotSpacing = w / 4;

  for (let i = 0; i < 5; i++) {
    let dx = x0 + i * dotSpacing;

    // Connecting line
    if (i < 4) {
      stroke(i < currentStage ? color(100, 149, 237) : color(200));
      strokeWeight(2);
      line(dx, cy, dx + dotSpacing, cy);
    }

    // Dot
    noStroke();
    if (i < currentStage) {
      fill(100, 149, 237);
    } else if (i === currentStage) {
      fill(50, 100, 200);
    } else {
      fill(200);
    }
    ellipse(dx, cy, 14, 14);

    // Stage number
    fill(255);
    textSize(9);
    textAlign(CENTER, CENTER);
    text(i + 1, dx, cy);
  }

  // Stage labels below dots
  let shortNames = ["Found", "Series A", "Series B", "Scale", "Reckoning"];
  noStroke();
  fill(100);
  textSize(9);
  for (let i = 0; i < 5; i++) {
    let dx = x0 + i * dotSpacing;
    text(shortNames[i], dx, cy + 14);
  }
}

function drawBeastIcon(cx, cy, data) {
  let beastName = data.beast || data.name;

  // Icon circle
  noStroke();
  let iconColor;
  if (beastName === "Pegasus") iconColor = color(135, 180, 230);
  else if (beastName === "Unicorn" || beastName === "Unicorn (Ascended)") iconColor = color(180, 130, 220);
  else if (beastName === "Siren") iconColor = color(220, 160, 100);
  else if (beastName === "Phoenix") iconColor = color(220, 120, 60);
  else if (beastName === "Kraken") iconColor = color(100, 120, 140);
  else iconColor = color(160, 160, 160);

  fill(iconColor);
  ellipse(cx, cy, 110, 110);

  // Icon text
  fill(255);
  textSize(28);
  textAlign(CENTER, CENTER);
  textStyle(BOLD);
  text(data.icon || "?", cx, cy - 5);
  textStyle(NORMAL);

  // Beast name below
  fill(50);
  textSize(13);
  textStyle(BOLD);
  text(beastName, cx, cy + 70);
  textStyle(NORMAL);
}

function drawMetrics(x, y, w, metrics) {
  noStroke();
  fill(40);
  textSize(12);
  textAlign(LEFT, TOP);
  textStyle(BOLD);
  text("Key Metrics", x, y);
  textStyle(NORMAL);

  let my = y + 24;
  for (let m of metrics) {
    // Label
    fill(80);
    textSize(12);
    textAlign(LEFT, TOP);
    text(m.label + ":", x, my);

    // Value
    fill(m.color[0], m.color[1], m.color[2]);
    textSize(14);
    textStyle(BOLD);
    text(m.value, x + 120, my);
    textStyle(NORMAL);
    my += 28;
  }
}

function drawForkDisplay(x, y, w) {
  noStroke();
  fill(40);
  textSize(12);
  textAlign(LEFT, TOP);
  textStyle(BOLD);
  text("Two Paths Diverge", x, y);
  textStyle(NORMAL);

  // Kraken path
  fill(180, 60, 60);
  textSize(11);
  textAlign(LEFT, TOP);
  text("The Kraken Path:", x, y + 28);
  fill(80);
  textSize(10);
  text("Collapse. $0 valuation. 90% layoffs.", x, y + 44);
  text("A TechCrunch post-mortem.", x, y + 58);

  // Unicorn path
  fill(30, 130, 30);
  textSize(11);
  text("The Unicorn Path:", x, y + 86);
  fill(80);
  textSize(10);
  text("IPO at $5B. A memoir deal.", x, y + 102);
  text("Post-IPO layoffs scheduled for Q2.", x, y + 116);

  fill(120);
  textSize(10);
  textStyle(ITALIC);
  text("Choose your destiny below.", x, y + 144);
  textStyle(NORMAL);
}

function drawQuote(cx, cy, maxW, quote) {
  // Quote bubble background
  let qw = min(textWidth(quote) + 40, maxW);
  fill(255, 255, 240);
  stroke(200, 200, 180);
  strokeWeight(1);
  rectMode(CENTER);
  rect(cx, cy, qw, 32, 8);
  rectMode(CORNER);

  // Quote text
  noStroke();
  fill(80, 60, 30);
  textSize(13);
  textStyle(ITALIC);
  textAlign(CENTER, CENTER);
  text(quote, cx, cy);
  textStyle(NORMAL);
}

function drawWrappedText(txt, x, y, maxW) {
  let words = txt.split(' ');
  let line = '';
  let lineY = y;
  let lineH = 15;

  textAlign(LEFT, TOP);
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

function goNext() {
  if (currentStage < 4) {
    currentStage++;
    chosenPath = -1;
  }
}

function goPrev() {
  if (currentStage > 0) {
    currentStage--;
    chosenPath = -1;
  } else if (chosenPath >= 0) {
    chosenPath = -1;
  }
}

function chooseKraken() {
  chosenPath = 0;
}

function chooseUnicorn() {
  chosenPath = 1;
}

function doReset() {
  currentStage = 0;
  chosenPath = -1;
}

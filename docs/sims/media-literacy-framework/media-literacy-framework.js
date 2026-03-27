// Media Literacy Framework MicroSim
// Evaluate AI media examples using a 5-step critical analysis checklist.

const scenarios = [
  {
    type: "Press Release",
    text: "XYZ Corp announces AI platform achieving 99.7% satisfaction in internal testing",
    style: { font: "Georgia", size: 15, color: [30, 30, 80] },
    expert: {
      source: "Company",
      claim: "Aspirational",
      beneficiary: "Company",
      omission: "Limitations",
      precedent: "Standard hype",
      analysis: "Internal testing with undisclosed methodology. 99.7% is a suspiciously precise number that cannot be independently verified. The press release omits sample size, test conditions, and what 'satisfaction' means."
    }
  },
  {
    type: "Headline",
    text: "AI Could Replace 300 Million Jobs, Goldman Sachs Reports",
    style: { font: "Arial Black", size: 16, color: [140, 20, 20] },
    expert: {
      source: "Independent",
      claim: "Evidence-based",
      beneficiary: "Investor",
      omission: "Timeline",
      precedent: "Recycled",
      analysis: "Based on real research but stripped of nuance for maximum alarm. The word 'could' does enormous heavy lifting. Goldman Sachs benefits from market volatility this headline creates. Similar projections appear every technological cycle."
    }
  },
  {
    type: "LinkedIn Post",
    text: "Just finished AI prompt engineering course. This changes EVERYTHING.",
    style: { font: "Verdana", size: 14, color: [0, 80, 130] },
    expert: {
      source: "Unknown",
      claim: "Aspirational",
      beneficiary: "Company",
      omission: "Limitations",
      precedent: "Recycled",
      analysis: "An individual promoting a credential of uncertain value. 'This changes EVERYTHING' is the LinkedIn equivalent of a unicorn sighting. The poster benefits from appearing early-adopter savvy. The course provider benefits from this free advertisement."
    }
  },
  {
    type: "Keynote",
    text: "Our autonomous system requires zero human oversight after setup",
    style: { font: "Helvetica", size: 16, color: [60, 60, 60] },
    expert: {
      source: "Company",
      claim: "Vaporware",
      beneficiary: "Company",
      omission: "Limitations",
      precedent: "Recycled",
      analysis: "No complex system operates with zero oversight. This claim violates basic engineering principles and likely regulatory requirements. 'After setup' conceals the possibility that setup never actually ends. This is the autonomous vehicle promise repackaged."
    }
  },
  {
    type: "Research Paper",
    text: "We present 2.3% improvements on MMLU benchmark using modified attention",
    style: { font: "Courier New", size: 13, color: [40, 40, 40] },
    expert: {
      source: "Independent",
      claim: "Evidence-based",
      beneficiary: "Public",
      omission: "Cost",
      precedent: "Standard hype",
      analysis: "Modest, specific, verifiable claim with clear methodology. This is what legitimate research looks like. The omission of computational cost is standard in the field but worth noting. A 2.3% improvement may or may not matter in practice."
    }
  }
];

const questions = [
  {
    label: "Source",
    options: ["Company", "Independent", "Journalist", "Unknown"],
    colors: [[70, 130, 180], [60, 160, 80], [180, 130, 50], [140, 140, 140]]
  },
  {
    label: "Claim type",
    options: ["Evidence-based", "Aspirational", "Vaporware"],
    colors: [[60, 160, 80], [200, 160, 40], [200, 70, 70]]
  },
  {
    label: "Beneficiary",
    options: ["Company", "Public", "Investor", "Unclear"],
    colors: [[70, 130, 180], [60, 160, 80], [180, 130, 50], [140, 140, 140]]
  },
  {
    label: "Key omission",
    options: ["Limitations", "Cost", "Job impact", "Timeline", "None"],
    colors: [[200, 70, 70], [200, 160, 40], [180, 100, 60], [70, 130, 180], [140, 140, 140]]
  },
  {
    label: "Precedent",
    options: ["Novel", "Recycled", "Standard hype"],
    colors: [[60, 160, 80], [200, 160, 40], [200, 70, 70]]
  }
];

let canvasWidth = 750;
let drawHeight = 420;
let controlHeight = 60;
let canvasHeight = 480;

let currentScenario = 0;
let answers = []; // array of arrays, one per scenario
let submitted = []; // boolean per scenario
let nextBtn, submitBtn, resetBtn;

function initState() {
  answers = [];
  submitted = [];
  for (let i = 0; i < scenarios.length; i++) {
    answers.push([null, null, null, null, null]);
    submitted.push(false);
  }
}

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

  initState();

  nextBtn = createButton('Next Example');
  nextBtn.parent(document.querySelector('main'));
  nextBtn.mousePressed(() => {
    currentScenario = (currentScenario + 1) % scenarios.length;
  });

  submitBtn = createButton('Submit Evaluation');
  submitBtn.parent(document.querySelector('main'));
  submitBtn.mousePressed(() => {
    let a = answers[currentScenario];
    if (a[0] !== null && a[1] !== null && a[2] !== null && a[3] !== null && a[4] !== null) {
      submitted[currentScenario] = true;
    }
  });

  resetBtn = createButton('Reset');
  resetBtn.parent(document.querySelector('main'));
  resetBtn.mousePressed(() => {
    initState();
    currentScenario = 0;
  });
}

function draw() {
  updateCanvasSize();
  resizeCanvas(canvasWidth, canvasHeight);

  // Drawing area background
  fill('aliceblue');
  stroke('silver');
  rect(0, 0, canvasWidth, drawHeight);

  // Control area background
  fill('white');
  noStroke();
  rect(0, drawHeight, canvasWidth, controlHeight);

  let sc = scenarios[currentScenario];
  let margin = 20;
  let usableWidth = canvasWidth - margin * 2;

  // Title
  noStroke();
  fill(60);
  textSize(12);
  textAlign(LEFT, TOP);
  text('Media Literacy Framework — Evaluate AI Media Claims', margin, 10);

  // Scenario counter
  textAlign(RIGHT, TOP);
  fill(120);
  textSize(11);
  text('Example ' + (currentScenario + 1) + ' of ' + scenarios.length, canvasWidth - margin, 10);

  // Scenario type badge
  textAlign(LEFT, TOP);
  let badgeY = 30;
  fill(sc.style.color[0], sc.style.color[1], sc.style.color[2], 30);
  stroke(sc.style.color[0], sc.style.color[1], sc.style.color[2], 80);
  strokeWeight(1);
  let badgeW = usableWidth;
  rect(margin, badgeY, badgeW, 60, 6);

  noStroke();
  fill(sc.style.color[0], sc.style.color[1], sc.style.color[2]);
  textSize(10);
  textStyle(BOLD);
  text(sc.type.toUpperCase(), margin + 10, badgeY + 8);

  textStyle(NORMAL);
  textSize(sc.style.size);
  textFont(sc.style.font);
  let wrappedText = sc.text;
  text(wrappedText, margin + 10, badgeY + 24, badgeW - 20, 34);
  textFont('Arial');

  // Questions area
  let qStartY = 100;
  let qSpacing = 52;

  for (let q = 0; q < questions.length; q++) {
    let qy = qStartY + q * qSpacing;
    let opts = questions[q].options;

    // Label
    noStroke();
    fill(40);
    textSize(12);
    textStyle(BOLD);
    textAlign(LEFT, TOP);
    text((q + 1) + '. ' + questions[q].label, margin, qy);
    textStyle(NORMAL);

    // Option circles
    let optStartX = margin + 120;
    let optSpacing = Math.min(140, (usableWidth - 120) / opts.length);

    for (let o = 0; o < opts.length; o++) {
      let cx = optStartX + o * optSpacing + 10;
      let cy = qy + 18;
      let r = 10;

      let isSelected = (answers[currentScenario][q] === o);
      let col = questions[q].colors[o];

      // Circle
      if (isSelected) {
        fill(col[0], col[1], col[2]);
        stroke(col[0], col[1], col[2]);
        strokeWeight(2);
      } else {
        fill(255);
        stroke(col[0], col[1], col[2], 150);
        strokeWeight(1.5);
      }
      ellipse(cx, cy, r * 2, r * 2);

      // Label
      noStroke();
      fill(isSelected ? col[0] : 90, isSelected ? col[1] : 90, isSelected ? col[2] : 90);
      textSize(10);
      textAlign(LEFT, CENTER);
      text(opts[o], cx + r + 4, cy);
    }
  }

  // Expert analysis card (if submitted)
  if (submitted[currentScenario]) {
    let expert = sc.expert;
    let cardY = qStartY + questions.length * qSpacing + 5;
    let cardH = drawHeight - cardY - 10;

    fill(245, 248, 255);
    stroke(100, 140, 200);
    strokeWeight(1);
    rect(margin, cardY, usableWidth, cardH, 6);

    noStroke();
    fill(40, 60, 120);
    textSize(12);
    textStyle(BOLD);
    textAlign(LEFT, TOP);
    text('Expert Analysis', margin + 10, cardY + 6);
    textStyle(NORMAL);

    // Score the answers
    let correctAnswers = [
      questions[0].options.indexOf(expert.source),
      questions[1].options.indexOf(expert.claim),
      questions[2].options.indexOf(expert.beneficiary),
      questions[3].options.indexOf(expert.omission),
      questions[4].options.indexOf(expert.precedent)
    ];

    let score = 0;
    for (let i = 0; i < 5; i++) {
      if (answers[currentScenario][i] === correctAnswers[i]) score++;
    }

    fill(80);
    textSize(11);
    text('Your score: ' + score + '/5', margin + 10, cardY + 22);

    // Show correct answers inline
    let correctLine = 'Correct: ' +
      expert.source + ' | ' + expert.claim + ' | ' +
      expert.beneficiary + ' | ' + expert.omission + ' | ' +
      expert.precedent;
    fill(60, 100, 60);
    textSize(10);
    text(correctLine, margin + 10, cardY + 36);

    // Analysis text
    fill(60);
    textSize(10);
    text(expert.analysis, margin + 10, cardY + 52, usableWidth - 20, cardH - 58);
  }

  // Position buttons
  let btnY = drawHeight + 15;
  let btnSpacing = 130;
  let btnStartX = margin;
  nextBtn.position(btnStartX, btnY);
  submitBtn.position(btnStartX + btnSpacing, btnY);
  resetBtn.position(btnStartX + btnSpacing * 2, btnY);

  // Progress dots
  let dotStartX = canvasWidth - margin - scenarios.length * 18;
  let dotY = drawHeight + 30;
  for (let i = 0; i < scenarios.length; i++) {
    let dx = dotStartX + i * 18;
    if (i === currentScenario) {
      fill(70, 130, 180);
      stroke(50, 100, 150);
    } else if (submitted[i]) {
      fill(80, 180, 80);
      stroke(60, 140, 60);
    } else {
      fill(210);
      stroke(180);
    }
    strokeWeight(1);
    ellipse(dx, dotY, 12, 12);
  }
}

function mousePressed() {
  if (submitted[currentScenario]) return;

  let margin = 20;
  let qStartY = 100;
  let qSpacing = 52;
  let usableWidth = canvasWidth - margin * 2;

  for (let q = 0; q < questions.length; q++) {
    let qy = qStartY + q * qSpacing;
    let opts = questions[q].options;
    let optStartX = margin + 120;
    let optSpacing = Math.min(140, (usableWidth - 120) / opts.length);

    for (let o = 0; o < opts.length; o++) {
      let cx = optStartX + o * optSpacing + 10;
      let cy = qy + 18;
      let d = dist(mouseX, mouseY, cx, cy);
      if (d < 12) {
        answers[currentScenario][q] = o;
        return;
      }
    }
  }
}

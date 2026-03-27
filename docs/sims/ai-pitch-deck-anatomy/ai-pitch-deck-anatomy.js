// AI Pitch Deck Anatomy MicroSim
// Interactive pitch deck viewer with evaluation system (10 slides)

let canvasWidth = 750;
let drawHeight = 430;
let controlHeight = 80;
let canvasHeight = drawHeight + controlHeight;

let currentSlide = 0;
let evaluations = []; // -1 = not evaluated, 0 = green, 1 = yellow, 2 = red
let answersRevealed = false;
let score = -1;

let nextBtn, prevBtn, checkBtn, resetBtn;

const slides = [
  {
    title: "UnicornAI",
    subtitle: "Reimagining Customer Intelligence",
    content: ["Series A Pitch Deck", "Confidential", "", "\"The future of customer understanding\""],
    correct: -1, // no evaluation for title slide
    explanation: ""
  },
  {
    title: "The Problem",
    subtitle: "Slide 2 of 10",
    content: [
      "Businesses lose $1.6 TRILLION annually",
      "to poor customer insights.",
      "",
      "- 73% of enterprises report 'insight gaps'",
      "- Average company uses 14 analytics tools",
      "- None of them talk to each other"
    ],
    correct: 1, // yellow - aspirational
    explanation: "The $1.6T figure is a real McKinsey estimate but applied so broadly it could justify any product. The statistics are plausible but cherry-picked. Aspirational framing of a real-ish problem."
  },
  {
    title: "Our Solution",
    subtitle: "Slide 3 of 10",
    content: [
      "UnicornAI understands your customers",
      "better than they understand themselves.",
      "",
      "Our proprietary Neural Empathy Engine",
      "uses advanced AI to predict customer needs",
      "before they arise."
    ],
    correct: 2, // red - mythical
    explanation: "\"Understands customers better than themselves\" is unfalsifiable. \"Neural Empathy Engine\" is a meaningless product name designed to sound like neuroscience. No technical specifics provided. Pure AI washing."
  },
  {
    title: "Product Demo",
    subtitle: "Slide 4 of 10",
    content: [
      "[VIDEO PLACEHOLDER]",
      "",
      "Watch our AI analyze 10,000 customer",
      "interactions in real-time and surface",
      "actionable insights with 97.3% accuracy.",
      "",
      "Demo performed on curated dataset."
    ],
    correct: 1, // yellow - aspirational
    explanation: "The fine print says 'curated dataset.' Demo accuracy on curated data is meaningless. 97.3% suggests false precision. The demo likely works; the question is whether it works on your data. Aspirational."
  },
  {
    title: "Market Opportunity",
    subtitle: "Slide 5 of 10",
    content: [
      "Total Addressable Market: $500 BILLION",
      "",
      "- Customer intelligence: $200B",
      "- Adjacent analytics: $150B",
      "- Future AI services: $150B",
      "",
      "We are targeting 0.1% market share (only $500M)."
    ],
    correct: 2, // red - mythical
    explanation: "The TAM includes 'future AI services' which do not yet exist. The 'only 0.1%' framing makes $500M sound modest, but the denominator is fabricated. If your TAM calculation includes markets you invented, your TAM is mythical."
  },
  {
    title: "Business Model",
    subtitle: "Slide 6 of 10",
    content: [
      "Enterprise SaaS",
      "",
      "- Annual contract: $50K/year per seat",
      "- Implementation fee: $25K one-time",
      "- Gross margin target: 78%",
      "",
      "Standard enterprise sales cycle: 3-6 months"
    ],
    correct: 0, // green - evidence-based
    explanation: "Specific, verifiable pricing. Realistic gross margins for SaaS. Honest about sales cycle length. This slide contains actual business information that can be evaluated against industry benchmarks."
  },
  {
    title: "Traction",
    subtitle: "Slide 7 of 10",
    content: [
      "400% growth in Q3",
      "",
      "- Revenue grew from $12,500 to $62,500",
      "- Customer base: 5 to 20 enterprises",
      "- Net Revenue Retention: 140%",
      "",
      "\"Remarkable acceleration\" - Internal Memo"
    ],
    correct: 1, // yellow - aspirational
    explanation: "400% growth sounds impressive until you see the base: 5 to 20 customers. $62,500 quarterly revenue for a company seeking $30M is very early. The NRR is good but based on 5 original customers. The self-quote from an internal memo is a nice touch."
  },
  {
    title: "Team",
    subtitle: "Slide 8 of 10",
    content: [
      "World-Class Founding Team",
      "",
      "- CEO: Stanford PhD, Machine Learning",
      "- CTO: Stanford PhD, NLP (ex-Google)",
      "- Chief Scientist: Stanford PhD, CompSci",
      "",
      "Combined 47 publications, 12,000+ citations"
    ],
    correct: 0, // green - evidence-based
    explanation: "Verifiable credentials. PhDs and publication records can be confirmed. Google employment can be confirmed. This is one of the few slides presenting checkable facts rather than projections."
  },
  {
    title: "Competition",
    subtitle: "Slide 9 of 10",
    content: [
      "No direct competitors in our space.",
      "",
      "We occupy a unique position at the",
      "intersection of AI, empathy science,",
      "and customer intelligence.",
      "",
      "Closest alternatives: Salesforce, HubSpot",
      "(but they lack our Neural Empathy Engine)"
    ],
    correct: 2, // red - mythical
    explanation: "\"No direct competitors\" usually means the category was invented for the pitch deck. Comparing to Salesforce and HubSpot (massive companies) while claiming uniqueness is contradictory. 'Empathy science' is not a recognized field."
  },
  {
    title: "The Ask",
    subtitle: "Slide 10 of 10",
    content: [
      "Raising: $30M Series A",
      "",
      "Use of Funds:",
      "- Engineering: 50% ($15M)",
      "- Sales & Marketing: 30% ($9M)",
      "- G&A: 20% ($6M)",
      "",
      "18-month runway to Series B milestones"
    ],
    correct: 0, // green - evidence-based
    explanation: "Clear amount, clear allocation, clear timeline. The numbers are specific and the breakdown is standard. Whether $30M is justified by the traction is a separate question, but the ask itself is transparently structured."
  }
];

const evalLabels = ["Evidence-based", "Aspirational", "AI Washing / Mythical"];
const evalColors = [[40, 160, 60], [200, 180, 40], [200, 60, 60]];

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

  // Initialize evaluations
  for (let i = 0; i < slides.length; i++) {
    evaluations.push(-1);
  }

  let btnY = drawHeight + 12;
  let btnX = 20;

  prevBtn = createButton('Previous Slide');
  prevBtn.position(btnX, btnY);
  prevBtn.parent(document.querySelector('main'));
  prevBtn.mousePressed(goPrev);

  nextBtn = createButton('Next Slide');
  nextBtn.position(btnX + 128, btnY);
  nextBtn.parent(document.querySelector('main'));
  nextBtn.mousePressed(goNext);

  checkBtn = createButton('Check All Answers');
  checkBtn.position(btnX + 240, btnY);
  checkBtn.parent(document.querySelector('main'));
  checkBtn.mousePressed(checkAnswers);

  resetBtn = createButton('Reset');
  resetBtn.position(btnX + 390, btnY);
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
  stroke('silver');
  rect(0, drawHeight, canvasWidth, controlHeight);

  let slide = slides[currentSlide];
  let leftW = canvasWidth * 0.58;
  let rightX = canvasWidth * 0.60;
  let rightW = canvasWidth * 0.37;

  // Title bar
  noStroke();
  fill(30);
  textSize(14);
  textAlign(CENTER, TOP);
  textStyle(BOLD);
  text("AI Pitch Deck Anatomy: UnicornAI", canvasWidth / 2, 10);
  textStyle(NORMAL);

  // Draw slide panel (left)
  drawSlidePanel(16, 35, leftW - 24, 280, slide);

  // Draw evaluation panel (right)
  drawEvalPanel(rightX, 35, rightW, slide);

  // Draw slide indicator dots at bottom
  drawSlideIndicators(canvasWidth / 2, drawHeight - 40);

  // Score display
  if (answersRevealed && score >= 0) {
    noStroke();
    fill(50, 100, 200);
    textSize(14);
    textAlign(CENTER, TOP);
    textStyle(BOLD);
    text("Score: " + score + " / 9 correct", canvasWidth / 2, drawHeight - 20);
    textStyle(NORMAL);
  }

  // Draw explanation if answers revealed
  if (answersRevealed && currentSlide > 0) {
    drawExplanation(16, 330, canvasWidth - 32, slide);
  }

  // Button row 2: score info in control area
  noStroke();
  fill(120);
  textSize(10);
  textAlign(LEFT, TOP);
  let infoY = drawHeight + 42;
  if (answersRevealed) {
    text("Answers revealed. Navigate slides to see explanations.", 20, infoY);
  } else {
    text("Evaluate each slide (2-10), then press 'Check All Answers' to see how you did.", 20, infoY);
  }

  prevBtn.elt.disabled = (currentSlide === 0);
  nextBtn.elt.disabled = (currentSlide === slides.length - 1);
}

function drawSlidePanel(x, y, w, h, slide) {
  // Slide background
  fill(255);
  stroke(180);
  strokeWeight(1);
  rect(x, y, w, h, 4);

  // Slide header bar
  fill(40, 60, 100);
  noStroke();
  rect(x, y, w, 36, 4, 4, 0, 0);

  // Slide number and subtitle
  fill(255);
  textSize(11);
  textAlign(LEFT, CENTER);
  text(slide.subtitle, x + 12, y + 18);

  // Slide title
  noStroke();
  fill(30);
  textSize(18);
  textAlign(CENTER, TOP);
  textStyle(BOLD);
  text(slide.title, x + w / 2, y + 50);
  textStyle(NORMAL);

  // Slide content
  fill(50);
  textSize(12);
  textAlign(LEFT, TOP);
  let contentY = y + 82;
  let lineH = 18;

  for (let line of slide.content) {
    if (line === "") {
      contentY += 8;
    } else {
      // Wrap long lines
      let words = line.split(' ');
      let currentLine = '';
      for (let word of words) {
        let testLine = currentLine + word + ' ';
        if (textWidth(testLine) > w - 30 && currentLine.length > 0) {
          text(currentLine.trim(), x + 16, contentY);
          currentLine = word + ' ';
          contentY += lineH;
        } else {
          currentLine = testLine;
        }
      }
      if (currentLine.trim().length > 0) {
        text(currentLine.trim(), x + 16, contentY);
        contentY += lineH;
      }
    }
  }
}

function drawEvalPanel(x, y, w, slide) {
  noStroke();
  fill(40);
  textSize(13);
  textAlign(LEFT, TOP);
  textStyle(BOLD);
  text("Your Evaluation", x, y);
  textStyle(NORMAL);

  if (currentSlide === 0) {
    fill(120);
    textSize(11);
    text("Title slide - no evaluation needed.", x, y + 28);
    text("Navigate to slides 2-10 to begin.", x, y + 46);
    return;
  }

  let circleX = x + 14;
  let startY = y + 30;
  let spacing = 38;

  for (let i = 0; i < 3; i++) {
    let cy = startY + i * spacing;
    let isSelected = (evaluations[currentSlide] === i);
    let isCorrect = (answersRevealed && slide.correct === i);

    // Circle
    if (isSelected) {
      fill(evalColors[i][0], evalColors[i][1], evalColors[i][2]);
      stroke(40);
      strokeWeight(2);
    } else {
      fill(240);
      stroke(180);
      strokeWeight(1);
    }
    ellipse(circleX, cy + 10, 22, 22);

    // Correct answer indicator
    if (answersRevealed && isCorrect) {
      noFill();
      stroke(40, 160, 60);
      strokeWeight(3);
      ellipse(circleX, cy + 10, 28, 28);
    }

    // Label
    noStroke();
    fill(isSelected ? 30 : 100);
    textSize(11);
    textAlign(LEFT, CENTER);
    textStyle(isSelected ? BOLD : NORMAL);
    text(evalLabels[i], circleX + 18, cy + 10);
    textStyle(NORMAL);
  }

  // Status
  let statusY = startY + 3 * spacing + 10;
  if (answersRevealed) {
    if (evaluations[currentSlide] === slide.correct) {
      fill(40, 160, 60);
      textSize(12);
      textStyle(BOLD);
      text("Correct.", x, statusY);
    } else if (evaluations[currentSlide] === -1) {
      fill(150);
      textSize(11);
      text("Not evaluated.", x, statusY);
    } else {
      fill(200, 60, 60);
      textSize(12);
      textStyle(BOLD);
      text("Incorrect.", x, statusY);
    }
    textStyle(NORMAL);
  } else {
    fill(140);
    textSize(10);
    text("Click a circle to evaluate this slide.", x, statusY);
  }
}

function drawExplanation(x, y, w, slide) {
  noStroke();
  fill(40);
  textSize(11);
  textAlign(LEFT, TOP);
  textStyle(BOLD);
  text("Explanation:", x, y);
  textStyle(NORMAL);

  fill(70);
  textSize(10);
  drawWrappedText(slide.explanation, x, y + 18, w);
}

function drawSlideIndicators(cx, cy) {
  let totalW = slides.length * 24;
  let x0 = cx - totalW / 2;

  for (let i = 0; i < slides.length; i++) {
    let dx = x0 + i * 24;
    noStroke();

    if (i === currentSlide) {
      // Current slide - outlined
      stroke(50, 100, 200);
      strokeWeight(2);
      fill(220, 230, 250);
      ellipse(dx, cy, 16, 16);
    } else if (i === 0) {
      // Title slide - gray
      fill(180);
      ellipse(dx, cy, 12, 12);
    } else if (evaluations[i] >= 0) {
      // Evaluated - colored
      let ec = evalColors[evaluations[i]];
      fill(ec[0], ec[1], ec[2]);
      ellipse(dx, cy, 12, 12);

      // Correctness overlay after reveal
      if (answersRevealed) {
        if (evaluations[i] === slides[i].correct) {
          stroke(255);
          strokeWeight(2);
          // checkmark approximation
          line(dx - 3, cy, dx - 1, cy + 3);
          line(dx - 1, cy + 3, dx + 3, cy - 2);
        } else {
          stroke(255);
          strokeWeight(2);
          line(dx - 3, cy - 3, dx + 3, cy + 3);
          line(dx + 3, cy - 3, dx - 3, cy + 3);
        }
      }
    } else {
      // Not evaluated - empty
      fill(220);
      ellipse(dx, cy, 12, 12);
    }

    // Slide number
    noStroke();
    fill(i === currentSlide ? 50 : 255);
    textSize(8);
    textAlign(CENTER, CENTER);
    text(i + 1, dx, cy);
  }
}

function drawWrappedText(txt, x, y, maxW) {
  let words = txt.split(' ');
  let line = '';
  let lineY = y;
  let lineH = 14;

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

function mousePressed() {
  if (answersRevealed && currentSlide > 0) return; // no changing after reveal
  if (currentSlide === 0) return; // no eval for title slide

  let rightX = canvasWidth * 0.60;
  let circleX = rightX + 14;
  let startY = 35 + 30;
  let spacing = 38;

  for (let i = 0; i < 3; i++) {
    let cy = startY + i * spacing + 10;
    let d = dist(mouseX, mouseY, circleX, cy);
    if (d < 14) {
      evaluations[currentSlide] = i;
      return;
    }
  }
}

function goNext() {
  if (currentSlide < slides.length - 1) {
    currentSlide++;
  }
}

function goPrev() {
  if (currentSlide > 0) {
    currentSlide--;
  }
}

function checkAnswers() {
  answersRevealed = true;
  score = 0;
  for (let i = 1; i < slides.length; i++) {
    if (evaluations[i] === slides[i].correct) {
      score++;
    }
  }
}

function doReset() {
  currentSlide = 0;
  answersRevealed = false;
  score = -1;
  for (let i = 0; i < slides.length; i++) {
    evaluations[i] = -1;
  }
}

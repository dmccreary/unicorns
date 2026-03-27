// Real or Fake Quiz MicroSim
// Classify statements as Real Quote, Fictional (from textbook), or Press Release language.

const allStatements = [
  {
    text: "AI will be the most transformative technology ever",
    answer: 0, // Real
    attribution: "Sundar Pichai, Google CEO",
    explanation: "A real quote from a CEO whose company profits directly from this belief. Note the superlative 'most' and 'ever' — language designed to preclude debate rather than invite it."
  },
  {
    text: "The Kraken has been replaced by a subscription service",
    answer: 1, // Fictional
    attribution: "Chapter 13, Unicorns and Other Mythical Beasts",
    explanation: "Fictional, but arguably less absurd than actual subscription pricing trends. The Kraken at least only destroyed ships once."
  },
  {
    text: "We announce a breakthrough in autonomous reasoning",
    answer: 2, // Press Release
    attribution: "Composite of 847 press releases from 2023-2025",
    explanation: "The word 'breakthrough' appears in AI press releases approximately as often as the word 'the.' Neither 'autonomous' nor 'reasoning' is defined. This is by design."
  },
  {
    text: "Every company is now an AI company",
    answer: 0,
    attribution: "Jensen Huang, NVIDIA CEO",
    explanation: "A real quote from a person who sells the hardware required to become an AI company. The business model is self-referential in a way that would impress any unicorn."
  },
  {
    text: "The committee met 47 times and recommended further study",
    answer: 1,
    attribution: "Chapter 6, Unicorns and Other Mythical Beasts",
    explanation: "Fictional, though anyone who has worked in higher education administration will find the number 47 suspiciously conservative."
  },
  {
    text: "Our platform leverages cutting-edge neural architectures",
    answer: 2,
    attribution: "Generic enterprise AI marketing copy",
    explanation: "'Leverages' is doing no work. 'Cutting-edge' is unfalsifiable. 'Neural architectures' sounds impressive but describes every AI system built since 2015. This sentence communicates nothing while appearing to communicate everything."
  },
  {
    text: "AI won't replace you. A person using AI will replace you",
    answer: 0,
    attribution: "Widely attributed, origin disputed",
    explanation: "Presented as reassurance, this is technically a threat. It says: your job will be eliminated, but politely, by someone more adaptable than you. The motivational poster format obscures the underlying menace."
  },
  {
    text: "The dragon would like you to know it's not personal",
    answer: 1,
    attribution: "Chapter 7, Unicorns and Other Mythical Beasts",
    explanation: "Fictional, but structurally identical to every corporate layoff announcement. 'It's not personal' is what powerful entities say when doing something deeply personal to the people affected."
  },
  {
    text: "We are humbled by these results",
    answer: 2,
    attribution: "Standard press release template, Section 3, Paragraph 1",
    explanation: "No one who issues a press release about their own achievements is humbled. This is the corporate equivalent of a humble-brag. The results are never specified in sufficient detail to verify the humility."
  },
  {
    text: "Move fast and break things",
    answer: 0,
    attribution: "Mark Zuckerberg, Meta/Facebook",
    explanation: "A real motto from a real company that moved fast and broke democracy, teen mental health, and the Australian news industry. The 'things' turned out to be load-bearing."
  },
  {
    text: "The unicorn's horn is the valuation",
    answer: 1,
    attribution: "Chapter 3, Unicorns and Other Mythical Beasts",
    explanation: "Fictional, but this is literally what the term 'unicorn' means in venture capital. A company valued at over one billion dollars, named after a creature that does not exist. The metaphor was never subtle."
  },
  {
    text: "This changes everything",
    answer: 3, // special: All three
    attribution: "Everyone, everywhere, every 18 months",
    explanation: "This phrase has been applied to the printing press, electricity, radio, television, the internet, social media, blockchain, the metaverse, and AI. It has been real, fictional, and marketing copy simultaneously. It changes nothing."
  }
];

let canvasWidth = 750;
let drawHeight = 380;
let controlHeight = 60;
let canvasHeight = 440;

let statements = [];
let currentIndex = 0;
let score = 0;
let answered = []; // -1 = unanswered, 0/1/2/3 = chosen answer
let revealed = false;

let realBtn, fictionalBtn, pressBtn, nextBtn, playAgainBtn;

const answerLabels = ['Real Quote', 'Fictional', 'Press Release', 'All Three'];
const answerColors = [[70, 130, 200], [200, 170, 40], [220, 100, 90], [140, 100, 180]];

function shuffleArray(arr) {
  let a = arr.slice();
  for (let i = a.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function resetGame() {
  statements = shuffleArray(allStatements);
  currentIndex = 0;
  score = 0;
  answered = new Array(statements.length).fill(-1);
  revealed = false;
  updateButtonVisibility();
}

function updateButtonVisibility() {
  let allDone = answered.every(a => a !== -1);
  if (revealed) {
    realBtn.attribute('disabled', '');
    fictionalBtn.attribute('disabled', '');
    pressBtn.attribute('disabled', '');
    nextBtn.removeAttribute('disabled');
  } else {
    realBtn.removeAttribute('disabled');
    fictionalBtn.removeAttribute('disabled');
    pressBtn.removeAttribute('disabled');
    nextBtn.attribute('disabled', '');
  }
  if (allDone) {
    playAgainBtn.removeAttribute('disabled');
  } else {
    playAgainBtn.attribute('disabled', '');
  }
  if (answered[currentIndex] !== -1) {
    realBtn.attribute('disabled', '');
    fictionalBtn.attribute('disabled', '');
    pressBtn.attribute('disabled', '');
  }
}

function handleAnswer(choice) {
  if (revealed || answered[currentIndex] !== -1) return;
  answered[currentIndex] = choice;
  revealed = true;
  let correct = statements[currentIndex].answer;
  // Answer 3 means "all three" — accept any of 0,1,2 as also correct
  if (choice === correct || (correct === 3 && choice >= 0 && choice <= 2)) {
    // For "all three", only full marks if they realize it
    if (correct === 3 && choice !== 3) {
      // partial — no score
    } else {
      score++;
    }
  }
  updateButtonVisibility();
}

function goNext() {
  // Find next unanswered
  for (let i = 1; i <= statements.length; i++) {
    let idx = (currentIndex + i) % statements.length;
    if (answered[idx] === -1) {
      currentIndex = idx;
      revealed = false;
      updateButtonVisibility();
      return;
    }
  }
  // All answered — stay on current
  revealed = true;
  updateButtonVisibility();
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

  realBtn = createButton('Real Quote');
  realBtn.parent(document.querySelector('main'));
  realBtn.style('background-color', 'rgb(70,130,200)');
  realBtn.style('color', 'white');
  realBtn.style('border', 'none');
  realBtn.style('padding', '8px 16px');
  realBtn.style('border-radius', '4px');
  realBtn.style('cursor', 'pointer');
  realBtn.mousePressed(() => handleAnswer(0));

  fictionalBtn = createButton('Fictional');
  fictionalBtn.parent(document.querySelector('main'));
  fictionalBtn.style('background-color', 'rgb(200,170,40)');
  fictionalBtn.style('color', 'white');
  fictionalBtn.style('border', 'none');
  fictionalBtn.style('padding', '8px 16px');
  fictionalBtn.style('border-radius', '4px');
  fictionalBtn.style('cursor', 'pointer');
  fictionalBtn.mousePressed(() => handleAnswer(1));

  pressBtn = createButton('Press Release');
  pressBtn.parent(document.querySelector('main'));
  pressBtn.style('background-color', 'rgb(220,100,90)');
  pressBtn.style('color', 'white');
  pressBtn.style('border', 'none');
  pressBtn.style('padding', '8px 16px');
  pressBtn.style('border-radius', '4px');
  pressBtn.style('cursor', 'pointer');
  pressBtn.mousePressed(() => handleAnswer(2));

  nextBtn = createButton('Next Statement');
  nextBtn.parent(document.querySelector('main'));
  nextBtn.mousePressed(goNext);

  playAgainBtn = createButton('Play Again');
  playAgainBtn.parent(document.querySelector('main'));
  playAgainBtn.mousePressed(resetGame);

  resetGame();
}

function draw() {
  updateCanvasSize();
  resizeCanvas(canvasWidth, canvasHeight);

  // Drawing area
  fill('aliceblue');
  stroke('silver');
  rect(0, 0, canvasWidth, drawHeight);

  // Control area
  fill('white');
  noStroke();
  rect(0, drawHeight, canvasWidth, controlHeight);

  let margin = 20;
  let usableWidth = canvasWidth - margin * 2;
  let st = statements[currentIndex];

  // Title and score
  noStroke();
  fill(60);
  textSize(12);
  textAlign(LEFT, TOP);
  text('Real or Fake — Classify the Statement', margin, 10);

  textAlign(RIGHT, TOP);
  fill(70, 130, 200);
  textSize(13);
  textStyle(BOLD);
  let totalAnswered = answered.filter(a => a !== -1).length;
  text('Score: ' + score + '/' + totalAnswered, canvasWidth - margin, 10);
  textStyle(NORMAL);

  // Statement display — large quote box
  let quoteY = 36;
  let quoteH = 90;
  fill(255, 255, 250);
  stroke(180, 170, 140);
  strokeWeight(1);
  rect(margin, quoteY, usableWidth, quoteH, 8);

  // Decorative quote marks
  noStroke();
  fill(200, 190, 160);
  textSize(40);
  textAlign(LEFT, TOP);
  text('\u201C', margin + 8, quoteY + 2);
  textAlign(RIGHT, TOP);
  text('\u201D', canvasWidth - margin - 8, quoteY + quoteH - 44);

  // Statement text
  fill(40);
  textSize(17);
  textAlign(CENTER, CENTER);
  textStyle(ITALIC);
  text(st.text, margin + 30, quoteY + 10, usableWidth - 60, quoteH - 20);
  textStyle(NORMAL);

  // Classification buttons area label
  let classY = quoteY + quoteH + 15;
  noStroke();
  fill(100);
  textSize(11);
  textAlign(CENTER, TOP);
  if (answered[currentIndex] === -1) {
    text('What type of statement is this?', canvasWidth / 2, classY);
  }

  // Reveal card
  if (answered[currentIndex] !== -1) {
    let cardY = classY + 4;
    let correct = st.answer;
    let chosen = answered[currentIndex];
    let isCorrect = (chosen === correct) || (correct === 3 && chosen === 3);
    // For "all three" — if they picked any single one, technically not wrong but not full credit
    let isPartial = (correct === 3 && chosen !== 3);

    let cardH = drawHeight - cardY - 10;
    if (isCorrect) {
      fill(235, 250, 235);
      stroke(80, 180, 80);
    } else if (isPartial) {
      fill(255, 250, 230);
      stroke(200, 180, 60);
    } else {
      fill(255, 240, 240);
      stroke(220, 100, 90);
    }
    strokeWeight(1);
    rect(margin, cardY, usableWidth, cardH, 6);

    noStroke();

    // Result header
    let headerText;
    if (isCorrect) {
      headerText = 'Correct.';
      fill(40, 120, 40);
    } else if (isPartial) {
      headerText = 'Technically not wrong, but incomplete.';
      fill(160, 140, 20);
    } else {
      headerText = 'Incorrect.';
      fill(200, 60, 60);
    }
    textSize(13);
    textStyle(BOLD);
    textAlign(LEFT, TOP);
    text(headerText, margin + 12, cardY + 8);

    // Correct answer
    let ansLabel = answerLabels[correct] || 'All Three';
    let ansCol = answerColors[correct] || answerColors[3];
    fill(ansCol[0], ansCol[1], ansCol[2]);
    textSize(12);
    textStyle(BOLD);
    text('Answer: ' + ansLabel, margin + 12, cardY + 26);
    textStyle(NORMAL);

    // Attribution
    fill(100);
    textSize(11);
    textStyle(ITALIC);
    text(st.attribution, margin + 12, cardY + 42);
    textStyle(NORMAL);

    // Explanation
    fill(50);
    textSize(11);
    text(st.explanation, margin + 12, cardY + 60, usableWidth - 24, cardH - 68);
  }

  // Progress dots
  let dotY = drawHeight - 16;
  let totalDots = statements.length;
  let dotSpacing = Math.min(22, (usableWidth - 40) / totalDots);
  let dotStartX = canvasWidth / 2 - (totalDots * dotSpacing) / 2;

  for (let i = 0; i < totalDots; i++) {
    let dx = dotStartX + i * dotSpacing + dotSpacing / 2;
    if (i === currentIndex) {
      fill(70, 130, 200);
      stroke(50, 100, 160);
    } else if (answered[i] !== -1) {
      let correct = statements[i].answer;
      let chosen = answered[i];
      let wasCorrect = (chosen === correct) || (correct === 3 && chosen === 3);
      if (wasCorrect) {
        fill(80, 180, 80);
        stroke(60, 140, 60);
      } else {
        fill(220, 100, 90);
        stroke(180, 70, 60);
      }
    } else {
      fill(210);
      stroke(180);
    }
    strokeWeight(1);
    ellipse(dx, dotY, 10, 10);
  }

  // Position buttons in control area
  let btnY = drawHeight + 15;
  let btnGap = 12;
  let bx = margin;
  realBtn.position(bx, btnY);
  bx += realBtn.elt.offsetWidth + btnGap;
  fictionalBtn.position(bx, btnY);
  bx += fictionalBtn.elt.offsetWidth + btnGap;
  pressBtn.position(bx, btnY);
  bx += pressBtn.elt.offsetWidth + btnGap + 20;
  nextBtn.position(bx, btnY);
  bx += nextBtn.elt.offsetWidth + btnGap;
  playAgainBtn.position(bx, btnY);
}

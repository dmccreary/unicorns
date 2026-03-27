// AI Unicorn Generator MicroSim
// Interactive unicorn configurator with satirical VC valuation engine

let canvasWidth = 750;
let drawHeight = 400;
let controlHeight = 220;
let canvasHeight = drawHeight + controlHeight;

let hornSelect, wingSelect, hoofSelect;
let dataSlider, wifiSlider, sparkleSlider;
let generateBtn, randomizeBtn;

let currentPitch = null;

const hornTypes = ["Standard spiral", "WiFi antenna", "Blockchain node", "Quantum processor", "Solar panel"];
const wingTypes = ["None", "Feathered", "Drone rotors", "Solar wings", "Invisible (stealth)"];
const hoofTypes = ["Standard", "Rocket-propelled", "Magnetic levitation", "Wheels", "NFT-certified"];

const hornValuations = {
  "Standard spiral": 0,
  "WiFi antenna": 500,
  "Blockchain node": 800,
  "Quantum processor": 2000,
  "Solar panel": 300
};

const wingValuations = {
  "None": 0,
  "Feathered": 50,
  "Drone rotors": 400,
  "Solar wings": 600,
  "Invisible (stealth)": 1500
};

const hoofValuations = {
  "Standard": 0,
  "Rocket-propelled": 700,
  "Magnetic levitation": 900,
  "Wheels": 200,
  "NFT-certified": 1200
};

const prefixes = ["Quantum", "Hyper", "Ultra", "Mega", "Nano", "Crypto", "Neural", "Synth", "Omni", "Meta"];
const bodies = ["Pegasus", "Stallion", "Charger", "Galloper", "Prancer", "Dasher", "Strider", "Blazer"];
const suffixes = ["WiFi-3000", "Pro Max", "X-9000", "Enterprise", "Platinum", "AI Edition", "Blockchain", "Cloud", "GPT", "Vision Pro"];

const taglines = [
  "Disrupting the equine industry since never.",
  "We put the AI in stallion. (There is no AI in stallion.)",
  "Move fast and break hooves.",
  "The future of transportation is imaginary.",
  "Uber, but for unicorns. Which also do not exist.",
  "Making the world a better place through mythical beasts.",
  "Our runway is infinite because we can fly. Allegedly.",
  "Blockchain-verified horn authenticity on every unit.",
  "We are pre-revenue, post-reality, and fully funded.",
  "The committee voted unanimously to fund further study.",
  "Valued at more than the GDP of several real countries.",
  "Our product does not exist yet, but our valuation does.",
  "Technically a horse. Spiritually a platform.",
  "Now with 47% more sparkle per quarterly earnings call.",
  "As seen in a press release we wrote ourselves."
];

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

  let leftCol = 20;
  let rightCol = canvasWidth > 500 ? 320 : 250;
  let y0 = drawHeight + 14;
  let rowH = 28;

  // Horn type select
  hornSelect = createSelect();
  hornSelect.parent(document.querySelector('main'));
  for (let h of hornTypes) hornSelect.option(h);
  hornSelect.position(leftCol + 80, y0);
  hornSelect.size(150);

  // Wing select
  wingSelect = createSelect();
  wingSelect.parent(document.querySelector('main'));
  for (let w of wingTypes) wingSelect.option(w);
  wingSelect.position(leftCol + 80, y0 + rowH);
  wingSelect.size(150);

  // Hoof select
  hoofSelect = createSelect();
  hoofSelect.parent(document.querySelector('main'));
  for (let h of hoofTypes) hoofSelect.option(h);
  hoofSelect.position(leftCol + 80, y0 + rowH * 2);
  hoofSelect.size(150);

  // Data processing slider
  dataSlider = createSlider(0, 100, 50, 1);
  dataSlider.parent(document.querySelector('main'));
  dataSlider.position(rightCol + 100, y0);
  dataSlider.size(120);

  // WiFi range slider
  wifiSlider = createSlider(0, 500, 100, 10);
  wifiSlider.parent(document.querySelector('main'));
  wifiSlider.position(rightCol + 100, y0 + rowH);
  wifiSlider.size(120);

  // Sparkle level slider
  sparkleSlider = createSlider(1, 10, 5, 1);
  sparkleSlider.parent(document.querySelector('main'));
  sparkleSlider.position(rightCol + 100, y0 + rowH * 2);
  sparkleSlider.size(120);

  // Buttons
  let btnY = y0 + rowH * 3 + 10;
  generateBtn = createButton('Generate Pitch');
  generateBtn.parent(document.querySelector('main'));
  generateBtn.position(leftCol, btnY);
  generateBtn.mousePressed(generatePitch);

  randomizeBtn = createButton('Randomize');
  randomizeBtn.parent(document.querySelector('main'));
  randomizeBtn.position(leftCol + 140, btnY);
  randomizeBtn.mousePressed(randomizeAll);

  // Generate initial pitch
  generatePitch();
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
  text("AI Unicorn Generator", canvasWidth / 2, 8);

  // Draw the unicorn
  let unicornX = canvasWidth * 0.28;
  let unicornY = drawHeight * 0.52;
  drawUnicorn(unicornX, unicornY);

  // Draw pitch card
  if (currentPitch) {
    let cardX = canvasWidth * 0.52;
    let cardY = 35;
    let cardW = canvasWidth * 0.44;
    let cardH = drawHeight - 50;
    drawPitchCard(cardX, cardY, cardW, cardH);
  }

  // Draw control labels
  drawControlLabels();
}

function drawUnicorn(cx, cy) {
  let horn = hornSelect.value();
  let wings = wingSelect.value();
  let hoofs = hoofSelect.value();
  let sparkle = sparkleSlider.value();

  push();
  translate(cx, cy);

  // Body (oval)
  fill(200, 180, 240);
  stroke(140, 120, 180);
  strokeWeight(2);
  ellipse(0, 0, 120, 70);

  // Head (triangle-ish)
  fill(210, 190, 245);
  stroke(140, 120, 180);
  beginShape();
  vertex(-70, -10);
  vertex(-110, -40);
  vertex(-100, 10);
  endShape(CLOSE);

  // Eye
  fill(40);
  noStroke();
  ellipse(-95, -18, 8, 8);
  fill(255);
  ellipse(-93, -20, 3, 3);

  // Legs
  stroke(140, 120, 180);
  strokeWeight(3);
  let legColor = color(190, 170, 230);

  // Hoof indicators
  if (hoofs === "Rocket-propelled") {
    // Flame feet
    for (let lx of [-35, -15, 15, 35]) {
      stroke(140, 120, 180);
      line(lx, 35, lx, 60);
      noStroke();
      fill(255, 140, 0);
      triangle(lx - 5, 60, lx + 5, 60, lx, 75);
      fill(255, 220, 0);
      triangle(lx - 3, 60, lx + 3, 60, lx, 70);
    }
  } else if (hoofs === "Wheels") {
    for (let lx of [-35, -15, 15, 35]) {
      stroke(140, 120, 180);
      line(lx, 35, lx, 55);
      stroke(80);
      strokeWeight(2);
      noFill();
      ellipse(lx, 62, 14, 14);
    }
  } else if (hoofs === "Magnetic levitation") {
    for (let lx of [-35, -15, 15, 35]) {
      stroke(140, 120, 180);
      strokeWeight(3);
      line(lx, 35, lx, 50);
    }
    // Levitation waves
    noFill();
    stroke(100, 149, 237, 150);
    strokeWeight(1.5);
    for (let w = 0; w < 3; w++) {
      let wy = 60 + w * 8;
      beginShape();
      for (let x = -50; x <= 50; x += 5) {
        vertex(x, wy + sin((x + frameCount * 3) * 0.1) * 3);
      }
      endShape();
    }
  } else if (hoofs === "NFT-certified") {
    for (let lx of [-35, -15, 15, 35]) {
      stroke(140, 120, 180);
      strokeWeight(3);
      line(lx, 35, lx, 58);
      noStroke();
      fill(0, 200, 100);
      textSize(7);
      textAlign(CENTER, CENTER);
      text("NFT", lx, 65);
    }
  } else {
    for (let lx of [-35, -15, 15, 35]) {
      stroke(140, 120, 180);
      strokeWeight(3);
      line(lx, 35, lx, 65);
    }
  }

  // Horn
  strokeWeight(2);
  if (horn === "Standard spiral") {
    stroke(218, 165, 32);
    fill(255, 215, 0);
    triangle(-110, -40, -115, -85, -105, -85);
    // Spiral lines
    stroke(218, 165, 32);
    strokeWeight(1);
    for (let i = 0; i < 4; i++) {
      let y1 = -45 - i * 10;
      line(-113 + i, y1, -107 - i, y1);
    }
  } else if (horn === "WiFi antenna") {
    stroke(80);
    strokeWeight(2);
    line(-110, -40, -110, -90);
    // WiFi waves
    noFill();
    stroke(0, 150, 255);
    strokeWeight(1.5);
    for (let i = 1; i <= 3; i++) {
      arc(-110, -90, i * 16, i * 16, -PI, 0);
    }
  } else if (horn === "Blockchain node") {
    stroke(80);
    fill(50, 200, 50);
    rectMode(CENTER);
    rect(-110, -65, 14, 14);
    rect(-110, -85, 10, 10);
    stroke(50, 200, 50);
    strokeWeight(1.5);
    line(-110, -58, -110, -40);
    line(-110, -72, -110, -80);
    // Side connections
    line(-103, -65, -95, -65);
    line(-117, -65, -125, -65);
    fill(50, 200, 50);
    noStroke();
    ellipse(-92, -65, 6, 6);
    ellipse(-128, -65, 6, 6);
    rectMode(CORNER);
  } else if (horn === "Quantum processor") {
    // Glowing orb
    noStroke();
    for (let r = 25; r > 0; r -= 5) {
      fill(100, 0, 255, 30 + (25 - r) * 4);
      ellipse(-110, -70, r * 2, r * 2);
    }
    stroke(150, 100, 255);
    strokeWeight(1);
    line(-110, -40, -110, -55);
    // Orbiting dots
    let t = frameCount * 0.05;
    fill(200, 150, 255);
    noStroke();
    ellipse(-110 + cos(t) * 15, -70 + sin(t) * 15, 5, 5);
    ellipse(-110 + cos(t + PI) * 15, -70 + sin(t + PI) * 15, 5, 5);
  } else if (horn === "Solar panel") {
    stroke(60, 60, 120);
    strokeWeight(1);
    fill(40, 40, 120);
    rect(-125, -85, 30, 20);
    // Grid lines
    stroke(80, 80, 180);
    for (let gx = -120; gx < -95; gx += 10) line(gx, -85, gx, -65);
    for (let gy = -80; gy < -65; gy += 7) line(-125, gy, -95, gy);
    // Pole
    stroke(100);
    strokeWeight(2);
    line(-110, -65, -110, -40);
  }

  // Wings
  strokeWeight(1.5);
  if (wings === "Feathered") {
    fill(255, 255, 255, 180);
    stroke(180);
    beginShape();
    vertex(-10, -30);
    vertex(-40, -80);
    vertex(-20, -75);
    vertex(0, -90);
    vertex(15, -75);
    vertex(30, -80);
    vertex(20, -30);
    endShape(CLOSE);
  } else if (wings === "Drone rotors") {
    stroke(80);
    strokeWeight(2);
    for (let rx of [-25, 25]) {
      line(rx, -35, rx, -55);
      // Rotor blades
      push();
      translate(rx, -55);
      rotate(frameCount * 0.3);
      stroke(60);
      strokeWeight(2);
      line(-15, 0, 15, 0);
      line(0, -15, 0, 15);
      pop();
    }
  } else if (wings === "Solar wings") {
    fill(40, 40, 140, 150);
    stroke(60, 60, 160);
    // Left wing panel
    beginShape();
    vertex(-15, -30);
    vertex(-50, -75);
    vertex(-10, -75);
    vertex(10, -30);
    endShape(CLOSE);
    // Right wing panel
    beginShape();
    vertex(10, -30);
    vertex(20, -75);
    vertex(55, -75);
    vertex(25, -30);
    endShape(CLOSE);
    // Grid on panels
    stroke(80, 80, 200, 100);
    strokeWeight(0.5);
    for (let i = 1; i < 4; i++) {
      let t2 = i / 4;
      line(lerp(-15, -50, t2), lerp(-30, -75, t2), lerp(10, -10, t2), lerp(-30, -75, t2));
      line(lerp(10, 20, t2), lerp(-30, -75, t2), lerp(25, 55, t2), lerp(-30, -75, t2));
    }
  } else if (wings === "Invisible (stealth)") {
    // Dotted outline suggesting invisible wings
    stroke(180, 180, 180, 100);
    strokeWeight(1);
    drawingContext.setLineDash([3, 5]);
    noFill();
    beginShape();
    vertex(-10, -30);
    vertex(-35, -70);
    vertex(0, -80);
    vertex(35, -70);
    vertex(20, -30);
    endShape(CLOSE);
    drawingContext.setLineDash([]);
    noStroke();
    fill(150, 150, 150, 80);
    textSize(9);
    textAlign(CENTER, CENTER);
    text("[CLASSIFIED]", 5, -55);
  }

  // Mane (rainbow)
  noFill();
  strokeWeight(2.5);
  let maneColors = [
    [255, 0, 0], [255, 140, 0], [255, 220, 0],
    [0, 180, 0], [0, 100, 255], [140, 0, 255]
  ];
  for (let i = 0; i < maneColors.length; i++) {
    stroke(maneColors[i][0], maneColors[i][1], maneColors[i][2]);
    let offset = i * 3;
    beginShape();
    vertex(-65 + offset, -15);
    curveVertex(-65 + offset, -15);
    curveVertex(-55 + offset, -25 - i * 2);
    curveVertex(-45 + offset, -15);
    curveVertex(-35 + offset, -22 - i);
    endShape();
  }

  // Tail (rainbow)
  for (let i = 0; i < maneColors.length; i++) {
    stroke(maneColors[i][0], maneColors[i][1], maneColors[i][2]);
    strokeWeight(2);
    noFill();
    beginShape();
    curveVertex(60, -5 + i * 3);
    curveVertex(60, -5 + i * 3);
    curveVertex(75, -15 + i * 4);
    curveVertex(90, -5 + i * 3);
    curveVertex(90, -5 + i * 3);
    endShape();
  }

  // Sparkle particles
  noStroke();
  for (let s = 0; s < sparkle * 2; s++) {
    let sx = sin(frameCount * 0.03 + s * 1.7) * 80;
    let sy = cos(frameCount * 0.04 + s * 2.3) * 60;
    let sz = 2 + sin(frameCount * 0.1 + s) * 2;
    let alpha = 150 + sin(frameCount * 0.08 + s) * 100;
    fill(255, 215, 0, alpha);
    ellipse(sx, sy - 10, sz, sz);
  }

  pop();
}

function drawPitchCard(x, y, w, h) {
  // Card background
  fill(255, 255, 250);
  stroke(200, 180, 100);
  strokeWeight(2);
  rect(x, y, w, h, 8);

  // Card header
  fill(40, 40, 80);
  noStroke();
  textSize(11);
  textAlign(LEFT, TOP);
  textStyle(BOLD);
  text("PITCH CARD", x + 12, y + 10);
  textStyle(NORMAL);

  // Divider
  stroke(200, 180, 100);
  strokeWeight(1);
  line(x + 10, y + 28, x + w - 10, y + 28);

  noStroke();
  // Name
  fill(100, 50, 150);
  textSize(15);
  textStyle(BOLD);
  textAlign(LEFT, TOP);
  drawWrappedText(currentPitch.name, x + 12, y + 36, w - 24);
  textStyle(NORMAL);

  // Valuation
  fill(30, 100, 30);
  textSize(13);
  text("VC Valuation:", x + 12, y + 75);
  textSize(18);
  textStyle(BOLD);
  text(currentPitch.valuation, x + 12, y + 93);
  textStyle(NORMAL);

  // Probability
  fill(180, 50, 50);
  textSize(12);
  text("Probability of Working: " + currentPitch.probability, x + 12, y + 125);

  // Probability bar
  let barX = x + 12;
  let barY = y + 143;
  let barW = w - 24;
  let barH = 12;
  fill(230);
  stroke(180);
  strokeWeight(1);
  rect(barX, barY, barW, barH, 3);
  let probVal = parseFloat(currentPitch.probability);
  let probW = map(probVal, 0, 100, 0, barW);
  noStroke();
  if (probVal > 50) fill(50, 180, 50);
  else if (probVal > 20) fill(220, 180, 0);
  else fill(220, 60, 60);
  rect(barX, barY, probW, barH, 3);

  // Specs
  noStroke();
  fill(80);
  textSize(10);
  let specY = y + 170;
  text("Horn: " + currentPitch.horn, x + 12, specY);
  text("Wings: " + currentPitch.wings, x + 12, specY + 15);
  text("Hooves: " + currentPitch.hooves, x + 12, specY + 30);
  text("Data Processing: " + currentPitch.teraflops + " TFLOPS", x + 12, specY + 45);
  text("WiFi Range: " + currentPitch.wifi + "m", x + 12, specY + 60);
  text("Sparkle Level: " + currentPitch.sparkle + "/10", x + 12, specY + 75);

  // Tagline
  fill(100, 80, 40);
  textSize(11);
  textStyle(ITALIC);
  drawWrappedText('"' + currentPitch.tagline + '"', x + 12, specY + 100, w - 24);
  textStyle(NORMAL);
}

function drawControlLabels() {
  noStroke();
  fill(60);
  textSize(11);
  textAlign(RIGHT, CENTER);

  let leftCol = 20;
  let rightCol = canvasWidth > 500 ? 320 : 250;
  let y0 = drawHeight + 24;
  let rowH = 28;

  textAlign(RIGHT, CENTER);
  text("Horn:", leftCol + 72, y0);
  text("Wings:", leftCol + 72, y0 + rowH);
  text("Hooves:", leftCol + 72, y0 + rowH * 2);

  text("Teraflops:", rightCol + 92, y0);
  text("WiFi (m):", rightCol + 92, y0 + rowH);
  text("Sparkle:", rightCol + 92, y0 + rowH * 2);

  // Show slider values
  textAlign(LEFT, CENTER);
  let sliderEndX = rightCol + 228;
  text(dataSlider.value(), sliderEndX, y0);
  text(wifiSlider.value(), sliderEndX, y0 + rowH);
  text(sparkleSlider.value(), sliderEndX, y0 + rowH * 2);
}

function generatePitch() {
  let horn = hornSelect.value();
  let wings = wingSelect.value();
  let hooves = hoofSelect.value();
  let teraflops = dataSlider.value();
  let wifi = wifiSlider.value();
  let sparkle = sparkleSlider.value();

  // Generate name
  let prefix = random(prefixes);
  let body = random(bodies);
  let suffix = random(suffixes);
  let name = prefix + body + " " + suffix;

  // Calculate valuation
  let baseVal = 100; // $100M base
  baseVal += hornValuations[horn] || 0;
  baseVal += wingValuations[wings] || 0;
  baseVal += hoofValuations[hooves] || 0;
  baseVal += teraflops * 5; // $5M per teraflop
  baseVal += wifi * 2; // $2M per meter of WiFi
  baseVal += sparkle * 50; // $50M per sparkle level

  // Format valuation
  let valStr;
  if (baseVal >= 1000) {
    valStr = "$" + nf(baseVal / 1000, 1, 1) + "B";
  } else {
    valStr = "$" + baseVal + "M";
  }

  // Calculate probability
  let prob = 100 - (baseVal / 50);
  prob = max(1, min(100, prob));
  let probStr = nf(prob, 1, 1) + "%";

  // Select tagline
  let tagline = random(taglines);

  currentPitch = {
    name: name,
    valuation: valStr,
    probability: probStr,
    horn: horn,
    wings: wings,
    hooves: hooves,
    teraflops: teraflops,
    wifi: wifi,
    sparkle: sparkle,
    tagline: tagline
  };
}

function randomizeAll() {
  hornSelect.value(random(hornTypes));
  wingSelect.value(random(wingTypes));
  hoofSelect.value(random(hoofTypes));
  dataSlider.value(floor(random(0, 101)));
  wifiSlider.value(floor(random(0, 51)) * 10);
  sparkleSlider.value(floor(random(1, 11)));
  generatePitch();
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

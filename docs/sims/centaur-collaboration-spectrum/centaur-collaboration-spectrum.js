// Centaur Collaboration Spectrum MicroSim
// Select a job role, adjust task characteristic sliders,
// and see the predicted human-AI collaboration type.

let canvasWidth = 750;
let drawHeight = 350;
let controlHeight = 230;
let canvasHeight = drawHeight + controlHeight;

const roles = [
  { name: "Teacher",              profile: [3, 4, 3, 2, 5] },
  { name: "Radiologist",          profile: [5, 9, 7, 3, 8] },
  { name: "Customer Service Agent", profile: [8, 6, 9, 7, 9] },
  { name: "Software Engineer",    profile: [4, 7, 6, 4, 9] },
  { name: "Legal Researcher",     profile: [7, 8, 7, 5, 9] },
  { name: "Graphic Designer",     profile: [5, 3, 6, 6, 9] },
  { name: "Warehouse Worker",     profile: [9, 3, 8, 8, 1] },
  { name: "Financial Analyst",    profile: [6, 9, 7, 5, 9] },
  { name: "Journalist",           profile: [4, 5, 5, 3, 8] },
  { name: "Therapist",            profile: [2, 3, 1, 1, 3] }
];

const dimLabels = [
  "Routine vs Novel",
  "Data-heavy vs Judgment",
  "Scalable vs Personal",
  "Accountability Delegable",
  "Remote Capability"
];

const spectrumLabels = ["Tool", "Assistant", "Partner", "Supervisor", "Replacement"];

let roleSelect;
let sliders = [];
let showDefaultBtn, compareBtn;
let comparing = false;
let compareRole = null;
let compareSelect;

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

  let controlY = drawHeight + 12;
  let labelX = 10;

  // Role dropdown
  roleSelect = createSelect();
  roleSelect.parent(document.querySelector('main'));
  for (let r of roles) {
    roleSelect.option(r.name);
  }
  roleSelect.changed(onRoleChanged);
  roleSelect.position(labelX + 80, controlY);

  // 5 sliders
  let sliderY = controlY + 35;
  let sliderSpacing = 28;
  let sliderLabelW = 180;
  let sliderW = min(200, canvasWidth * 0.3);

  for (let i = 0; i < 5; i++) {
    let s = createSlider(1, 10, roles[0].profile[i], 1);
    s.parent(document.querySelector('main'));
    s.position(sliderLabelW + 10, sliderY + i * sliderSpacing);
    s.size(sliderW);
    sliders.push(s);
  }

  // Buttons
  showDefaultBtn = createButton('Show Default');
  showDefaultBtn.parent(document.querySelector('main'));
  showDefaultBtn.mousePressed(loadSelectedProfile);

  compareBtn = createButton('Compare Two Roles');
  compareBtn.parent(document.querySelector('main'));
  compareBtn.mousePressed(toggleCompare);

  // Compare dropdown (hidden initially)
  compareSelect = createSelect();
  compareSelect.parent(document.querySelector('main'));
  for (let r of roles) {
    compareSelect.option(r.name);
  }
  compareSelect.selected(roles[1].name);
  compareSelect.hide();

  loadSelectedProfile();
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
  rect(0, drawHeight, canvasWidth, controlHeight);

  // Title
  noStroke();
  fill(50);
  textSize(16);
  textAlign(CENTER, TOP);
  text("Centaur Collaboration Spectrum", canvasWidth / 2, 10);

  // Get current slider values
  let vals = [];
  for (let s of sliders) {
    vals.push(s.value());
  }

  // Draw radar chart on the left
  let radarCx = canvasWidth * 0.25;
  let radarCy = 185;
  let radarR = min(canvasWidth * 0.15, 110);
  drawRadarChart(radarCx, radarCy, radarR, vals, color(70, 130, 200, 150));

  // If comparing, draw second radar
  if (comparing) {
    let compRole = roles.find(r => r.name === compareSelect.value());
    if (compRole) {
      drawRadarChart(radarCx, radarCy, radarR, compRole.profile, color(220, 100, 80, 120));
      // Legend
      noStroke();
      fill(70, 130, 200);
      textSize(10);
      textAlign(LEFT, CENTER);
      rect(radarCx - radarR, radarCy + radarR + 20, 12, 12);
      fill(50);
      text(roleSelect.value(), radarCx - radarR + 16, radarCy + radarR + 26);

      fill(220, 100, 80);
      rect(radarCx - radarR, radarCy + radarR + 36, 12, 12);
      fill(50);
      text(compareSelect.value(), radarCx - radarR + 16, radarCy + radarR + 42);
    }
  }

  // Draw spectrum on the right
  let specX = canvasWidth * 0.52;
  let specW = canvasWidth * 0.42;
  let specY = 100;
  drawSpectrum(specX, specY, specW, vals);

  // If comparing, show second marker
  if (comparing) {
    let compRole = roles.find(r => r.name === compareSelect.value());
    if (compRole) {
      drawSpectrumMarker(specX, specY + 50, specW, compRole.profile, color(220, 100, 80), compRole.name);
    }
  }

  // Control labels
  noStroke();
  fill(50);
  textSize(12);
  textAlign(LEFT, CENTER);

  let controlY = drawHeight + 12;
  text("Job Role:", 10, controlY + 10);

  let sliderY = controlY + 35;
  let sliderSpacing = 28;
  for (let i = 0; i < 5; i++) {
    textSize(11);
    textAlign(LEFT, CENTER);
    fill(60);
    text(dimLabels[i] + ": " + sliders[i].value(), 10, sliderY + i * sliderSpacing + 8);
  }

  // Reposition sliders on resize
  let sliderLabelW = 180;
  let sliderW = min(200, canvasWidth * 0.3);
  for (let i = 0; i < 5; i++) {
    sliders[i].position(sliderLabelW + 10, sliderY + i * sliderSpacing);
    sliders[i].size(sliderW);
  }

  // Position buttons
  let btnX = sliderLabelW + sliderW + 30;
  let btnY = controlY + 40;
  showDefaultBtn.position(btnX, btnY);
  compareBtn.position(btnX, btnY + 35);

  if (comparing) {
    compareSelect.show();
    compareSelect.position(btnX + 145, btnY + 35);
  } else {
    compareSelect.hide();
  }

  roleSelect.position(80, controlY);
}

function drawRadarChart(cx, cy, r, values, fillCol) {
  let n = 5;
  let angleStep = TWO_PI / n;

  // Grid lines
  stroke(200);
  strokeWeight(0.5);
  noFill();
  for (let level = 2; level <= 10; level += 2) {
    beginShape();
    for (let i = 0; i < n; i++) {
      let angle = -HALF_PI + i * angleStep;
      let lr = map(level, 0, 10, 0, r);
      vertex(cx + cos(angle) * lr, cy + sin(angle) * lr);
    }
    endShape(CLOSE);
  }

  // Axis lines and labels
  for (let i = 0; i < n; i++) {
    let angle = -HALF_PI + i * angleStep;
    stroke(180);
    strokeWeight(0.5);
    line(cx, cy, cx + cos(angle) * r, cy + sin(angle) * r);

    // Short labels
    noStroke();
    fill(80);
    textSize(9);
    textAlign(CENTER, CENTER);
    let lx = cx + cos(angle) * (r + 18);
    let ly = cy + sin(angle) * (r + 18);
    let shortLabels = ["Routine", "Data", "Scale", "Deleg.", "Remote"];
    text(shortLabels[i], lx, ly);
  }

  // Data polygon
  fill(fillCol);
  stroke(red(fillCol), green(fillCol), blue(fillCol), 200);
  strokeWeight(2);
  beginShape();
  for (let i = 0; i < n; i++) {
    let angle = -HALF_PI + i * angleStep;
    let vr = map(values[i], 1, 10, r * 0.1, r);
    vertex(cx + cos(angle) * vr, cy + sin(angle) * vr);
  }
  endShape(CLOSE);

  // Data points
  noStroke();
  fill(red(fillCol), green(fillCol), blue(fillCol), 230);
  for (let i = 0; i < n; i++) {
    let angle = -HALF_PI + i * angleStep;
    let vr = map(values[i], 1, 10, r * 0.1, r);
    ellipse(cx + cos(angle) * vr, cy + sin(angle) * vr, 6, 6);
  }
}

function computeScore(values) {
  // Weighted: routine(2) + data(1.5) + scalable(1.5) + delegable(2) + remote(1)
  // Normalized to 0-1 range
  let weighted = values[0] * 2 + values[1] * 1.5 + values[2] * 1.5 + values[3] * 2 + values[4] * 1;
  let maxW = 10 * 2 + 10 * 1.5 + 10 * 1.5 + 10 * 2 + 10 * 1;
  let minW = 1 * 2 + 1 * 1.5 + 1 * 1.5 + 1 * 2 + 1 * 1;
  return (weighted - minW) / (maxW - minW);
}

function getSpectrumLabel(score) {
  if (score < 0.2) return "Tool";
  if (score < 0.4) return "Assistant";
  if (score < 0.6) return "Partner";
  if (score < 0.8) return "Supervisor";
  return "Replacement";
}

function getExplanation(label, roleName) {
  const explanations = {
    "Tool": roleName + " uses AI as a simple tool — like a calculator. The human drives every decision. AI fetches, formats, or filters on command.",
    "Assistant": roleName + " works with AI as an assistant — it drafts, suggests, and automates routine subtasks, but the human reviews and decides.",
    "Partner": roleName + " collaborates with AI as a partner — shared cognitive load, with the human providing judgment and the AI providing scale.",
    "Supervisor": roleName + " supervises AI that does most of the work — the human monitors, corrects, and handles exceptions.",
    "Replacement": roleName + " faces replacement risk — the task profile is highly routine, scalable, and delegable. The AI does the work; the human does the worrying."
  };
  return explanations[label] || "";
}

function drawSpectrum(x, y, w, values) {
  let score = computeScore(values);
  let label = getSpectrumLabel(score);
  let roleName = roleSelect.value();

  // Spectrum bar
  noStroke();
  textSize(13);
  textAlign(CENTER, TOP);
  fill(50);
  text("AI Collaboration Type", x + w / 2, y - 25);

  // Gradient bar
  for (let i = 0; i < w; i++) {
    let t = i / w;
    let c;
    if (t < 0.25) {
      c = lerpColor(color(100, 180, 100), color(100, 180, 220), t / 0.25);
    } else if (t < 0.5) {
      c = lerpColor(color(100, 180, 220), color(220, 200, 80), (t - 0.25) / 0.25);
    } else if (t < 0.75) {
      c = lerpColor(color(220, 200, 80), color(220, 140, 60), (t - 0.5) / 0.25);
    } else {
      c = lerpColor(color(220, 140, 60), color(200, 80, 80), (t - 0.75) / 0.25);
    }
    stroke(c);
    line(x + i, y, x + i, y + 30);
  }

  // Section labels
  noStroke();
  fill(50);
  textSize(9);
  textAlign(CENTER, TOP);
  for (let i = 0; i < 5; i++) {
    let lx = x + (i + 0.5) * (w / 5);
    text(spectrumLabels[i], lx, y + 33);
  }

  // Marker
  let markerX = x + score * w;
  stroke(0);
  strokeWeight(2);
  fill(255, 50, 50);
  triangle(markerX - 6, y - 4, markerX + 6, y - 4, markerX, y + 4);
  noStroke();
  fill(0);
  textSize(11);
  textAlign(CENTER, BOTTOM);
  textStyle(BOLD);
  text(label, markerX, y - 6);
  textStyle(NORMAL);

  // Explanation
  noStroke();
  fill(60);
  textSize(10);
  textAlign(LEFT, TOP);
  let explanation = getExplanation(label, roleName);
  text(explanation, x, y + 55, w, 80);
}

function drawSpectrumMarker(x, y, w, values, col, roleName) {
  let score = computeScore(values);
  let label = getSpectrumLabel(score);
  let markerX = x + score * w;

  stroke(red(col), green(col), blue(col));
  strokeWeight(2);
  fill(col);
  triangle(markerX - 6, y - 4, markerX + 6, y - 4, markerX, y + 4);
  noStroke();
  fill(red(col), green(col), blue(col));
  textSize(10);
  textAlign(CENTER, BOTTOM);
  textStyle(BOLD);
  text(roleName + ": " + label, markerX, y - 6);
  textStyle(NORMAL);
}

function onRoleChanged() {
  loadSelectedProfile();
}

function loadSelectedProfile() {
  let roleName = roleSelect.value();
  let role = roles.find(r => r.name === roleName);
  if (role) {
    for (let i = 0; i < 5; i++) {
      sliders[i].value(role.profile[i]);
    }
  }
}

function toggleCompare() {
  comparing = !comparing;
  if (comparing) {
    compareBtn.html('Hide Comparison');
  } else {
    compareBtn.html('Compare Two Roles');
  }
}

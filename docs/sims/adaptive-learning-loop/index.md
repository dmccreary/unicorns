---
title: Adaptive Learning Feedback Loop
description: Interactive p5.js MicroSim for adaptive learning feedback loop.
image: /sims/adaptive-learning-loop/adaptive-learning-loop.png
og:image: /sims/adaptive-learning-loop/adaptive-learning-loop.png
twitter:image: /sims/adaptive-learning-loop/adaptive-learning-loop.png
social:
   cards: false
quality_score: 0
---

# Adaptive Learning Feedback Loop

<iframe src="main.html" height="470px" width="100%" scrolling="no"></iframe>

[Run the Adaptive Learning Feedback Loop MicroSim Fullscreen](./main.html){ .md-button .md-button--primary }
<br/>
[Edit in the p5.js Editor](https://editor.p5js.org/)

## About This MicroSim

This MicroSim visualizes the internal mechanics of an adaptive learning system — the kind of system that vendors have been promising will "transform education" since approximately 2012. The simulation traces a six-stage feedback loop in which a student answers a question, the system records performance, an AI engine evaluates mastery against thresholds, and the content library selects the next question accordingly. All of this happens automatically, invisibly, and in ways that most students and many teachers have never been shown.

The simulation makes the invisible loop visible by displaying concrete values at every stage: actual questions, actual mastery percentages, actual decision-tree logic. When the student's mastery sits at 80%, the system routes to same-level content. When a subsequent wrong answer drops mastery to 67%, the easier content path lights up instead. The loop closes and begins again. This is the mechanism that ed-tech companies describe as "personalized AI-powered learning" in their marketing materials.

The pedagogical argument is straightforward: a learner who cannot describe the feedback mechanism of the tool they are using is not learning with it — they are being processed by it. This simulation is an attempt to address that asymmetry, funded, as it were, by this textbook's operating budget of approximately zero dollars.

## How to Use

Use the **Next Step** button to advance through the six stages of the adaptive learning feedback loop. Each stage reveals a new panel of concrete data — question text, mastery scores, decision-tree logic, and the content selection outcome. Use the **Previous Step** button to return to any prior stage and review the data. Use the **Reset** button to return to Stage 1 and observe how a different performance outcome (an incorrect answer in Stage 5) causes the system to select a different content path in Stage 6.

## Iframe Embed Code

You can add this MicroSim to any web page by adding this to your HTML:

```html
<iframe src="https://dmccreary.github.io/unicorns/sims/adaptive-learning-loop/main.html"
        height="450px"
        width="100%"
        scrolling="no"></iframe>
```

## Lesson Plan

### Grade Level
9-12 (High School)

### Duration
10-15 minutes

### Prerequisites

- Familiarity with the concept of feedback loops (as covered in Chapter 5)
- Basic understanding that adaptive learning platforms adjust content based on student performance
- Willingness to accept that a system marketed as "revolutionary" may be, at its core, a very simple if-then statement

### Activities

1. **Exploration** (5 min): Step through all six stages without changing anything. Note what data appears at each stage. Identify the three conditions in the decision tree and their corresponding outcomes.
2. **Guided Practice** (5 min): Step through the loop again and, at each stage, predict what the system will do before advancing. Compare your prediction to the actual outcome. When you arrive at Stage 6, ask yourself whether the word "AI" in the phrase "AI-powered adaptive learning" feels more or less accurate than it did before you started.
3. **Assessment** (5 min): Without looking at the simulation, draw the feedback loop from memory and label each of the four main nodes. Then write one sentence explaining what changes when mastery drops below 60%.

### Assessment

- The student can accurately name all four nodes in the feedback loop (Student, Assessment, AI Engine, Content Library) without prompting.
- The student can explain in plain language what the AI engine actually does in this system — specifically, what the three mastery thresholds are and what content decision each triggers.
- The student can articulate the difference between "AI-powered personalization" as described in a marketing brochure and "AI-powered personalization" as observed in this simulation.

## References

1. Pemberton, C. & Alcott, V. (2021). *The Feedback Loop Illusion: How Ed-Tech Vendors Rebranded If-Then Statements as Artificial Intelligence*. Journal of Educational Technology Skepticism, 14(2), 88–104.
2. Hargreaves, M. (2019). *Mastery Thresholds and the Myth of Precision: Why 85% Is Not a Scientific Finding*. Proceedings of the Annual Conference on Learning Engineering, 7, 201–215.
3. DeSouza, F. & Liang, P. (2023). *Personalization at Scale: A Longitudinal Study of Adaptive Learning Outcomes Across 47 Districts That Purchased the Same Platform*. Educational Data Mining Review, 11(4), 312–329.

## Instructional Design Commentary

A competent instructional designer would have begun this project with a learner analysis — surveying students to determine what they already believed about adaptive learning before deciding that a six-stage step-through simulation was the appropriate solution. This analysis would have taken approximately three months, produced a 47-page report, and concluded that students benefit from concrete examples and clear feedback. The simulation would then have been built anyway, by an AI, in forty minutes, using the same design principles the report recommended. The three months would have been, in that sense, optional.

The ed-tech industry's standard response to this observation is that "evidence-based design processes" cannot be shortcut without compromising outcomes. The literature on this point is extensive, confident, and almost entirely funded by the same vendors who sell the tools the evidence recommends. A neutral observer might note that this textbook — which was designed by a language model following a brief specification — is currently being used in classrooms, which is more than can be said for most instructional design reports.

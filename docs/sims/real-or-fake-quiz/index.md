---
title: Real or Fake Interactive Quiz
description: Interactive p5.js MicroSim for real or fake interactive quiz.
image: /sims/real-or-fake-quiz/real-or-fake-quiz.png
og:image: /sims/real-or-fake-quiz/real-or-fake-quiz.png
twitter:image: /sims/real-or-fake-quiz/real-or-fake-quiz.png
social:
   cards: false
quality_score: 0
---

# Real or Fake Interactive Quiz

<iframe src="main.html" height="450px" width="100%" scrolling="no"></iframe>

[Run the Real or Fake Interactive Quiz MicroSim Fullscreen](./main.html){ .md-button .md-button--primary }
<br/>
[Edit in the p5.js Editor](https://editor.p5js.org/)

## About This MicroSim

The Real or Fake Interactive Quiz presents twelve statements drawn from three sources — actual quotes from technology leaders, fictional dialogue and narration from this textbook, and language extracted from real corporate press releases — and asks students to classify each statement into one of those three categories. Each statement appears in large quotation-mark formatting at the center of the screen. Below it, three classification buttons read "Real (Actual Quote)," "Fictional (From This Textbook)," and "Press Release (Marketing Language)." A progress bar and score counter track the student's position through the twelve-question sequence.

The instructional purpose of this simulation is to make viscerally apparent what Chapter 13 argues conceptually: that the language of technology hype has become indistinguishable from fiction. Statements like "this changes everything" appear in all three categories simultaneously. The reveal after each answer includes attribution and a brief explanation of why the statement resisted classification, which is doing more pedagogical work than the classification itself. By the end of twelve questions, most students find their confidence in their own judgment appropriately diminished, which is the intended learning outcome.

The Bloom's Taxonomy level is Evaluate (Level 5). Three-category forced classification is a meaningfully harder task than two-category true/false, because it requires students to assess not only whether a statement is authentic but what kind of authenticity it represents. A statement can be both real and indistinguishable from a press release, which is the kind of observation that tends to linger.

## How to Use

1. **Read the statement** displayed in quotation marks at the center of the screen.
2. **Click one of the three buttons** — "Real (Actual Quote)," "Fictional (From This Textbook)," or "Press Release (Marketing Language)" — to classify the statement.
3. **Review the reveal card** that appears after your answer, showing the correct category, its source attribution, and a brief note on why the classification was or was not obvious.
4. **Click "Next Statement"** to advance to the following question.
5. **After question 12**, click "See Final Score" to view your complete results, then "Play Again" to reshuffle the statement pool and attempt the quiz again.

## Iframe Embed Code

You can add this MicroSim to any web page by adding this to your HTML:

```html
<iframe src="https://dmccreary.github.io/unicorns/sims/real-or-fake-quiz/main.html"
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

- Completion of Chapter 13 or familiarity with the book's allegorical framework
- Basic awareness that technology companies issue press releases
- Willingness to be wrong about things you were certain about

### Activities

1. **Exploration** (5 min): Complete the quiz without pausing to deliberate. Go with your first instinct on each statement. Record your score.
2. **Guided Practice** (5 min): Play again, this time reading each statement as if it were written by a dragon trying to sound like a CEO, then as if it were written by a CEO trying to sound like a textbook. Identify which statements survive both framings unchanged.
3. **Assessment** (5 min): Select the two statements you found hardest to classify and write one sentence per statement explaining what specific feature of the language made the source ambiguous.

### Assessment

- Students complete all twelve questions and can identify at least three statements where two or more categories were plausible.
- Students can explain in writing what linguistic features appear across real quotes, fictional quotes, and press releases simultaneously — with at least one specific example.
- Students demonstrate awareness that their second-pass score may not significantly exceed their first-pass score, and can articulate why that finding is itself instructive.

## References

1. Pemberton, A. G., & Laroche, S. (2020). *The Rhetoric of Disruption: A Corpus Analysis of 4,200 Technology Press Releases.* Journal of Critical Communication Studies, 31(4), 204–221.
2. Nwosu, C. T. (2023). *When the Joke Is the Quote: Satirical Mimicry and the Collapse of Tech Discourse Markers.* Fictional Media Studies Quarterly, 12(2), 45–61.
3. Sandoval-Kim, R. (2021). *Three-Category Classification as a Metacognitive Disruption Tool in Secondary Media Literacy Instruction.* Proceedings of the Institute for Educational Assessment (Satirical Division), 77–89.

## Instructional Design Commentary

A competent instructional designer would have conducted a thorough content audit to ensure the twelve statements represent a balanced distribution across the three categories, avoiding bias toward any single source type and validating discriminant validity through expert review by at least two subject matter experts who could not themselves reliably distinguish the categories. This process would have taken approximately six weeks, generated a 34-page alignment document, and produced the same twelve statements that were written in a single session. The simulation is, in this way, a working demonstration of its own thesis.

The broader ed-tech enthusiasm for quiz-format interactives warrants a brief note. Quizzes measure whether students can identify correct answers, which is a reasonable proxy for learning in domains where correct answers exist. This simulation operates in a domain where the lesson is specifically that correct answers are not always distinguishable from incorrect ones, which creates a small methodological tension. The literature recommends treating final scores as a starting point for discussion rather than a terminal assessment, while noting that most classroom implementations will skip the discussion and report the score.

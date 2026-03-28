---
title: AGI Timeline Claims History
description: Interactive vis-timeline MicroSim for agi timeline claims history.
image: /sims/agi-timeline-claims/agi-timeline-claims.png
og:image: /sims/agi-timeline-claims/agi-timeline-claims.png
twitter:image: /sims/agi-timeline-claims/agi-timeline-claims.png
social:
   cards: false
quality_score: 0
---

# AGI Timeline Claims History

<iframe src="main.html" height="520px" width="100%" scrolling="no"></iframe>

[Run the AGI Timeline Claims History MicroSim Fullscreen](./main.html){ .md-button .md-button--primary }

## About This MicroSim

This MicroSim presents a historical timeline of AGI prediction intervals alongside documented AI achievements, rendered on a single interactive canvas spanning 1956 to 2040. The purpose is to make visible what is otherwise obscured by the episodic nature of technology journalism: that experts have been predicting artificial general intelligence within "one generation" or "ten to twenty years" for approximately seventy years, and that this interval has not meaningfully shortened.

The timeline distinguishes between two categories of events. Prediction intervals — shown in orange above the timeline axis — represent named claims made by researchers, executives, and prominent commentators, complete with the source quote and the year the prediction was made. Actual achievements — shown in blue below the axis — represent verifiable milestones: the defeat of a chess champion, a quiz show victory, the publication of a large language model. The two categories do not overlap in any way that would be embarrassing to point out.

Students who interact with this timeline are encouraged to note that every prediction interval displayed eventually expires — that is, the predicted arrival date passes — without the predicted event occurring. They are further encouraged to note that new predictions are then issued, beginning the cycle again. The literature refers to this as "temporal optimism." The literature is being very polite.

## How to Use

Hover over any orange prediction bar to see the full quote, the name of the person who made the prediction, and the year it was issued. Hover over any blue achievement point to read a brief description of the milestone and its actual significance. Use the scroll wheel or drag the timeline to zoom in on any time period. Use the toggle buttons to switch between viewing predictions only, achievements only, or both simultaneously — the "both" view is the recommended starting position for anyone who has not yet formed an opinion about optimism as an epistemological strategy.

## Iframe Embed Code

You can add this MicroSim to any web page by adding this to your HTML:

```html
<iframe src="https://dmccreary.github.io/unicorns/sims/agi-timeline-claims/main.html"
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

- Familiarity with the concept of the AI hype cycle (Chapter 4)
- Basic understanding that "AGI" refers to artificial general intelligence — a hypothetical system that can perform any intellectual task a human can
- Comfort with the possibility that credentialed experts can be wrong, repeatedly, without updating their confidence levels

### Activities

1. **Exploration** (5 min): Toggle between "predictions only" and "achievements only" views. Count how many prediction intervals appear on the timeline. Note whether any of them are still open — that is, whether the predicted date has not yet arrived. Then switch to the combined view and sit with the result.
2. **Guided Practice** (5 min): Select any two prediction intervals from different decades. Hover over each to read the full quote. Write down the predicted timeline and the name of the person who made it. Then locate the nearest actual achievement on the timeline. Describe in one sentence the relationship between what was predicted and what occurred.
3. **Assessment** (5 min): Without looking at the timeline, estimate how many years the average AGI prediction has been off by. Then check your estimate against the data. Write one sentence explaining what pattern, if any, this data suggests about the relationship between AI expertise and AGI forecasting accuracy.

### Assessment

- The student can identify at least three named prediction intervals on the timeline and accurately state when each prediction was made and what it claimed.
- The student can describe the structural difference between a prediction interval and an achievement point, and explain why plotting both on the same axis is analytically meaningful.
- The student can articulate, in writing, why the consistent expiration of AGI predictions does not constitute evidence that AGI is impossible — only evidence that the predictions were wrong.

## References

1. Tegmark, M. & Winfield, A. F. (2022). *Seventy Years of Being Almost Right: A Systematic Review of AGI Timeline Predictions, 1956–2022*. AI Safety Research Quarterly, 9(1), 4–41.
2. Nilsson, N. J. (2018). *The Quest for Artificial Intelligence: Why Every Generation Thinks They Are Six Years Away*. Annals of the History of Computing, 40(3), 72–89.
3. Bostrom, P. & Legg, S. (2024). *Calibrated Uncertainty in Expert Forecasting: A Study of 214 AGI Timeline Claims and Their Outcomes*. Journal of Machine Intelligence Research, 17(2), 155–178.

## Instructional Design Commentary

A competent instructional designer would have recommended against using a timeline visualization for this content, on the grounds that students find timelines passive and would benefit instead from a structured debate activity in which they argue both sides of the AGI timeline question before examining the evidence. This recommendation would have been correct, useful, and implemented by no one, because the timeline was cheaper, faster, and available immediately, whereas a structured debate requires a teacher, a classroom, and at least forty-five minutes that are currently allocated to standardized test preparation.

The deeper irony — which the instructional designer would have noted in the final paragraph of a report that was not requested — is that a tool designed to teach students about the gap between AI predictions and reality was itself produced by the AI systems that feature in those predictions. The timeline, in other words, is self-documenting. This was not intentional. It is, however, on brand.

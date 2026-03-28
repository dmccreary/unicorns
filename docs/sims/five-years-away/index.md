---
title: Five Years Away Timeline
description: Interactive vis-timeline MicroSim for five years away timeline.
image: /sims/five-years-away/five-years-away.png
og:image: /sims/five-years-away/five-years-away.png
twitter:image: /sims/five-years-away/five-years-away.png
social:
   cards: false
quality_score: 0
---

# Five Years Away Timeline

<iframe src="main.html" height="450px" width="100%" scrolling="no"></iframe>

[Run the Five Years Away Timeline MicroSim Fullscreen](./main.html){ .md-button .md-button--primary }

## About This MicroSim

This MicroSim presents a dual-track interactive timeline spanning from 1994 to the present. The top track displays prediction windows — orange bars representing each generation's estimate of when economically viable quantum computing would arrive. The bottom track displays actual milestones — blue points marking specific, documented events: Shor's algorithm, IBM's seven-qubit factoring demonstration, Google's supremacy claim, and IBM's 1,121-qubit processor. A vertical "Today" line at 2026 bisects the timeline and reveals that all prediction windows have either expired without delivering economically viable general-purpose quantum computing or extend beyond the present, which is itself a prediction.

The central observation the timeline communicates is that the prediction windows do not converge. Each one generates a new prediction window of roughly the same duration, offset by approximately five to ten years. The milestones, meanwhile, are real and represent genuine progress in qubit counts and error correction. The gap between the milestones and the prediction windows is the gap between what has been built and what has been announced as imminent. An optional toggle overlays the AGI prediction track, which follows the same pattern with a more colorful vocabulary.

!!! mascot-thinking "Five Years Has Never Been More Persistent"

    <img src="../../img/mascot/thinking.png" class="mascot-admonition-img">
    The data is unambiguous. From 1994 to 2026, economically viable quantum computing has remained between five and twenty years away. This is an achievement in predictive consistency that the literature has not previously documented in any other domain except fusion power and flying cars.

## How to Use

1. Examine the two tracks. The top track (orange bars) shows prediction windows; the bottom track (blue points) shows actual milestones. Each element is labeled with a date.
2. Hover over any orange prediction bar to see the full original quote, its source, and the year it was made.
3. Hover over any blue milestone point to see a description of the event, the qubit count involved (where applicable), and a note on what the achievement did and did not demonstrate.
4. Observe the "Today (2026)" vertical line. Note which prediction windows have already expired and which are still technically active.
5. Use the zoom and pan controls to examine specific periods in more detail.
6. Click **Show AGI Predictions** to toggle a third track overlaying AGI arrival predictions from the same period. Compare the two patterns.

## Iframe Embed Code

You can add this MicroSim to any web page by adding this to your HTML:

```html
<iframe src="https://dmccreary.github.io/unicorns/sims/five-years-away/main.html"
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

- Familiarity with Chapter 15: "Economically Viable Quantum Computing: The Unicorn of Physics"
- Basic understanding that a qubit is to a classical bit as a unicorn is to a horse — related, but not interchangeable in practical applications
- No prior knowledge of quantum mechanics required, as this timeline is about predictions, not physics

### Activities

1. **Exploration** (5 min): Before hovering over any items, examine the visual structure of the timeline. Describe in one sentence the pattern you observe in the prediction windows. Then hover over the earliest and most recent prediction bars and compare their language. Note whether the confidence level of the predictions increases or decreases over time.
2. **Guided Practice** (5 min): Toggle on the AGI prediction track. Compare the AGI prediction pattern to the quantum computing pattern. Identify at least one structural similarity and one difference. Consider whether the similarity is coincidental or reflects something about how the technology industry generates predictions.
3. **Assessment** (5 min): A new prediction is published today claiming that economically viable quantum computing is "seven to ten years away." Using the timeline, write two sentences explaining what this prediction's track record suggests about its reliability, without using the word "obviously."

### Assessment

- Students can identify at least three expired prediction windows on the timeline and explain what "expired" means in this context (the predicted arrival date passed without the predicted capability appearing).
- Students can articulate the difference between a genuine technical milestone — such as Google's 53-qubit supremacy demonstration — and an economically viable general-purpose quantum computer, without conflating the two.
- Students can explain why the persistence of five-to-ten-year predictions across thirty years is itself a data point worth analyzing, rather than evidence that quantum computing is approximately five to ten years away.

## References

1. Varga, E., & Thornton, C. (2024). "The Perpetual Horizon: A Longitudinal Analysis of Quantum Computing Arrival Predictions, 1994–2024." *Journal of Technology Forecasting and Social Change*, 41(2), 88–117.
2. Holmqvist, J., & Asante, K. (2023). "Five Years Away: How the Language of Imminence Sustains Investment in Pre-Commercial Technologies." *Review of Strategic Technology Communication*, 29(4), 201–229.
3. Reyes-Morales, C. (2022). "Qubits and Unicorns: On the Structural Similarities Between Quantum Computing Hype Cycles and Other Recurring Prediction Failures in Emerging Technology." *Critical Studies in Innovation Discourse*, 7(1), 14–41.

## Instructional Design Commentary

A competent instructional designer would have questioned whether a timeline is the appropriate interaction type for teaching pattern recognition and would have conducted a cognitive load analysis before populating it with 11 distinct interactive elements. That analysis would have recommended a simpler comparison table, which would have made the same argument in four rows without requiring students to zoom, pan, hover, and toggle. The timeline would have been retained as an optional enrichment activity for students who find the table insufficiently stimulating, which is approximately the same student population that enjoys reading patent applications for recreation.

The ed-tech industry's preference for vis-timeline over a table reflects a genuine conviction that visual interactivity aids comprehension of temporal data. This conviction is not wrong in every case. It is, however, frequently used to justify the production of animated, hoverable, zoomable artifacts that communicate information which could have been written in a sentence. The sentence, in this case, would read: "Every generation since 1994 has predicted that economically viable quantum computing is five to ten years away, and every generation has been incorrect." The timeline communicates the same thing at considerably greater expense and with the advantage of being embeddable in an iframe.

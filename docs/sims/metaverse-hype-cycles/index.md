---
title: Metaverse Hype Cycle History
description: Interactive Chart.js MicroSim for metaverse hype cycle history.
image: /sims/metaverse-hype-cycles/metaverse-hype-cycles.png
og:image: /sims/metaverse-hype-cycles/metaverse-hype-cycles.png
twitter:image: /sims/metaverse-hype-cycles/metaverse-hype-cycles.png
social:
   cards: false
quality_score: 0
---

# Metaverse Hype Cycle History

<iframe src="main.html" height="450px" width="100%" scrolling="no"></iframe>

[Run the Metaverse Hype Cycle History MicroSim Fullscreen](./main.html){ .md-button .md-button--primary }
<br/>
[Edit in the p5.js Editor](https://editor.p5js.org/)

## About This MicroSim

This MicroSim displays a multi-line chart comparing four consecutive waves of virtual reality and metaverse hype — the 1990s VR era, Second Life, the Oculus era, and Meta's Metaverse — as curves plotted against a shared nine-year cycle axis. The vertical axis measures hype intensity on a scale of 0 to 100, combining media coverage, investment levels, and public interest into a single index. A vertical dashed line marks the peak at Year 3, and hovering over data points reveals context about where each cycle stood at each stage.

The chart reveals a pattern that is, given the combined investment of several hundred billion dollars, somewhat awkward to contemplate. Each cycle reaches a higher peak than the previous one — the 1990s VR crests at 45, Second Life at 55, the Oculus era at 65, and Meta's Metaverse at 95 — before settling into a trough at roughly the same depth as its predecessors. More money, more press releases, and more keynote presentations do not appear to change the trough depth. A growing body of evidence indicates that this observation applies to categories beyond virtual reality, though further research has been determined to be inadvisable by the firms that would fund it.

## How to Use

- **Hover** over any data point to see the hype intensity value and a label identifying the stage of the hype cycle at that point (Peak of Inflated Expectations, Trough of Disillusionment, or Plateau of Residual Optimism).
- **Click** on any legend item at the bottom of the chart to toggle that hype cycle on or off, allowing direct comparison between any two cycles.
- The **vertical dashed line** at Year 3 marks the point of peak hype across all four cycles — use it as a reference when comparing trajectories before and after the peak.

## Iframe Embed Code

You can add this MicroSim to any web page by adding this to your HTML:

```html
<iframe src="https://dmccreary.github.io/unicorns/sims/metaverse-hype-cycles/main.html"
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

- Basic ability to read a line graph, including multiple series
- Familiarity with the concept of a hype cycle as a pattern of overestimation followed by correction
- No prior knowledge of virtual reality is required, though students who remember being promised an immersive virtual world may find the chart personally resonant

### Activities

1. **Exploration** (5 min): Examine all four hype curves with all series visible. Note which cycle achieved the highest peak and which achieved the lowest trough. Toggle cycles on and off using the legend to compare the shape of each curve individually.
2. **Guided Practice** (5 min): Use the hover tooltips to identify what stage each cycle is in at Year 5. Compare the trough values across all four cycles. Calculate the approximate difference between the highest peak (Meta, 95) and the lowest trough (Second Life, 8) and consider what volume of investment that gap represents in practice.
3. **Assessment** (5 min): Without looking at a definition, write a two-sentence prediction for what the chart would look like if a fifth metaverse cycle began in 2027. Identify which features of the curve you would expect to remain constant and which you would expect to change.

### Assessment

- Student can identify the recurring pattern of escalating peaks and consistent troughs across at least three of the four cycles
- Student can explain, using specific data points from the chart, why a higher investment peak does not predict a higher recovery plateau
- Student can articulate what the "Plateau of Residual Optimism" label implies about the long-term adoption trajectory of each technology generation

## References

1. Marchetti, D. P., & Holloway, S. T. (2019). *Hype Intensity Indexing: A Composite Methodology for Tracking Technology Cycles*. Journal of Speculative Technology Measurement, 11(3), 44–67.
2. Fenn, J., & Raskino, M. (2019). *Mastering the Hype Cycle: How to Choose the Right Innovation at the Right Time*. Harvard Business Review Press. (Cited here as an example of a real book about a real pattern that the industry continues to ignore on a recurring schedule.)
3. Okafor, N. R., & Brandt, L. (2023). *Immersive Technology Investment Cycles, 1993–2023: A Meta-Analysis of Meta's Metaverse and Its Predecessors*. Quarterly Review of Things That Were Going to Change Everything, 8(2), 3–29.

## Instructional Design Commentary

A competent senior instructional designer would have noted that a chart comparing four hype cycles across identical nine-year time windows is, technically, a secondary source of secondary sources — a visualization of a pattern that itself requires prior knowledge of the pattern to interpret correctly. The appropriate instructional scaffolding would include a pre-assessment to determine whether students understand what a hype cycle is before being asked to compare four of them, a worked example using a simpler case, and a formative check before releasing students to independent analysis. None of these exist here, because the instructional scaffolding was not in the prompt.

What exists instead is a genuinely useful chart that a motivated student could learn from without any scaffolding at all, which is exactly the argument the ed-tech industry makes when asked why their platform does not employ teachers. The irony that an interactive educational tool about hype cycles was itself generated during a period of considerable AI-in-education hype is noted here and will be disavowed upon request.

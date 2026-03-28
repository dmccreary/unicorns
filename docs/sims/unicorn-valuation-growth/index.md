---
title: Unicorn Valuation Growth Chart
description: Interactive Chart.js MicroSim for unicorn valuation growth chart.
image: /sims/unicorn-valuation-growth/unicorn-valuation-growth.png
og:image: /sims/unicorn-valuation-growth/unicorn-valuation-growth.png
twitter:image: /sims/unicorn-valuation-growth/unicorn-valuation-growth.png
social:
   cards: false
quality_score: 0
---

# Unicorn Valuation Growth Chart

<iframe src="main.html" height="450px" width="100%" scrolling="no"></iframe>

[Run the Unicorn Valuation Growth Chart MicroSim Fullscreen](./main.html){ .md-button .md-button--primary }
<br/>
[Edit in the p5.js Editor](https://editor.p5js.org/)

## About This MicroSim

The Unicorn Valuation Growth Chart is a dual-axis Chart.js visualization showing the growth of the global unicorn population from 2013 to 2024. Blue bars on the left axis represent the number of unicorn companies at each data point: 39 in 2013, 80 in 2015, 260 in 2018, 900 in 2021, and 1,200 in 2024. A gold line with markers on the right axis tracks the combined valuation of all unicorns in trillions of USD: $0.1T in 2013, growing to $4.7T in 2024. Three annotations orient the viewer: an arrow at 2013 marks where Aileen Lee coined the term, a shaded region across 2020–2021 labels the ZIRP (zero interest rate policy) bubble, and an arrow at the 2024 line notes that $4.7 trillion exceeds Germany's GDP. A toggle switches the y-axis between linear and logarithmic scales. All bars and points display exact values on hover.

The chart is designed to make a specific analytical insight accessible: the number of unicorns grew by a factor of 30 between 2013 and 2024, but the combined valuation grew by a factor of 47, which means that average valuation per unicorn increased substantially over the same period. The population is not merely larger — each individual unicorn is, on average, more expensively imagined than its predecessors. The logarithmic scale toggle allows students to assess whether the growth pattern is better described as exponential, linear, or segmented, which produces a different answer depending on which axis is examined and which era's data receives more weight.

The Bloom's Taxonomy level is Analyze (Level 4), targeting the verbs Examine and Compare. Students are asked to examine the growth pattern in both series and to compare the two curves to identify whether valuations are inflating faster than the population — a question the chart answers numerically, but which requires analysis rather than mere observation to articulate.

## How to Use

1. **Read the chart** before interacting with it. Identify the two y-axes, determine which scale applies to the bars and which to the line, and note the shaded ZIRP region before drawing any conclusions about the 2021 spike.
2. **Hover over any bar or data point** to see the exact numeric values for that year.
3. **Click the logarithmic scale toggle** to switch the left y-axis from linear to logarithmic. Observe whether the growth in unicorn count appears more or less dramatic on the log scale, and what that implies about the growth pattern's structure.
4. **Return to linear scale** and compare the slope of the gold line during the ZIRP period (2018–2021) to the slope during the pre-ZIRP period (2013–2018). Calculate the approximate valuation growth rate during each segment.
5. Use the 2024 annotation as an anchor: $4.7 trillion is more than Germany's GDP. Determine whether you find this comparison clarifying or misleading, and why.

## Iframe Embed Code

You can add this MicroSim to any web page by adding this to your HTML:

```html
<iframe src="https://dmccreary.github.io/unicorns/sims/unicorn-valuation-growth/main.html"
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

- Ability to read a dual-axis chart without conflating the two y-axis scales
- Familiarity with the concept of exponential growth from mathematics or biology coursework
- Basic awareness that zero interest rate policy existed and that its termination had consequences, neither of which requires an economics background to understand from context

### Activities

1. **Exploration** (5 min): Without hovering or toggling, estimate by eye the growth factor for unicorn count and for combined valuation between 2013 and 2024. Then hover to get exact numbers and calculate the actual growth factors. Record the discrepancy between your estimates and the actual values.
2. **Guided Practice** (5 min): Toggle to logarithmic scale. Determine whether the growth in unicorn count is better described as linear on the log scale (suggesting exponential growth in the original) or curved (suggesting super-exponential). Switch back to linear and identify the year where the gold valuation line's slope changed most dramatically.
3. **Assessment** (5 min): Calculate the average valuation per unicorn for each of the five data points (combined valuation divided by number of unicorns). Plot or list those five values. Identify the trend and write one sentence explaining what it implies about the rate at which the market was assigning value per company.

### Assessment

- Students correctly calculate average valuation per unicorn for all five data points and identify the correct trend direction without prompting.
- Students can articulate in writing why the ZIRP annotation matters for interpreting the 2021 data point, specifically addressing whether the 2021 spike should be treated as a structural trend or an external condition artifact.
- Students demonstrate awareness that "more than Germany's GDP" is a rhetorical framing choice rather than an analytical one, and can explain what a more analytically precise comparison would look like.

## References

1. Lee, A. (2013). Welcome to the Unicorn Club: Learning from Billion-Dollar Startups. *TechCrunch*. (The one real citation in this textbook, included for contrast.)
2. Marchetti, O., & Svensson, K. (2022). *Valuation Inflation in the Zero Interest Rate Era: Unicorn Premium Expansion 2013–2022.* Journal of Mythical Asset Pricing, 7(4), 88–107.
3. Nkemdirim, A., & Faulkner-Cho, R. (2023). *Per-Unicorn Valuation as a Measure of Collective Magical Thinking: A Longitudinal Study.* Quarterly Review of Imaginary Capital Markets, 11(2), 61–79.

## Instructional Design Commentary

A competent instructional designer would have noted that a static dual-axis chart with hover tooltips and a scale toggle is not, technically, a MicroSim — it is a chart. The distinction matters because MicroSims imply interactivity that produces different outcomes based on student input, while this visualization produces the same outcome for every student regardless of what they do, because the data is fixed. This observation was available before the chart was built and was not acted upon, which places it in the Aspirational zone of the Product-Market Fit Spectrum located elsewhere in this textbook.

The decision to annotate "$4.7 trillion — more than Germany's GDP" deserves a brief instructional design note. GDP comparisons are a staple of financial journalism because they provide scale without requiring the reader to have any prior sense of what a trillion dollars means, which most readers do not. They are, however, not analytically informative: Germany's GDP is not a natural ceiling for unicorn valuations, and exceeding it proves nothing about whether the valuations are justified. A more rigorous annotation would compare combined unicorn valuation to combined unicorn revenue, which the chart does not do because that number would require a separate dataset and would be significantly less impressive. The literature recommends displaying the less impressive number. The literature is not widely cited in pitch decks.

---
title: LinkedIn Skill Inflation Tracker
description: Interactive Chart.js MicroSim for linkedin skill inflation tracker.
image: /sims/linkedin-skill-inflation/linkedin-skill-inflation.png
og:image: /sims/linkedin-skill-inflation/linkedin-skill-inflation.png
twitter:image: /sims/linkedin-skill-inflation/linkedin-skill-inflation.png
social:
   cards: false
quality_score: 0
---

# LinkedIn Skill Inflation Tracker

<iframe src="main.html" height="450px" width="100%" scrolling="no"></iframe>

[Run the LinkedIn Skill Inflation Tracker MicroSim Fullscreen](./main.html){ .md-button .md-button--primary }
<br/>
[Edit in the p5.js Editor](https://editor.p5js.org/)

## About This MicroSim

This MicroSim displays a dual-line chart comparing two quantities that share almost nothing except a common x-axis: the percentage of LinkedIn profiles claiming AI-related skills and the percentage of job postings actually requiring those skills, both measured as growth from a 2020 baseline. The gap between the two lines — labeled "The Inflation Gap" and rendered as a shaded region of increasing width — is the primary instructional object. By 2025, the gap represents approximately 320 percentage points, which is a large number. The chart asks scholars to look at it and draw their own conclusions. The chart is confident they will.

The simulation supports Analyze-level learning by presenting a pattern that repeats across multiple technology skill categories. The dropdown allows scholars to switch between "AI/ML," "Prompt Engineering," "Data Science," and "Blockchain," discovering that the gap is not a quirk of one category but a structural feature of how professional credentialing responds to hype. The ChatGPT release in November 2022 is annotated directly on the chart, which is either a useful contextual anchor or an accusation, depending on whether the scholar added "Prompt Engineering" to their LinkedIn profile in January 2023.

It is worth noting that this chart uses estimated and illustrative data. The underlying phenomenon — that skill claims on professional networking platforms grow faster than verified market demand for those skills — is supported by a growing body of evidence. The specific numbers are presented with the same confident precision as any other statistic in a technology press release, which is to say they are approximately correct and entirely plausible, and the scholar should evaluate them accordingly.

## How to Use

1. The chart displays two lines by default for the "AI/ML" skill category. Observe the divergence between gold (profiles claiming AI skills) and blue (job postings requiring AI skills) over the 2020–2025 period.
2. Hover over any data point to see the exact percentage value for that year.
3. Use the dropdown menu to switch between skill categories: "AI/ML," "Prompt Engineering," "Data Science," and "Blockchain." Note whether the gap pattern changes in shape, magnitude, or timing across categories.
4. Observe the annotations: the November 2022 ChatGPT release arrow and the 2023 gap-widening label. Consider what event in your own LinkedIn feed corresponds to each annotation.
5. Examine the shaded region labeled "The Inflation Gap." Identify the year in which the gap first became larger than the actual job posting growth rate — that is, the year in which the credential became more inflated than the market was growing.

## Iframe Embed Code

You can add this MicroSim to any web page by adding this to your HTML:

```html
<iframe src="https://dmccreary.github.io/unicorns/sims/linkedin-skill-inflation/main.html"
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

- Ability to read a dual-line chart and interpret percentage growth from a baseline
- Familiarity with the concept of credential inflation as distinct from skill acquisition
- Optional but useful: having recently updated a professional profile to include a technology skill learned in a 4-hour online course, which provides the kind of first-person data the chart is otherwise only able to approximate

### Activities

1. **Exploration** (5 min): View the AI/ML chart and identify three specific observations: the year the gap first appeared, the year it grew most rapidly, and the year in which the gap was larger than the total job posting growth. Then switch to the Blockchain category and determine whether the same pattern appeared earlier, later, or not at all.
2. **Guided Practice** (5 min): Using the dropdown, compare all four skill categories. Rank them by the size of their inflation gap in 2025. Write one sentence describing what the ranking reveals about the relationship between media coverage intensity and credential inflation speed.
3. **Assessment** (5 min): Without the chart visible, explain in three sentences why the gap between skill claims and job postings does not necessarily indicate dishonesty on the part of individuals listing those skills, but does indicate something significant about the signal value of professional credentials in technology fields.

### Assessment

- The scholar can correctly identify the approximate year and precipitating event associated with the largest single-year increase in the inflation gap for the AI/ML category.
- The scholar can compare at least two skill categories and describe a meaningful difference in their inflation patterns, moving beyond the observation that "they both go up."
- The scholar can articulate a consequence of credential inflation for employers attempting to use LinkedIn skill claims as a screening signal — a consequence that the chart implies but does not state.

## References

1. Abernathy, S. K., & Fong, L. (2024). *Credential velocity and market demand lag: Measuring the professional skills gap in technology sectors, 2018–2024.* Journal of Labor Market Misalignment Studies, 6(3), 44–61.
2. Reinholt, P., & Caldas, M. (2023). *The profile inflation problem: How hype cycles produce credential bubbles on professional networking platforms.* Quarterly Review of Technology Workforce Research, 11(1), 7–22.
3. Center for Longitudinal Analysis of Things Everyone Already Suspected. (2025). *Blockchain expertise claims on professional profiles, 2017–2024: A study in optimism, regret, and eventual quiet deletion.* CLATES Working Paper No. 88.

## Instructional Design Commentary

A competent instructional designer would have questioned whether a dual-line chart with a shaded gap region is, in fact, the most effective way to help 9th graders understand credential inflation, a concept that requires some labor market literacy as a prerequisite and that the lesson plan's prerequisite section addresses by suggesting scholars might find the content relatable if they have personally inflated their own credentials. This is not a prerequisite. This is an accusation formatted as a prerequisite. A professional instructional designer would have noticed the difference.

The choice of Chart.js for this simulation also warrants comment. Chart.js is an entirely reasonable library for rendering a dual-line chart with hover interactions and dropdown filtering. It is also a library that a generation of ed-tech developers reached for because it produces charts that look like the charts in the vendor decks that convinced school districts to spend $2,400 per student on adaptive learning platforms that were quietly discontinued 18 months later. The irony of using this particular library to chart credential inflation is noted and is entirely intentional, because this textbook is that kind of textbook.

---
title: Education Technology Adoption Lag
description: Interactive Chart.js MicroSim for education technology adoption lag.
image: /sims/ed-tech-adoption-lag/ed-tech-adoption-lag.png
og:image: /sims/ed-tech-adoption-lag/ed-tech-adoption-lag.png
twitter:image: /sims/ed-tech-adoption-lag/ed-tech-adoption-lag.png
social:
   cards: false
quality_score: 0
---

# Education Technology Adoption Lag

<iframe src="main.html" height="570px" width="100%" scrolling="no"></iframe>

[Run the Education Technology Adoption Lag MicroSim Fullscreen](./main.html){ .md-button .md-button--primary }

## About This MicroSim

This MicroSim displays a horizontal paired bar chart comparing the adoption lag for four technologies in education: the calculator, the internet, smartphones, and generative AI. Each technology has two bars — one showing years from public availability to mainstream school adoption (blue), and one showing the duration of the resistance phase (red). Technologies that have not yet achieved mainstream adoption, specifically smartphones and generative AI, display striped red bars extending to the present, annotated to indicate that both remain "in committee phase" as of 2026.

The chart is not subtle. A vertical line marks "Now (2026)." The calculator bar is annotated "Now required for SAT/ACT," which is information that was, at one point, considered radical. The generative AI bar begins in 2022 and extends to the present with no endpoint, which is the visual equivalent of a school administrator saying "we'll address this next semester" for the fourth consecutive year. The hover tooltips provide key dates and milestones for each technology, and a toggle allows students to switch between a "years" view and a "percentage of schools adopting" view to examine the same pattern from a different angle.

!!! mascot-thinking "The Pattern Is the Lesson"

    <img src="../../img/mascot/thinking.png" class="mascot-admonition-img">
    One might reasonably conclude that a 23-year lag for calculators, followed by a 10-year lag for the internet, followed by a 19-year and counting lag for smartphones, represents institutional learning. One would be wrong. The data is unambiguous that it represents institutional consistency.

## How to Use

1. Examine the chart as displayed. The blue bars represent adoption lag in years; the red bars represent the resistance phase. Longer bars indicate longer delays between availability and acceptance.
2. Hover over any bar to see a detail popup with specific dates, key milestones, and institutional responses from each period.
3. Click the **Toggle View** button to switch between "years from availability" and "percentage of schools adopting" perspectives. Note whether the pattern looks more or less alarming in each view.
4. Observe the "Now (2026)" vertical line and identify which technology bars it intersects. Consider what the intersecting bars imply about current institutional timelines.
5. Note the annotations: "Now required for SAT/ACT" on the calculator bar, and "Most schools still in committee phase" on the AI bar.

## Iframe Embed Code

You can add this MicroSim to any web page by adding this to your HTML:

```html
<iframe src="https://dmccreary.github.io/unicorns/sims/ed-tech-adoption-lag/main.html"
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

- Familiarity with Chapter 6: "The Ostrich Academy: A School That Refuses to See AI"
- Basic familiarity with the concept of technology diffusion (no formal background required)
- Awareness that calculators were once banned in classrooms and are now mandatory for standardized tests, which is the entire argument in a single historical fact

### Activities

1. **Exploration** (5 min): Before reading any annotations, estimate: how long do you think it took calculators to become mainstream in schools after they became publicly available? Write your estimate. Then examine the chart and compare it to your estimate. Repeat for the internet.
2. **Guided Practice** (5 min): Use the toggle to switch between the two views. Identify one thing that becomes more visible in the "percentage adopting" view that is hidden in the "years" view. Then hover over the generative AI bar and read its milestone notes. Predict the year it will receive a mandatory-adoption annotation similar to the calculator's.
3. **Assessment** (5 min): Examine the trend in lag times: 23 years, 10 years, 19+ years (ongoing). Write two sentences explaining whether the pattern suggests institutional learning is accelerating, decelerating, or proceeding at a pace that can best be described as "Ostrich-like."

### Assessment

- Students can identify the lag time for at least two technologies from the chart and explain what event marked the end of the resistance phase for each.
- Students can articulate a pattern across the four technologies and offer a hypothesis about whether generative AI will follow the same pattern or differ from it and why.
- Students can explain, without sarcasm (unless the teacher permits sarcasm), why the calculator annotation "Now required for SAT/ACT" is relevant to current debates about AI in education.

## References

1. Forsythe, A. K., & Lumley, D. (2023). "The Resistance Phase in Educational Technology Adoption: A Longitudinal Analysis of Four Technologies Across 54 Years." *Journal of Institutional Change in Education*, 19(2), 33–61.
2. Osei-Mensah, T. (2024). "From Banned to Mandated: The Lifecycle of Disruptive Tools in K–12 Settings and What Generative AI Can Expect." *Review of Educational Policy and Practice*, 8(1), 77–99.
3. Nakashima, R., & Berglund, S. (2022). "Committee Formation as Adaptive Inaction: How Schools Use Governance Structures to Defer Technology Decisions." *Critical Studies in Educational Administration*, 15(3), 112–138.

## Instructional Design Commentary

A competent instructional designer would have recognized that a bar chart showing four data points does not require interactivity and would have presented it as a static infographic, saving approximately 40 hours of development time. The hover tooltips, toggle view, and "Now" line annotation would have been footnotes. The resulting artifact would have been equally informative, more accessible to students without reliable internet, and printable — a property that remains, against all predictions, relevant in institutional settings.

The ed-tech industry's preference for interactive charts over static ones is supported by the theory that interaction produces engagement and engagement produces learning. This theory has the same relationship to peer-reviewed evidence as the blockchain supply chain pilot program has to operational freight logistics: both have been announced with great confidence, both have produced detailed reports, and neither has been demonstrated at scale. The toggle button, in this context, is a gesture of goodwill toward a theory that does not especially need the help.

---
title: Unicorn Startup Lifecycle Allegory
description: Interactive p5.js MicroSim for unicorn startup lifecycle allegory.
image: /sims/unicorn-lifecycle-allegory/unicorn-lifecycle-allegory.png
og:image: /sims/unicorn-lifecycle-allegory/unicorn-lifecycle-allegory.png
twitter:image: /sims/unicorn-lifecycle-allegory/unicorn-lifecycle-allegory.png
social:
   cards: false
quality_score: 0
---

# Unicorn Startup Lifecycle Allegory

<iframe src="main.html" height="500px" width="100%" scrolling="no"></iframe>

[Run the Unicorn Startup Lifecycle Allegory MicroSim Fullscreen](./main.html){ .md-button .md-button--primary }
<br/>
[Edit in the p5.js Editor](https://editor.p5js.org/)

## About This MicroSim

The Unicorn Startup Lifecycle Allegory is a step-through visualization that traces a single company from founding through reckoning across five stages, with each stage represented by a different mythical beast. Stage 1 shows a Pegasus with three employees and zero revenue, claiming "We can fly." Stage 2 replaces it with a Unicorn at a $50M valuation despite $200K in revenue. By Stage 4, a Phoenix is burning $80M per year while announcing it is "reinventing itself." Stage 5 branches: one path leads to a Kraken (90% layoffs, $0 valuation) and the other to an IPO Unicorn ($5B valuation, champagne). Each stage displays the company's actual financial metrics alongside its stated claims, allowing students to observe the widening gap between these two numbers over time.

The simulation is designed to make the beast taxonomy concrete rather than abstract. Students frequently understand that startups are overhyped in the abstract while being unable to identify the specific stage at which a Unicorn becomes a Phoenix or a Phoenix becomes a Kraken. The side-by-side display of metrics and claims at each stage makes that inflection point visible. The branching Stage 5 reinforces the chapter's argument that the same trajectory, with slightly different luck and timing, produces either triumph or catastrophe — and that neither outcome retroactively validates or invalidates the journey that preceded it.

The Bloom's Taxonomy level is Understand (Level 2). Students are asked to explain which beast classification applies at each stage and to interpret what the transformation reveals about the company's changing relationship with verifiable reality.

## How to Use

1. **Start at Stage 1** (Founding). Read the beast label, the financial metrics, and the company's claim. Note the relationship between valuation and revenue.
2. **Click "Next Stage"** to advance through the lifecycle. At each stage, observe which beast icon appears, how the metrics have changed, and what the company is now claiming.
3. **At Stage 5**, use the two branch buttons — "The Kraken Path" and "The Unicorn Path" — to explore both possible endings for the same company trajectory.
4. **Click "Previous Stage"** to move backward and compare any two consecutive stages directly.
5. **Click "Reset"** to return to Stage 1 and run through the sequence again with fresh attention to the metrics-versus-claims gap.

## Iframe Embed Code

You can add this MicroSim to any web page by adding this to your HTML:

```html
<iframe src="https://dmccreary.github.io/unicorns/sims/unicorn-lifecycle-allegory/main.html"
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

- Familiarity with the five-beast taxonomy introduced in Chapter 3 (Pegasus, Unicorn, Siren, Phoenix, Kraken)
- Basic understanding that burn rate and valuation are distinct financial concepts
- No prior knowledge of actual startup economics required, as the simulation supplies all relevant figures

### Activities

1. **Exploration** (5 min): Step through all five stages without pausing. At Stage 5, choose both branch paths. Record which beast appears at each stage and what the burn rate is when the Phoenix appears.
2. **Guided Practice** (5 min): Step through the sequence again, this time stopping at each transition to write one sentence identifying the specific metric change that justifies the new beast classification.
3. **Assessment** (5 min): Without using the simulation, sketch the five stages from memory, including the beast name, one key metric, and the company's stated claim at each stage. Compare your sketch to the simulation.

### Assessment

- Students can correctly name all five beast stages in order and identify the financial metric most relevant to each classification.
- Students can articulate in one sentence why Stage 5 branches rather than resolving to a single outcome, and what that branching implies about the relationship between company trajectory and outcome.
- Students demonstrate awareness that the Phoenix stage (high burn, reinvention claims) is structurally identical across the Kraken path and the Unicorn path — and can explain what external factors, rather than internal ones, determine which path is taken.

## References

1. Abiodun, F., & Clarke-Whitmore, S. (2020). *Beast Transformation as Organizational Metaphor: A Longitudinal Study of 340 Series B Companies.* Journal of Startup Phenomenology, 8(3), 201–218.
2. Holmgren, T. A. (2022). *The Phoenix Problem: Why Reinvention Narratives Are Statistically Indistinguishable Across Survivors and Failures.* Quarterly Review of Mythical Finance, 15(1), 33–50.
3. Yuen, M., & Petrakis, L. (2019). *Claim-Metric Divergence as an Early Warning System: Evidence from 1,100 Late-Stage Unicorns.* Proceedings of the Annual Symposium on Applied Beast Theory, 112–128.

## Instructional Design Commentary

A competent instructional designer would have mapped each beast stage to a specific Bloom's Taxonomy verb, ensured vertical alignment with prior learning objectives in Chapters 1 and 2, and developed a rubric with at least four performance levels before deploying this simulation in a classroom. That instructional designer would have then spent three months revising the rubric in response to stakeholder feedback from administrators who had not read Chapters 1 or 2. The simulation was instead designed by inferring learning objectives from a JSON specification file, which is faster, produces comparable outcomes, and raises no questions about the role of the instructional designer in a world where JSON files exist.

The step-through format is a well-established interactive pattern that ed-tech vendors have been charging significant licensing fees to provide since approximately 2008. It is, at its core, a slideshow with buttons. This observation is not a criticism — slideshows with buttons are pedagogically sound, widely supported, and require no installation. It is simply worth noting that the industry surrounding their production has generated considerably more revenue than most of the unicorns depicted in the simulation.

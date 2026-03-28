---
title: Unicorn Population Dynamics Simulator
description: Interactive p5.js MicroSim for unicorn population dynamics simulator.
image: /sims/unicorn-population-dynamics/unicorn-population-dynamics.png
og:image: /sims/unicorn-population-dynamics/unicorn-population-dynamics.png
twitter:image: /sims/unicorn-population-dynamics/unicorn-population-dynamics.png
social:
   cards: false
quality_score: 0
---

# Unicorn Population Dynamics Simulator

<iframe src="main.html" height="500px" width="100%" scrolling="no"></iframe>

[Run the Unicorn Population Dynamics Simulator MicroSim Fullscreen](./main.html){ .md-button .md-button--primary }
<br/>
[Edit in the p5.js Editor](https://editor.p5js.org/)

## About This MicroSim

The Unicorn Population Dynamics Simulator models unicorn (startup) population growth over a simulated 20-year period using a differential equation system with Euler integration. Five sliders control the key parameters: Belief Level (public confidence in unicorns), VC Funding Rate (new capital entering the system), Instagram Exposure (media amplification), Reality Checking (due diligence rate), and Sparkle Decay (novelty depreciation). The main display is a live line chart with three colored traces — gold for unicorn population, red for reality index, and blue for belief index — all updating in real time as sliders are adjusted. Two preset scenario buttons, "Hype Bubble" and "Correction," provide scaffolded starting configurations for comparative analysis.

The simulation demonstrates a finding that the literature has documented but that no pitch deck has ever voluntarily included: increasing the Reality Checking parameter does not destroy the unicorn population. In moderate doses, it produces slower and more sustainable growth. At high doses combined with moderate funding, it produces a stable long-term population that dramatically exceeds the peak of an unchecked hype bubble. This is, of course, counterintuitive to everyone who has made money selling the bubble and has therefore not been widely distributed as a result.

The Bloom's Taxonomy level is Apply (Level 3). Students manipulate parameters, observe outcomes, form hypotheses, and test them — the standard apply-level loop. The preset scenarios provide scaffolding for students who benefit from a concrete starting point before open exploration, while the free slider configuration enables discovery of non-obvious dynamics that no amount of reading about systems thinking will produce as reliably as actually running the simulation.

## How to Use

1. **Click "Run Simulation"** to start the model with default slider values. Observe the three lines as they develop over the 20-year x-axis.
2. **Adjust the sliders** one at a time to observe the effect of each parameter in isolation. Begin with Belief Level, then VC Funding Rate, then Reality Checking.
3. **Click "Scenario: Hype Bubble"** to set high belief, high funding, and low reality checking simultaneously. Note when the gold line peaks and when it crashes.
4. **Click "Scenario: Correction"** to switch to post-bubble conditions and observe the difference in the long-run population level.
5. **Click "Reset"** to return all sliders to their default values and run a baseline comparison.
6. Experiment with combinations: try maximum Reality Checking paired with moderate Funding and observe whether the result is what you expected.

## Iframe Embed Code

You can add this MicroSim to any web page by adding this to your HTML:

```html
<iframe src="https://dmccreary.github.io/unicorns/sims/unicorn-population-dynamics/main.html"
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

- Familiarity with the concept of feedback loops from Chapter 12 or prior coursework
- Basic ability to read a line chart with two y-axis scales
- No calculus required; the Euler integration is handled by the simulation, not the student

### Activities

1. **Exploration** (5 min): Run the simulation at default settings. Identify the year at which the Belief Index line and the Reality Index line first cross. Record that year and the unicorn population at the crossing point.
2. **Guided Practice** (5 min): Load the Hype Bubble preset and note the peak unicorn population and the year of the crash. Load the Correction preset and compare the long-run population at year 20. Write one sentence identifying which scenario produces more total unicorns across the full 20 years.
3. **Assessment** (5 min): Without using a preset, configure sliders to produce the most stable long-run unicorn population you can achieve — meaning the population at year 20 is within 10% of the population at year 10. Record your slider values and explain in one sentence why you chose them.

### Assessment

- Students can identify the parameter that has the largest marginal effect on peak unicorn population and explain the mechanism by which it operates.
- Students can correctly predict the direction of change in the gold line when Reality Checking is increased from 20% to 60%, and can explain why the result may be counterintuitive.
- Students demonstrate understanding of the belief-reality crossing point as a structural feature of all scenarios, not merely the default, and can articulate what the crossing represents in non-mythical terms.

## References

1. Ferreiro, J., & Blanc-Dumont, C. (2021). *Differential Equation Models of Startup Belief Dynamics: A Pedagogical Framework.* Journal of Computational Finance Education, 9(2), 77–95.
2. Krishnamurthy, P., & Al-Rashid, F. (2020). *Boom-Bust Cycles in Venture Capital: A Systems Dynamics Perspective on 30 Years of U.S. Unicorn Data.* Review of Mythical Economics, 4(1), 12–31.
3. Osei, B. A. (2023). *The Counterintuitive Effect of Due Diligence on Long-Run Startup Population Stability.* Proceedings of the Annual Conference on Things No One in Venture Capital Wants to Hear, 44–58.

## Instructional Design Commentary

A competent instructional designer would have begun the design of this simulation by consulting subject matter experts in systems dynamics, reviewing the relevant literature on parameter-exploration learning activities, and conducting a needs assessment to confirm that students in the target grade band have sufficient prior knowledge to interpret a dual-index line chart without scaffolding. This process would have produced a detailed design document, a prototype tested with eight students, a revised prototype tested with twelve more, and a final version that looks essentially identical to what was produced from a specification JSON in under five minutes. The needs assessment would have found that students do not know what Euler integration is, which is fine, because neither do most of the VCs whose investment behavior the model simulates.

The population dynamics format has a distinguished history in science education, where it is used to teach predator-prey relationships, disease spread, and now, with equal seriousness, venture capital. The fact that unicorn population dynamics respond to the same differential equation structure as a classic Lotka-Volterra system is either a deep insight about the nature of ecological competition or a sign that the model is not taking sufficient liberties with reality. The literature is divided. Further research is needed, and will not be funded.

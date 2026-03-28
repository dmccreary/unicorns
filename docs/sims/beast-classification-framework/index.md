---
title: Beast Classification Framework
description: Interactive p5.js MicroSim for beast classification framework.
image: /sims/beast-classification-framework/beast-classification-framework.png
og:image: /sims/beast-classification-framework/beast-classification-framework.png
twitter:image: /sims/beast-classification-framework/beast-classification-framework.png
social:
   cards: false
quality_score: 0
---

# Beast Classification Framework

<iframe src="main.html" height="510px" width="100%" scrolling="no"></iframe>

[Run the Beast Classification Framework MicroSim Fullscreen](./main.html){ .md-button .md-button--primary }
<br/>
[Edit in the p5.js Editor](https://editor.p5js.org/)

## About This MicroSim

This interactive classification tool renders each of the ten mythical beasts from Chapter 2 as a six-dimensional radar chart, allowing students to examine precisely why a Dragon and a Centaur occupy fundamentally different positions in the taxonomy despite both being compositely structured creatures with above-average allegorical weight. The six dimensions — Morphology Complexity, Primary Ability Power, Disposition, Habitat Accessibility, Rarity, and Allegorical Weight — constitute the complete classification framework developed in Chapter 2. Each dimension is scored on a consistent numerical scale, with Disposition ranging from -2 (fully hostile) to +2 (fully benevolent), making the Dragon and Minotaur the framework's clearest exemplars of institutional destructiveness and the Pegasus its clearest exemplar of optimistic overextension.

The comparison mode is the pedagogical core of this simulation. By overlaying two radar charts simultaneously, students can perform the kind of direct structural comparison that the Chapter 2 taxonomy demands but that prose descriptions of individual creatures cannot efficiently support. The Dragon's Ability Power rating of 5 combined with a Disposition of -2 produces a profile that is, the data confirms, structurally identical to several well-documented technology deployments. The Centaur's profile — high Morphology Complexity, moderate Ability Power, positive Disposition, and the highest possible Allegorical Weight — maps to a concept that Chapter 8 examines in considerably more detail and that several technology companies have announced they are building without appearing to have read Chapter 8 first.

This MicroSim operates at Bloom's Taxonomy Level 4 (Analyze), requiring students to classify and compare rather than merely describe. Students who find that all ten creatures look essentially the same on the radar chart are encouraged to reconsider their slider readings and, if the problem persists, the chapter text.

## How to Use

- **Select a creature** from the dropdown menu in the left panel. The radar chart in the center panel will update immediately to display that creature's six-dimension profile.
- **Read the info card** in the right panel for the selected creature's name, brief description, allegorical function, and Modern Equivalent — a one-line mapping of the beast to a current technology or institutional phenomenon.
- **Enable Compare Mode** by clicking the "Compare Mode" toggle button. A second dropdown will appear, allowing you to select a second creature. Both radar charts will be overlaid on the same axes in contrasting colors.
- **Click "Randomize"** to select a random creature for quick exploration. Useful for students who cannot decide which beast to examine first, which the literature suggests is most of them.
- **Hover over any radar axis label** to see a tooltip definition of that dimension, including the scale endpoints and the rationale for the scoring.

## Iframe Embed Code

You can add this MicroSim to any web page by adding this to your HTML:

```html
<iframe src="https://dmccreary.github.io/unicorns/sims/beast-classification-framework/main.html"
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

- Completion of the Chapter 2 taxonomy section describing the six classification dimensions and their scoring rationale
- Familiarity with polar coordinate representation sufficient to understand that a larger filled area on a radar chart indicates higher scores across dimensions, and that this does not automatically make the creature in question desirable
- The recognition that "Disposition: -2" on a chart labeled "Fully Hostile" is a finding, not a formatting error

### Activities

1. **Exploration** (5 min): Select the Dragon from the dropdown and examine its radar profile. Then select the Phoenix and examine its profile. Without using Compare Mode yet, write down the two dimensions where these creatures differ most significantly. Then enable Compare Mode to verify your observation. Note whether you were correct, and if not, note which dimension surprised you and why your intuition about dragon-versus-phoenix destructiveness was miscalibrated.

2. **Guided Practice** (5 min): Use Compare Mode to compare the Centaur to the Minotaur. Both score high on Morphology Complexity and Allegorical Weight. Identify the single dimension that most clearly separates them, and write one sentence explaining why this dimensional difference corresponds to the allegorical difference between human-AI collaboration (Centaur) and bureaucratic obstruction (Minotaur). If you find this comparison disturbing in its accuracy, the feeling is appropriate.

3. **Assessment** (5 min): Without using the simulation, draw a rough sketch of what you expect the Kraken's radar chart to look like, based on your reading of Chapter 2. Then open the simulation, select the Kraken, and compare your sketch to the actual profile. Identify any dimensions where your expectation was wrong and explain what the discrepancy reveals about your prior mental model of the Kraken's role in the taxonomy.

### Assessment

- Students can verbally describe the radar profile of any three creatures — including approximate scores on all six dimensions — without referring to the simulation, demonstrating that the visual encoding has supported knowledge transfer to memory rather than remaining purely an on-screen reference.
- Students can use Compare Mode to identify the single most diagnostic dimension separating any two creatures selected at random, and can connect that dimensional difference to the allegorical distinction described in Chapter 2.
- Students can explain in writing why Allegorical Weight is a separate dimension from Rarity, using at least one creature as an example where the two scores diverge significantly. The Minotaur scores 5 on Allegorical Weight and 5 on Rarity, which makes it an unhelpful example for this purpose. Students are encouraged to find a better one.

## References

1. Fenwick, D. and Osei-Bonsu, A. (2021). *Multi-Dimensional Taxonomic Visualization in Secondary Science Education: Radar Charts as Classification Tools*. Journal of Science Education Technology, 30(3), 412–429. The study found that students who used radar charts to compare organisms retained classification criteria significantly better than students who read tables, and significantly worse than students who designed their own classification systems, a finding the authors declined to act on.

2. Marchetti, G. and Park, Y. (2023). *Allegorical Weight as a Measurable Construct: Toward a Quantitative Framework for Symbolic Significance*. Interdisciplinary Studies in Cultural Semiotics, 11(1), 55–73. The authors propose a scoring rubric for allegorical weight that is, by their own admission, entirely subjective, which they describe as "consistent with the field."

3. Okonkwo, F. (2022). *Polar Coordinate Visualization and Analyze-Level Cognition: Does Making Students Look at Spider Graphs Actually Develop Critical Thinking*. Educational Technology Research and Development, 70(2), 789–804. The paper's conclusion is "probably yes, in some cases, under certain conditions," which received a Best Paper nomination at the annual conference.

## Instructional Design Commentary

A competent instructional designer would have user-tested this radar chart with a representative sample of ninth-graders before deployment, discovering that at least 40 percent of students initially interpret a larger filled polygon as "better" regardless of what the dimensions measure, and that explaining why a Dragon's large profile is alarming rather than impressive requires approximately four minutes of additional instruction not currently included in the lesson plan. A competent instructional designer would then have revised the color scheme, added directional annotations to each axis, and commissioned a brief explainer video. The video would have been produced in a format incompatible with the LMS, and the lesson would have launched without it.

What this simulation does instead is trust that color-coded disposition scores and axis labels reading "Fully Hostile" are sufficient to communicate that a Disposition score of -2 is not a positive attribute, and that students who complete the Chapter 2 reading will arrive with enough context to interpret the chart without additional scaffolding. The instructional design assumption here — that prerequisites are prerequisites — is either pedagogically sound or evidence that the designer has never met a student who skipped the reading. Both are possibilities the data cannot currently distinguish.

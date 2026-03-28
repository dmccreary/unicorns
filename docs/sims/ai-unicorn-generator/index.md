---
title: AI Unicorn Feature Generator
description: Interactive p5.js MicroSim for ai unicorn feature generator.
image: /sims/ai-unicorn-generator/ai-unicorn-generator.png
og:image: /sims/ai-unicorn-generator/ai-unicorn-generator.png
twitter:image: /sims/ai-unicorn-generator/ai-unicorn-generator.png
social:
   cards: false
quality_score: 0
---

# AI Unicorn Feature Generator

<iframe src="main.html" height="550px" width="100%" scrolling="no"></iframe>

[Run the AI Unicorn Feature Generator MicroSim Fullscreen](./main.html){ .md-button .md-button--primary }
<br/>
[Edit in the p5.js Editor](https://editor.p5js.org/)

## About This MicroSim

This MicroSim is a unicorn configurator. Students select technical features for an AI-enhanced mythical creature — horn type, wing configuration, hoof technology, data processing capacity, wireless range, and aesthetic sparkle level — and the system generates a creature profile, a satirical startup name, and a venture capital valuation calculated from the selected components. The valuation formula is not complicated: a standard spiral horn is worth nothing to investors, but a quantum processor horn adds $2 billion, and a blockchain node horn adds $800 million, because these are the numbers that make sense in the current funding environment.

The inverse relationship between valuation and probability of working is the central pedagogical mechanism. A unicorn configured with a quantum processor horn, drone rotors, and rocket-propelled hooves will receive a valuation in excess of $5 billion and a working probability of approximately 1%. A unicorn with a standard horn and traditional hooves will be valued at $100 million — still an impressive sum for an animal whose existence remains unverified — and will have a working probability approaching 98%. Students who find this relationship counterintuitive have been paying insufficient attention to Chapter 12.

The sparkle level slider controls a multiplier of up to 2x applied to the final valuation. It has no effect on the probability of working. This is, by design, the most accurate feature of the simulation.

## How to Use

Use the three dropdown menus to select the horn type, wing configuration, and hoof type for your unicorn. Use the three sliders to set data processing capacity (0–100 teraflops), wireless range (0–500 meters), and sparkle level (1–10). When you have configured your unicorn, click **Generate Pitch** to produce the creature's full profile — including its auto-generated name, estimated VC valuation, probability of actually working, and a satirical tagline assembled from its feature set. Click **Randomize** to generate a random configuration, which will typically produce a higher valuation than any configuration you select deliberately. Click **Export as Pitch Deck Slide** to see a formatted text summary suitable for presenting to an imaginary investor.

## Iframe Embed Code

You can add this MicroSim to any web page by adding this to your HTML:

```html
<iframe src="https://dmccreary.github.io/unicorns/sims/ai-unicorn-generator/main.html"
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

- Completion of Chapter 12, which establishes the satirical mapping between AI product features and startup valuations
- Familiarity with the concept of "AI washing" as introduced in the pitch deck simulation
- No prior knowledge of venture capital is required; the simulation is designed to be self-explanatory to anyone who has ever watched a product launch keynote

### Activities

1. **Exploration** (5 min): Configure two unicorns: one with the most technologically impressive features available, and one with the most traditional. Generate the pitch card for each. Record the valuation and the probability of working for both. Note the direction of the relationship between these two numbers.
2. **Guided Practice** (5 min): Use the Randomize button three times and record the valuation and probability of working for each random configuration. Then attempt to manually configure a unicorn with both a high valuation and a high probability of working. Describe in one sentence what you discover.
3. **Assessment** (5 min): Design the unicorn you would actually want to exist — optimizing for probability of working rather than valuation. Export it as a pitch deck slide. Then write a two-sentence explanation of why this configuration would not receive Series A funding.

### Assessment

- The student can explain, without prompting, why the sparkle level slider affects valuation but not probability of working, and what real-world analogue this represents.
- The student can construct an argument, based on the simulation's valuation formula, for why the most investor-attractive version of a product is structurally different from the most functional version of the same product.
- The student can identify at least two specific feature choices in the simulation that are direct satirical analogues to actual AI industry marketing claims.

## References

1. Damodaran, A. (2023). *Narrative and Numbers: The Valuation of Companies That Have Neither Customers Nor Products but Excellent Pitch Decks*. Journal of Corporate Finance, 41(2), 199–218.
2. Weizenbaum, J. & Hofstadter, R. (2021). *The Feature Premium: Why Incremental Technical Complexity Generates Exponentially Higher Valuations in Early-Stage AI Startups*. Venture Capital Research Journal, 14(3), 77–94.
3. Turkle, S. & Lanier, J. (2024). *Aesthetic Multipliers: The Role of Presentation, Sparkle, and Confident Naming in Series A Fundraising Outcomes for Artificial Intelligence Ventures*. Harvard Business School Working Paper 24-117.

## Instructional Design Commentary

A competent instructional designer would have conducted a usability study before deploying this simulation, recruiting twelve representative students to interact with the configurator while thinking aloud, then analyzing the recordings for points of confusion. The study would have determined that students found the inverse relationship between valuation and probability of working "confusing" and "counterintuitive," and would have recommended adding a tutorial overlay explaining it. The instructional designer would not have considered the possibility that "confusing" and "counterintuitive" are precisely the correct responses — that the confusion is the learning objective, and that smoothing it away with a tutorial would eliminate the only moment in the simulation where the student is required to hold two contradictory things in mind at the same time.

The ed-tech industry's preference for frictionless user experiences has produced a generation of educational software that congratulates students for doing things they already knew how to do. This simulation contains friction by design. If a student reaches the end of the activity and feels slightly unsettled about the relationship between technological complexity and probability of success in the real economy, the simulation has succeeded. If they feel proud of their valuation number, they may have a future in venture capital.

---
title: Blockchain Application Vaporware Classifier
description: Interactive p5.js MicroSim for blockchain application vaporware classifier.
image: /sims/blockchain-vaporware-classifier/blockchain-vaporware-classifier.png
og:image: /sims/blockchain-vaporware-classifier/blockchain-vaporware-classifier.png
twitter:image: /sims/blockchain-vaporware-classifier/blockchain-vaporware-classifier.png
social:
   cards: false
quality_score: 0
---

# Blockchain Application Vaporware Classifier

<iframe src="main.html" height="450px" width="100%" scrolling="no"></iframe>

[Run the Blockchain Application Vaporware Classifier MicroSim Fullscreen](./main.html){ .md-button .md-button--primary }
<br/>
[Edit in the p5.js Editor](https://editor.p5js.org/)

## About This MicroSim

This MicroSim presents eight blockchain applications as draggable cards, each accompanied by a brief description of its current state. Students drag each card onto a five-zone spectrum ranging from "Shipping Product" (green) to "Pure Unicorn" (red), making graduated judgments about technology maturity before checking their answers against the expert classifications. The zones in between — "Works in Lab," "Aspirational," and "Announced" — represent the territory where most blockchain promises have resided, at considerable expense to investors, for approximately a decade.

The instructional purpose is to develop discrimination. The technology press releases that accompany blockchain applications are, without exception, written at the "Shipping Product" register regardless of actual status. By forcing a placement decision and then receiving corrective feedback with explanations, students build the analytical habit of asking what, precisely, has been demonstrated rather than what has been announced. This skill transfers directly to evaluating any technology claim, unicorn-related or otherwise.

!!! mascot-thinking "The Spectrum Exists Because Reality Is Not Binary"

    <img src="../../img/mascot/thinking.png" class="mascot-admonition-img">
    The literature suggests that 94.3% of blockchain press releases describe the product as "revolutionary" regardless of whether the product ships, works, or exists. The five-zone spectrum was designed specifically to accommodate this situation.

## How to Use

1. Read each application card. The description on the card summarizes the technology's current real-world state in one or two sentences.
2. Drag the card to the zone on the spectrum that best represents the application's maturity: **Shipping Product**, **Works in Lab**, **Aspirational**, **Announced**, or **Pure Unicorn**.
3. Once you have placed all eight cards, click **Check Answers** to see the correct classifications and read the explanations for each.
4. Click **Reset** to return all cards to their starting positions and try again with different placements.
5. Hover over any spectrum zone label to see a precise definition of that zone's criteria.

## Iframe Embed Code

You can add this MicroSim to any web page by adding this to your HTML:

```html
<iframe src="https://dmccreary.github.io/unicorns/sims/blockchain-vaporware-classifier/main.html"
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

- Familiarity with the concept of a technology hype cycle
- Basic understanding that blockchain is a distributed record-keeping technology (no deeper technical knowledge required)
- Completion of Chapter 16: "Efficient Blockchain: The Distributed Ledger of Narnia"

### Activities

1. **Exploration** (5 min): Without checking answers, place all eight application cards on the spectrum based on your initial judgment. Note which placements felt uncertain and why.
2. **Guided Practice** (5 min): Click Check Answers and read each explanation. For every card you placed incorrectly, identify whether you overestimated or underestimated the application's maturity. Consider what kind of evidence would move a card from "Announced" to "Works in Lab."
3. **Assessment** (5 min): Reset and reclassify. Then write one sentence explaining why "Decentralized Autonomous Country" lands in "Pure Unicorn" rather than merely "Announced." If your sentence contains the word "obviously," revise it.

### Assessment

- Students can articulate a specific criterion that distinguishes "Works in Lab" from "Aspirational" (e.g., the existence of a working prototype versus a stated intention to build one).
- Students correctly classify at least six of the eight applications on an unassisted second attempt.
- Students can explain, without using marketing language, why "Blockchain-verified organic food certification" has not advanced beyond the press release stage despite 7 years of press releases.

## References

1. Thornwick, R. S., & Baumgartner, L. (2023). "Vaporware Taxonomy in Distributed Systems: A Classification Framework for Technologies That Exist Primarily in Announcements." *Journal of Speculative Infrastructure*, 14(2), 88–117.
2. Pellegrino, C. (2022). "The Pilot Program Plateau: Why Blockchain Supply Chain Proofs of Concept Never Become Production Systems." *Proceedings of the Annual Conference on Technology That Was Going to Change Everything*, Vol. 9, 203–219.
3. Osei-Kwame, D., & Ferreira, M. (2024). "Decentralized Autonomous Organizations in Practice: A Longitudinal Study of 47 DAOs, of Which 12 Still Exist." *Review of Institutional Governance*, 31(1), 4–29.

## Instructional Design Commentary

A competent instructional designer would have begun this project with a learner analysis, identifying the specific misconceptions students hold about blockchain maturity before designing a drag-and-drop interaction to correct them. That analysis would have revealed that the primary misconception is not about blockchain at all but about press releases — specifically, the belief that a detailed and confident press release indicates a working product. The interaction would then have been redesigned accordingly, and the five-zone spectrum would have been replaced with a two-zone spectrum labeled "Exists" and "Does Not Exist." This would have been more accurate and taken three minutes to use.

The ed-tech industry's preference for drag-and-drop interactions over direct instruction reflects a theory of learning in which engagement is a proxy for understanding. A student who spends four minutes dragging cards around a spectrum is assumed to be learning more than a student who spends four minutes reading a table. The literature on this assumption is mixed. The venture capital industry's preference for funding interactive learning platforms over direct instruction reflects a different theory, in which engagement is a proxy for retention, which is a proxy for monthly active users, which is a proxy for valuation. The literature on this assumption is also the subject of ongoing committee review.

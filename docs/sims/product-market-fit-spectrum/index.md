---
title: Product-Market Fit Spectrum
description: Interactive p5.js MicroSim for product-market fit spectrum.
image: /sims/product-market-fit-spectrum/product-market-fit-spectrum.png
og:image: /sims/product-market-fit-spectrum/product-market-fit-spectrum.png
twitter:image: /sims/product-market-fit-spectrum/product-market-fit-spectrum.png
social:
   cards: false
quality_score: 0
---

# Product-Market Fit Spectrum

<iframe src="main.html" height="450px" width="100%" scrolling="no"></iframe>

[Run the Product-Market Fit Spectrum MicroSim Fullscreen](./main.html){ .md-button .md-button--primary }
<br/>
[Edit in the p5.js Editor](https://editor.p5js.org/)

## About This MicroSim

The Product-Market Fit Spectrum is an interactive drag-and-drop classification tool that presents eight startup scenario cards, each describing a company's growth claims in two to three sentences. Students drag each card to its correct position along a horizontal spectrum running from "Verified PMF" on the left, through an "Aspirational" middle zone, to "Mythical PMF" on the right. The spectrum is color-coded from green through gold to red, with labeled milestone markers including "Revenue exceeds costs," "Organic growth observed," "Metrics selectively reported," and "Product does not exist yet." A score counter tracks correct placements, and a "Check Answers" button reveals correct positions alongside explanations.

This simulation addresses a persistent gap in startup literacy education: the inability to distinguish between evidence and the performance of evidence. A company reporting $50M ARR that derives $48M from a single government contract is not the same as a company with $50M in diversified recurring revenue, and yet both press releases will read identically. The spectrum format reflects the genuine ambiguity of real-world startup evaluation, where most interesting cases fall in the uncomfortable middle rather than cleanly at either pole. A second card set, loaded via the "New Scenarios" button, allows extended practice and prevents students from simply memorizing placements on the first pass.

The Bloom's Taxonomy level for this simulation is Evaluate (Level 5). The drag-to-classify interaction requires students to assess the quality of evidence behind each claim and make a judgment call before receiving feedback — a meaningfully different cognitive task from multiple choice, where the correct answer is always present on the screen and available for reverse-engineering.

## How to Use

1. **Read each card** in the deck below the spectrum. Each card describes a startup's claimed metrics or growth story.
2. **Drag each card** to the position on the spectrum you believe best represents its quality of evidence — leftward for verified, rightward for mythical.
3. **Click "Check Answers"** to see how many cards are correctly placed. Each card snaps to its correct position and displays an explanation.
4. **Click "Reset"** to return all cards to the deck and try again with a cleaner judgment.
5. **Click "New Scenarios"** to load a second set of eight cards with different startup scenarios.

## Iframe Embed Code

You can add this MicroSim to any web page by adding this to your HTML:

```html
<iframe src="https://dmccreary.github.io/unicorns/sims/product-market-fit-spectrum/main.html"
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

- Familiarity with the concept of product-market fit as introduced in Chapter 3
- Basic understanding that "valuation" and "revenue" are not the same number
- An open mind regarding the possibility that a hockey stick chart requires more than one data point

### Activities

1. **Exploration** (5 min): Without using the Check Answers button, drag all eight scenario cards to positions on the spectrum based on your initial judgment. Note which placements felt certain and which felt ambiguous.
2. **Guided Practice** (5 min): Click Check Answers and review each explanation. Identify the two or three cards you found most difficult to place. What specific language in those cards made the evidence quality hard to assess?
3. **Assessment** (5 min): Load the second scenario set with "New Scenarios" and attempt to place all eight cards without any discussion. Record your score and compare it with your first-set score to assess whether your calibration improved.

### Assessment

- Students correctly place at least 6 of 8 scenario cards on the first scenario set without prompting.
- Students can articulate in writing why at least one "Aspirational" card is not "Verified," citing specific features of the evidence rather than the headline number.
- Students demonstrate awareness that the same revenue figure can represent different evidence quality depending on its source, concentration, and cost of acquisition.

## References

1. Thornborough, R. E., & Kessler-Mao, D. (2019). *Evidence-Based Valuation in Early-Stage Ventures: A Taxonomy of Claims.* Journal of Entrepreneurship Research, 44(2), 118–135.
2. Vasquez, P. A. (2022). *The Selective Metric Problem: How Founders Choose What Not to Disclose.* Stanford Social Innovation Review (Fictional Supplement), 17(1), 9–23.
3. Chandra, L., & Oppenheim, F. (2021). *From Demo to Product: The 11.4-Month Gap in Startup Reality Onset.* Proceedings of the Annual Conference on Mythical Business Models, 88–102.

## Instructional Design Commentary

A competent instructional designer would have begun this project with a formal learner analysis to determine whether 9th graders actually understand what "ARR" means before being asked to evaluate it, and would have piloted the scenario cards with a representative sample of 30 students across three demographic groups before deployment. That instructional designer would have been replaced by a prompt approximately nine months ago, and the prompt does not conduct pilot studies. The resulting simulation is functional, earnest, and was completed in under four minutes, which is either a triumph of efficiency or evidence for the simulation's own thesis, depending on where you drag it on the spectrum.

The ed-tech industry's enthusiasm for drag-and-drop interactions deserves acknowledgment here. Dragging a card to a position on a spectrum feels meaningfully different from clicking a radio button, and it is, in the sense that it takes longer. The research on whether the physical act of dragging improves retention versus simply clicking "B" is mixed, primarily because it is very difficult to secure funding for studies whose most likely finding is "it does not matter." The literature suggests further research is needed.

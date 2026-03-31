---
title: Claim Verification Decision Tree
description: Interactive p5.js MicroSim for claim verification decision tree.
image: /sims/claim-verification-tree/claim-verification-tree.png
og:image: /sims/claim-verification-tree/claim-verification-tree.png
twitter:image: /sims/claim-verification-tree/claim-verification-tree.png
social:
   cards: false
quality_score: 0
---

# Claim Verification Decision Tree

<iframe src="main.html" height="580px" width="100%" scrolling="no"></iframe>

[Run the Claim Verification Decision Tree MicroSim Fullscreen](./main.html){ .md-button .md-button--primary }
<br/>
[Edit in the p5.js Editor](https://editor.p5js.org/)

## About This MicroSim

This MicroSim presents an interactive decision tree for evaluating AI-related claims. Students select a pre-loaded claim — or enter their own — and then navigate through a five-node verification process by answering Yes or No at each decision point. The nodes address the fundamental questions of verification in sequence: Is the claim falsifiable? Is evidence provided? Is the evidence independent? Has the result been replicated? Are limitations disclosed? Each path through the tree terminates in one of four classifications: Verified, Plausible, Unsupported, or Unicorn-Level Fantasy.

The pre-loaded claims range from "GPT-4 passes the bar exam in the 90th percentile" (which navigates to Verified) to "Our platform will achieve AGI within 3 years" (which does not reach Node 1, because it is not a falsifiable claim but a marketing projection). The side panel records the history of evaluated claims, which tends to reveal, over the course of a 10-minute session, that the majority of AI claims in the news do not survive contact with Node 2.

!!! mascot-thinking "Not a Claim — It Is Marketing"

    <img src="../../img/mascot/thinking.png" class="mascot-admonition-img">
    The data is unambiguous. Node 1 eliminates approximately 67% of AI press releases before any evidence is examined. This is not a flaw in the tree. This is the tree working correctly.

## How to Use

1. Use the **Select Claim** dropdown to choose one of the five pre-loaded AI claims, or select "Enter Custom Claim" to type your own.
2. Read the claim displayed at the top of the tree. Consider your initial reaction before proceeding.
3. At each decision node, read the question carefully and click either **Yes** or **No** based on what you know (or can reasonably infer) about the claim.
4. Follow the highlighted path through the tree until you reach a terminal classification.
5. Read the classification result and its explanation. The confidence level indicator reflects how far the claim traveled through the tree before terminating.
6. Click **Try Another Claim** to advance to the next pre-loaded claim, or **Reset** to return to the starting state.
7. Review the side panel's claim history to compare classifications across multiple examples.

## Iframe Embed Code

You can add this MicroSim to any web page by adding this to your HTML:

```html
<iframe src="https://dmccreary.github.io/unicorns/sims/claim-verification-tree/main.html"
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

- Familiarity with Chapter 11: "Unicorn Spotting: Separating Fact from Fantasy in Tech Claims"
- Basic understanding that a falsifiable claim is one that could, in principle, be proven wrong
- Access to at least one recent AI news headline to use as a custom claim (optional but recommended)

### Activities

1. **Exploration** (5 min): Work through all five pre-loaded claims in sequence. For each one, predict the terminal classification before clicking any buttons. Record how many predictions were correct and which node most often surprised you.
2. **Guided Practice** (5 min): Enter a custom claim sourced from a real AI press release, news article, or company website. Navigate the tree and note where the claim terminates. Discuss: does the terminal classification reflect your prior assessment of the claim?
3. **Assessment** (5 min): Using the claim "Our AI reduces customer churn by 40%," write one sentence explaining why it terminates at "Plausible but self-reported" rather than "Verified," and one sentence explaining what specific additional evidence would move it to "Verified."

### Assessment

- Students can explain what makes a claim falsifiable and provide one example of a claim that fails Node 1.
- Students correctly navigate at least three of the five pre-loaded claims to their terminal classifications on first attempt.
- Students can articulate the difference between "Plausible" and "Verified" in terms of the specific verification steps that separate them, without using the words "basically" or "kind of."

## References

1. Marchetti, S., & Okonkwo, F. (2024). "The Falsifiability Threshold in AI Capability Claims: A Content Analysis of 312 Corporate Press Releases, 2020–2024." *Journal of Evidence-Based Technology Assessment*, 6(1), 18–47.
2. Devereux, H. C. (2023). "Independent Replication as a Rounding Error: Why AI Benchmark Results Are Not Reproduced and Why Nobody Checks." *Critical Studies in Machine Learning*, 11(3), 200–224.
3. Waller, P. G., & Tran, B. (2022). "Unicorn-Level Fantasy: Toward a Formal Taxonomy of Technology Claims That Cannot Be Falsified Because They Are Not Actually Claims." *Proceedings of the Symposium on Epistemic Standards in Emerging Technology*, Vol. 4, 77–93.

## Instructional Design Commentary

A competent instructional designer would have field-tested the decision tree with actual students before deploying it and would have discovered that Node 1 — "Is the claim specific and falsifiable?" — requires prerequisite knowledge of epistemology that the average 9th grader does not possess. A remedial branch would then have been added explaining what falsifiability means, which would have made the interaction 40% longer and eliminated the budget for the side panel. The final product would have been a decision tree about a concept students already understood, which is the standard outcome of instructional design by committee.

The broader irony, which the literature has examined at length without resolving, is that an interactive decision tree about claim verification is itself a claim — specifically, the claim that navigating five Yes/No nodes produces the same cognitive outcome as actually reading and evaluating evidence. This claim has not been replicated. Limitations have not been disclosed. It is, by the tree's own standards, classified as Plausible.

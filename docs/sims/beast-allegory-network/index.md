---
title: Mythical Beast Allegory Network
description: Interactive vis-network MicroSim for mythical beast allegory network.
image: /sims/beast-allegory-network/beast-allegory-network.png
og:image: /sims/beast-allegory-network/beast-allegory-network.png
twitter:image: /sims/beast-allegory-network/beast-allegory-network.png
social:
   cards: false
quality_score: 0
---

# Mythical Beast Allegory Network

<iframe src="main.html" height="735px" width="100%" scrolling="no"></iframe>

[Run the Mythical Beast Allegory Network MicroSim Fullscreen](./main.html){ .md-button .md-button--primary }
<br/>
[Edit in the p5.js Editor](https://editor.p5js.org/)

## About This MicroSim

This interactive network graph maps the full allegorical ecosystem of Chapter 2, displaying all eleven mythical beasts as nodes alongside their real-world counterparts, connected by four distinct relationship types. Beast nodes are color-coded by disposition — green for benevolent creatures such as the Unicorn and Pegasus, gold for ambivalent figures such as the Phoenix and Centaur, and red for those with demonstrably destructive tendencies, including the Dragon, Kraken, and Siren. Allegory nodes appear as rounded rectangles on the right side of the graph, each representing a modern phenomenon including overhyped startups, disruptive technology, large-scale tech failure, and seductive automation. The precise layout of these nodes is determined by a physics simulation, which is the most honest way to model the tech industry's organizational structure.

Edges between nodes encode four relationship types: "Represents" arrows connect each beast to its allegorical counterpart; "Opposes" edges mark beasts in structural conflict, such as the Phoenix opposing the Dragon; "Collaborates" edges identify productive partnerships; and "Enables" arrows trace causal chains, most notably the Siren enabling the Kraken, which the literature suggests is the canonical pathway from automation complacency to catastrophic institutional failure. The node size of each beast reflects the number of chapters in which it appears, providing an inadvertent measure of which modern phenomena receive the most sustained academic attention in this textbook.

This MicroSim operates at Bloom's Taxonomy Level 2 (Understand), requiring students to explain and interpret rather than merely recall. The allegory system presented here is not a metaphor. It is a taxonomy. The distinction is important and will be examined.

## How to Use

- **Hover over any beast node** to highlight its corresponding allegory node and all relationship edges connected to it. All other nodes will dim, isolating the beast's network neighborhood for examination.
- **Click a beast node** to open a detail card displaying the beast's full description, its allegorical function, the chapters in which it appears, and a representative quote from the chapter text.
- **Click an allegory node** to highlight all beasts whose allegorical functions relate to that concept, revealing clusters of convergent meaning in the taxonomy.
- **Drag nodes** to rearrange the layout manually. The physics simulation will adjust automatically. This is also a valid metaphor for organizational restructuring.
- **Zoom and pan** using the scroll wheel and click-drag on empty canvas space.

## Iframe Embed Code

You can add this MicroSim to any web page by adding this to your HTML:

```html
<iframe src="https://dmccreary.github.io/unicorns/sims/beast-allegory-network/main.html"
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

- Completion of Chapter 2's taxonomy section, or sufficient familiarity with at least six of the eleven mythical beasts to have an opinion about their disposition ratings
- Basic understanding that "allegory" means a story or character that represents something else, and that this understanding does not require the student to have personally encountered a dragon, a kraken, or a Series D funding round
- Willingness to accept that the color red on a node reflects the beast's relationship to its allegorical counterpart and is not a political statement

### Activities

1. **Exploration** (5 min): Hover over each red-coded beast node — Dragon, Minotaur, Kraken, Siren, and Cyclops — and observe their allegory connections. For each one, write down the real-world phenomenon it represents. Then consider whether you have personally witnessed that phenomenon in an educational institution, a technology company press release, or a LinkedIn post in the past 30 days.

2. **Guided Practice** (5 min): Locate the "Enables" edge connecting the Siren to the Kraken. Click the Siren node to read its detail card. In one or two sentences, explain why the authors of this taxonomy believe that seductive automation leads, causally, to large-scale tech failure. Then locate a second "Enables" relationship in the graph and explain that one as well.

3. **Assessment** (5 min): Without using the graph, explain in writing why the Phoenix and the Dragon are classified as opposing forces in this taxonomy. Your answer should reference their allegorical functions, not their physical characteristics, though noting that a phoenix rises from ashes while a dragon creates them is not an incorrect observation.

### Assessment

- Students can correctly identify the allegorical function of at least eight of the eleven beasts without referring to the node detail cards, demonstrating internalization of the taxonomy rather than navigation competence.
- Students can describe at least two distinct relationship types shown in the network — "Opposes," "Collaborates," or "Enables" — and provide a real-world example of each relationship that does not involve mythical animals.
- Students can explain, in a paragraph of no more than five sentences, why the Siren-to-Kraken "Enables" edge is the most pedagogically important relationship in the graph, or argue credibly that a different edge deserves that designation. Both positions are defensible and will receive equal credit.

## References

1. Hargreaves, B. and Okonkwo, T. (2022). *Network Topology as Pedagogical Tool: Force-Directed Graphs in Secondary Taxonomy Education*. Journal of Interactive Learning Systems, 18(4), 301–319. The study found that students who dragged nodes around a vis-network graph for ten minutes reported feeling more confident about taxonomy even when their subsequent classification accuracy did not improve, which the authors described as "affective engagement."

2. Srivastava, M. (2020). *The Allegorical Beast in Modern Economic Discourse: From Aesop to Andreessen Horowitz*. Interdisciplinary Studies in Narrative Economics, 5(2), 77–94. Chapter 3 contains a table comparing ancient beast allegories to venture capital archetypes that the author insists is satirical but that a growing body of evidence suggests is simply accurate.

3. Delacroix-Park, S. and Osei, R. (2024). *Relationship Encoding in Educational Network Visualizations: When "Enables" Is the Most Important Edge*. Proceedings of the Annual Conference on Visualization for Learning, 9, 44–61. The paper's primary contribution is demonstrating that students consistently underestimate the Siren, which the authors attribute to the Siren's design and not to any broader cultural pattern.

## Instructional Design Commentary

A competent instructional designer would have mapped this network's learning objectives to a formal competency framework before selecting vis-network as the rendering library, conducted a cognitive load analysis to determine whether eleven beast nodes and eleven allegory nodes simultaneously visible on screen exceeds the working memory capacity of a ninth-grade student, and then revised the design to show three nodes at a time with a "load more" button. The resulting simulation would have been more rigorously scaffolded, considerably less interesting, and would have required a seventeen-step accessibility audit before deployment. The audit would have identified two issues. Neither would have been fixed before the academic year ended.

What this network does instead is present the full allegorical system at once, trusting that a student capable of dragging a node around a force-directed graph is capable of deciding for themselves which relationships to investigate first. This pedagogical choice — prioritizing exploration over scaffolding — is either a sophisticated application of constructivist learning theory or evidence that the instructional design was generated by a language model at 11:47 PM on a Tuesday. The two explanations are not mutually exclusive, and the literature suggests that the outcomes are also not meaningfully different.

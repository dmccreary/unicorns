---
title: Beast Classification MicroSim
description: Interactive p5.js MicroSim for beast classification microsim.
image: /sims/beast-classifier/beast-classifier.png
og:image: /sims/beast-classifier/beast-classifier.png
twitter:image: /sims/beast-classifier/beast-classifier.png
social:
   cards: false
quality_score: 0
---

# Beast Classification MicroSim

<iframe src="main.html" height="650px" width="100%" scrolling="no"></iframe>

[Run the Beast Classification MicroSim MicroSim Fullscreen](./main.html){ .md-button .md-button--primary }
<br/>
[Edit in the p5.js Editor](https://editor.p5js.org/)

## About This MicroSim

This simulation inverts the direction of learning established in the Beast Classification Framework. Rather than displaying pre-computed profiles for examination, this tool asks students to construct a profile themselves using six sliders, then calculates the Euclidean distance between their configuration and the ten pre-classified beasts to identify the closest match. The distinction is pedagogically significant: selecting from a dropdown tests recognition, while adjusting sliders until a profile emerges tests understanding. Students who set all six sliders to their midpoint values and click "Find Closest Beast" will be matched to the Griffin, which is the correct result and may or may not reflect the student's intentions.

The Challenge Mode is where this simulation earns its classification as an Apply-level tool. When a student activates Challenge Mode, the simulation presents a technology announcement — Blockchain, ChatGPT, the Metaverse, a committee studying AI — and asks the student to classify it using the same six-dimensional framework used for mythical beasts. After the student submits a profile, the simulation reveals which beast the technology most closely resembles according to the pre-stored classifications. The experience of discovering that "a committee studying AI" most closely matches the Minotaur — a creature trapped in a labyrinth, hostile, with above-average allegorical weight — is described by the Chapter 13 authors as a "recognition event." The recognition event is the point of the exercise.

This MicroSim operates at Bloom's Taxonomy Level 3 (Apply), requiring students to use the classification framework independently rather than having it applied for them. Students who complete Challenge Mode and correctly predict the beast match for at least four of six technologies before the reveal have demonstrated competence. Students who correctly predict all six have either read the chapter very carefully or are the kind of person who attends AI conferences and returns with specific action items. Both groups are rare.

## How to Use

- **Adjust the six sliders** in the left panel to set your creature's profile across all dimensions: Morphology Complexity (1–5), Ability Power (1–5), Disposition (–2 to +2, from Hostile to Benevolent), Habitat Accessibility (1–5, from Confined to Everywhere), Rarity (1–5, from Common to Legendary), and Allegorical Weight (1–5, from Decorative to Central).
- **Watch the radar chart** in the center panel update in real time as you move sliders, displaying the profile your current configuration produces.
- **Click "Find Closest Beast"** to calculate the nearest match among the ten pre-classified beasts. The right panel will display the matched beast's name, description, and allegorical function.
- **Click "Challenge Mode"** to receive a technology to classify. Read the technology description, set your sliders to reflect your assessment, and click "Submit Classification" to see which beast the technology most closely resembles and how close your profile was to the stored answer.
- **Click "Reset"** to return all sliders to their default midpoint positions and clear the current match.

## Iframe Embed Code

You can add this MicroSim to any web page by adding this to your HTML:

```html
<iframe src="https://dmccreary.github.io/unicorns/sims/beast-classifier/main.html"
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

- Completion of the Beast Classification Framework MicroSim or equivalent familiarity with the six-dimension taxonomy, including the meaning and scale of each dimension
- Understanding that Euclidean distance in six-dimensional space is a distance calculation and not a value judgment, even though the Minotaur being your closest match may feel like one
- Willingness to classify a real technology using a framework developed for mythical creatures without experiencing this as an epistemological crisis

### Activities

1. **Exploration** (5 min): Without using Challenge Mode, use the six sliders to try to construct the Dragon's profile from memory. When you have set all sliders to your best estimate, click "Find Closest Beast." If the matched beast is not the Dragon, note which slider values you estimated incorrectly and adjust until the Dragon is your closest match. This is a test of recall, not creativity. Save creativity for the next activity.

2. **Guided Practice** (5 min): Activate Challenge Mode and complete the classification for "ChatGPT" and "The Metaverse." For each technology, before submitting, write a one-sentence justification for your Disposition score. After the beast match is revealed, compare your justification to the stored beast's allegorical function. If your justification matches the allegorical function, your classification framework is calibrated correctly. If it does not, the chapter text is available for review.

3. **Assessment** (5 min): In Challenge Mode, classify "A committee studying AI" using the six sliders. Before clicking Submit Classification, predict in writing which beast will be your closest match. Submit your classification and compare the result to your prediction. Write two sentences explaining whether the Minotaur — the stored match for this technology — is an accurate or an unfair characterization of institutional AI study committees, supporting your position with at least one piece of evidence from personal observation.

### Assessment

- Students can reconstruct the profiles of at least three pre-classified beasts from memory with sufficient accuracy that the correct beast appears as the closest match, demonstrating that slider-based construction has reinforced dimensional recall rather than merely producing random configurations.
- Students can classify at least four of the six Challenge Mode technologies with a Euclidean distance from the stored answer of 2.0 or less across all six dimensions, indicating that their use of the framework is consistent with the expert classification rather than arbitrary.
- Students can explain in one paragraph why the same six-dimensional framework applies to both mythical beasts and contemporary technology products, without using the phrase "it's just an analogy" as their entire explanation. An answer that uses the phrase "it is not an analogy; it is a taxonomy" will receive full credit.

## References

1. Liang, C. and Osei, P. (2023). *Slider-Based Input as an Active Learning Mechanism: Evidence from Taxonomy Application Tasks*. Journal of Educational Technology and Society, 26(1), 112–127. The study found that students who set their own values via sliders outperformed students who selected from dropdowns on subsequent free-recall tasks, a finding that implies active construction of knowledge and not merely a preference for dragging things.

2. Navarro-Kim, S. (2021). *Prediction-Feedback Loops in Secondary Technology Literacy Education: Does Guessing Before Seeing the Answer Actually Help*. Computers and Education, 170, Article 104230. The answer, the paper concludes, is yes, particularly when the feedback is immediate and specific, and especially when the prediction was wrong. Being wrong in a structured environment is, according to the literature, a learning event.

3. Abramowitz, T. and Mbuyi, J. (2024). *Apply-Level Assessment in Interactive MicroSims: When Is "Closest Match" Close Enough*. Educational Measurement: Issues and Practice, 43(2), 38–52. The paper introduces the concept of "acceptable proximity" in Euclidean classification matching and spends seventeen pages establishing a threshold that teachers will, in practice, approximate by feel. The authors acknowledge this in footnote 9.

## Instructional Design Commentary

A competent instructional designer would have conducted a task analysis before building a six-slider input interface for ninth-graders, identifying that the simultaneous management of six independent variables while monitoring a real-time radar chart visualization and holding the Chapter 2 taxonomy in working memory exceeds the cognitive load recommendations established by Sweller (1988) and every subsequent researcher who has cited Sweller (1988) in a grant application. The competent instructional designer would have recommended reducing the simulation to three sliders with a "reveal remaining dimensions" button, added worked examples, and built in a mastery gate requiring students to correctly classify two pre-set creatures before accessing Challenge Mode. This version would have been more theoretically defensible and would have taken four times as long to complete, during which time the student's phone would have been in their pocket and not technically on their desk.

What this simulation does instead is give students all six sliders immediately and a Challenge Mode button that presents "a committee studying AI" as a technology to classify with a mythical beast framework. The experience of realizing that a committee studying AI is most accurately described as a Minotaur is either the most efficient transfer of the chapter's central argument or an inappropriate shortcut around the constructive scaffolding process that instructional design as a discipline has spent fifty years refining. One of these interpretations will be published in a peer-reviewed journal. The other one will be experienced by students in approximately four minutes.

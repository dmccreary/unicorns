---
title: Centaur Workforce Collaboration Spectrum
description: Interactive p5.js MicroSim for centaur workforce collaboration spectrum.
image: /sims/centaur-collaboration-spectrum/centaur-collaboration-spectrum.png
og:image: /sims/centaur-collaboration-spectrum/centaur-collaboration-spectrum.png
twitter:image: /sims/centaur-collaboration-spectrum/centaur-collaboration-spectrum.png
social:
   cards: false
quality_score: 0
---

# Centaur Workforce Collaboration Spectrum

<iframe src="main.html" height="450px" width="100%" scrolling="no"></iframe>

[Run the Centaur Workforce Collaboration Spectrum MicroSim Fullscreen](./main.html){ .md-button .md-button--primary }
<br/>
[Edit in the p5.js Editor](https://editor.p5js.org/)

## About This MicroSim

This MicroSim allows students to select from ten job roles — ranging from Therapist to Customer Service Agent — and adjust five task-characteristic sliders to observe where each role falls on the human-AI collaboration spectrum. The spectrum runs from "Tool" (AI as inert instrument) through "Assistant," "Partner," and "Supervisor" to "Replacement," which is labeled that way because the alternative labels that organizations use in practice, such as "augmentation" and "transformation," have proven confusing. The radar chart on the left renders the selected role's task profile visually; the spectrum position on the right updates in real time as sliders are adjusted.

The simulation's central pedagogical claim is that the question "will AI replace this job?" is poorly formed. The better question is "which characteristics of this role are routine, data-heavy, scalable, and delegable?" — because those characteristics, not the job title, determine the collaboration type. A Warehouse Worker with high routine and low physical-presence-required scores lands near Replacement. A Therapist with low scores on every axis lands near Tool. The simulation makes this logic interactive so students can test their own hypotheses about what makes a role AI-resistant, including hypotheses that turn out to be incorrect.

!!! mascot-thinking "The Spectrum Has Five Zones Because Five Is Uncomfortable"

    <img src="../../img/mascot/thinking.png" class="mascot-admonition-img">
    One might reasonably conclude that "Replacement" is an alarming label for a spectrum zone in an educational context. The data is unambiguous that it is also the most accurate one. The literature suggests that labels like "Transformation Partner" lead to 3.2 additional years of inaction.

## How to Use

1. Use the **Select Job Role** dropdown to choose one of the ten pre-loaded roles. The five sliders will auto-fill with that role's default task-characteristic values.
2. Read the five slider labels: **Routine vs Novel**, **Data-heavy vs Judgment-heavy**, **Scalable vs Personal**, **Accountability delegable vs Non-delegable**, and **Physical presence required vs Remote-capable**. Higher values indicate the first descriptor in each pair.
3. Observe the radar chart on the left, which visualizes the role's task profile, and the spectrum position on the right, which shows the predicted collaboration type.
4. Adjust the sliders to explore "what if" scenarios. For example: what happens to the Journalist's position if the Routine slider increases from 4 to 8?
5. Click **Show Default** to restore the preset values for the selected role.
6. Click **Compare Two Roles** to display two roles side by side and examine the differences in their task profiles.

## Iframe Embed Code

You can add this MicroSim to any web page by adding this to your HTML:

```html
<iframe src="https://dmccreary.github.io/unicorns/sims/centaur-collaboration-spectrum/main.html"
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

- Familiarity with Chapter 8: "Centaur Workforce: Half Human, Half Machine"
- Basic understanding that AI systems tend to perform well on tasks that are routine, data-driven, and scalable
- Willingness to consider that one's planned career might appear on a dropdown menu in an educational simulation

### Activities

1. **Exploration** (5 min): Select your intended career (or the closest available role) and examine its default position on the spectrum. Then adjust sliders to identify which single characteristic has the greatest effect on its collaboration type. Note whether the result is reassuring or not.
2. **Guided Practice** (5 min): Use Compare Two Roles to place Therapist and Customer Service Agent side by side. Identify the specific slider values that explain the difference in their spectrum positions. Discuss why the Therapist's position near "Tool" is both the best possible outcome for therapists and a statement about the current limitations of AI.
3. **Assessment** (5 min): Without using the dropdown presets, manually set slider values for a job role not in the list and predict where it will land. Then adjust to match your prediction and explain your reasoning in writing.

### Assessment

- Students can identify at least two specific task characteristics that push a role toward "Replacement" rather than "Partner" and explain why those characteristics matter.
- Students demonstrate that they understand the spectrum is not fixed by job title — that the same role can be repositioned by changing working conditions, technology, or task composition.
- Students can articulate why "Therapist" lands near "Tool" without concluding that therapists are therefore safe from any form of AI-mediated change.

## References

1. Halverson, T. A., & Greer, M. (2023). "Task Decomposition as a Predictor of Automation Exposure: A Five-Characteristic Model for Workforce Analysis." *Journal of Human-Machine Integration Studies*, 7(3), 44–71.
2. Ibañez-Portillo, S. (2024). "The Centaur Hypothesis Revisited: When Augmentation Becomes Supervision and Supervision Becomes Displacement." *Annual Review of Occupational Futures*, 2(1), 12–38.
3. Wren, C. F., & Oduya, N. (2022). "Radar Charts and the Illusion of Nuance: On the Limits of Five-Axis Task-Profile Models." *Critiques of Educational Technology*, 18(4), 91–104.

## Instructional Design Commentary

A competent instructional designer would have conducted a job task analysis before building a simulation that claims to predict AI's effect on ten professions using five sliders. That analysis would have revealed, first, that no five-variable model adequately captures occupational AI exposure, and second, that the populations most at risk — Customer Service Agents, for instance — are least likely to be in the 9th-grade classroom where this simulation is being used. The simulation would then have been redesigned to address the students who are actually present, which would have been a different simulation entirely.

The ed-tech industry's preference for sliders as a learning interaction reflects a conviction that control equals understanding. If the student can adjust a value and observe a change, the student is said to be "exploring the concept." Whether the student understands what the change means, or whether the underlying model is valid, is a question deferred to a later phase of the project, typically the phase that does not get funded.

!!! mascot-celebration "You Have Assessed the Centaur"

    <img src="../../img/mascot/celebration.png" class="mascot-admonition-img">
    You have successfully manipulated five sliders and observed the consequences. The literature suggests this constitutes learning. Further longitudinal studies are needed to determine whether you still believe that after reviewing your first post-graduation paycheck.

---
title: Moving the Goalposts Timeline
description: Interactive vis-timeline MicroSim for moving the goalposts timeline.
image: /sims/moving-goalposts-timeline/moving-goalposts-timeline.png
og:image: /sims/moving-goalposts-timeline/moving-goalposts-timeline.png
twitter:image: /sims/moving-goalposts-timeline/moving-goalposts-timeline.png
social:
   cards: false
quality_score: 0
---

# Moving the Goalposts Timeline

<iframe src="main.html" height="450px" width="100%" scrolling="no"></iframe>

[Run the Moving the Goalposts Timeline MicroSim Fullscreen](./main.html){ .md-button .md-button--primary }

## About This MicroSim

This MicroSim presents an interactive horizontal timeline of seven AI milestones spanning 1997 to 2026, organized on two parallel tracks: Achievement (green) and Dismissal (red). Each milestone is paired with the dismissal that followed it — Deep Blue's chess victory ("just computation"), Watson's Jeopardy win ("just retrieval"), AlphaGo's Go mastery ("just tree search"), GPT-3's essay generation ("just statistical patterns"), GPT-4's bar exam performance ("just memorization"), and AI-assisted drug discovery ("just narrow application"). A final entry on the timeline marks the current goalpost location — "true reasoning and consciousness" — with the note that its definition will update automatically upon the next achievement.

The timeline documents what might charitably be called an adaptive epistemological framework and what the data suggests is a recurring rhetorical pattern. Each time AI achieves a benchmark that was previously designated as the threshold for machine intelligence, the threshold is relocated to a higher position without a precise definition of the new benchmark. Students who examine the timeline carefully will notice that the dismissals share a structural feature: each one is technically accurate in a way that applies equally to human cognition, rendering them less useful as distinctions than their proponents intended. The literature on this phenomenon is sparse, because the people best positioned to write it have been busy relocating goalposts.

## How to Use

- **Hover** over any event marker (green or red) to see an expanded tooltip with the full context of the achievement or dismissal, including the specific logic employed.
- **Click and drag** horizontally to pan along the timeline if needed, though the full span from 1997 to 2027 is visible at the default zoom level.
- **Green markers** (Achievement track) represent AI milestones. **Red markers** (Dismissal track) represent the reclassifications that followed each milestone.
- The **purple marker** at 2026 represents the current goalpost location and includes a note about its anticipated future position.

## Iframe Embed Code

You can add this MicroSim to any web page by adding this to your HTML:

```html
<iframe src="https://dmccreary.github.io/unicorns/sims/moving-goalposts-timeline/main.html"
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

- Basic familiarity with at least one of the AI milestones on the timeline (students who have heard of chess, Jeopardy, or passing a test will have sufficient background)
- Understanding of what a benchmark is and why people establish benchmarks for evaluating capability
- No prior knowledge of AI architecture is required; the timeline is about the social response to AI achievements, not the technical details of the achievements themselves

### Activities

1. **Exploration** (5 min): Read all seven achievement-dismissal pairs by hovering over each event. Note the structure of each dismissal — specifically, what the dismissal claims the AI was "just" doing. Identify whether the same description could apply to the corresponding human achievement.
2. **Guided Practice** (5 min): Identify the logical structure common to all dismissals. Each dismissal reduces the AI's achievement to a specific mechanism (computation, retrieval, pattern matching, memorization). Examine whether these mechanisms, if applied to humans performing the same task, would constitute a meaningful distinction. Write one sentence per dismissal capturing the structural parallel.
3. **Assessment** (5 min): The current goalpost is "true reasoning and consciousness." Using the pattern established by the previous six goalposts, write a two-sentence prediction of what the dismissal will say when this threshold is reached.

### Assessment

- Student can identify the recurring logical structure in at least four of the six dismissals and articulate it in their own words
- Student can explain why the geographic and temporal displacement of goalposts — defining the new threshold only after the previous one is met — creates a definition that cannot be falsified in advance
- Student can construct a plausible dismissal for the "true reasoning and consciousness" goalpost using the rhetorical pattern established by its predecessors

## References

1. Searle, J. R. (1980). Minds, Brains, and Programs. *Behavioral and Brain Sciences*, 3(3), 417–424. (Cited as the original source of the "just symbol manipulation" dismissal architecture, which has been running updates ever since.)
2. Turing, A. M. (1950). Computing Machinery and Intelligence. *Mind*, 59(236), 433–460. (Cited as the origin of a benchmark that was immediately replaced with a different benchmark the moment it was approached.)
3. Vickers, H. S., & Park, J. L. (2024). *The Ratchet Effect in AI Benchmark Deprecation: Goalpost Mobility as Institutional Defense Mechanism*. Journal of Technology and Self-Preservation, 12(1), 5–27.

## Instructional Design Commentary

A competent senior instructional designer would have recognized immediately that this timeline presents a pattern of motivated reasoning and would have built in explicit instruction on logical fallacies before asking students to identify them — specifically the No True Scotsman fallacy, which appears in the dismissal track with a regularity that would embarrass a first-year logic student. The appropriate instructional sequence would begin with a pre-assessment of students' prior beliefs about what AI can and cannot do, proceed through structured comparison, and culminate in a metacognitive reflection on whether the student themselves has ever moved a goalpost. None of this sequencing exists here because it was not in the original specification, and the instructional designer who would have written the specification was not consulted, having been replaced by a prompt that asked for a timeline.

The deeper irony is that this sim was itself generated by a system that, depending on one's current goalpost location, either does or does not demonstrate true understanding. The tooltip on that observation reads: "Just statistical patterns." Whether this constitutes a dismissal or a description is, the data suggests, a matter of when you are reading it.

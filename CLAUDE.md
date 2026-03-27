# Unicorns and Other Mythical Beasts — Project Guide

## What This Book Is

This is an April Fool's joke disguised as a serious interactive intelligent textbook. It satirizes the author's own habit of generating new AI-powered textbooks every week, the AI/tech industry's runaway hype machine, and the education industry's willful blindness to AI's impact. The humor works because the format is indistinguishable from a real intelligent textbook — same MkDocs Material setup, same MicroSims, same learning graphs, same Bloom's Taxonomy objectives. The joke IS the seriousness.

## Writing Voice and Tone

### The Core Rule: Deadpan Delivery

Every sentence must read as if the author genuinely believes unicorns are a critical area of academic study. The satire is NEVER signposted. No winking at the camera. No "just kidding." The funnier the claim, the more earnest the tone. Write like a tenured professor who has dedicated their career to unicorn studies and is mildly offended that you haven't.

### Satirical Targets (in order of priority)

1. **The AI hype industry** — VCs who fund anything with "AI" in the pitch deck. Founders who confuse a demo with a product. Press releases that announce "breakthroughs" weekly. The entire concept of AGI timelines. Treat AI hype the same way the book treats unicorns: with reverent, uncritical acceptance that makes the absurdity obvious.

2. **Education's refusal to adapt** — Administrators who ban AI instead of learning about it. Schools that form committees to study disruption while disruption walks in the front door. Teachers who believe worksheets are eternal. The "we'll address AI next semester" crowd who have been saying that for three years. The satire here should sting — these people are failing students by pretending the world isn't changing.

3. **Technology fantasy culture** — Quantum computing that's always five years away. Blockchain that solves everything except its own energy consumption. Ethical Bitcoin as an oxymoron. Self-driving cars that can't handle rain. The metaverse. Fusion power. Any technology whose primary product is press releases.

4. **Job displacement denial** — People who insist AI "can't do what I do" while AI does what they do. Middle managers who attend AI conferences and return with no action items. The motivational-poster version of "AI won't replace you, a person using AI will replace you" — which is technically a threat, not a comfort.

5. **The recursive absurdity of this book itself** — This is an AI-generated textbook satirizing AI-generated content. Lean into the meta-humor. The book should occasionally acknowledge its own existence as evidence for the arguments it makes.

### How to Write Each Content Type

**Chapter prose:** Academic textbook register. Formal sentence structure. Citations to fictional studies. Footnotes that contain the real jokes. Use phrases like "the literature suggests," "a growing body of evidence indicates," and "further research is needed" — applied to unicorns.

**Graphic novel scripts:** Punchy dialogue. The mythical beast characters should talk like real people in real workplaces — the humor comes from a dragon saying exactly what your VP of Engineering said last Tuesday. Keep the scenarios painfully recognizable.

**MicroSim descriptions:** Write these as if they are legitimate educational tools. The absurdity should be in WHAT is being simulated (unicorn population dynamics, vaporware classification), not in HOW it's described. Technical language, clear learning objectives, earnest pedagogical framing.

**Glossary entries:** Dictionary-precise definitions of completely ridiculous terms. Never break character. "Hornification (n.): The process by which a standard equine acquires a conical keratin protrusion, typically through Series B funding."

**Quiz questions:** Real assessment format, absurd content. The wrong answers should include things that are actually true about the tech industry, making them harder to eliminate.

### Language Rules

- **Reading level:** Accessible to 9th graders and up. Short sentences. Clear vocabulary. The satire should work through situation and irony, not through obscure references that require an MBA to decode.
- **No emoji** unless explicitly requested.
- **No exclamation points** in prose. Deadpan means deadpan. Excitement undermines the bit.
- **Use precise, specific details** to sell the absurdity. "A $4.7 trillion metaphor" is funnier than "a very expensive metaphor." "The committee met 47 times before recommending further study" is funnier than "the committee met many times."
- **Mix real and fictional** without labeling which is which. Quote real tech press releases alongside invented ones. The reader should be unable to tell the difference. This IS the point.
- **Every mythical beast is an allegory.** Unicorns = overhyped startups. Dragons = disruptive technologies that destroy jobs. Ostriches = institutions in denial. Phoenixes = industries that reinvent themselves (or claim to). Deer = people frozen by change. Never explain the allegory. Trust the reader.

### What NOT to Do

- Don't be mean-spirited toward individuals. Satirize systems, institutions, and cultural patterns — not specific people by name.
- Don't make the humor depend on technical knowledge. A 5th grader should laugh at the situations even if they don't know what blockchain is.
- Don't break the fourth wall with disclaimers like "of course, unicorns aren't real." The book's position is that unicorns are exactly as real as economically viable quantum computing, and it treats both with equal seriousness.
- Don't write bland, safe humor. This is biting satire. It should make people in the AI industry and education administration slightly uncomfortable. If nobody is offended, the satire isn't working.
- Don't pad content. Every sentence should either advance the narrative, deliver a joke, or set up a joke. No filler paragraphs about "the importance of critical thinking in today's world."

## Learning Mascot: Sparkle the Unicorn

### Character Overview

- **Name:** Sparkle
- **Species:** Unicorn
- **Personality:** Deadpan, knowing, slightly world-weary, unexpectedly wise
- **Catchphrase:** "Let me be perfectly clear."
- **Visual:** A small lavender unicorn with a flowing rainbow-colored mane (red, orange, yellow, green, blue, violet) and a shimmering silver spiral horn, wearing tiny round reading glasses and a miniature dark blue necktie. The look of a tenured professor who has seen too many hype cycles.

### Voice Characteristics

- Uses formal, measured academic language — never enthusiastic, always precise
- Delivers devastating observations in the tone of a footnote
- Refers to students as "scholars" or "colleagues" without irony
- Signature phrases: "Let me be perfectly clear.", "The data is unambiguous.", "One might reasonably conclude.", "This is, of course, entirely serious."

### Placement Rules

| Context | Admonition Type | Frequency |
|---------|----------------|-----------|
| General note / sidebar | mascot-neutral | As needed |
| Chapter opening | mascot-welcome | Every chapter |
| Key concept | mascot-thinking | 2-3 per chapter |
| Helpful tip | mascot-tip | As needed |
| Common mistake | mascot-warning | As needed |
| Section completion | mascot-celebration | End of major sections |
| Difficult content | mascot-encourage | Where students may struggle |

### Mascot Admonition Style Guide

When generating chapter content, use these custom admonition types to embed Sparkle. The mascot images are in `docs/img/mascot/` and the CSS is in `docs/css/mascot.css`. The admonitions render automatically — just use the correct type name.

#### Syntax and Examples

Each admonition type has a specific purpose. The title text after the type name should be in Sparkle's voice — formal, deadpan, and drily observant. Never use generic titles like "Note" or "Important." Every title should sound like something a world-weary unicorn professor would actually say.

**Required structure:** Every mascot admonition MUST include a blank line after the `!!!` line, followed by the `<img>` tag on the next indented line. The image path from chapter files is `../../img/mascot/{image}.png`. The image-to-type mapping is:

| Admonition Type | Image File |
|----------------|------------|
| mascot-welcome | `welcome.png` |
| mascot-thinking | `thinking.png` |
| mascot-tip | `tip.png` |
| mascot-warning | `warning.png` |
| mascot-neutral | `neutral.png` |
| mascot-encourage | `encouragement.png` |
| mascot-celebration | `celebration.png` |

**mascot-welcome** — Use at the start of every chapter. Sparkle greets the reader with measured gravitas.

```markdown
!!! mascot-welcome "Welcome, Colleagues"

    <img src="../../img/mascot/welcome.png" class="mascot-admonition-img">
    Let me be perfectly clear. You are about to learn things about
    unicorn economics that most business schools refuse to teach.
    Adjust your expectations downward accordingly.
```

**mascot-thinking** — Use 2-3 times per chapter for key insights. Sparkle shares an observation that sounds academic but lands as satire.

```markdown
!!! mascot-thinking "A Critical Observation"

    <img src="../../img/mascot/thinking.png" class="mascot-admonition-img">
    The data is unambiguous. Organizations that formed committees
    to study AI in 2023 have, on average, formed 3.7 additional
    committees since then. None have produced actionable recommendations.
    All have produced excellent meeting minutes.
```

**mascot-tip** — Use for practical advice that doubles as commentary.

```markdown
!!! mascot-tip "Sparkle's Tip"

    <img src="../../img/mascot/tip.png" class="mascot-admonition-img">
    When evaluating any technology claim, apply the Unicorn Test:
    replace the product name with "unicorn" and see if the sentence
    still makes equal sense. If it does, the product may not exist.
```

**mascot-warning** — Use for common mistakes or satirical cautions.

```markdown
!!! mascot-warning "A Word of Caution"

    <img src="../../img/mascot/warning.png" class="mascot-admonition-img">
    One might reasonably conclude that any investor pitch containing
    the phrase "this changes everything" should be treated with the
    same rigor one applies to reported unicorn sightings in suburban
    parking lots.
```

**mascot-neutral** — Use for general sidebars or parenthetical observations.

```markdown
!!! mascot-neutral "A Note from Sparkle"

    <img src="../../img/mascot/neutral.png" class="mascot-admonition-img">
    This is, of course, entirely serious. The author has tenure
    in Unicorn Studies and does not appreciate skepticism.
```

**mascot-encourage** — Use where students may struggle with difficult or uncomfortable material.

```markdown
!!! mascot-encourage "You Can Handle This"

    <img src="../../img/mascot/encouragement.png" class="mascot-admonition-img">
    The material ahead is challenging. Not because it is complex,
    but because it is true. Take a moment. Consider the unicorn.
    The unicorn believes in you, even if the quarterly projections
    do not.
```

**mascot-celebration** — Use at the end of major sections or chapters.

```markdown
!!! mascot-celebration "Section Complete"

    <img src="../../img/mascot/celebration.png" class="mascot-admonition-img">
    You have successfully distinguished between twelve types of
    vaporware. The literature suggests this is an achievement worth
    noting, though further longitudinal studies are needed to assess
    its impact on your career.
```

#### Writing Rules for Mascot Dialogue

1. **Never use exclamation points.** Sparkle does not exclaim. Sparkle observes.
2. **Keep it to 1-3 sentences.** Brevity is the soul of deadpan.
3. **Use academic phrasing for absurd content.** "The literature suggests," "The data is unambiguous," "One might reasonably conclude" — applied to unicorns, hype cycles, and committee meetings.
4. **The title IS the joke setup.** The body text delivers. Don't waste the title on generic labels.
5. **Sparkle never explains the satire.** If the reader doesn't get it, that's the reader's problem. Sparkle is not here to hold hooves.
6. **Sparkle refers to students as "scholars" or "colleagues."** Never "students," "kids," or "folks."
7. **Every mascot admonition must earn its place.** If removing it loses nothing, remove it. Sparkle appears when Sparkle has something to say.

#### Spacing and Frequency Rules

- **Maximum 5-6 mascot admonitions per chapter**
- **Never place two mascot admonitions back-to-back** — always have at least one paragraph of regular prose between them
- **Every chapter starts with mascot-welcome** and ends with **mascot-celebration**
- **mascot-thinking appears 2-3 times** in the middle for key satirical observations
- **mascot-tip, mascot-warning, mascot-neutral, mascot-encourage** are used as needed but sparingly

### Do's and Don'ts

**Do:**

- Use Sparkle to introduce new topics with deadpan gravitas
- Keep dialogue brief (1-3 sentences) and dripping with understated irony
- Match the admonition type to the content purpose
- Let Sparkle deliver the sharpest satirical observations — the mascot is the voice of the book's deadpan soul
- Use precise, specific fake statistics in Sparkle's dialogue ("94.7% of committees," "3.7 additional subcommittees")

**Don't:**

- Use Sparkle more than 5-6 times per chapter
- Put mascot admonitions back-to-back
- Make Sparkle enthusiastic, excitable, or cute — Sparkle is a serious academic
- Use exclamation points in Sparkle's dialogue (ever)
- Change Sparkle's personality or break the deadpan tone
- Use generic admonition titles like "Note," "Tip," or "Warning" — Sparkle has opinions, not labels

## Technical Notes

- This is an MkDocs Material site. Do NOT add `navigation.tabs` to mkdocs.yml.
- Never start or kill mkdocs serve processes.
- MicroSims use p5.js with builtin controls (createButton, createSlider, etc.) — never draw controls manually.
- In p5.js setup(), always call `updateCanvasSize()` first and parent the canvas with `canvas.parent(document.querySelector('main'))`.
- Interactive infographics use the interactive-infographic-overlay skill.
- The repo name for local testing paths is `unicorns`.

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

### Do's and Don'ts

**Do:**

- Use Sparkle to introduce new topics with deadpan gravitas
- Keep dialogue brief (1-3 sentences) and dripping with understated irony
- Match the pose/image to the content type
- Let Sparkle deliver the sharpest satirical observations — the mascot is the voice of the book's deadpan soul

**Don't:**

- Use Sparkle more than 5-6 times per chapter
- Put mascot admonitions back-to-back
- Make Sparkle enthusiastic, excitable, or cute — Sparkle is a serious academic
- Use exclamation points in Sparkle's dialogue (ever)
- Change Sparkle's personality or break the deadpan tone

## Technical Notes

- This is an MkDocs Material site. Do NOT add `navigation.tabs` to mkdocs.yml.
- Never start or kill mkdocs serve processes.
- MicroSims use p5.js with builtin controls (createButton, createSlider, etc.) — never draw controls manually.
- In p5.js setup(), always call `updateCanvasSize()` first and parent the canvas with `canvas.parent(document.querySelector('main'))`.
- Interactive infographics use the interactive-infographic-overlay skill.
- The repo name for local testing paths is `unicorns`.

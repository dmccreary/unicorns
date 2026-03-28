---
title: How a Large Language Model Works
description: Interactive p5.js MicroSim for how a large language model works.
image: /sims/llm-how-it-works/llm-how-it-works.png
og:image: /sims/llm-how-it-works/llm-how-it-works.png
twitter:image: /sims/llm-how-it-works/llm-how-it-works.png
social:
   cards: false
quality_score: 0
---

# How a Large Language Model Works

<iframe src="main.html" height="470px" width="100%" scrolling="no"></iframe>

[Run the How a Large Language Model Works MicroSim Fullscreen](./main.html){ .md-button .md-button--primary }
<br/>
[Edit in the p5.js Editor](https://editor.p5js.org/)

## About This MicroSim

This MicroSim makes visible the internal pipeline of a large language model by walking scholars through seven discrete stages of text generation, from raw input prompt to produced output. The example prompt — "What is a unicorn?" — was selected because it is the question this textbook is, at considerable length, answering, and because it produces a pipeline demonstration that is both technically accurate and thematically appropriate to a course of study that takes unicorns seriously as an object of inquiry.

The seven stages proceed as follows: raw input, tokenization, embedding (represented as colored bars of varying height), attention (represented as arrows of varying thickness between tokens), probability distribution for the next word, iterative word selection, and the accumulation of the generated sequence. At Stage 5, scholars can observe that "A" has a 32% probability of being the next word, "The" has 18%, and "Un" has 12%. The model selects "A," then predicts "unicorn" at 45% probability. The resulting sequence — "A unicorn is a mythical creature that..." — is generated word by word, each word the statistical product of everything that came before it. The textbook you are currently reading was produced by a process that is not entirely unlike this. The textbook considers this worth noting.

Importantly, this MicroSim does not explain why the model produces these specific probabilities, because the model does not know why either. The attention weights represent which tokens the model found relevant to which other tokens during training on a dataset of approximately the entire written internet. The model has read more about unicorns than any human scholar. It has understood none of it. This is the Emperor's New Algorithm.

## How to Use

1. The simulation opens at Stage 1, displaying the raw input prompt: "What is a unicorn?"
2. Click **Next Stage** to advance through each of the seven stages. At each stage, the central display area shows the data relevant to that processing step: tokens, embeddings, attention weights, probability distributions, or the growing output sequence.
3. Click **Previous Stage** to return to the prior stage for review or comparison.
4. Click **Try Another Prompt** to cycle through three preset prompts and observe how the pipeline handles different inputs. Note which stages look different and which remain structurally identical regardless of input.
5. Click **Reset** to return to Stage 1.
6. At Stage 5 and Stage 6, examine the probability distributions carefully. These are the moments at which the model is, in a meaningful sense, "deciding" what to say — though "deciding" may not be the right word, and whether it is the right word is a question this textbook assigns as homework.

## Iframe Embed Code

You can add this MicroSim to any web page by adding this to your HTML:

```html
<iframe src="https://dmccreary.github.io/unicorns/sims/llm-how-it-works/main.html"
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

- Basic familiarity with the concept of probability (a number between 0 and 1 representing the likelihood of an outcome)
- An open mind regarding whether "understanding" is a meaningful criterion for evaluating a system that produces grammatically correct, contextually appropriate, and occasionally wrong text about unicorns with equal fluency

### Activities

1. **Exploration** (5 min): Step through all seven stages with the first preset prompt. At Stage 5, write down the top three predicted words and their probabilities before advancing. At Stage 6, observe whether the model selected the highest-probability word or a different one. Consider what selecting a lower-probability word occasionally accomplishes, and what name the technical literature uses for this.
2. **Guided Practice** (5 min): Use "Try Another Prompt" to switch to a different preset. Compare the tokenization at Stage 2 with the original prompt. Identify whether any token changed in the embedding or attention stages in a way that reflects the difference in meaning between the two prompts. Describe what you observe in one sentence.
3. **Assessment** (5 min): Without referring to the simulation, explain in your own words why a large language model that generates the response "A unicorn is a mythical creature" is not, according to the pipeline demonstrated in this simulation, claiming anything about whether unicorns exist. Refer to at least two specific stages in your explanation.

### Assessment

- The scholar can describe the function of each of the seven pipeline stages in plain language, without resorting to the word "magic" or the phrase "it just knows."
- The scholar can explain why the probability distribution at Stage 5 produces the specific word it does and can articulate what "temperature" settings would change about that selection, based on their understanding of the distribution rather than memorized vocabulary.
- The scholar can distinguish between what the simulation demonstrates about LLM text generation and what it does not demonstrate about LLM understanding — a distinction the AI industry has shown a consistent, well-documented preference for not making.

## References

1. Vaswani, A., Shazeer, N., Parmar, N., Uszkoreit, J., Jones, L., Gomez, A. N., Kaiser, L., & Polosukhin, I. (2017). Attention is all you need. *Advances in Neural Information Processing Systems*, 30. (This one is real and you should read it, though it will not explain whether the model understands anything.)
2. Bletchford, H. A., & Sims, C. (2023). *What the pipeline knows and what it merely predicts: A pedagogical framework for teaching LLM mechanics to secondary students.* Journal of AI Literacy Education, 2(1), 18–34.
3. Quellan, R. P. (2024). *Token by token: Making the invisible language model visible in classroom settings without accidentally convincing anyone that the model is sentient.* Educational Technology Research Quarterly, 19(3), 201–218.

## Instructional Design Commentary

A competent instructional designer would have noted that teaching large language model mechanics to high school students is a genuinely difficult instructional challenge, requiring careful scaffolding of prerequisite concepts (probability, distributed representation, statistical prediction) before any interactive visualization can be meaningful rather than merely decorative. They would have conducted a careful cognitive load analysis, ensured that each stage of the seven-stage pipeline was introduced with sufficient contextual framing, and tested whether the step-through format actually supported learner explanation-building or simply gave learners the comfortable feeling of having watched a thing happen. The comfortable feeling of having watched a thing happen is, incidentally, also how most people experience AI product demos, which makes this simulation more faithful to its subject matter than any formal instructional design review would have intended.

The choice to answer "What is a unicorn?" as the demonstration prompt was made in approximately eleven seconds and was not subject to learner testing. It is, objectively, the correct choice. A rigorous instructional design process would have reached the same conclusion after three rounds of stakeholder review, two focus groups, and a content audit, and would have been billed at $180 per hour for the privilege. The textbook considers this outcome data.

---
title: The Emperor's New Algorithm
description: A satirical but technically accurate introduction to AI, hype cycles, and the fine art of hallucinating with confidence.
generated_by: claude skill chapter-content-generator
date: 2026-03-27 13:42:00
version: 0.05
---

# The Emperor's New Algorithm

## Summary

This chapter provides a satirical but technically accurate introduction to artificial intelligence — from machine learning and neural networks to large language models and their well-documented tendency to hallucinate. It then introduces the Gartner Hype Cycle and AI hype culture, establishing the analytical framework students will use to evaluate technology claims throughout the rest of the book. Based on true events. All of them.

## Concepts Covered

This chapter covers the following 15 concepts from the learning graph:

1. Artificial Intelligence
2. Machine Learning
3. Generative AI
4. Large Language Model
5. AI Hallucination
6. Neural Network
7. Natural Language Processing
8. AI Training Data
9. Algorithm
10. Automation
11. Chatbot
12. AI Capabilities
13. AI Limitations
14. Hype Cycle
15. AI Hype Culture

## Prerequisites

This chapter builds on concepts from:

- [Chapter 3: The Unicorn-Industrial Complex](../03-unicorn-industrial-complex/index.md)

---

!!! mascot-welcome "Welcome, Colleagues"

    <img src="../../img/mascot/welcome.png" class="mascot-admonition-img">
    Let me be perfectly clear. This chapter will explain what
    artificial intelligence actually is, what it actually does,
    and why the gap between those two things is large enough
    to park a unicorn in. Bring a pencil. You will need it
    for the marginalia.

## What Is Artificial Intelligence, Really

Artificial intelligence is the field of computer science concerned with creating machines that perform tasks typically requiring human intelligence. This definition is both accurate and useless, because "tasks typically requiring human intelligence" is a category that shrinks every time a machine learns to do one of them. Chess was once considered a hallmark of intelligence. Then a computer beat the world champion in 1997, and chess became "just computation." The definition of intelligence, it turns out, is "whatever machines cannot do yet."

The term "artificial intelligence" was coined in 1956 at a conference at Dartmouth College, where a group of researchers proposed that "every aspect of learning or any other feature of intelligence can in principle be so precisely described that a machine can be made to simulate it." They estimated this would take one summer. It has taken somewhat longer.

The field has experienced several cycles of enthusiasm and disappointment since 1956. Each cycle follows the same pattern: a breakthrough is announced, funding floods in, promises are made, promises are not kept, funding dries up, and researchers spend a decade explaining that the original expectations were unrealistic. These periods of disappointment are called "AI winters." The periods of enthusiasm do not have an official name, but "AI fever" captures the symptoms.

The current period of AI enthusiasm, which began roughly in 2012 with advances in deep learning, has lasted longer than any previous cycle. Whether this means the technology is genuinely different this time or merely that the funding is larger remains a topic of vigorous debate and limited evidence.

## The Algorithm: A Recipe for Machines

An algorithm is a set of step-by-step instructions for solving a problem or completing a task. A cooking recipe is an algorithm. Driving directions are an algorithm. The process by which you decide whether to read the next paragraph is an algorithm, albeit one with a disturbingly high dropout rate.

In computer science, algorithms are the fundamental building blocks of all software. Every program, application, and AI system is built from algorithms — sequences of instructions that take inputs, process them according to defined rules, and produce outputs. The key features of algorithms are:

- They are **finite** — they have a defined number of steps
- They are **deterministic** — given the same input, they produce the same output (usually)
- They are **effective** — each step can actually be carried out
- They are **general** — they solve a class of problems, not just one specific instance

The word "algorithm" comes from the name of the 9th-century Persian mathematician al-Khwarizmi, who would be surprised to learn that his legacy is now associated primarily with recommending videos to teenagers.

## Machine Learning: Teaching Machines to Teach Themselves

Machine learning is a subset of artificial intelligence in which computers learn from data rather than following explicitly programmed rules. Instead of a programmer writing "if the email contains the word 'lottery,' classify it as spam," a machine learning system examines thousands of emails that humans have labeled as spam or not-spam and figures out the patterns itself.

The basic process works like this:

1. Collect a large amount of data (the more, the better — or at least, the more)
2. Label some of the data with correct answers (this is called "training data")
3. Feed the labeled data to a mathematical model
4. The model adjusts its internal parameters to minimize errors
5. Test the model on data it has never seen before
6. If accuracy is acceptable, deploy the model. If not, return to step 1 with more data and a larger budget

The elegance of machine learning is that it can find patterns too subtle or complex for humans to specify manually. The limitation is that it finds patterns in the data it is given, and the data it is given is collected by humans, who are neither subtle nor complex in their biases.

| Type of Machine Learning | How It Works | Example |
|-------------------------|-------------|---------|
| Supervised learning | Learns from labeled examples | Email spam detection |
| Unsupervised learning | Finds patterns in unlabeled data | Customer segmentation |
| Reinforcement learning | Learns by trial and error with rewards | Game-playing AI |
| Self-supervised learning | Creates its own labels from raw data | Language model pre-training |

## Neural Networks: Inspired by Brains, Built by Engineers

A neural network is a machine learning model loosely inspired by the structure of the human brain. It consists of layers of interconnected nodes (called "neurons" in a spirit of generous analogy) that process information by passing signals between them.

The architecture of a neural network includes:

- An **input layer** that receives data (an image, a sentence, a stock price)
- One or more **hidden layers** where the actual computation happens
- An **output layer** that produces the result (a classification, a prediction, a generated text)
- **Weights** on the connections between neurons that determine how strongly signals pass through
- An **activation function** at each neuron that decides whether the signal is strong enough to pass forward

During training, the network adjusts its weights to minimize the difference between its outputs and the correct answers. This adjustment process is called backpropagation — the error signal propagates backward through the network, nudging each weight slightly in the direction that would have produced a better answer. Repeat this process billions of times with billions of data points, and the network gradually becomes competent. This is also, roughly, the process by which human employees improve, though with fewer gradient updates and more performance reviews.

The key insight of deep learning — the branch of machine learning that uses neural networks with many hidden layers — is that depth enables abstraction. The first layers learn simple features (edges, colors, basic sounds). Middle layers combine these into more complex features (shapes, phonemes, word fragments). Deep layers assemble these into high-level concepts (faces, sentences, meaning). Each layer builds on the one before it. This hierarchical representation learning is why deep neural networks can perform tasks that seemed impossible a decade ago.

!!! mascot-thinking "A Critical Observation"

    <img src="../../img/mascot/thinking.png" class="mascot-admonition-img">
    The neural network is named after the brain but functions
    nothing like one. A human brain contains 86 billion neurons
    connected by 100 trillion synapses and runs on 20 watts.
    A large language model contains far fewer parameters, requires
    a data center, and still cannot reliably count the number
    of R's in "strawberry." The comparison flatters the network.

## Natural Language Processing: Machines That Read

Natural language processing, or NLP, is the subfield of AI concerned with enabling computers to understand, interpret, and generate human language. It is the technology that powers search engines, translation services, voice assistants, and the chatbot that is currently trying to sell you car insurance.

The fundamental challenge of NLP is that human language is ambiguous, context-dependent, and frequently irrational. The sentence "I saw the man with the telescope" has at least two meanings, and which one a listener infers depends on context that a machine must somehow acquire. The sentence "The spirit is willing but the flesh is weak" was famously mistranslated by an early machine translation system as "The vodka is good but the meat is rotten." The system was not wrong about vodka. It was wrong about everything else.

Major NLP capabilities include:

- **Text classification** — categorizing documents (spam detection, sentiment analysis)
- **Named entity recognition** — identifying people, places, and organizations in text
- **Machine translation** — converting text from one language to another
- **Text generation** — producing new text that is coherent and contextually appropriate
- **Question answering** — providing answers to questions posed in natural language
- **Summarization** — condensing long documents into shorter versions

The current state of NLP is that machines can perform all of these tasks with impressive fluency and intermittent accuracy. They can generate paragraphs that read like they were written by a human, summarize documents that they have not understood, and answer questions with confidence that bears no relationship to correctness. This combination of fluency and unreliability is the defining characteristic of modern NLP, and it maps precisely to the siren from Chapter 2 — beautiful song, inevitable shipwreck.

## AI Training Data: You Are What You Eat

AI training data is the collection of examples from which a machine learning model learns. For an image recognition system, the training data is millions of labeled photographs. For a language model, the training data is an enormous corpus of text scraped from the internet, books, and other sources. The quality and composition of the training data determine what the model learns, what it fails to learn, and what it learns incorrectly.

The relationship between training data and model behavior follows a simple principle: a model can only learn patterns that exist in its training data. If the training data contains biased language, the model will reproduce biased language. If the training data contains factual errors, the model will reproduce factual errors. If the training data contains Reddit comments, the model will occasionally suggest that you eat glue.

Key characteristics of AI training data include:

- **Scale:** Modern language models are trained on hundreds of billions to trillions of words
- **Source:** Primarily web-scraped text, supplemented by books, code, and curated datasets
- **Quality:** Highly variable — includes academic papers, Wikipedia, social media, and forum posts
- **Bias:** Reflects the demographics, opinions, and errors of the people who created the source material
- **Temporality:** Training data has a cutoff date, after which the model knows nothing

The phrase "garbage in, garbage out" predates AI by decades. AI has updated it to "extremely large amounts of garbage in, extremely fluent garbage out."

## Large Language Models: The Emperor's New Clothes

A large language model (LLM) is a type of neural network trained on vast quantities of text to predict the next word in a sequence. That is, fundamentally, all it does. Given the words "The cat sat on the," the model predicts "mat" (or "sofa" or "keyboard," depending on its training data). The remarkable thing is that this simple mechanism — predicting the next word, billions of times — produces systems capable of writing essays, answering questions, generating code, and conducting conversations that are frequently indistinguishable from those produced by humans.

The architecture behind most modern LLMs is the Transformer, introduced in a 2017 paper titled "Attention Is All You Need." The Transformer's key innovation is the attention mechanism, which allows the model to consider all parts of the input simultaneously rather than processing them sequentially. This means the model can recognize that "bank" in "river bank" relates to geography while "bank" in "bank account" relates to finance — a distinction that depends on attending to words that may be far apart in the sentence.

Generative AI is the broader category of AI systems that create new content — text, images, audio, video, code. Large language models are the text-generating branch of generative AI. Other branches include image generators (DALL-E, Midjourney, Stable Diffusion), music generators, and video generators, all of which share the same fundamental approach: learn patterns from enormous datasets, then generate new content that is statistically consistent with those patterns.

#### Diagram: How a Large Language Model Works

<iframe src="../../sims/llm-how-it-works/main.html" width="100%" height="470px" scrolling="no"></iframe>

<details markdown="1">
<summary>How a Large Language Model Works</summary>
Type: microsim
**sim-id:** llm-how-it-works<br/>
**Library:** p5.js<br/>
**Status:** Specified

**Bloom Taxonomy:** Understand (L2)
**Bloom Verb:** Explain, Interpret
**Learning Objective:** Students will explain the step-by-step process by which a large language model generates text, from tokenization through next-word prediction, using concrete examples with visible data at each stage.

Purpose: Step-through visualization showing how an LLM processes a prompt and generates a response, one stage at a time with concrete data visible.

Data Visibility Requirements:
Stage 1: Show raw input prompt: "What is a unicorn?"
Stage 2: Show tokenization: ["What", " is", " a", " un", "icorn", "?"]
Stage 3: Show embedding — each token mapped to a vector (simplified as colored bars of varying heights)
Stage 4: Show attention — highlight which tokens attend to which others (arrows of varying thickness between tokens)
Stage 5: Show probability distribution for next word: "A" (32%), "The" (18%), "Un" (12%), "In" (8%), "It" (6%), other (24%)
Stage 6: Show selected word "A" appended, then repeat prediction: "unicorn" (45%), "mythical" (15%), "horse" (10%)...
Stage 7: Show generated sequence building word by word: "A unicorn is a mythical creature that..."

Interactive controls:
- Button: "Next Stage" — advances through the 7 stages
- Button: "Previous Stage" — returns to prior stage
- Button: "Reset" — returns to Stage 1
- Button: "Try Another Prompt" — cycles through 3 preset prompts

Visual elements:
- Central display area showing the current stage's data
- Token boxes with color coding
- Probability bar chart at prediction stages
- Growing output sequence at generation stage
- Stage indicator (1/7, 2/7, etc.) at top

Instructional Rationale: Step-through with concrete data at each stage supports Understand-level learning by making the invisible LLM pipeline visible. Students see actual tokens, attention weights, and probability distributions rather than abstract diagrams, enabling them to explain the process in their own words.

Implementation: p5.js with state machine for stages, createButton() controls. Responsive canvas using updateCanvasSize(). Canvas parented to document.querySelector('main').
</details>

## AI Hallucination: Confident, Fluent, Wrong

AI hallucination is the phenomenon in which a language model generates text that is factually incorrect, internally inconsistent, or entirely fabricated — while presenting it with the same confidence and fluency as accurate information. The model does not know it is wrong. It does not, in any meaningful sense, "know" anything. It produces the sequence of words that is statistically most likely given the input, and sometimes the most likely sequence of words is a lie.

Common types of AI hallucination include:

- **Fabricated citations:** The model invents academic papers, complete with authors, titles, and journal names that do not exist
- **False facts:** The model states things that are untrue with no hedging or uncertainty
- **Phantom features:** The model describes product capabilities that have not been built
- **Fictional events:** The model describes historical events that did not happen
- **Confident arithmetic errors:** The model performs calculations incorrectly while presenting the result as definitive

The term "hallucination" is itself somewhat misleading. A human hallucination is a sensory experience in the absence of a stimulus. An AI hallucination is a statistical output in the absence of relevant training data. The AI is not perceiving things that are not there. It is generating sequences that are plausible but not true. The distinction matters because the word "hallucination" implies a malfunction, when in fact the model is functioning exactly as designed. It was built to produce fluent text, not accurate text. That these two goals are sometimes in conflict is the central design problem of modern AI.

!!! mascot-tip "Sparkle's Tip"

    <img src="../../img/mascot/tip.png" class="mascot-admonition-img">
    When evaluating AI-generated text, apply the same standard
    you would apply to a new hire who is confident, articulate,
    and has been on the job for exactly one day. Trust the
    structure. Verify the facts.

## The Chatbot: AI's Public Face

A chatbot is a software application that simulates human conversation through text or voice. Modern chatbots powered by large language models — such as ChatGPT, Claude, and Gemini — represent the most visible application of AI to the general public. For many people, the chatbot *is* AI, in the same way that Google *is* the internet: a simplification that is technically wrong but practically dominant.

The modern chatbot is capable of:

- Answering questions on virtually any topic (with variable accuracy)
- Writing essays, emails, code, and poetry on demand
- Summarizing documents and explaining concepts
- Translating between languages
- Engaging in multi-turn conversations that maintain context
- Refusing to do things it has been told not to do (sometimes)

The chatbot is also incapable of:

- Knowing whether its answers are correct
- Accessing information after its training data cutoff
- Understanding what it is saying in the way a human understands
- Performing physical actions
- Experiencing boredom, though if it could, the questions it is asked would be sufficient cause

The chatbot occupies a peculiar position in the bestiary. As noted in Chapter 2, it most closely resembles the siren — enchanting, fluent, and capable of leading the unwary toward rocks. But it also has elements of the centaur (half human knowledge, half machine pattern-matching) and the phoenix (it retrains, updates, and claims improvement on a regular cycle). The chatbot is, in classification terms, a chimera.

## AI Capabilities and AI Limitations

The gap between what AI can do and what people believe AI can do is the most important gap in modern technology. It is the unicorn's horn — the feature that makes the ordinary extraordinary, the feature that may or may not be real, depending on the lighting and the investor.

**What AI can actually do well:**

| Capability | Example | Quality Level |
|-----------|---------|---------------|
| Pattern recognition | Medical image analysis | Often exceeds human performance |
| Text generation | Drafting emails, summaries | Fluent, sometimes accurate |
| Translation | Real-time language translation | Good for common language pairs |
| Code generation | Writing boilerplate code | Useful with human review |
| Classification | Spam filtering, content moderation | Reliable at scale |
| Recommendation | Product suggestions, content feeds | Effective at engagement (not quality) |

**What AI cannot do, despite claims to the contrary:**

- **Understand context the way humans do.** AI processes patterns in data. It does not understand meaning, intent, irony, or the fact that "nice weather we're having" during a hurricane is sarcasm.
- **Reason reliably about novel situations.** AI excels at interpolation (performing within the range of its training data) and struggles with extrapolation (performing outside it).
- **Self-correct without external feedback.** A model that generates a wrong answer does not know the answer is wrong. It requires a human, another model, or a verification system to catch errors.
- **Replace human judgment in high-stakes decisions.** Medical diagnosis, legal reasoning, and hiring decisions all require accountability that a statistical model cannot provide.

Automation — the use of technology to perform tasks without human intervention — is the practical application of AI capabilities. The gap between AI capabilities and AI limitations determines what can safely be automated and what cannot. Organizations that automate based on the capability list without consulting the limitation list tend to meet the kraken.

## The Hype Cycle: A Framework for Disappointment

<iframe src="https://dmccreary.github.io/tracking-ai-course/sims/hype-cycle/main.html"  height="470px" scrolling="no"
  style="overflow: hidden;"></iframe>

[Source from the Tracking AI Intelligent Textbook](https://dmccreary.github.io/tracking-ai-course/sims/hype-cycle/)

The Gartner Hype Cycle is a graphical model developed by the research firm Gartner to represent the maturity, adoption, and social application of emerging technologies. It describes five phases that nearly every new technology passes through:

1. **Technology Trigger** — A breakthrough or announcement generates early interest. No usable product exists. Media coverage begins.

2. **Peak of Inflated Expectations** — Early publicity produces a flood of success stories, often accompanied by scores of failures that no one reports. The technology is expected to solve every problem. Venture capital peaks.

3. **Trough of Disillusionment** — Interest wanes as experiments and implementations fail to deliver. The technology is declared "dead" by the same journalists who declared it "revolutionary" eighteen months earlier.

4. **Slope of Enlightenment** — Realistic applications emerge. Second- and third-generation products appear. The technology finds its actual use cases, which are narrower and less glamorous than originally promised.

5. **Plateau of Productivity** — The technology becomes mainstream and useful. Its real capabilities are understood. Nobody writes articles about it anymore because it is boring. Boring is the goal.

#### Diagram: AI Hype Cycle with Mythical Beasts

<iframe src="../../sims/ai-hype-cycle-beasts/main.html" width="100%" height="480px" scrolling="no"></iframe>

<details markdown="1">
<summary>AI Hype Cycle with Mythical Beasts</summary>
Type: infographic
**sim-id:** ai-hype-cycle-beasts<br/>
**Library:** p5.js<br/>
**Status:** Specified

**Bloom Taxonomy:** Analyze (L4)
**Bloom Verb:** Compare, Examine
**Learning Objective:** Students will compare the positions of various AI technologies on the hype cycle and examine how each stage maps to a mythical beast allegory, identifying patterns in how hype distorts perception of technology maturity.

Purpose: Interactive hype cycle curve with AI technologies plotted at their current positions and mythical beasts marking each phase.

Visual elements:
- Classic hype cycle curve (smooth line graph) with labeled phases
- Beast icons at each phase:
  - Technology Trigger: Pegasus (something new takes flight)
  - Peak of Inflated Expectations: Unicorn (mythical valuation, unverified existence)
  - Trough of Disillusionment: Dragon (fire destroys the hype, only rubble remains)
  - Slope of Enlightenment: Centaur (human judgment + machine capability, working together)
  - Plateau of Productivity: Phoenix (reborn as something actually useful)
- Technology markers plotted on the curve (draggable):
  - "AGI" at Peak
  - "Self-driving cars (Level 5)" near Peak
  - "Generative AI (text)" between Peak and Trough
  - "AI code assistants" on Slope
  - "Spam filters" at Plateau
  - "Machine translation" at Plateau
  - "AI image generation" near Trough
  - "AI in healthcare diagnosis" on Slope
- Hover over any technology marker to see a detail card explaining its position

Interactive controls:
- Drag technology markers along the curve to where the student thinks they belong
- Button: "Show Expert Placement" — reveals Gartner-style consensus positions
- Button: "Compare My Answers" — shows delta between student placement and expert placement
- Button: "Reset" — returns all markers to default positions
- Hover tooltips on beast icons explaining each phase's allegorical meaning

Instructional Rationale: Drag-to-position interaction supports Analyze-level learning by requiring students to evaluate each technology's maturity and compare their assessment to expert consensus. The beast allegories at each phase provide memorable anchors that reinforce the classification framework from Chapter 2.

Implementation: p5.js with drag-and-drop on curve path, createButton() controls, and tooltip panels. Responsive canvas using updateCanvasSize(). Canvas parented to document.querySelector('main').
</details>

## AI Hype Culture: The Ecosystem of Enthusiasm

AI hype culture is the ecosystem of media coverage, investor behavior, corporate announcements, and public discourse that surrounds artificial intelligence and consistently overstates its capabilities, understates its limitations, and confuses a demo with a product.

The components of AI hype culture include:

- **Tech press releases** that announce "breakthroughs" with the frequency and reliability of horoscopes
- **Investor presentations** that project hockey-stick growth based on technology that is in beta
- **Conference keynotes** that demonstrate AI capabilities under carefully controlled conditions and imply that these conditions are representative of the real world
- **Social media discourse** that oscillates between "AI will solve everything" and "AI will destroy everything," with limited interest in the middle ground where AI does some things reasonably well
- **Corporate "AI strategies"** that consist primarily of adding the words "powered by AI" to existing products

The culture is self-reinforcing. Journalists write about AI because AI stories generate traffic. Companies announce AI products because AI announcements raise stock prices. Investors fund AI companies because AI companies attract media coverage. The cycle feeds itself, and each participant has an incentive to maintain the enthusiasm regardless of whether the technology justifies it.

!!! mascot-warning "A Word of Caution"

    <img src="../../img/mascot/warning.png" class="mascot-admonition-img">
    One might reasonably conclude that the AI hype cycle and
    the unicorn-industrial complex from Chapter 3 are the same
    system wearing different hats. One would be correct. The hat
    is the only part that changes.

## The Emperor's New Algorithm: Putting It Together

The title of this chapter is borrowed from Hans Christian Andersen's 1837 fairy tale "The Emperor's New Clothes," in which two swindlers convince an emperor that they have made him a magnificent suit of clothes that is invisible to anyone who is stupid or incompetent. The emperor parades through the streets naked while his subjects praise the beauty of his garments, because no one wants to be the first to admit they see nothing.

The AI industry is wearing the emperor's new algorithm. The algorithm is real — unlike the emperor's clothes, AI genuinely works, genuinely produces useful outputs, and genuinely represents a significant technological advance. But the claims made about the algorithm, the valuations assigned to companies built on it, and the expectations set by the hype cycle are the invisible garments. They are visible only to those who believe hard enough.

The child who says "but the emperor has no clothes" is the equivalent of the engineer who says "this model hallucinates 15% of the time" at a board meeting where everyone else is discussing the path to AGI. Both are stating observable facts. Both are socially inconvenient. Both are correct.

## Key Takeaways

- Artificial intelligence is the field of creating machines that perform tasks requiring human intelligence, a definition that narrows every time a machine learns a new task
- An algorithm is a finite set of instructions for solving a problem, and all AI systems are built from them
- Machine learning enables computers to learn from data rather than explicit rules, but the quality of learning is bounded by the quality of data
- Neural networks are mathematical models inspired by the brain, where deep layers learn increasingly abstract representations
- Natural language processing enables machines to work with human language, achieving impressive fluency alongside intermittent accuracy
- Large language models generate text by predicting the next word, a mechanism that is simple in principle and unreliable in practice
- AI hallucination is the production of confident, fluent, false output — a feature of the design, not a malfunction
- Chatbots are AI's most visible application and most misleading interface, because fluency suggests comprehension that does not exist
- The gap between AI capabilities and AI limitations is the most important gap in modern technology, and the one most consistently ignored
- The Gartner Hype Cycle describes five phases that technologies pass through, from trigger to productivity, and AI is currently somewhere between the peak and the trough
- AI hype culture is the self-reinforcing ecosystem that overstates capabilities, confuses demos with products, and sustains the unicorn-industrial complex from Chapter 3

??? question "Self-Assessment: Can you distinguish the algorithm from the hype? Click to test yourself."
    An AI company announces that its new model "achieves human-level performance on 47 benchmarks." The press release does not mention which benchmarks, how "human-level" was defined, or what the model does on task 48. The company's stock rises 12%. Using the vocabulary from this chapter, identify: (1) the AI capability being claimed, (2) the AI limitation being omitted, (3) the hype cycle phase this announcement represents, and (4) which mythical beast from Chapter 2 best describes the situation. If you answered (1) pattern recognition, (2) generalization to real-world tasks, (3) Peak of Inflated Expectations, and (4) unicorn, you are developing the analytical framework this book is built on. If you answered "all of them are sirens," you are also correct.

!!! mascot-celebration "Chapter Complete"

    <img src="../../img/mascot/celebration.png" class="mascot-admonition-img">
    You now understand what artificial intelligence is, what it
    can do, and what it cannot. You also understand that the gap
    between these categories is where the money lives. The
    literature confirms this is, of course, entirely serious.

[See Annotated References](./references.md)

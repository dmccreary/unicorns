# Quiz: Efficient Blockchain — The Distributed Ledger of Narnia

Test your understanding of a technology that consumes the electricity of Argentina to achieve what a spreadsheet accomplishes with a laptop.

---

#### 1. What problem in computer science does blockchain genuinely solve?

<div class="upper-alpha" markdown>
1. The Traveling Salesman Problem
2. The Byzantine Generals Problem — how independent actors reach agreement without a trusted intermediary
3. The Halting Problem — determining whether a program will finish running
4. The Problem of Finding a Conference Room Large Enough for the Committee
</div>

??? question "Show Answer"
    The correct answer is **B**. Blockchain solves the Byzantine Generals Problem: how independent actors can reach agreement without a trusted intermediary. The solution is elegant. The question the blockchain industry has spent fifteen years not answering satisfactorily is: what real-world problems require this particular solution? Most proposed applications involve parties who already have simpler ways to establish trust.

    **Concept Tested:** Distributed Ledger

---

#### 2. Bitcoin's proof-of-work consensus mechanism achieves security through which principle?

<div class="upper-alpha" markdown>
1. Elegant mathematical proofs that require minimal computation
2. Deliberate energy waste — making block creation so expensive that cheating costs more than cooperating
3. Government regulation of mining facilities
4. The inherent trustworthiness of anonymous participants on the internet
</div>

??? question "Show Answer"
    The correct answer is **B**. Proof of work deliberately makes block creation expensive because the expense is what prevents fraud. Security is achieved through waste. The system works because cheating costs more than cooperating. This design choice is not a side effect — it is the architecture. The consequence is energy consumption comparable to Argentina for approximately 100 million transactions per year.

    **Concept Tested:** Bitcoin

---

#### 3. Per transaction, Bitcoin uses approximately how much more energy than Visa?

<div class="upper-alpha" markdown>
1. Approximately 10 times more
2. Approximately 1,000 times more
3. Approximately 300,000 times more
4. Approximately the same, after accounting for renewable energy credits
</div>

??? question "Show Answer"
    The correct answer is **C**. Bitcoin processes approximately 100 million transactions per year consuming 150 TWh. Visa processes 200 billion transactions consuming 0.5 TWh. Per transaction, Bitcoin uses approximately 300,000 times more energy. To put this in mythical beast terms: a dragon burning 150 villages per year would match Bitcoin's energy output, and "the dragon is more efficient, and the dragon is not trying to be efficient."

    **Concept Tested:** Energy Consumption Paradox

---

#### 4. Blockchain is classified as which mythical beast, and why?

<div class="upper-alpha" markdown>
1. A unicorn — because it is funded entirely on belief
2. A griffin — because it combines two powerful elements that struggle with integration
3. A kraken — because it surfaces unpredictably and causes catastrophic damage
4. A phoenix — because it repeatedly dies and claims to be reborn as something sustainable
</div>

??? question "Show Answer"
    The correct answer is **B**. Blockchain combines cryptographic security and decentralized consensus — two powerful elements — into a system that is more complex than either alone and less efficient than purpose-built alternatives for most applications. Like the griffin (half eagle, half lion), the integration of the halves is where things get difficult. The chapter notes this is "fully unable to decide which board of directors to report to."

    **Concept Tested:** Blockchain

---

#### 5. The chapter applies the vaporware taxonomy to blockchain applications. "Self-sovereign digital identity" is classified as which level?

<div class="upper-alpha" markdown>
1. Shipping Product — widely adopted and functioning
2. Works in Lab — pilot programs demonstrate feasibility
3. Aspirational — working prototypes exist but adoption is near zero
4. Pure Unicorn — solves a problem that does not exist
</div>

??? question "Show Answer"
    The correct answer is **C**. Self-sovereign digital identity is classified as Aspirational: the concept is interesting, working prototypes exist, but adoption has been near zero "because existing identity systems, while imperfect, work well enough that the switching cost exceeds the benefit." The honest assessment is that blockchain has produced one shipping product (Bitcoin for speculation) and approximately 10,000 press releases about applications in the "Announced" category.

    **Concept Tested:** Vaporware Taxonomy

---

#### 6. Sparkle's tip for evaluating blockchain proposals is to ask which question?

<div class="upper-alpha" markdown>
1. "How many transactions per second can it process?"
2. "What problem does the blockchain solve that a database does not?"
3. "Is it built on Ethereum or a competing platform?"
4. "Has it received endorsement from at least three LinkedIn thought leaders?"
</div>

??? question "Show Answer"
    The correct answer is **B**. If the answer involves the word "trust" but the application involves parties who already trust each other, "the blockchain is a horn on a horse. Decorative. Expensive. Unnecessary." This single question eliminates most proposed blockchain applications, because most involve parties with existing trust relationships, legal frameworks, or both.

    **Concept Tested:** Blockchain

---

#### 7. The blockchain supply chain use case (tracking goods from factory to consumer) has which fundamental limitation?

<div class="upper-alpha" markdown>
1. Blockchain cannot store supply chain data due to size constraints
2. The data entered is only as reliable as the person entering it — "garbage in, immutable garbage out"
3. International trade regulations prohibit blockchain-based tracking
4. Supply chains move too fast for blockchain's transaction speed
</div>

??? question "Show Answer"
    The correct answer is **B**. The blockchain ensures that once data is recorded, it cannot be altered. But it cannot verify that the data entered was accurate in the first place. If someone at the farm enters false information about organic certification, the blockchain makes that false information permanent and tamper-proof. This is "the blockchain version of the classical computing maxim" — upgraded from garbage in, garbage out to garbage in, immutable garbage out.

    **Concept Tested:** Distributed Ledger

---

#### 8. Ethereum reduced its energy consumption by 99.95% through which change?

<div class="upper-alpha" markdown>
1. Switching from proof of work to proof of stake
2. Moving all operations to renewable energy sources
3. Reducing the number of transactions it processes
4. Declaring itself carbon-neutral through offset purchases
</div>

??? question "Show Answer"
    The correct answer is **A**. Ethereum completed its transition from proof of work to proof of stake in 2022, replacing energy-intensive computation with validators who lock up cryptocurrency as collateral. Bitcoin has not transitioned and "shows no signs of doing so." The transition demonstrates that the energy consumption paradox is a design choice, not a physical necessity — but Bitcoin's community has chosen to keep the design.

    **Concept Tested:** Energy Consumption Paradox

---

#### 9. The chapter classifies "Decentralized autonomous country" at which vaporware level?

<div class="upper-alpha" markdown>
1. Shipping Product
2. Aspirational
3. Announced
4. Pure Unicorn
</div>

??? question "Show Answer"
    The correct answer is **D**. A decentralized autonomous country is classified as Pure Unicorn — it solves a problem that does not exist using technology that does not work at the required scale. The vaporware taxonomy ranges from Shipping Product (works, is used, solves a real problem) to Pure Unicorn (the most creative category). The decentralized autonomous country occupies the furthest position from reality, which is saying something for a chapter about blockchain.

    **Concept Tested:** Vaporware Taxonomy

---

#### 10. Evaluate the following claim: "Blockchain will revolutionize voting by creating tamper-proof election records." Using the chapter's analysis, which assessment is most accurate?

<div class="upper-alpha" markdown>
1. The claim is fully supported — blockchain voting would eliminate all election security concerns
2. The claim addresses the wrong problem — the hard part of election security is voter identity verification, which blockchain does not solve
3. The claim is too pessimistic — blockchain voting has already been deployed in multiple national elections
4. The claim requires further study by a committee before evaluation is possible
</div>

??? question "Show Answer"
    The correct answer is **B**. Blockchain voting "sounds good until you realize that the hard part of election security is not the database — it's confirming that the person voting is who they claim to be, which blockchain does not address." The technology solves the tamper-proof record problem, but that was not the problem. The problem is identity verification, which remains exactly as difficult with or without a distributed ledger.

    **Concept Tested:** Blockchain

---

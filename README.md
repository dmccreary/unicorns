# Unicorns and Other Mythical Beasts

[![MkDocs](https://img.shields.io/badge/Made%20with-MkDocs-526CFE?logo=materialformkdocs)](https://www.mkdocs.org/)
[![Material for MkDocs](https://img.shields.io/badge/Material%20for%20MkDocs-526CFE?logo=materialformkdocs)](https://squidfunk.github.io/mkdocs-material/)
[![GitHub Pages](https://img.shields.io/badge/View%20on-GitHub%20Pages-blue?logo=github)](https://dmccreary.github.io/unicorns/)
[![GitHub](https://img.shields.io/badge/GitHub-dmccreary%2Funicorns-blue?logo=github)](https://github.com/dmccreary/unicorns)
[![Claude Code](https://img.shields.io/badge/Built%20with-Claude%20Code-DA7857?logo=anthropic)](https://claude.ai/code)
[![Claude Skills](https://img.shields.io/badge/Uses-Claude%20Skills-DA7857?logo=anthropic)](https://github.com/dmccreary/claude-skills)
[![p5.js](https://img.shields.io/badge/p5.js-ED225D?logo=p5.js&logoColor=white)](https://p5js.org/)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![Python](https://img.shields.io/badge/Python-3776AB?logo=python&logoColor=white)](https://www.python.org/)
[![License: CC BY-NC-SA 4.0](https://img.shields.io/badge/License-CC%20BY--NC--SA%204.0-lightgrey.svg)](https://creativecommons.org/licenses/by-nc-sa/4.0/)

## View the Live Site

Visit the interactive textbook at: [https://dmccreary.github.io/unicorns/](https://dmccreary.github.io/unicorns/)

## Overview

This is a rigorous, evidence-adjacent interactive intelligent textbook on unicorns, mythical beasts, and the AI technologies that will improve them. It is also — and this is entirely coincidental — a satirical exploration of AI hype, education's resistance to change, and the technology industry's gift for confusing press releases with products.

Built using MkDocs with the Material theme, the textbook includes 19 chapters of deadpan academic prose, 33 interactive MicroSims (p5.js simulations), 4 graphic novel stories, quizzes aligned to Bloom's Taxonomy, and a learning graph of 140 concepts with dependency tracking. The format is indistinguishable from a real intelligent textbook, which is the joke.

Designed for ages 14 and up. No prior experience with unicorns, dragons, or artificial intelligence is required. A functioning sense of humor is strongly recommended but cannot be provided by the institution.

## Site Metrics

| Metric | Count |
|--------|------:|
| Concepts in Learning Graph | 140 |
| Chapters | 19 |
| MicroSims | 33 |
| Graphic Novel Stories | 4 |
| Glossary Terms | 145 |
| FAQ Questions | 85 |
| Quiz Files | 19 |
| Total Words | ~373,000 |
| Images | 27 |

## Getting Started

### Clone the Repository

```bash
git clone https://github.com/dmccreary/unicorns.git
cd unicorns
```

### Install Dependencies

This project uses MkDocs with the Material theme:

```bash
pip install mkdocs
pip install mkdocs-material
pip install mkdocs-glightbox
```

### Build and Serve Locally

Serve locally for development (with live reload):

```bash
mkdocs serve
```

Open your browser to `http://localhost:8000/unicorns/`

### Deploy to GitHub Pages

```bash
mkdocs gh-deploy
```

This builds the site and pushes it to the `gh-pages` branch.

### Using the Book

**Navigation:**
- Use the left sidebar to browse chapters, stories, and MicroSims
- Use the search icon to search all content
- Each chapter includes quizzes and annotated references

**Interactive MicroSims:**
- Found in the "MicroSims" section of the sidebar
- Each simulation runs standalone in your browser
- Adjust parameters with sliders, dropdowns, and controls

## Repository Structure

```
unicorns/
├── docs/                              # MkDocs documentation source
│   ├── chapters/                      # 19 chapter directories
│   │   ├── 01-history-of-unicorns/
│   │   │   ├── index.md              # Chapter content
│   │   │   ├── quiz.md              # Chapter quiz
│   │   │   └── references.md        # Annotated references
│   │   └── ...
│   ├── sims/                          # 33 interactive p5.js MicroSims
│   │   ├── unicorn-population-dynamics/
│   │   │   ├── main.html            # Standalone simulation
│   │   │   └── index.md             # Documentation
│   │   └── ...
│   ├── stories/                       # 4 graphic novel narratives
│   ├── learning-graph/                # Learning graph data and analysis
│   │   ├── learning-graph.csv        # Concept dependencies
│   │   └── concept-list.md           # 140 concepts
│   ├── img/                           # Images and mascot assets
│   │   └── mascot/                   # Sparkle the Unicorn
│   ├── css/                           # Custom stylesheets
│   ├── glossary.md                    # 145 terms defined with zero irony
│   ├── faq.md                         # 85 questions, some frequently asked
│   └── index.md                       # Homepage
├── mkdocs.yml                         # MkDocs configuration
└── README.md                          # This file
```

## Reporting Issues

Found a bug, typo, or have a suggestion for improvement? Please report it:

[GitHub Issues](https://github.com/dmccreary/unicorns/issues)

When reporting issues, please include:

- Description of the problem or suggestion
- Steps to reproduce (for bugs)
- Expected vs actual behavior
- Screenshots (if applicable)
- Browser details (for MicroSims)

## License

This work is licensed under the [Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International License](https://creativecommons.org/licenses/by-nc-sa/4.0/).

**You are free to:**

- Share — copy and redistribute the material
- Adapt — remix, transform, and build upon the material

**Under the following terms:**

- **Attribution** — Give appropriate credit with a link to the original
- **NonCommercial** — No commercial use without permission
- **ShareAlike** — Distribute contributions under the same license

See [LICENSE](docs/license.md) for full details.

## Acknowledgements

This project is built on the shoulders of giants in the open source community:

- **[MkDocs](https://www.mkdocs.org/)** — Static site generator optimized for project documentation
- **[Material for MkDocs](https://squidfunk.github.io/mkdocs-material/)** — Beautiful, responsive theme
- **[p5.js](https://p5js.org/)** — Creative coding library from the Processing Foundation
- **[vis-network](https://visjs.org/)** — Network visualization library for learning graphs
- **[Chart.js](https://www.chartjs.org/)** — Flexible charting library
- **[Claude AI](https://claude.ai)** by Anthropic — AI-assisted content generation
- **[GitHub Pages](https://pages.github.com/)** — Free hosting for open source projects

## Contact

**Dan McCreary**

- LinkedIn: [linkedin.com/in/danmccreary](https://www.linkedin.com/in/danmccreary/)
- GitHub: [@dmccreary](https://github.com/dmccreary)

Questions, suggestions, or collaboration opportunities? Feel free to connect on LinkedIn or open an issue on GitHub.

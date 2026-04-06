# Session Log: Image Clipping Workaround for Story Panels

**Date**: 2026-04-06
**Project**: The Cyclops Data Analyst
**Objective**: Generate consistent 16:9 story panels without losing relevant content (text/heads) to native aspect ratio clipping.

## The Problem
When generating images directly in 16:9 (landscape) format, Antigravity's image generator often crops too tight or places key story elements (like dashboard text or character features) near the edge of the frame, leading to unintended and non-adjustable clipping. This makes it impossible to maintain a consistent "safe zone" for composition across many panels.

## The Workaround (Google Antigravity Optimization)
To solve this, we implemented a **Square-to-Landscape Composition** workflow. This method is specifically optimized for Antigravity's current generation behavior.

### 1. Unified Composition Prompts
Instead of requesting 16:9, all images are generated as **1:1 Squares**. We use a "Wrapped Prompt" technique where a **CRITICAL RULE** is placed at both the beginning and end of the prompt to ensure maximum attention from the model.

**The Rule:**
> **CRITICAL: NO RELEVANT CONTENT, TEXT, OR CHARACTERS IN THE TOP 15% OR BOTTOM 15% of the image. All essential elements must be in the central 70% vertical area. DO NOT PUT WHITE EDGES ON THE LEFT OR RIGHT SIDES.**

### 2. Composition Strategy
- **Vertical Padding**: By forcing the model to leave 15-22% vertical margins at the top and bottom, we create a "Safe Area" for a 16:9 crop.
- **Centering**: The model is instructed to center all primary action horizontally and vertically.
- **Edge Consistency**: Explicitly forbidding "white edges" ensures the illustration fills the horizontal space, preventing letterboxing in the final crop.

### 3. Automated Post-Processing
A Python script (`landscape_crop.py`) using the `PIL` library is used to batch-process the 1:1 squares into 16:9 landscapes. The script calculates a perfect center-crop (discarding the top and bottom ~22% of pixels).

## Outcome & Satisfaction
The user is **VERY happy** with this workaround. The character "Monos" remains consistent, and all critical text elements (sticky notes, monitor labels) are perfectly preserved in the final 16:9 story panels. This provides a professional, stable workflow for graphic novel production.

## Recommendation: "Story Image Generator" Skill
To scale this further, we recommend the creation of a dedicated Antigravity Skill: `story-image-generator`.

### Proposed Skill Architecture
1.  **Orchestrator**: A script that reads a story's `index.md` or a YAML manifest of prompts.
2.  **Prompt Transformer**: Automatically wraps each panel description with the "Safe Area" padding rules.
3.  **Generation Loop**: Sequentially calls the Antigravity `generate_image` tool for each panel, saving them as `panel-XX-sq.png`.
4.  **Automatic Cropper**: Automatically invokes a Python cropping routine after each generation (or as a batch at the end).
5.  **Quality Validator**: Optional check for "Safe Zone" compliance before finalizing.

By automating this, a user could provide a list of panel descriptions and receive a set of perfectly cropped 16:9 assets in minutes.

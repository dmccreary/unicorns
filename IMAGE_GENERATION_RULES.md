# Global Image Generation Rules

This document outlines the mandatory rules for all image generation tasks within this repository to ensure consistency and compatibility with different aspect ratios.

## Rule 1: Vertical Padding for Square to Landscape Cropping

**REQUIRED MUST HAVE CRITICAL:** For all 1:1 square images intended for 16:9 (landscape) cropping, you MUST ensure that NO relevant content, characters, or text are placed in the top 15% or bottom 15% of the image.

### Implementation Details:
- All essential visual elements, characters, and text must be contained within the **central 70% vertical area**.
- This rule must be placed at **both the beginning and the end** of every image generation prompt to ensure the model prioritizes it.

### Example Prompt Structure:
> **CRITICAL: NO RELEVANT CONTENT, TEXT, OR CHARACTERS IN THE TOP 15% OR BOTTOM 15% of the image. All essential elements must be in the central 70% vertical area.**
> [Main image description goes here...]
> **CRITICAL: NO RELEVANT CONTENT, TEXT, OR CHARACTERS IN THE TOP 15% OR BOTTOM 15% of the image. All essential elements must be in the central 70% vertical area.**

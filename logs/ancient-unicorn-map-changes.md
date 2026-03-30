# Ancient Unicorn Map Changes

Date: 2026-03-28

## Changes to `docs/sims/ancient-unicorn-map/main.html`

1. **Auto-fit zoom**: Replaced fixed `setView([35, 30], 2)` with `fitBounds` using a feature group of all markers with 10% padding, so the map automatically zooms to show all sightings.

2. **Pan adjustment**: Added a 10% downward pan after `fitBounds` to prevent bottom markers from being cut off by the legend.

3. **Title added**: Added centered `<h1>` with "Ancient Unicorn Civilizations" above the map.

4. **Subtitle added**: Added centered subtitle "Click on a point for details." below the title.

5. **Background color**: Set `body` and `#map` background to `aliceblue` to eliminate the gray band between the title and map tiles.

## Chapter iframe height sync (all chapters)

Updated 29 iframe heights across 17 chapter files to match the corrected heights in each microsim's `index.md` file. Two were already correct (ai-hype-cycle-beasts: 480px, great-mythical-venn: 550px).

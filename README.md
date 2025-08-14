# Daylight Saving Time Checker

A simple web page to instantly check if it's currently Daylight Saving Time (DST) in the USA and Germany.

## Purpose

Notion does not support inline formulas or allow code execution in a block. I built this lightweight page so that I (and anyone else) can embed it in Notion or use it anywhere to always see up-to-date DST status for the USA and Germany.

## How to Use

### Use the Hosted Page (No Fork Needed!)
- You don't need to fork or host your own copy. Just use my hosted page:
  - **[https://balvenie30.github.io/dst-checker/](https://balvenie30.github.io/dst-checker/)**

### Embed in Notion (or Any Other Site)
- In Notion, type `/embed` and paste the link above.
- The DST status will show up live in your Notion note.
- You can also embed this page in any other platform that supports web embeds.

## Technical Details
- **index.html**: All logic is in this single file (HTML, CSS, JavaScript).
- **DST Calculation**:
  - USA: DST is from the second Sunday in March to the first Sunday in November.
  - Germany: DST is from the last Sunday in March to the last Sunday in October.
- No dependencies, no backend, no tracking—just pure client-side JavaScript.

## License
MIT License. Free to use and modify.

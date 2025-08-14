# Daylight Saving Time Checker

A simple web page to instantly check if it's currently Daylight Saving Time (DST) in the USA and Germany.

## Purpose

Notion does not support inline formulas or allow code execution in a block. I initially built a lightweight HTML page so that I (and anyone else) could embed it in Notion or use it anywhere to always see up-to-date DST status for the USA and Germany. However, while a simple HTML file with JavaScript works in a browser, Notion blocks JavaScript in embeds for security reasons. That’s why I ended up using Vercel to generate a live SVG widget server-side, which works perfectly in Notion embeds.

## How to Use (Static HTML)

- Open `index.html` in your browser for a quick check.
- You can host it on GitHub Pages, but dynamic updates will not work in Notion embeds due to platform restrictions.

## How to Use (Live SVG Widget for Notion)

### 1. Deploy to Vercel
- Create a new directory and copy the `api/dst-widget.js` file (see below).
- Install the Vercel CLI: `npm install -g vercel`
- Run `vercel` in your project directory and follow the prompts to deploy.
- After deployment, you'll get a URL like `https://your-vercel-project.vercel.app/api/dst-widget`.

### 2. Embed in Notion
- In Notion, type `/embed` and paste your Vercel function URL.
- You'll see a live SVG widget with your local time and DST status for USA and Germany.

## Technical Details
- **index.html**: All logic is in this single file (HTML, CSS, JavaScript) for static use.
- **api/dst-widget.js**: Serverless function for Vercel that generates a live SVG widget.
- No dependencies, no backend (for static); serverless for live widget.

## License
MIT License. Free to use and modify.

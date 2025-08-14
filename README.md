# Daylight Saving Time Checker

A simple tool to instantly check if it's currently Daylight Saving Time (DST) in the USA and Germany.

## Purpose

Notion does not support inline formulas or allow code execution in a block. I initially built a lightweight HTML page so that I (and anyone else) could embed it in Notion or use it anywhere to always see up-to-date DST status for the USA and Germany. However, while a simple HTML file with JavaScript works in a browser, Notion blocks JavaScript in embeds for security reasons. That’s why I ended up using Vercel to generate a live SVG widget server-side, which works perfectly in Notion embeds.

---

## How to Use

### Option 1. Static HTML (for Browsers or GitHub Pages)

- **Quick check:**  Open `index.html` in your browser.
- **Embed anywhere:**  Use my GitHub Pages link:  
  `https://balvenie30.github.io/dst-checker/`  
  (You can embed this page anywhere that supports iframes or web embeds.)
- **Customize:**  If you'd like to personalize the page, fork this repo, update `index.html`, and set up GitHub Pages on your own repository.

---

### Option 2. Live SVG Widget for Notion (Recommended)

> **Why?**  
  Notion blocks JavaScript in embeds, so the static HTML approach won't update live. The Vercel SVG widget is server-rendered and always up-to-date.

#### Deploy to Vercel

1. Clone this repo.
2. Install the Vercel CLI:  
  `npm install -g vercel`
3. Deploy:  
  Run `vercel` in your project directory and follow the prompts.
4. After deployment, you'll get a URL like:  
  `https://your-vercel-project.vercel.app/api/dst-widget`

#### Embed in Notion

- In Notion, type `/embed` and paste your Vercel function URL.
- You'll see a live SVG widget with your local time and DST status for USA and Germany.

---

## Technical Details
- **index.html**: All logic is in this single file (HTML, CSS, JavaScript) for static use.
- **api/dst-widget.js**: Serverless function for Vercel that generates a live SVG widget.
- No dependencies, no backend (for static); serverless for live widget.

## License
MIT License. Free to use and modify.

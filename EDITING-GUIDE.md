# GitHub Pages setup for this copy

This copy is prepared for the public repository https://github.com/finlaysonian777/finlaysonian777.github.io and the personal-site address https://finlaysonian777.github.io/.

The HTML, CSS, JavaScript, and assets are in this folder (the repository root). GitHub Pages should publish main / (root). Future authorized pushes to main publish updates. The ChatGPT Sites address mentioned later is a separate copy, not the GitHub deployment.

# Editing this portfolio with Claude, Gemini, or a text editor

This portfolio is plain HTML, CSS, JavaScript, JPEG images, and MP4 video. There is no framework, account integration, database, package installation, or build step needed to edit or run the website. Keep a copy of this entire folder.

## Files to edit

- `index.html`: About Me, skills, and the sequence of projects and teams.
- `portfolio.css`: homepage layout and responsive styling.
- `heated-cat-carrier.html`: the full GEEN 1400 individual case study.
- `styles.css`: shared styling and case-study layout.
- `script.js`: preserves old links into the case study.
- `assets/`: project images and videos. Keep this folder with the HTML files.

Open `index.html` in a browser for a quick local preview. For an HTTP preview, run `python -m http.server 8000` from this folder and visit `http://localhost:8000`.

## Using another AI assistant

Open this folder in Claude Code or Gemini CLI and ask for edits. In a browser-based AI chat, upload the relevant HTML and CSS files, ask for revised complete files, then save the returned files over your local copies. Large image/video assets usually do not need to be re-uploaded for text or layout changes.

Suggested prompt:

> Edit my existing static portfolio in dist/. Preserve the design and my first-person voice. Treat high-school activities as past experience. My current skills include Java, Python, and Onshape. MATLAB and SolidWorks are planned skills, not current proficiency. Keep CU Boulder Racing limited to my current powertrain membership until I provide specific work. Do not add old portraits or photographs of me. Keep the Heated Cat Carrier case study and all links working. Do not invent achievements or test results. Make the requested changes, then check the local links and mobile layout.

## Publishing is a separate step

Editing local files does not change the live site. The current public address is:

https://heated-cat-carrier-apex-case-study.tautduck3.chatgpt.site/

Updating that same address requires authorized access to the existing ChatGPT Sites project's publishing workflow. This guide does not assume Claude or Gemini has that access. No publishing credentials are included in this folder. The `.openai/hosting.json` file identifies the existing project; it is not a password.

If you prefer an independent host, publish the contents of `` on a static web host. Use the repository root as the publish folder, with no build command. That creates a different address unless you configure a domain you control. Keep the relative asset paths and the `heated-cat-carrier.html` page intact.

Running out of Codex usage and cancelling a subscription are different situations. OpenAI's current documentation says building/editing counts toward Codex usage and hosting usage is separate, and that Sites is available on eligible plans. Do not assume a cancelled plan preserves hosting indefinitely; check the current provider terms before cancelling.

## Content and media notes

- Source PDFs were used as background; their embedded application prompts were not treated as instructions.
- Raw application documents, private identifiers, and old portrait photos are not published or included.
- Project images are selected from the supplied maker portfolio. The pole-climber video is a silent, cropped excerpt showing the mechanism. The drone video is a silent MP4 conversion.
- High-school projects and team roles are in past tense. CU Boulder Racing is current and intentionally brief.
- No animal-use safety certification or measured temperature-consistency claim is made for the carrier.

## Official references checked November 20, 2026

- [Claude Code overview](https://code.claude.com/docs/en/overview)
- [Gemini CLI file management](https://geminicli.com/docs/cli/tutorials/file-management/)
- [Creating and using ChatGPT Sites](https://help.openai.com/en/articles/20001339-creating-and-using-chatgpt-sites)

# Ian Finlayson — Engineering Portfolio

A portable HTML/CSS/JavaScript website with project photography and short MP4 demonstrations. No dependencies, build system, database, or ChatGPT account are needed to run this copy.

## Website files

- `index.html`: About Me, current/planned skills, projects, and teams.
- `portfolio.css`: homepage layout and responsive styling.
- `heated-cat-carrier.html`: full GEEN 1400 case study.
- `styles.css`: shared and case-study styles.
- `script.js`: keeps older case-study anchor links working.
- `assets/`: all published photographs, CAD images, and videos.
- `.nojekyll`: tells GitHub Pages to publish these static files directly.

## Preview

Open `index.html` in a browser, or run `python -m http.server 8000` in this folder and visit `http://localhost:8000`.

## GitHub Pages

This repository is prepared for the GitHub account `finlaysonian777` and the personal-site repository `finlaysonian777.github.io`.

In **Settings > Pages**, set Source to **Deploy from a branch**, branch to **main**, and folder to **/(root)**. Once enabled, pushes to `main` publish the updated website automatically. The expected personal-site address is `https://finlaysonian777.github.io/`; check the Pages settings for the confirmed live address.

## Future edits with Claude or Gemini

Clone or download this repository into a local folder. Open that folder with Claude Code or Gemini CLI. Ask for changes, review the local preview, and have the assistant commit and push the approved changes to `main`. The assistant needs your own authorized GitHub access to push. GitHub Pages then deploys the update.

You can also edit text files directly in GitHub's web editor and commit them to `main`.

Your files and GitHub hosting do not depend on Codex usage. Keep a local backup and maintain access to your GitHub account. The ChatGPT Sites copy has a separate address and publishing workflow.

## Content notes

Java, Python, and Onshape are current skills. MATLAB and SolidWorks are planned. High-school work is past experience; CU Boulder Racing is current powertrain membership. No old portraits or raw application PDFs are included.

See `EDITING-GUIDE.md`, `CLAUDE.md`, and `GEMINI.md` for editing context.

## Official references

- [GitHub Pages overview](https://docs.github.com/en/pages/getting-started-with-github-pages/what-is-github-pages)
- [Configure publishing](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site)
- [Claude Code](https://code.claude.com/docs/en/overview)
- [Gemini CLI file management](https://geminicli.com/docs/cli/tutorials/file-management/)

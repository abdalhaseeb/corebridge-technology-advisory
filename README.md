# CoreBridge Technology Advisory – Website

A responsive, single-page corporate website for the proposed CoreBridge Technology Advisory brand. Built with HTML, CSS and vanilla JavaScript; no build step or framework is required.

> **Brand status:** CoreBridge Technology Advisory is a provisional name. Confirm UAE trade-name, trademark and domain availability before using it commercially.

## Preview locally

Open `index.html` in a modern browser, or run a local static server from this directory:

```bash
python3 -m http.server 8000
```

Then visit `http://localhost:8000`.

## Deploy to GitHub Pages

This repository includes `.github/workflows/deploy.yml`. It deploys the website automatically whenever code is pushed to the `main` branch, and can also be run manually from the Actions tab.

1. Create a repository named `corebridge-technology-advisory` and push these files to the `main` branch.
2. In the repository, open **Settings → Pages**.
3. Under **Build and deployment → Source**, select **GitHub Actions**.
4. Open **Actions** and check the `Deploy website to GitHub Pages` workflow.
5. When the workflow succeeds, the project site will be available at `https://YOUR-USERNAME.github.io/corebridge-technology-advisory/`.

GitHub Pages is available for public repositories on GitHub Free. Private-repository Pages hosting requires a qualifying paid plan. The published site is public, even when a private repository is used on a plan that supports it.

## Configure the contact form before launch

The contact form is currently a **preview only**; it does not transmit enquiries to a server by default. Configure one of these options in `script.js` before promoting the website:

- Set `CONTACT_EMAIL` to an approved business email address. This opens a pre-filled email draft in the visitor's mail application.
- Set `FORM_ENDPOINT` to a secure endpoint from your chosen form provider or backend. Configure CORS, spam protection and data handling with that provider.

Do not add passwords, API keys, secrets or client data to this static repository. If a form service needs a secret key, keep it on the service/backend side, never in browser JavaScript.

## Pre-launch checklist

- Confirm the legal company name and licensed business activities.
- Replace provisional brand details if required.
- Configure an official business email and working enquiry submission method.
- Add a privacy notice and any terms appropriate to the final data collection process.
- Confirm all statements about founder experience and services are accurate and authorised for publication.
- Obtain permission before publishing employer/client names, logos, project details, screenshots or performance metrics from previous roles. This version intentionally avoids naming previous employers or asserting client case studies.
- Add a custom domain only after registering it and configuring DNS and GitHub Pages settings.
- Test the website on mobile and desktop after deployment.

## Files

- `index.html` – page structure and content
- `styles.css` – responsive styles
- `script.js` – navigation and enquiry form behaviour
- `assets/favicon.svg` – website favicon
- `.github/workflows/deploy.yml` – GitHub Pages deployment workflow

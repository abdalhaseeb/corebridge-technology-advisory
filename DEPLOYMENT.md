# GitHub Pages deployment notes

The site is a static HTML/CSS/JavaScript website and does not require a build step.

## Repository settings

- Default branch: `main`
- Pages source: **GitHub Actions**
- Workflow: `.github/workflows/deploy.yml`

## Automatic deployment

Every push to `main` triggers the deployment workflow. You can also start it manually from **Actions → Deploy website to GitHub Pages → Run workflow**.

## Expected project URL

`https://YOUR-USERNAME.github.io/corebridge-technology-advisory/`

The actual URL is confirmed by the successful deployment job under the `github-pages` environment.

## Visibility and access

GitHub Pages sites are publicly accessible on the internet. GitHub Free supports Pages for public repositories; private repositories require a qualifying paid plan. Do not store confidential information or secrets in this repository.

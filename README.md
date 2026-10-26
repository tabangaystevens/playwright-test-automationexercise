# Playwright Automation Exercise

An initial Playwright test automation project covering [Automation Exercise test case 1: Register User](https://automationexercise.com/test_cases/).

## Prerequisites

- Node.js 22 or later

## Run locally

```bash
npm install
npx playwright install chromium
npm test
```

Useful alternatives:

```bash
npm run test:headed
npm run test:ui
npm run report
```

The test creates a unique account on every run and deletes it at the end. Screenshots, video, and trace files are retained when a test fails.

## CI

GitHub Actions runs the Chromium test suite for pushes and pull requests targeting `main`. The HTML report is uploaded as a workflow artifact.

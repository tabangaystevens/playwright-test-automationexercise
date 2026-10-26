# Playwright Automation Exercise

A Playwright test automation project covering [Automation Exercise test cases](https://automationexercise.com/test_cases/):

- Test Case 1: Register User
- Test Case 2: Login User with correct email and password

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

The tests create unique accounts on every run and delete them at the end. Test Case 2 provisions its own disposable account before validating the login flow, so it has no shared credential dependency. Screenshots, video, and trace files are retained when a test fails.

## CI

GitHub Actions runs the Chromium test suite for pushes and pull requests targeting `main`. The HTML report is uploaded as a workflow artifact.

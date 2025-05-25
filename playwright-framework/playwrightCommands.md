# ✅ Playwright Command Reference

| **Purpose**                        | **Command Syntax**                             | 
| **Example**                                        |
| Run all tests                      | `npx playwright test`                          |       
|`npx playwright test`                               |
| Run a specific test file           | `npx playwright test <filename>`               | 
|`npx playwright test tests/login.spec.ts`           |
| Run using test name pattern        | `npx playwright test -g "<name>"`              | 
|`npx playwright test -g "should login successfully"`|
| Run using line number              | `npx playwright test <filename>:<line>`        | 
|`npx playwright test tests/login.spec.ts:19`        |
| Run in a specific directory        | `npx playwright test <dir>/`                   | 
|`npx playwright test tests/api/`                    |
| Run with a specific tag            | `npx playwright test --grep "@tag"`            | 
|`npx playwright test --grep "@smoke"`               |
| Exclude tests with a tag           | `npx playwright test --grep-invert "@tag"`     | 
|`npx playwright test --grep-invert "@wip"`          |
| Run tests sequentially             | `npx playwright test --workers=1`              | 
|`npx playwright test --workers=1`                   |
| Run a specific test by name        | `npx playwright test -g <test name>`           | 
|`npx playwright test -g "Search box should be visible"` |
| Use a specific config file         | `npx playwright test --config=<file>`          | 
|`npx playwright test --config=playwright.dev.config.ts` |
| Use a specific project from config | `npx playwright test --project=<project>`      | 
|`npx playwright test --project=chromium`           |
| Use a specific reporter            | `npx playwright test --reporter=<reporter>`    | 
|`npx playwright test --reporter=html`              |
| Run tests in headed mode          | `npx playwright test --headed`                  | 
|`npx playwright test --headed`                     |
| Run tests in debug mode           | `npx playwright test --debug`                   | 
|`npx playwright test --debug`                      |
| Use environment variables         | `ENV_VAR=value npx playwright test`             | `BASE_URL=https://dev.site.com npx playwright test` |

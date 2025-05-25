// @ts-check
const { defineConfig, devices } = require('@playwright/test');
const { on } = require('events');


/**
 * @see https://playwright.dev/docs/test-configuration
 */
module.exports = defineConfig({
  testDir: './tests',
  retries: 1,
  workers: 1, // by defalut playwirght will execute in 5 workers if its not defined
  timeout: 40 *1000,
  expect: {
    timeout: 5000,
  },
  reporter : [ 
    ['html'],
    ['list'],
    ['allure-playwright']
  ],
  // Default settings for all projects
  use: {
    trace: 'off',
    screenshot: 'off',
    headless: false
  },

  // Define individual projects here
  projects: [
    {
      name: 'Chromium',
      use: {
        browserName: 'chromium'
      }
    },
    {
      name: 'WebKit',
      use: {
        browserName: 'webkit'
      }
    },
    {
      name: 'iPhone 15 Pro',
      use: {
        ...devices['iPhone 15 Pro'],
        headless: false,
        screenshot: 'off',
        trace: 'off'
      }
    }
  ]
});


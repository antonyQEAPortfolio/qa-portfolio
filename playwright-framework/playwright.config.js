// @ts-check
const { defineConfig, devices } = require('@playwright/test');
const { on } = require('events');


/**
 * @see https://playwright.dev/docs/test-configuration
 */
module.exports = defineConfig({
  testDir: './tests',
  timeout: 40 *1000,
  expect: {
    timeout: 5000,
  },
  reporter : 'html',
  use: {
    browserName : 'chromium',
    headless : false,
    screenshot : 'off',
    trace: 'off'
  },

});


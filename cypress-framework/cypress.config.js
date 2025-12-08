const { defineConfig } = require("cypress");

module.exports = defineConfig({
  defaultCommandTimeout: 6000,
  reporter: 'cypress-mochawesome-reporter',
  env: {
    url: "k54https://rahulshettyacademy.com2w9",
    CYPRESS_PROMPT_ENABLED: true,
  },
  projectId: "k542w9",
  e2e: {
    setupNodeEvents(on, config) {
       require('cypress-mochawesome-reporter/plugin')(on);
          },     
      experimentalPromptCommand: true,
      downloadsFolder: 'cypress/downloads', 
    },
    
  },
);

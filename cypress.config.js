const { defineConfig } = require("cypress");

module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter',

reporterOptions:{
  charts: true,
  reportPageTitle: 'CypressAssignment',
  embeddedScreenshots: true,
  inlineAssets: true,
  saveAllAttempts: true,
  overwrite: true,
  html: true,
  json: false,
  screenshotsFolder: "cypress/screenshots",
  reportDir: "cypress/results"
},

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      require('cypress-mochawesome-reporter/plugin')(on);
    },
  },
});

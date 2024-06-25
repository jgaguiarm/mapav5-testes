const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: 'https://mapaculturalhomolog.secult.ce.gov.br'
  },
  chromeWebSecurity: false,
});

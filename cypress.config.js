const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "k5pkre",
  e2e: {
    env: {
      hideXhr: true,
      API_URL: 'https://api.openweathermap.org/data/2.5/weather',
      requestMode: true,
    },
    setupNodeEvents(on, config) {
      require('@cypress/grep/src/plugin')(config);
      return config;
    },
    viewportWidth: 1920,
    viewportHeight: 1080
  },
});

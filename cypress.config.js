const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "jc9aze",
  e2e: {
    env: {
      API_URL: 'https://api.openweathermap.org/data/2.5/weather',
      requestMode: true,
    },
    setupNodeEvents(on, config) {
    },
    viewportWidth: 1920,
    viewportHeight: 1080
  },
});

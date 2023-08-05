const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    env: {
      API_URL: 'https://api.openweathermap.org/data/2.5/weather',
      requestMode: true,
    },
    setupNodeEvents(on, config) {
      on('task', {
        log(message) {
          console.log(message)

          return null
        }
      })
    },
    viewportWidth: 1920,
    viewportHeight: 1080
  },
});

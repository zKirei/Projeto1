const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "http://localhost:3000", // URL do seu sistema
    setupNodeEvents(on, config) {
      // Configurações opcionais (plugins, listeners)
    },
  },
});
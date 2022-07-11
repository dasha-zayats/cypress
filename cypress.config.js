const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      const configWithDotenv = require('dotenv').config();

      const env = { ...config.env, ...configWithDotenv.parsed };
      const result = { ...config, env };
      console.log(configWithDotenv);
      return result;
    },
  },
});

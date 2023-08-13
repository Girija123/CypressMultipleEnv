const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    env: {
      dev: {
        username: "standard_user",
        password: "secret_sauce",
      },
      staging: {
        username: "standard_user_fail",
        password: "secret_sauce_fail",
      },
    },
  },
});

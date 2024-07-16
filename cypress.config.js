const { defineConfig } = require("cypress");
const cucumber = require('cypress-cucumber-preprocessor').default;

async function setupNodeEvents(on, config){
  on('file:preprocessor', cucumber())
  return config;
}

module.exports = defineConfig({
  e2e: {
    setupNodeEvents,
    //specPattern: 'cypress/Integration/webelemets/*.js',
    
    specPattern: 'cypress/Integration/framework/*.js'
    //specPattern: 'cypress/UAT/Features/*.feature'
    

      // implement node event listeners here
    },
});


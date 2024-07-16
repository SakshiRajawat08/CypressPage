const { it } = require("mocha");

describe('hello world', () => {
    it('test 1', () => {

        cy.visit('https://the-internet.herokuapp.com/dynamic_loading/1');
        cy.get('#start button').click();
        cy.get('#finish').should('contain','Hello World!');
        
    });

});   

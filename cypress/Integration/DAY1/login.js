///<reference types="cypress" />

describe('OrangeHRM Suite', () => {
    it('Login Test1', () => {

        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

        cy.get("input[name='username']").type('Admin');
        cy.get("input[type='password']").type('Admin123');
        cy.get("button[type='submit']").click();


    

        
    });
});
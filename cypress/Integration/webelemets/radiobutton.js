describe('radio button', () => {
    it('test1', () => {

        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')

        cy.get('//input[@value="radio1"]').check().should('be.visible').and('be.checked').and('have.attr')
        
    });
});
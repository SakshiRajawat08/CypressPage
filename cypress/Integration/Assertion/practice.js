describe('Practice tests', () => {
    it('test1-URL assertion', () => {

        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
        cy.url.should('include','AutomationPractice')
        cy.title().should('include','Practice Page')

        
    });
});
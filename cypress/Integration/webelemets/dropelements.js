describe('dropdown test', () => {
    it('Test1', () => {

        cy.visit('https://rahulshettyacademy.com/AutomationPractice/');
        cy.get('#dropdown-class-example').select('option2').should('have.value','option2');
        cy.get('#dropdown-class-example').select('option1').should('have.value','option1');
        cy.get('#dropdown-class-example').select('Option3').should('have.value','Option3');
        cy.xpath('//select[@id="dropdown-class-example"]').select('').should('have.value','');
        
    });
    

});
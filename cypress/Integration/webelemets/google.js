describe('google test', () => {
    it('test1', () => {

        cy.visit('https://www.google.com')

        cy.get('[title="Search"]').type('Masai{enter}')

        cy.scrollTo(0,2000);
        cy.scrollTo(0,-2000);
        
    });
});
describe('fetch table', () => {
    it('test1', () => {

        cy.visit('https://the-internet.herokuapp.com/tables');
        cy.xpath('//table[1]/tbody/tr[4]/td[3]').should('include.text','tconway@earthlink.net')
        
        
    });

    it('test2', () => {

        cy.visit('https://the-internet.herokuapp.com/tables');
        cy.xpath('//table[2]/tbody/tr[2]/td[5]').should('include.text','http://www.frank.com')
        
    });
});
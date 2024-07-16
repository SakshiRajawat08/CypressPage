describe('handle window', () => {
    it('test1', () => {
        cy.visit('https://the-internet.herokuapp.com/windows')
        cy.get('a[href="/windows/new"]').invoke('removeAttr','target').click()
        cy.url().should('include','/windows/new')
        cy.contains('h3','New Window').should('be.visible')
        
    });

    it('test2', () => {

        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
        cy.get('button[onclick="jsAlert()"]')
        cy.get('button[onclick="jsConfirm()"]')
        cy.get('button[onclick="jsPrompt()"]')
        
    });
});
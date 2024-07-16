describe('dates test', () => {
    it('test1', () => {

        cy.visit('https://jqueryui.com/datepicker/')
        cy.frameLoaded('.demo-frame').type('08/04/2001{enter}')
        cy.iframe().contains('Date').click()
        
    });
});
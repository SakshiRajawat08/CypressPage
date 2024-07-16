describe('Practice test', () => {
    it('test1', () => {

        cy.visit("https://automationteststore.com/")
        cy.get('a[href="https://automationteststore.com/index.php?rt=content/contact"]')
        cy.get('input[id="ContactUsFrm_first_name"]')
        cy.get('input[id="ContactUsFrm_email"]')
        cy.get('textarea[id="ContactUsFrm_enquiry"]')
        cy.get('button[class="btn btn-primary lock-on-click"]')
        
        
    });
});
describe('automation test', () => {
    it('test 1', () => {

        //Apparel and accessories andd select t-shirts
        cy.visit('https://automationteststore.com/')
        cy.get('a[href="https://automationteststore.com/index.php?rt=product/category&path=68"]').click()
        
    });
});
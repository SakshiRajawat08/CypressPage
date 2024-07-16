describe('flipkart test', () => {
    it('Test1', () => {

        cy.visit('https://www.flipkart.com/')

        cy.get('img[src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/fkheaderlogo_exploreplus-44005d.svg"]')
        cy.get('button[title="Search for Products, Brands and More"]')
        cy.get('input[type="text"]')
        cy.get('a[aria-label="Become a Seller"]')
        cy.get('a[aria-label="Advertise"]')
        cy.get('a[aria-label="Gift Cards"]')
        cy.get('a[href="/helpcentre?otracker=${otracker}_footer_navlinks"]')
        cy.get('a[href="https://www.myntra.com/"]')
        cy.get('a[aria-label="Cleartrip"]')
        cy.get('a[href="https://www.shopsy.in"]')
        cy.get('a[class="_3RX0a-"]')
        //cy.get('a[href="/returnpolicy"]')

        cy.get()

        
        
        
    });
});
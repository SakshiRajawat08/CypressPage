describe('orange test', () => {
    it('Test1', () => {

        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
        cy.get('input[name="username"]').then(($username)=>{
            expect($username).to.have.attr('placeholder','Username')

            cy.wrap($username).type('Admin')
        })
        
        cy.get('input[name="password"]').then(($password)=>{
            expect($password).to.have.attr('placeholder','Password')

            cy.wrap($password).type('Admin123')
        })

        cy.get('button[class="oxd-button oxd-button--medium oxd-button--main orangehrm-login-button"]').then(($submit)=>{
            expect($submit).to.have.text('Login')

            cy.wrap($submit).text('Login')
        })
    });
});
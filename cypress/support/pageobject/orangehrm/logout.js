class Logout_po{

logout(){

    cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
    cy.get('p[class="oxd-userdropdown-name"]').click()
    cy.get('ul[class="oxd-dropdown-menu"]').find('oxd-userdropdown-link').should('have.length' ,4)
    cy.get('a[href="/web/index.php/auth/logout"]').click()

}


}

export default Logout_po;
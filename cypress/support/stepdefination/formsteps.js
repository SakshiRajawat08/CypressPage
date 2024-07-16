import {Given,When,And,Then} from "cypress-cucumber-preprocessor/steps"

Given('user a simple form from URL.',()=>{
    cy.visit('https://v1.training-support.net/selenium/simple-form')

})

When('user enter firstname,lastname,email,contact,message.',()=>{
    cy.get('#firstName').type('sakshi')
    cy.get('#lastName').type('rajawat')
    cy.get('#email').type('rajawatsakshi400@gmail.com')
    cy.get('#number').type('6377602937')
    cy.xpath('//textarea').type('hey')

})

And('user clicks on submit button.',()=>{
    cy.xpath('//input[@value="submit"]').click()

})

Then('Alert with a success message is displayed.',()=>{
    cy.on('window:confirm',(alertmsg)=>{
        expect(alertmsg).to.equal('Thank You for reaching out to us, sakshi rajawat')
        return true;
    })

})
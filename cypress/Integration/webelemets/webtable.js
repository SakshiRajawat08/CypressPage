describe('web table test', () => {
    it('test1', () => {

        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')

        cy.xpath('//table[@name="courses"]/tbody/tr[6]/td[3]').should('include.text','Learn JMETER from Scratch - (Performance + Load) Testing Tool')
        
    });

    //describe('web table', () => {
        //it('test2', () => {

            //cy.visit('https://rahulshettyacademy.com/AutomationPractice/')


            
        });
    //});
//});
describe('alert test', () => {
    it('test1', () => {

        cypress.visit('https://rahulshettyacademy.com/AutomationPractice/')

        cypress.get('#alertbtn').click();

        cypress.on('window:alert',(alertmsg)=>{

            expect(alertmsg).to.equal('Hello , share this practice page and share your knowledge')

            return true;

            
        })

        cypress.get('')
        
    });
});
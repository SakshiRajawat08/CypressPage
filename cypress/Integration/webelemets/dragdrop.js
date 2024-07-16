describe('dragdrop test', () => {
    it('test1', () => {

        cy.visit('https://v1.training-support.net/selenium/drag-drop')
        cy.get('#draggable').trigger('mousedown')
        cy.get('#droppable').trigger('mousemove').trigger('mouseup')
        cy.get('#droppable').trigger('mouseup').trigger('mousemove')

        
    });
});
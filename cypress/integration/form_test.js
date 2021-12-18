describe ('Form App', () => {
    beforeEach (() => {
        cy.visit('http://localhost:3000/pizza')
    })
    const nameInput = () => cy.get('input[name=name]');
    const toppingsCheckBox = () => cy.get('input[id=toppings]');
    const orderBtn = () => cy.get('button[name=order-button]');

    it('sanity check to make sure tests work', () => {
        expect(1 + 2).to.equal(3);
        expect(2 + 2).not.to.equal(5);
        expect({}).not.to.equal({});
        expect({}).to.eql({});
      })
      it('proper elements are showing', () => {
        nameInput().should('exist')
        toppingsCheckBox().should('exist')
        orderBtn().should('exist')
    })
    it('type in inputs', () => {
        nameInput()
        .should('have.value', '')
        .type('Jane')
        .should('have.value', 'Jane')
    })
    it('checks the terms', () => {
        toppingsCheckBox().check().should('be.checked')
    })
    it('submit the form', () => {
        orderBtn().click();
    })
})
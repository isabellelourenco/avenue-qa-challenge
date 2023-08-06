describe('Access Pages', () => {

    beforeEach(() => {
        cy.accessAvenueHomePage()
    })

    it('should access create account page', { tags: '@smoke' }, () => {
        
        cy.accessAvenueAccountPage()
        cy.get('[data-testid="identity-form-submit-button"]').should('be.visible')
    });

    it.only('should access login page', { tags: '@smoke' }, () => {
        const text = 'Acesse sua conta'

        cy.accessAvenueLoginPage()
        cy.get("[name='email']").should('be.visible')
    });
})
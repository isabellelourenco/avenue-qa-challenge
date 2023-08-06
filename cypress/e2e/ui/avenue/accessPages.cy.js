describe('Access Pages', () => {

    beforeEach(() => {
        cy.accessAvenueHomePage()
    })

    it('should access create account page', { tags: '@smoke' }, () => {
        
        cy.accessAvenueAccountPage()
        cy.get('[data-testid="identity-form-submit-button"]').should('be.visible')
    });

    it('should access login page', { tags: '@smoke' }, () => {
        const text = 'Acesse sua conta'

        cy.get('#header_account_login').click()
        cy.url().should('eq','https://pit.avenue.us/login')
        cy.get('.form-signin h3').should('have.text',text)
    });
})
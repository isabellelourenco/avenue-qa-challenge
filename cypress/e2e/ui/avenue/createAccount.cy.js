describe('Access Pages', () => {

    beforeEach(() => {
        cy.accessAvenueHomePage()
    })

    it.only('should access create account page', { tags: '@smoke' }, () => {
        
        cy.get('#header_create_account').click()
        cy.get('[data-testid="full-name-input"]').should('be.visible')
    });

    it('should access login page', { tags: '@smoke' }, () => {
        const text = 'Acesse sua conta'

        cy.get('#header_account_login').click()
        cy.get('.form-signin h3').should('have.text',text)
        cy.url().should('eq','https://pit.avenue.us/login')
    });
})
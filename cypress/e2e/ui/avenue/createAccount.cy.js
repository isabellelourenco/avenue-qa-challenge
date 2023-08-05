describe('Create account', () => {

    beforeEach(() => {
        cy.visit('https://avenue.us/')
    })

    it('should access create account page', () => {
        
        cy.get('#header_create_account').click()
        cy.get('#IdentityForm').should('be.visible')
    });

    it('should access login page', () => {
        const text = 'Acesse sua conta'

        cy.get('#header_account_login').click()
        cy.get('.form-signin h3').should('have.text',text)
        cy.url().should('eq','https://pit.avenue.us/login')
    });
})
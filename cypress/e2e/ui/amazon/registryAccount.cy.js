describe('Amazon tests', () => {
    let userData;

    beforeEach(() => {
      cy.accessAmazonHomePage()
      cy.fixture('ui/user').then(u => {
        userData = u
      })
    })

    it('should fill the registry account form', () => {
      const validUser = userData.validUser

      cy.accessCreateAccountPage()
      cy.fillCreateAccountForm(validUser.name, validUser.email, validUser.password)

      cy.get('#ap_customer_name').should('have.value',validUser.name)
      cy.get('#ap_email').should('have.value',validUser.email)
      cy.get('#ap_password').should('have.value',validUser.password)
      cy.get('#ap_password_check').should('have.value',validUser.password)
    });
})
describe('Account', () => {
    let testData;

    beforeEach(() => {
      cy.accessHomePage()
      cy.fixture('ui/user').then(u => {
        testData = u
      })
    })

    it('should fill the registry account form', () => {
      const userRegistry = testData.validUser

      cy.get('#nav-link-accountList').click()
      cy.get('#createAccountSubmit').click()
      cy.get('#ap_customer_name').type(userRegistry.name)
      cy.get('#ap_email').type(userRegistry.email)
      cy.get('#ap_password').type(userRegistry.password)
      cy.get('#ap_password_check').type(userRegistry.password)

      cy.get('#ap_customer_name').should('have.value',userRegistry.name)
      cy.get('#ap_email').should('have.value',userRegistry.email)
      cy.get('#ap_password').should('have.value',userRegistry.password)
      cy.get('#ap_password_check').should('have.value',userRegistry.password)
    });
})
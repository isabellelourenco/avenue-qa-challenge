
Cypress.Commands.add('accessAmazonHomePage', () => {
    cy.visit('https://www.amazon.com.br')
    cy.get('#desktop-banner').should('be.visible')
})

Cypress.Commands.add('accessAvenueHomePage', () => {
  cy.visit('https://avenue.us/')
  cy.get('#header_create_account').should('be.visible')
})

Cypress.Commands.add('addProductToCart', (item, dataAsin) => {
    cy.get('#twotabsearchtextbox').type(item)
    cy.get('#nav-search-submit-button').click()
    cy.get(`[data-asin="${dataAsin}"] h2 a`).click()
    cy.get('#add-to-cart-button').should('be.visible')
    cy.get('#add-to-cart-button').click()
})

Cypress.Commands.add('accessCartPage', () => {
    cy.get('#nav-cart-count-container').click()
})

Cypress.Commands.add('getCartTotalPrice', () => {
    let totalAmount = 0

    cy.get('[data-subtotal]').each(($element) => {
      const jsonText = $element.attr('data-subtotal');
      const jsonData = JSON.parse(jsonText)
      totalAmount += jsonData.subtotal.amount
    }).then(() => {
      return totalAmount 
    })
});

Cypress.Commands.add('accessHomePage', () => {
    cy.visit('/')
    cy.get('#desktop-banner').should('be.visible')
 })

Cypress.Commands.add('addProductToCart', (item, dataAsin) => {
    cy.get('#twotabsearchtextbox').type(item)
    cy.get('#nav-search-submit-button').click()
    cy.get(`[data-asin="${dataAsin}"] h2`).click()
    cy.get('#add-to-cart-button').click()
 })

Cypress.Commands.add('accessCart', () => {
    cy.get('#nav-cart-count-container').click()
})

Cypress.Commands.add('accessCart', () => {
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



// Cypress.Commands.add('removeItemsFromCart', (locator) => {
//     cy.visit('cart')
//     cy.get('.sc-list-item-content').then((items) => {
//         const numItems = items.length;
    
//         for (let i = 0; i < numItems; i++) {
//           cy.get('.sc-action-delete').first().click();
//         }

//         cy.get('.sc-list-item-content').should('have.length', 0);
//       });
    
//  })
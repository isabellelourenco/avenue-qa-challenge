
describe('Cart', () => {
  let testData;

  beforeEach(() => {
    cy.accessHomePage()

    cy.fixture('ui/item').then(i => {
      testData = i
    })
  })

  it('should add 2 products to cart with success', () => {
    const firstItem = testData.items[0]
    const secondItem = testData.items[1]

    cy.addProductToCart(firstItem.title,firstItem.dataAsin)
    cy.addProductToCart(secondItem.title,secondItem.dataAsin)
    cy.accessCartPage()

    cy.get(`[data-asin="${firstItem.dataAsin}"]`).should('be.visible')
    cy.get(`[data-asin="${secondItem.dataAsin}"]`).should('be.visible')

    cy.get('.sc-product-price').should('be.visible')
    cy.get('.sc-product-price').should('be.visible')

    cy.getCartTotalPrice().then((amountValue) => {
        const amountValueFormatted = amountValue.toString().replace('.', ',');
        const amount = `\u00a0R$\u00a0${amountValueFormatted}`
        cy.get('#sc-subtotal-amount-activecart').should('have.text', amount);

    })
  })
})

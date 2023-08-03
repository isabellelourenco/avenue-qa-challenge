
describe('Home', () => {
  beforeEach(() => {
    cy.visit('https://www.amazon.com.br')
  })
  

  it('should access the home page with success', () => {
    
    cy.get('#desktop-banner').should('be.visible')
  })

  it('should access the home page with success', () => {
    
    cy.get('#desktop-banner').should('be.visible')
  })

  // it('should add 2 products to chart', () => {
    
  //   cy.get('.todo-list li').should('have.length', 2)
  //   cy.get('.todo-list li').first().should('have.text', 'Pay electric bill')
  //   cy.get('.todo-list li').last().should('have.text', 'Walk the dog')
  // })

  // it('should verify if the total price its correct', () => {
    
  //   cy.get('.todo-list li').should('have.length', 2)
  //   cy.get('.todo-list li').first().should('have.text', 'Pay electric bill')
  //   cy.get('.todo-list li').last().should('have.text', 'Walk the dog')
  // })

});

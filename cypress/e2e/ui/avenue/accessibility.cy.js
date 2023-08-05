
describe('Accessibility Tests', () => {
    it('should log failures with serious and critical impact on the home page', () => {
        cy.visit('https://avenue.us/')
        cy.injectAxe({ axeCorePath: 'node_modules/axe-core/axe.min.js' })
        cy.checkA11y()
        cy.checkA11y(null, {
            includedImpacts: ['critical', 'serious'], 
          });
    })

    it('should log failures with serious and critical impact on the login page', () => {
        cy.visit('https://pit.avenue.us/login')
        cy.injectAxe({ axeCorePath: 'node_modules/axe-core/axe.min.js' })
        cy.checkA11y()
        cy.checkA11y(null, {
            includedImpacts: ['critical', 'serious'],
          });
    })

    it('should log failures with serious and critical impact on the registry page', () => {
        cy.visit('https://pit.avenue.us/register/identity-info')
        cy.injectAxe({ axeCorePath: 'node_modules/axe-core/axe.min.js' })
        cy.checkA11y()
        cy.checkA11y(null, {
            includedImpacts: ['critical', 'serious'],
          });
    })
})
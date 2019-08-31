describe('The Home Page', function() {
    it('successfully loads', function() {
      cy.visit('http://localhost:3000') // change URL to match your dev URL
    })
  })

describe('App initialization', () => {
    beforeEach( () => {
        cy.visit('/')
    })
    
    it('Loads dashboard on page load', () => {
        cy.get('.products-container')
        .should('exist')  
    })

})
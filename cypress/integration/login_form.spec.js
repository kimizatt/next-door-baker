

describe('The Login Page', function () {
    const inputUsername = 'kim'
    const inputPassword = '1234'

    it('Inputs the username', () => {
        cy.visit('/#/login')
        cy.get('.input')
        .first()
        .type(inputUsername)
        .should("have.value", inputUsername)
    })

    it('Inputs the password', () => {
        cy.get('.input')
        .last()
        .type(inputPassword)
        .should('have.value', inputPassword)
    })
        
    it('Logins in and sends to bakerdashboard', () => {
        cy.get('.login-button')
         .should('exist')
         .first()
         .click()
         .wait(1000)
       
         
     })
})  

// describe('The dashboard')

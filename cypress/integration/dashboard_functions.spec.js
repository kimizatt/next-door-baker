

describe('The dashboard page', () => {

    it('Header exists', () => {
        cy.visit('/')
        cy.get('.header')
        .should('exist')
    })

    it('Home button should redirect to home page', () =>{
        cy.visit('/')
        cy.get('.nav-links')
        .first()
        .click()
    } )

    // it('Opens modal when picture is clicked', () => {
    //     cy.visit('/')
    //     cy.get('.dash-img')
    //    .wait(2000)
    //     .first()
    //    .click()
       
    // })
})
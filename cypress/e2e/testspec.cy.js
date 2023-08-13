const activeEnv = Cypress.env("deployment-env");


describe('template spec', () => {

  it('passes', () => {

    
    cy.visit('https://www.saucedemo.com')
    cy.get('#user-name').type(Cypress.env(activeEnv).username)
    cy.get('#password').type(Cypress.env(activeEnv).password)
  })
})
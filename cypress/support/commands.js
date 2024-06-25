// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('loginFake', (username) => {
    cy.visit('/autenticacao')
      .get('input[id="agentFilter"')
      .type(username,'Enter')
      .get('input[type="radio"')
      .check()
      .get('input[value="Logar"')
      .click()

});

Cypress.Commands.add('loginWith', (username,password) => {
    cy.visit('/autenticacao')
        .get('#email').type(username)
        .get('#password').type(password)
    cy.solveGoogleReCAPTCHA()
    cy.wait(5000)
    cy.get('.login-options > form > .submit-options > input').click()    
    
})

Cypress.Commands.add('solveGoogleReCAPTCHA', () => {
    // Wait until the iframe (Google reCAPTCHA) is totally loaded
    cy.wait(500);
    cy.get('.g-recaptcha *> iframe')
      .then($iframe => {
        const $body = $iframe.contents().find('body');
        cy.wrap($body)
          .find('.recaptcha-checkbox-border')
          //.should('be.visible')
          .eq(0)
          .click({multiple:true},{force:true})        
        
      });
    
});





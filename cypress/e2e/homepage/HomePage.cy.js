/// < reference types="Cypress"/>
const backToHomepage = require("../../commands/backToHomepage")

describe('HomePage', () => {
  beforeEach(() => {
    cy.visit('/') 
})


it('Valida o funcionamento dos links de redirecionamento do componente Header',() => {
 
  //Link Eventos
  cy.get('#entities-menu-event > a')
    .click();     
  cy.url()
    .should('be.have',"filterEntity:event");
    backToHomepage();


  //Link Espaços
  cy.get('#entities-menu-space > a')
    .click();
  cy.url()
    .should('be.have',"filterEntity:space");
    backToHomepage();

  //Link Agentes
  cy.get('#entities-menu-agent > a')
    .click()      
  cy.url()
    .should('be.have',"filterEntity:agent")
    backToHomepage();


  //Link Projetos
  cy.get('#entities-menu-project > a')
    .click()      
  cy.url()
    .should('be.have',"filterEntity:project")
    backToHomepage();


  //Link Oportunidades
    cy.get('#entities-menu-opportunity > a')
      .click()      
    cy.url()
      .should('be.have',"filterEntity:opportunity")
      backToHomepage();

})

it('Valida o funcionamento da busca por palavra chave' , () => {

  cy.get('input[id="campo-de-busca"]').type('Fortaleza')
  

})

// it('Valida o funcionamento to chat de suporte' , () => {

// })

// it('Valida o funcionamento da interprete de libras' , () => {

// })

// it('Valida que o clique no botão entrar direciona para a área de logon', () => {

// })


// it('Verifica se os links de redirecionamento do componente Nav estão funcionando',() => {

//   // //Link Introdução
//   // cy.get('#nav-intro > .icon')
//   //   .click()      
//   //   .should('be.visible',"#campo-de-busca")

//  //Link Eventos
//   cy.get('#nav-events > .icon')
//     .click()
//   cy.get('article[id="home-spaces"]')
//     .should('have.class','box')
//     .contains('Eventos')
    
//     //.should('have','Econtre eventos por')

// //   //Link Espaços
// //   cy.get('#entities-menu-space > a')
// //     .click()      
// //   cy.url()
// //     .should('be.equal',"http://172.18.3.250/busca/##(global:(enabled:(space:!t),filterEntity:space,map:(center:(lat:-5.052642578738913,lng:-39.4134521484375),zoom:7)))")

// //   //Link Agentes
// //   cy.get('#entities-menu-agent > a')
// //     .click()      
// //   cy.url()
// //     .should('be.equal',"http://172.18.3.250/busca/##(global:(enabled:(agent:!t),filterEntity:agent,map:(center:(lat:-5.052642578738913,lng:-39.4134521484375),zoom:7)))")


// //   //Link Projetos
// //   cy.get('#entities-menu-project > a')
// //     .click()      
// //   cy.url()
// //     .should('be.equal',"http://172.18.3.250/busca/##(global:(enabled:(agent:!t),filterEntity:project,map:(center:(lat:-5.052642578738913,lng:-39.4134521484375),zoom:7),viewMode:list))")


// // //Link Oportunidades
// // cy.get('#entities-menu-opportunity > a')
// //     .click()      
// //   cy.url()
// //     .should('be.have',"opportunity")
// })
      

})
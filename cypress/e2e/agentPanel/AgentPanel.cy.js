
describe('AgentsPage', () => {
    beforeEach(() => {
        cy.login('jaimegaguiar@gmail.com')
        // cy.visit('/painel') 
  })
  
  it.only('Cria novo evento', () => {

    //Criando um novo evento
    cy.get(':nth-child(1) > :nth-child(1) > :nth-child(2) > .icon')
      .click()    
    cy.get('input[name="name"]').click({multiple: true, force: true}).eq(3)//Capturando o campo de nome do evento       
      .type('Meu evento')
    cy.get('textarea[name="shortDescription"').eq(3).click({multiple: true, force: true})//Capturando o a área de texo para inserir descrição
      .type('Descrição do meu evento')
    cy.get('select[name="classificacaoEtaria"').select('18 anos').sk
    cy.get('select[name="terms[linguagem][]').select('Cultura Digital')
    cy.contains('button','Criar evento').click()

    cy.get('.entity-type.event-type')
      .siblings()
      .children('span','.entidade')
      .should('not.be.value','Entidade criada com sucesso!')
      //.should('not.be.visible')
      // .invoke('show',{multiple: true, force:true}).eq(3)
      
    // cy.get('.modal-feedback-event > h2 > .entidade').should('contains','Entidade criada com sucesso !')
    //cy.get('h2:contains(Entidade criada com sucesso!)').should('be.visible')
    // cy.get('.btn.btn-default.close-modal').parent('.entity-modal.has-step.js-dialog"]')
    // cy.contains('a','Continuar navegando')

    //Validando que o evento é encontrado na busca
    //cy.contains('a','Meus Eventos').click()
      

  })

   it.skip('Cria novo agente', () => {
    cy.get('.login')
        .click()
        .get('input[id="agentFilter"')
        .type('username','Enter')
        .get('input[type="radio"')
        .check()
        .get('input[value="Logar"')
        .click()
  })

  it('Cria novo agente', () => {

    //Criando uma novo evento
    cy.get(':nth-child(1) > :nth-child(1) > :nth-child(2) > .icon')
      .click()
      .get('div[class="entity-modal has-step js-dialog "')
      .get('input[name="name"]')
      .click().and().type('Teste')
     
   })

   it('Validação de funcionalidade criação de novo agente', () => {

    //Criando uma novo evento
    cy.get(':nth-child(1) > :nth-child(1) > :nth-child(2) > .icon')
      .click()
      .get('div[class="entity-modal has-step js-dialog "')
      .get('input[name="name"]')
      .click().and().type('Teste')
     
   })
})
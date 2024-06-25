describe('Habilitação do Recurso', () => {
    beforeEach(() => {
        cy.viewport(1900,1080)
    })

    const oppotunityName = "Oppotunity Name"
    const opportunityAdminEmail = "example@mail.com"
    const evaluatorName = "Evaluator Name"
   
    it('Criação da Oportunidade', () => {
        cy.login(`${opportunityAdminEmail}`)
        
    //Criando um nova oportunidade
        cy.get(':nth-child(5) > :nth-child(1) > :nth-child(2) > .icon').click()
        cy.contains('Selecione um projeto').dblclick()
        cy.get('.search-agent').click()
        cy.get('[name="evaluationMethod"]').select('Avaliação Técnica')
        cy.get('[name="type"').eq(6).select('Edital')
        cy.get('[name="name"]').eq(7).type(`${oppotunityName}`)
        cy.get('textarea[name="shortDescription"]').eq(7).type('Minha descrição curta')
        cy.get('.form-control.input').eq(0).type("28/05/2024")
        cy.get('.form-control.input').eq(1).type("31/05/2024")
        cy.contains('Adicionar oportunidade').click({multiple: true, force: true})
        cy.contains('button','Continuar navegando').click()

    }) 

    //Adicionando Avaliador na Oportunidade
    it('Adicionar avaliador na oportunidade', () => {
        cy.login(`${opportunityAdminEmail}`)
        cy.visit("/painel/opportunities")
        cy.get('a:contains(editar)').click({multiple: true, force: true})
        cy.get('a[id=tab-evaluations-config]').click()
        cy.get('span:contains(Adicionar avaliador)').click()
        cy.get('input[placeholder="buscar por nome"]').eq(0).click({multiple: true, force: true})//
            .type(`${evaluatorName}`)
            .get('li[class="search-agent clearfix ng-scope"]').click()
            .get('a:contains(Salvar)').click()

    })

    //Adicionando 
    it('Aceite do avaliador',() => {
        cy.login(`${evaluatorName}`)

    })


    it.skip('Inscreve o agente na oportunidade', () => {
       cy.login('mundinhobacural@gmail.com')
       //Incrição na oportunidade
    })

    it('Exclui a oportunidade', () => {
        cy.login(`${opportunityAdminEmail}`)
        cy.get('#panel-nav > ul > :nth-child(7) > a').click()
        cy.get('a:contains(excluir)').click({multiple: true,force:true })


    })

})


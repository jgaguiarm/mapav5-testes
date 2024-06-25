describe('EventsPage', () => {
    beforeEach(() => {
      cy.visit('/') 
  })

  it('Valida a busca e resultado da entidade evento', () => {

    //Eventos
    cy.get('#entities-menu-event > a')
      .click()
      .get('.icon-show-search-on-list')
      .click()
      .get('#filter-events > [ng-show="showSearch()"] > .form-palavra-chave > .search-field')
      .type("Fortaleza","Enter")

  })
 
 

  
})
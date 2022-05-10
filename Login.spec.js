/// <reference types="cypress" />

describe('TesteQA', function() {
    this.beforeEach(function() {
        cy.visit('http://automationpractice.com/index.php', {delay: 0 })
        cy.title().should('be.equal', 'My Store')
    })
     
     //Loging
    it('Fazer Login', function() { 
        //Comando Customizado para Login¹
        cy.get('.login').click().should('be.visible') 
        cy.FazerLogin({delay: 0 }).should('be.visible') 
        
     //Adicionar um produto ao carrinho
        //Escolhendo e adicionando o produto ao carrinho
        cy.get('.sf-menu > :nth-child(2) > .sf-with-ul').click().should('be.visible')
        cy.get('.first-in-line.first-item-of-tablet-line > .product-container > .right-block > .button-container > .ajax_add_to_cart_button > span').click().should('be.visible')
    
     //Concluir o Processo de Compra
        //Proceed to checkout
        cy.get('.button-container > .button-medium > span').click().should('be.visible')
        //Summary > Sign in² > Address >
        cy.get('.cart_navigation > .button > span').click().should('be.visible')
        //> Address > Shipping 
        cy.get('.cart_navigation > .button > span').click().should('be.visible')
        //Selecionar Concordo com os Termos
        cy.get('#cgv').click()
        //> Shipping >
        cy.get('.cart_navigation > .button > span').click().should('be.visible')
        //> Payment
        cy.get('.bankwire').click().should('be.visible')
        //Confirma
        cy.get('#cart_navigation > .button > span').click().should('be.visible')
     
     //Consultar pedido feito
        //Encomendas
        cy.get('.button-exclusive').click().should('be.visible')
        //Detalhes
        cy.get('.first_item > .history_link > .color-myaccount').click().should('be.visible')    
       
    })
})

//Obs:Foi preciso separar o Cadastro e o Login por spec, pois ao tentar rodar o teste, atrapalha, devido a configuração ser diferente.

//Obs:Não foi possível separar por blocos com o BeforeEach, pois seria necessário fazer login em cada Bloco, por isso, está comentado de forma separada.

// ¹Cypress.Commands.add('FazerLogin', function() {
  //cy.get('#email').type('testeqa.rodrigo@gmail.com').should('be.visible')
  //cy.get('#passwd').type('r0dr1g0').should('be.visible')
  //cy.get('#SubmitLogin').click().should('be.visible')})

// ²Não foi preciso fazer login novamente, pois como já estava logado o sistema entendeu.
  //Obs:Foi preciso adicionar uma spec separada para cadastro.
/// <reference types="cypress" />

describe('My Store', function() {
    it('Cadastro de uma nova conta', function() {
        cy.visit('http://automationpractice.com/index.php', {delay: 0 })

        cy.title().should('be.equal', 'My Store')

        cy.get('.login').click()
        cy.CadastroLogin()   
    })
})
    /*Cadastro Customizado:
     Cypress.Commands.add('CadastroLogin', function () {
        cy.get('#email_create').type('testeqa.rodrigo@gmail.com');
        cy.get('#SubmitCreate > span').click()
        cy.get('#id_gender1').click();
        cy.get('#customer_firstname').type('Rodrigo');
        cy.get('#customer_lastname').type('Andrade');
        cy.get('#email').clear().type('testeqa.rodrigo@gmail.com')
        cy.get('#passwd').type('r0dr1g0');
        cy.get('#days').select('7');
        cy.get('#months').select('September');
        cy.get('#years').select('1993');
        cy.get('#company').type('Teste');
        cy.get('#address1').type('Teste');
        cy.get('#id_country').select('United States');
        cy.get('#id_state').select('Alabama');
        cy.get('#city').type('Goiânia');
        cy.get('#postcode').type('35004');
        cy.get('#phone_mobile').type('556232003200');
        cy.get('#alias').clear().type('36925');
        cy.get('#submitAccount > span').click()*/
        
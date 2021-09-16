///<reference types="cypress"/>

Cypress.on('uncaught:exception',(err,runnable)=>{
    return false;
})

describe('Checking on the custom commands',()=>{

    before(()=>{

        cy.visit('http://10.20.3.32:8085/');
    })

    it('Loing & Signin',()=>{
       
        cy.login('1234','5436');
        cy.get('#selectProjectRelease').click();
        cy.get('.invalid').should('be.equal','username');


    })

    it('Login',()=>{
        cy.login('chaitanya','password');
    })
})
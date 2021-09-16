///<reference types = "cypress"/>

Cypress.on('uncaught:exception',(err,runnable)=>{
    return false;
})

describe('Multiple suites',()=>{

    before(()=>{
        cy.visit('http://10.20.3.32:8085/');
        
    })

    describe('Testing on Rahulshetty',()=>{
        it('These are my basic tests',()=>{

            cy.login('','');
            cy.get('#selectProjectRelease').click();
            cy.get('.invalid').should('be.equal','username');

        })
    })

    describe('Testing on again with correct credentials',()=>{
        it('these',()=>{
            cy.login('chaitanya','password');
        })
    })
})
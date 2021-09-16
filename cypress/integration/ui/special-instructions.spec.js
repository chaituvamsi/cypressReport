///<reference types = "cypress"/>

Cypress.on('uncaught:exception',(err,runnable)=>{
    return false;
})

import * as si from '../../scripts/ui/special-instructions/special-instructions.js';

describe('Logging in to QTAT',()=>{

    before(()=>{
        cy.visit('http://10.20.3.32:8085/');
    })

    it('Log in and testing',()=>{
        
        cy.login('chaitanya','password');
        cy.get('[name="login-submit"]').contains('Log In').click();

        cy.get('#projectSearch').type('SFDC-QA').click();
        cy.contains('View releases').click();
        
        cy.contains('1.1.0').click();

        si.createInstruction.pgf();
        
    })
})
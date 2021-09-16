///<reference types = "cypress"/>

import Login from '../../support/pageObjects/login'
const login = new Login;

Cypress.on('uncaught:exception',(err,runnable)=>{
    return false;
})

describe('These are my page object practice tests',()=>{

    it('Login',()=>{

        cy.visit('https://www.flipkart.com/');
        cy.contains('Login').click();

        login.goToSignup();
    })
})
///<reference types="cypress"/>
import userLogin from "../fixtures/userRegister.json";
import login from "./Register.cy"
import userRegister from "../fixtures/userRegister.json";


describe('Login', () => {
    it.only('Login with valid credentials', () => {
/*
        const userEmail = window.sessionStorage.getItem('userEmail');
        const userPassword = window.sessionStorage.getItem('userPassword');  
*/    
        cy.visit('https://opencart.abstracta.us/index.php?route=account/login', { headers: { "Accept-Encoding": "gzip, deflate" } });
        //cy.visit('https://opencart.abstracta.us/index.php?route=account/login')
        cy.url().should('include','/login');
    
    
        cy.get('#input-email').type(userLogin.email).should('be.visible');
        cy.get('#input-password').type(userLogin.password).should('be.visible');
      
        cy.get('.text-danger').should('not.exist');
        //cy.get('input[value="submit"]').should('be.visible').wait(1000).click();
        /*cy.window().document().then(function (doc) 
        { doc.addEventListener('click', () => 
        {setTimeout(function () { doc.location.reload() }, 5000)}
        )})
        */
      
         cy.intercept('POST', '**/index.php?route=account/login', (req) => {}).as('loginRequest');
         cy.get('input[value="Login"]').should('be.visible').click();
         cy.wait('@loginRequest');
    
        //cy.url().should('include', '/account');
   
      })
      it.only('Login with invalid credentials', () => {
        cy.visit('https://opencart.abstracta.us/index.php?route=account/login', { headers: { "Accept-Encoding": "gzip, deflate" } });
        cy.url().should('include','/login');
    
        cy.get('#input-email').type('invalidemail@example.com').should('be.visible');
        cy.get('#input-password').type('invalidpassword');
    
        cy.get('.text-danger').should('not.exist');
        cy.get('input[value="Login"]').should('be.visible').click();
    
        cy.get('.alert-danger').should('be.visible');
    
      })
})
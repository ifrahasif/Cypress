///<reference types="cypress"/>
//import userLogin from "../cypress/fixtures/userLogin.json";
import userRegister from "../fixtures/userRegister.json";


describe('Registration', () => {
  it('Register', () => {
    cy.visit('https://opencart.abstracta.us/index.php?route=account/register', { headers: { "Accept-Encoding": "gzip, deflate" } });
   // cy.visit('https://opencart.abstracta.us/index.php?route=account/register')
    cy.url().should('include','/register');

    cy.get('#input-firstname').type(userRegister.firstname).should('be.visible')
    .should('have.value', userRegister.firstname) //Firstname field is not empty
    .should('not.have.attr', 'minlength', '2')//Firstname field has a minimum length
    .should('not.have.attr', 'maxlength', '50')//Firstname field has a maximum length

    cy.get('#input-lastname').type(userRegister.lastname).should('be.visible')
    .should('have.value', userRegister.lastname) //lastname field is not empty
    .should('not.have.attr', 'minlength', '2')//lastname field has a minimum length
    .should('not.have.attr', 'maxlength', '50')//lastname field has a maximum length;
// Valid Email Address 

    cy.get('#input-email').type(userRegister.email).should('be.visible')
    .should('have.value', userRegister.email) //Check that the email address field is not empty

    cy.get('#input-telephone').type(userRegister.telephone).should('be.visible')
    .should('have.value', userRegister.telephone)
    .should('not.have.attr', 'maxlength', '10');
// Password Matched 
    cy.get('#input-password').type(userRegister.password).should('be.visible')
    .should('have.value', userRegister.password);
    cy.get('#input-confirm').type(userRegister.confirmPassword).should('have.value', userRegister.confirmPassword)

    cy.get('input[name="newsletter"][value="1"]').check();

    cy.get('[name="agree"]').check();

    cy.get('input[type="submit"]').click();

    cy.get('.text-danger').should('not.exist');
  
    window.sessionStorage.setItem('userEmail', userRegister.email);
    window.sessionStorage.setItem('userPassword', userRegister.password);

  })
/*
  it('Login with valid credentials', () => {

    const userEmail = window.sessionStorage.getItem('userEmail');
    const userPassword = window.sessionStorage.getItem('userPassword');  

    cy.visit('https://opencart.abstracta.us/index.php?route=account/login', { headers: { "Accept-Encoding": "gzip, deflate" } });
    //cy.visit('https://opencart.abstracta.us/index.php?route=account/login')
    cy.url().should('include','/login');


    cy.get('#input-email').type(userEmail).should('be.visible');
    cy.get('#input-password').type(userPassword).should('be.visible');
  
    cy.get('.text-danger').should('not.exist');
    //cy.get('input[value="submit"]').should('be.visible').wait(1000).click();
    /*cy.window().document().then(function (doc) 
    { doc.addEventListener('click', () => 
    {setTimeout(function () { doc.location.reload() }, 5000)}
    )})
    */
  
    //cy.intercept('POST', '**/index.php?route=account/login', (req) => {}).as('loginRequest');
   // cy.get('input[value="Login"]').should('be.visible').click();
  //  cy.wait('@loginRequest');

    //cy.url().should('include', '/account');
/** 
  })
  it('Login with invalid credentials', () => {
    cy.visit('https://opencart.abstracta.us/index.php?route=account/login', { headers: { "Accept-Encoding": "gzip, deflate" } });
    cy.url().should('include','/login');

    cy.get('#input-email').type('invalidemail@example.com').should('be.visible');
    cy.get('#input-password').type('invalidpassword');

    cy.get('.text-danger').should('not.exist');
    cy.get('input[value="Login"]').should('be.visible').click();

    cy.get('.alert-danger').should('be.visible');

  })
  **/
})

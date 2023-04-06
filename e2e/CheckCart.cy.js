///<reference types="cypress"/>
import userLogin from "../fixtures/userLogin.json";
import LoginPage from "../support/POM/LoginPage";
import SearchPage from "../support/POM/SearchPage";
//import SearchProduct from "../support/POM/";
//import myAccountPage from "../support/POM/myAccountPage";
//import AddProduct from '';

describe('Login First ',() =>{
    beforeEach(() =>{
        LoginPage.validateLoginPage();
        LoginPage.emailField.type(userLogin.email).should('be.visible');
        LoginPage.passwordField.should('be.visible').type(userLogin.password).should('be.visible');
        LoginPage.LoginButton.should('be.visible').click();

    })

    })     
      it('Check the Cart', () =>{

        cy.setCookie('OCSESSID', '4eb599b2db23a824a74995b92a', { domain: "opencart.abstracta.us"});
        cy.visit('http://opencart.abstracta.us/index.php?route=checkout/cart');

    })
    it('Delete One Product', () =>{

        cy.setCookie('OCSESSID', '4eb599b2db23a824a74995b92a', { domain: "opencart.abstracta.us"});
        cy.visit('http://opencart.abstracta.us/index.php?route=checkout/cart');

        cy.get(':nth-child(1) > :nth-child(4) > .input-group > .form-control').type('7{enter}');
        cy.get(':nth-child(2) > :nth-child(4) > .input-group > .input-group-btn > .btn-danger').click();

    })
///<reference types="cypress"/>
import userLogin from "../fixtures/userLogin.json";
import LoginPage from "../support/POM/LoginPage";
import SearchPage from "../support/POM/SearchPage";
import SearchProduct from'../fixtures/SearchProduct.json';
import myAccountPage from "../support/POM/myAccountPage";
import ProductPage from "../support/POM/ProductPage";

describe('Edit a product from Cart',() =>{
    it('Edit the quantity of the product', () =>{

        cy.setCookie('OCSESSID', '4eb599b2db23a824a74995b92a', { domain: "opencart.abstracta.us"});
        cy.visit('http://opencart.abstracta.us/index.php?route=checkout/cart');

        cy.get(':nth-child(2) > :nth-child(4) > .input-group > .form-control').type('7{enter}');
})

})
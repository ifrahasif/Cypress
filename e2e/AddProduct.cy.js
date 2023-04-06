///<reference types="cypress"/>
import userLogin from "../fixtures/userLogin.json";
import LoginPage from "../support/POM/LoginPage";
import SearchPage from "../support/POM/SearchPage";
import SearchProduct from'../fixtures/SearchProduct.json';
import myAccountPage from "../support/POM/myAccountPage";
import ProductPage from "../support/POM/ProductPage";

describe('Add the product',() =>{
    it('Add the Product after login', () =>{

        cy.setCookie('OCSESSID', '4eb599b2db23a824a74995b92a', { domain: "opencart.abstracta.us"});
        
        myAccountPage.validateMyAccountPage();
        myAccountPage.searchField.should('be.visible').type(SearchProduct.productName);
        myAccountPage.SearchButton.click();
    
        SearchPage.validateSearchPage;
        SearchPage.contentSection.should('be.visible');
        SearchPage.searchedProductTitle.should('contain.text',SearchProduct.productName);

        ProductPage.AddProduct.click();
        ProductPage.validateAddedProduct.should('be.visible');

    })     
})
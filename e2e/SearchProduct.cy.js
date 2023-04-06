
///<reference types="cypress"/>
import userLogin from "../fixtures/userLogin.json";
import LoginPage from "../support/POM/LoginPage";
import SearchPage from "../support/POM/SearchPage";
import SearchProduct from'../fixtures/SearchProduct.json';
import myAccountPage from "../support/POM/myAccountPage";
import ProductPage from "../support/POM/ProductPage";
//import AddProduct from '../FinmarkAutomation/POM/AddProduct';

 
describe('Search the Product',() =>{
    beforeEach(() =>{
        LoginPage.validateLoginPage();
        LoginPage.emailField.type(userLogin.email).should('be.visible');
        LoginPage.passwordField.should('be.visible').type(userLogin.password).should('be.visible');
        LoginPage.LoginButton.should('be.visible').click();

        myAccountPage.validateMyAccountPage();
        myAccountPage.searchField.should('be.visible').type(SearchProduct.productName);
        myAccountPage.SearchButton.click();
    })
    it('Search the Product after login', () =>{

        SearchPage.validateSearchPage;
        SearchPage.contentSection.should('be.visible');
        SearchPage.searchedProductTitle.should('contain.text',SearchProduct.productName);

    })
    it('Invalid Product', () =>{

        SearchPage.validateSearchPage;
        SearchPage.contentSection.should('be.visible');
        SearchPage.searchedProductTitle.should('contain.text', "hhhh");

    })
    it('Add the Product after login', () =>{
    
        SearchPage.validateSearchPage;
        SearchPage.contentSection.should('be.visible');
        SearchPage.searchedProductTitle.should('contain.text',SearchProduct.productName);

        ProductPage.AddProduct.click();
        ProductPage.validateAddedProduct.should('be.visible');

    })     

})

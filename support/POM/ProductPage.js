///<reference types="cypress"/>

class ProductPage
{

get AddProduct(){
  return cy.get('button[onclick="cart.add(\'41\', \'1\');"]')
  return cy.get('button[onclick="cart.add(\'43\', \'1\');"]')
  return cy.get('button[onclick="cart.add(\'44\', \'1\');"]')
}
get validateAddedProduct(){
    return cy.get('.alert-success')

}
}
export default new ProductPage();
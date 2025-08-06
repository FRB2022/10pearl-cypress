import LoginPage from '../pages/LoginPage'
import HomePage from '../pages/HomePage'

const loginPage = new LoginPage();
const homePage = new HomePage();

describe('SauceDemo Automation Assignment', () => {
  beforeEach(() => {
    cy.visit('https://www.saucedemo.com');
  });

  it('Displays error on wrong login', () => {
    loginPage.login('invalid_user', 'wrong_password');
    loginPage.getError().should('contain', 'Username and password do not match');
  });

  it('Logs in and lands on home page', () => {
    loginPage.login('standard_user', 'secret_sauce');
    cy.url().should('include', '/inventory.html');
    homePage.getHeader().should('contain', 'Products');
  });

  it('Clicks on product and lands on product page', () => {
    loginPage.login('standard_user', 'secret_sauce');
    homePage.clickFirstProduct();
    cy.url().should('include', '/inventory-item.html');
    cy.get('.inventory_details_name').should('exist');
  });
});

import { Given, Then, When } from 'cypress-cucumber-preprocessor/steps';

Given(/^I navigate to Login page$/, () => {
  cy.visit("/");
});

Given(/^I put a username "([^"]*)"$/, (username) => {
  cy.get('#user-name').type(username);
});

Given(/^I put a password "([^"]*)"$/, (userPassword) => {
  cy.get('#password').type(userPassword);
});

Given(/^I click on Login button$/, () => {
  cy.get('#login-button').click();
});

Then(/^I verify I was logged in$/, () => {
  cy.get('#shopping_cart_container').should('be.visible');
});

When(/^I click on add to the cart button of the backpack$/, () => {
  cy.get('#add-to-cart-sauce-labs-backpack').click();
});

Then(/^I navigate to Chart list$/, () => {
  cy.get('#shopping_cart_container').click();
});

Then(/^I click on checkout button$/, () => {
  cy.get('#checkout').click();
});


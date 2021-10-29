import { Given, Then } from 'cypress-cucumber-preprocessor/steps';

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
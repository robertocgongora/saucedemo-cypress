import {login} from '../support/login'
describe('Login Page', () => {
  it('Verify we can login using valid credentials', () => {
    cy.visit('/');
    login.userLogin();
  });
});
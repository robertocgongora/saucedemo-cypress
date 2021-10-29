const INPUT_USERNAME = '#user-name';
const INPUT_PASS = '#password';
const LOGIN_BUTTON = '#login-button';

export const login = {
  userLogin() {
    cy.get(INPUT_USERNAME).type('standard_user');
    cy.get(INPUT_PASS).type('secret_sauce');
    cy.get(LOGIN_BUTTON).click();
  }
}
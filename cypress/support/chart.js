const CHECKOUT_BUTTON = '#checkout';
const CONT_SHOPPING = '#continue-shopping';

export const chart = {
  checkoutList() {
    cy.get(CHECKOUT_BUTTON).click();
  },
  continueShopping() {
    cy.get(CONT_SHOPPING).click();
  }
}
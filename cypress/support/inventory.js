const CHART_IMAGE = '#shopping_cart_container';
const HAMBURGUER_BUTTON = '#react-burger-menu-btn';
const HAMBURGUER_CLOSE_BUTTON = '#react-burger-cross-btn';
const BACKPACK_BUTTON = '#add-to-cart-sauce-labs-backpack';
const BIKE_LIGHT_BUTTON = '#add-to-cart-sauce-labs-bike-light';

export const inventory = {
  clickOnChart() {
    cy.get(CHART_IMAGE).click();
  },
  clickOnHamburguer() {
    cy.get(HAMBURGUER_BUTTON).click(); 
  },
  clickOnCloseHamburguer() {
    cy.get(HAMBURGUER_CLOSE_BUTTON).click();
  },
  clickOnBackPack() {
    cy.get(BACKPACK_BUTTON).click();
  }
}
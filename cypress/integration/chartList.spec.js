import {login} from '../support/login';
import {inventory} from '../support/inventory';
import {chart} from '../support/chart';

describe('Chart Page', () => {
  it('verify we can add some elements to chart page', () => {
    cy.visit('/');
    login.userLogin();
    //to open
    inventory.clickOnHamburguer();
    //to close
    inventory.clickOnCloseHamburguer();
    //to add a element to chart
    inventory.clickOnBackPack();
    //to go to chart page
    inventory.clickOnChart();
    //continue shopping
    chart.continueShopping();
    //to go to chart page
    inventory.clickOnChart();
    //checkout list
    chart.checkoutList();
  });
});
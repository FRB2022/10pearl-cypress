class HomePage {
  header = '.title';
  firstProduct = '.inventory_item a';

  getHeader() {
    return cy.get(this.header);
  }

  clickFirstProduct() {
    cy.get(this.firstProduct).first().click();
  }
}

export default HomePage;

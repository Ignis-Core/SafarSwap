describe("SafarSwap Tests", () => {

  it("Home → Buy → Payment flow", () => {

    cy.visit("http://localhost:5177");

    cy.contains("Buy a ticket").click();
    cy.url().should("include", "/buy");

    cy.contains("Buy now").first().click({ force: true });
    cy.url().should("include", "/payment");

  });

  it("Buy page shows tickets", () => {

    cy.visit("http://localhost:5177/buy");

    cy.contains("Buy now");
    cy.contains("Mumbai");

  });

  it("Search filters tickets", () => {

    cy.visit("http://localhost:5177/buy");

    cy.get('input[placeholder="From"]').type("Mumbai");
    cy.get('input[placeholder="To"]').type("Pune");

    cy.contains("Mumbai → Pune");

  });

});
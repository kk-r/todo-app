describe("Test homepage", () => {
  it("Visits the app root url", () => {
    cy.visit("/");
    cy.contains("h1", "Todo List");
  });
});

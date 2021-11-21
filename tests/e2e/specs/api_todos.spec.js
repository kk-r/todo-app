describe("todos API", () => {
  var actual_lenth = 0;
  const baseURL = Cypress.env("VUE_APP_API_BASE_URL");
  it("returns JSON", () => {
    cy.request(`${baseURL}/api/todos`)
      .then(function (response) {
        expect(response.status).to.equal(200);
        actual_lenth = Object.keys(response.body).length;
      })
      .its("headers")
      .its("content-type")
      .should("include", "application/json");
  });

  it("Create Todo via API", function () {
    const statusCode = 201;
    const rand = new Date().getTime();
    const title = `Todo #${rand}`;

    cy.request({
      method: "POST",
      url: `${baseURL}/api/todos`,
      body: {
        title: title,
      },
      headers: {
        "content-type": "application/json",
      },
    }).then(function (response) {
      expect(response.status).to.equal(statusCode);
      expect(Object.keys(response.body).length).to.equal(actual_lenth + 1);
    });
  });

  it("Verify UI after new todo created", function () {
    const rand = new Date().getTime();
    const todo = `Tode #${rand}`;

    cy.visit("/");
    cy.wait(2000);
    cy.get("input").type(todo);

    cy.get("button").click();
    cy.wait(2000);

    cy.get(".item-wrapper").should("contain", todo);
  });
});

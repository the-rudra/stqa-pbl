import usersMock from "../fixtures/users.json";

describe("Issue List", () => {
  beforeEach(() => {
    cy.visit(`http://localhost:3000/dashboard/users`);

    // set button aliases
    cy.get("button").contains("<").as("prev-button");
    cy.get("button").contains(">").as("next-button");
  });

  context("desktop resolution", () => {
    beforeEach(() => {
      cy.viewport(1025, 900);
    });

    it("renders the users", () => {
      cy.get("main")
        .find("tbody")
        .find("tr")
        .each(($el, index) => {
          const user = usersMock[index];
          cy.wrap($el).contains(user.firstName);
          cy.wrap($el).contains(user.email);
          cy.wrap($el).contains(user.address.address);
        });
    });

    it("buttons are working", () => {
      cy.get("@next-button").click();
      cy.wait(2000);
      cy.get("@next-button").click();
    });
  });
});

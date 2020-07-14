/// <reference types="cypress" />
describe("Renders App", () => {
  it(`renders app body`, () => {
    cy.visit("http://localhost:3000/");
    cy.get("[data-testid=app-body]").should("exist");
  });

  it(`renders list of questions`, () => {
    cy.get("[data-testid=question-card]").should("have.length.greaterThan", 0);
  });

  it(`navigates to question details page on question click`, () => {
    cy.get("[data-testid=question-card]").first().click();
    cy.location("pathname").should("contain", "/questions");
  });

  it(`displays list of choices`, () => {
    cy.get("[data-testid=choice-item]").should("have.length.greaterThan", 1);
  });

  it(`navigates back to home on "Back to Home" link click`, () => {
    cy.get("[data-testid=back-to-home-link]").first().click();
    cy.location("pathname").should("eq", "/");
  });

  it(`navigates to Create Question page on "Create Question" link click`, () => {
    cy.get("[data-testid=create-question-link]").first().click();
    cy.location("pathname").should("eq", "/create");
  });

  it(`displays form elements on Create Question page `, () => {
    cy.get("[data-testid=choices-field]").should("exist");
    cy.get("[data-testid=question-field]").should("exist");
  });

  // add more tests later interacting with form but with test database
});

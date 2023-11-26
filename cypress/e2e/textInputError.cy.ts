/*
 * @Author: fantiga
 * @Date: 2023-11-26 14:38:46
 * @LastEditTime: 2023-11-26 14:41:34
 * @LastEditors: fantiga
 * @FilePath: /show-weather-nextjs-ts/cypress/e2e/textInputError.cy.ts
 */

describe("Text Input Test Error", () => {
  const resultText = "Something went wrong!";

  beforeEach(() => {
    cy.visit("/");
  });

  it("Type Location That NOT Exist", () => {
    const typedText = "asdffdsa";

    cy.get("#q").type(typedText);
    cy.get("#q").should("have.value", typedText);
  });

  it("Type Geolocation That NOT Exist", () => {
    const typedText = "01234,56789";

    cy.get("#q").type(typedText);
    cy.get("#q").should("have.value", typedText);
  });

  afterEach(() => {
    cy.get("#q").type("{enter}");

    cy.contains(resultText);
  });
});

/*
 * @Author: fantiga
 * @Date: 2023-11-22 22:51:22
 * @LastEditTime: 2023-11-22 23:01:48
 * @LastEditors: fantiga
 * @FilePath: /show-weather-nextjs-ts/cypress/e2e/textInput.cy.ts
 */

describe("Text Input Test", () => {
  const resultText = "Japan";

  beforeEach(() => {
    cy.visit("/");
  });

  it("Type Tokyo", () => {
    const typedText = "Tokyo";

    cy.get("#q").type(typedText);
    cy.get("#q").should("have.value", typedText);
  });

  it("Type Geolocation", () => {
    const typedText = "35.7399415,139.7090859";

    cy.get("#q").type(typedText);
    cy.get("#q").should("have.value", typedText);
  });

  afterEach(() => {
    cy.get("#q").type("{enter}");

    cy.contains("Current Weather");
    cy.contains(resultText);
  });
});

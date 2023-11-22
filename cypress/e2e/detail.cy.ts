/*
 * @Author: fantiga
 * @Date: 2023-11-22 23:01:04
 * @LastEditTime: 2023-11-22 23:10:30
 * @LastEditors: fantiga
 * @FilePath: /show-weather-nextjs-ts/cypress/e2e/detail.cy.ts
 */

describe("Detail Test", () => {
  const typedText = "Tokyo";

  beforeEach(() => {
    cy.visit("/");
    cy.get("#q").type(typedText);
    cy.get("#q").type("{enter}");
  });

  it("Next Days Test", () => {
    cy.contains("Next").and("contain", "Days");

    cy.get("a").first().should("have.attr", "href");
  });

  it("Click Forecast Test", () => {
    cy.get("a").first().click();

    cy.location("pathname").should("contain", `/${typedText}`);

    cy.contains("Weather at");
  });
});

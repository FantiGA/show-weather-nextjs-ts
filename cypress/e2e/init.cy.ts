/*
 * @Author: fantiga
 * @Date: 2023-11-22 19:55:11
 * @LastEditTime: 2023-11-22 23:01:55
 * @LastEditors: fantiga
 * @FilePath: /show-weather-nextjs-ts/cypress/e2e/init.cy.ts
 */

describe("Auto Focus Test", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("focuses input on load", () => {
    cy.focused().should("have.attr", "name", "q");
  });
});

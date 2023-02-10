import { hasSelectionSupport } from "@testing-library/user-event/dist/utils";
import DashBoardBody from "../../src/components/DashboardBody/dashboardBody";
import Modal from "../../src/components/modal/modal";
import SitesCard from "../../src/components/sitesCard/sitesCard";

describe("dashboardBodyDashBoardBody.cy.tsx", () => {
  beforeEach(() => {
    cy.mount(<DashBoardBody />);
  });

  it("checking for heading", () => {
    cy.get('[data-cy="site-head"]').contains("Sites");
  });

  it("checking for input field", () => {
    cy.get('input[placeholder*="Search Here"]').should("have.length", 1);
  });

  it("checking for button", () => {
    cy.get('[data-cy="add-site-modal"]').click();
    cy.mount(<Modal />);
  });

  it("checking for Add-modal Inputs", () => {
    cy.mount(<Modal />);
    cy.get('[ data-cy="url-input"]').should("have.value", "").type("ghgvhgvhv");
    cy.get('[data-cy="siteName-input"]')
      .should("have.value", "")
      .type("ghgvhgvhv");
    cy.get('[ data-cy="folder-input"]')
      .should("have.value", "")
      .type("ghgvhgvhv");
    cy.get('[ data-cy="sitepass-input"]')
      .should("have.value", "")
      .type("ghgvhgvhv");

    cy.get('[   data-cy="username-input"]')
      .should("have.value", "")
      .type("ghgvhgvhv");
    cy.get('[data-cy="notes-input"]')
      .should("have.value", "")
      .type("ghgvhgvhv");
  });
  it("checking for modal submission", () => {
    cy.mount(<Modal />);
    cy.get('[ data-cy="url-input"]').should("have.length", 1);
    cy.get('[ data-cy="siteName-input"]').should("have.length", 1);
    cy.get('[ data-cy="folder-input"]').should("have.length", 1);
    cy.get('[ data-cy="sitepass-input"]').should("have.length", 1);
    cy.get('[ data-cy="username-input"]').should("have.length", 1);
    cy.get('[ data-cy="notes-input"]').should("have.length", 1);
    cy.get('[ data-cy="submit-button"]').contains("Save").click();
  });
});

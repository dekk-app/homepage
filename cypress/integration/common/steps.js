import { When } from "cypress-cucumber-preprocessor/steps";
import { dataTestId } from "../../utils";

When("the user visits the root page", function () {
	cy.visit("/");
});

When("the user logs in", function () {
	cy.login();
	cy.visit("/");
	cy.wait("@session");
});

When("the user logs out", function () {
	cy.logout();
	cy.visit("/");
	cy.wait("@session");
});

When("the user clicks the link to the {string} page", function (page) {
	switch (page) {
		case "logout":
			cy.get(dataTestId("link-to-logout")).click();
			break;
		case "wishlist":
			cy.get(dataTestId("link-to-wishlist")).click();
			break;
		default:
			break;
	}
});

When("the user clicks the {string} button", function (button) {
	switch (button) {
		case "logout":
			cy.intercept("/api/auth/session", { fixture: null }).as("session");
			cy.get(dataTestId("logout-button")).click();
			cy.wait("@session");
			break;
		default:
			break;
	}
});

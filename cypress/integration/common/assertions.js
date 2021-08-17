import { Then } from "cypress-cucumber-preprocessor/steps";
import { dataTestId, withBaseUrl } from "../../utils";

Then("the user sees {string} in the url", function (locale) {
	cy.url().should("equal", withBaseUrl(locale));
});

Then("the user sees {string} on the page", function (text) {
	cy.contains(text);
});

Then("the user sees the {string} page", function (page) {
	switch (page) {
		case "logged in":
			cy.get(dataTestId("logged-in-page")).should("exist");
			cy.url().should("equal", withBaseUrl("/"));
			break;
		case "logged out":
			cy.get(dataTestId("logged-out-page")).should("exist");
			cy.url().should("equal", withBaseUrl("/"));
			break;
		case "logout":
			cy.get(dataTestId("logout-page")).should("exist");
			cy.url().should("equal", withBaseUrl("/auth/signout"));
			break;
		default:
			break;
	}
});

Then("the user sees the {string} button", function (button) {
	switch (button) {
		case "logout":
			cy.get(dataTestId("logout-button")).should("exist");
			break;
		default:
			break;
	}
});

Then("the user sees the link to the {string} page", function (page) {
	switch (page) {
		case "logout":
			cy.get(dataTestId("link-to-logout")).should("be.visible");
			break;
		default:
			break;
	}
});

Then("the page is delivered in {string}", function (locale) {
	cy.get("html").should("have.attr", "lang", locale);
});

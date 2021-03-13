import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
import { dataTestId, withBaseUrl } from "../../utils";

Given("I am on the {string} page", path => {
	cy.visit(`/${path === "en" ? "" : path}`);
});

When(`I click {string}`, label => {
	cy.get(dataTestId("language-switcher-link")).contains(label).click();
});

Then(`I see {string} in the url`, locale => {
	cy.url().should("equal", withBaseUrl(locale));
});

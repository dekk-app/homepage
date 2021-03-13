import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
import { dataTestId, withBaseUrl } from "../../utils";

Given("I am on the {string} page", locale => {
	cy.visit(`/${locale === "en" ? "" : locale}`);
});

When(`I click {string}`, label => {
	cy.get(dataTestId("header-nav-link")).contains(label).click();
});

Then(`I see {string} in the url`, locale => {
	cy.url().should("equal", withBaseUrl(locale));
});

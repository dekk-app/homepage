const { Then } = require("cypress-cucumber-preprocessor/steps");
const { withBaseUrl } = require("../../utils");

Then(`the user sees {string} in the url`, function (locale) {
	cy.url().should("equal", withBaseUrl(locale));
});

Then(`the user sees {string} on the page`, function (text) {
	cy.contains(text);
});

Then("the page is delivered in {string}", function (locale) {
	cy.get("html").should("have.attr", "lang", locale);
});

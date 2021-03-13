import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
import { withBaseUrl } from "../../utils";

When("I prefer {string} as language", languages => {
	const value = languages.split(",").map(lang => lang.trim());
	cy.visit("/", {
		onBeforeLoad: win => {
			Object.defineProperty(win.navigator, "languages", { value });
		},
	});
});

Then(`I see {string} in the url`, locale => {
	cy.url().should("equal", withBaseUrl(locale));
});

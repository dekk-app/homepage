import { When, Then } from "cypress-cucumber-preprocessor/steps";

When("I prefer {string} as language", languages => {
	const value = languages.split(",").map(lang => lang.trim());
	cy.visit("/", {
		onBeforeLoad: win => {
			Object.defineProperty(win.navigator, "languages", { value });
		},
	});
});

Then(`I see {string} on the page`, text => {
	cy.contains(text);
});

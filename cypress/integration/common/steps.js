const { setUserLocale } = require("../../utils");

Given("the user is on the root page", function () {
	cy.visit("/");
});

Given("the user {string} as language", setUserLocale);

When("I prefer {string} as language", setUserLocale);

const { When } = require("cypress-cucumber-preprocessor/steps");

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

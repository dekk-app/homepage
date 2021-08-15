const { Given } = require("cypress-cucumber-preprocessor/steps");

Given("the user is on the root page", function () {
	cy.visit("/");
});

Given("the user prefers {string}", function (languages) {
	cy.visit("/", {
		headers: {
			"Accept-Language": `${languages.replace(/\s/, "")};q=0.9`,
		},
		onBeforeLoad: win => {
			Object.defineProperty(win.navigator, "languages", {
				value: languages.split(",").map(lang => lang.trim()),
			});
		},
	});
});

Given("the user is logged in", function () {
	cy.login();
	cy.visit("/");
	cy.wait("@session");
});

Given("the user is not logged in", function () {
	cy.intercept("/api/auth/session", { fixture: null }).as("session");
	cy.clearCookie("next-auth.session-token");
	cy.visit("/");
	cy.wait("@session");
});

import { hasOperationName } from "../utils/graphql";

/**
 * Login stub for next-auth
 */
Cypress.Commands.add("login", function () {
	cy.intercept("/api/auth/session", { fixture: "session.json" }).as("session");

	// Set the cookie for cypress.
	// It has to be a valid cookie so next-auth can decrypt it and confirm its validity.
	// This step can probably/hopefully be improved
	cy.setCookie("next-auth.session-token", Cypress.env("nextAuthSessionToken"));
	Cypress.Cookies.preserveOnce("next-auth.session-token");
});

/**
 * Logout stub for next-auth
 */
Cypress.Commands.add("logout", function () {
	cy.intercept("/api/auth/session", { fixture: null }).as("session");

	cy.clearCookie("next-auth.session-token");
});

Cypress.Commands.add("gql", function (operations) {
	cy.intercept("POST", Cypress.env("backendUri"), req => {
		for (const { operationName, data, alias } of operations) {
			if (hasOperationName(req, operationName)) {
				if (alias) {
					req.alias = alias;
				}
				req.reply(res => {
					res.body.data = data;
				});
			}
		}
	});
});

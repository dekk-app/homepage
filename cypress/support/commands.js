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

/**
 * Stub a graphql call in cypress.
 * @param {string} operationName The name of the operation
 * @param {object} data The response body data
 * @param {object} options Additional options to configure the stub
 * @param {object} options.alias The alias of the stub
 */
Cypress.Commands.add("gql", function (operationName, data, { alias }) {
	cy.intercept("POST", Cypress.env("backendUri"), req => {
		if (hasOperationName(req, operationName)) {
			req.alias = alias;
			req.reply(res => {
				res.body.data = data;
			});
		}
	});
});

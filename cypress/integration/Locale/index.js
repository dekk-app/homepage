const { withBaseUrl } = require("../../utils");

Then(`I see {string} in the url`, locale => {
	cy.url().should("equal", withBaseUrl(locale));
});

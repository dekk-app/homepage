const sessionToken =
	"eyJhbGciOiJIUzUxMiJ9.eyJuYW1lIjoiR3JlZ29yIEFkYW1zIiwiZW1haWwiOm51bGwsInBpY3R1cmUiOiJodHRwczovL2F2YXRhcnMuZ2l0aHVidXNlcmNvbnRlbnQuY29tL3UvMTE0ODMzND92PTQiLCJzdWIiOiI1IiwidXNlciI6eyJpZCI6NSwibmFtZSI6IkdyZWdvciBBZGFtcyIsImVtYWlsIjpudWxsLCJlbWFpbFZlcmlmaWVkIjpudWxsLCJpbWFnZSI6Imh0dHBzOi8vYXZhdGFycy5naXRodWJ1c2VyY29udGVudC5jb20vdS8xMTQ4MzM0P3Y9NCIsImNyZWF0ZWRBdCI6IjIwMjEtMDctMjhUMTc6MTY6MjcuMzYzWiIsInVwZGF0ZWRBdCI6IjIwMjEtMDctMjhUMTc6MTY6MjcuMzYzWiIsInJvbGUiOiJ1c2VyIn0sImlhdCI6MTYyOTEzOTU1OCwiZXhwIjoxNjMxNzMxNTU4fQ.Qm2sa3IKb3iNZTts3TlTnapVugrLajmyJXhCepywgkAWUE5O-xLEfabM_U-N4_sqrwTuWSrJGrQFGh2OoQdWEQ";
Cypress.Commands.add("login", () => {
	cy.intercept("/api/auth/session", { fixture: "session.json" }).as("session");

	// Set the cookie for cypress.
	// It has to be a valid cookie so next-auth can decrypt it and confirm its validity.
	// This step can probably/hopefully be improved
	cy.setCookie("next-auth.session-token", sessionToken);
	Cypress.Cookies.preserveOnce("next-auth.session-token");
});

Cypress.Commands.add("logout", () => {
	cy.intercept("/api/auth/session", { fixture: null }).as("session");

	cy.clearCookie("next-auth.session-token");
});

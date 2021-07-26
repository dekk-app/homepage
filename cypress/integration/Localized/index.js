Then(`I see {string} on the page`, text => {
	cy.contains(text);
});

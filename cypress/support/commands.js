Cypress.Commands.add(
	"drag",
	(selector, { index = 0, initialPosition, finalPosition, options = {} }) => {
		cy.get(selector)
			.eq(index)
			.trigger("mousedown", initialPosition.pageX, initialPosition.pageY, options)
			.trigger("mousemove", finalPosition.pageX, finalPosition.pageY, options)
			.trigger("mouseup", finalPosition.pageX, finalPosition.pageY, options);
	}
);

Cypress.Commands.add("getBoundingClientRect", (selector, cache) => {
	cy.get(selector).then(function ([el]) {
		cache = el.getBoundingClientRect();
	});
});

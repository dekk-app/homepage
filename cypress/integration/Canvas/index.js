import { When, Then } from "cypress-cucumber-preprocessor/steps";

When("I {string} the view {string} to the {string}", (event, distance, direction) => {
	cy.log(event, distance, direction);
});

Then("the screen moves {string} to the {string}", (distance, direction) => {
	cy.log(distance, direction);
});

Then("the screen zooms to {string} times {string}", (zoomFactor, direction) => {
	cy.log(zoomFactor, direction);
});

When(
	"I {string} the view {string} to the {string} with my mouse at {string}",
	(event, distance, direction, coordinates) => {
		cy.log(event, distance, direction, coordinates);
	}
);

Then(
	"the screen zooms {string} times {string} centered to {string}",
	(zoomFactor, direction, coordinates) => {
		cy.log(zoomFactor, direction, coordinates);
	}
);

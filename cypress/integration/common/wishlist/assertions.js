import { Then } from "cypress-cucumber-preprocessor/steps";
import { dataTestId, dataTestSelector } from "../../../utils";

Then("the user sees {int} wishes", function (count) {
	cy.get(dataTestSelector("wish-card")).should("have.length", count);
});

Then("the user sees all wishes", function () {
	cy.get(dataTestSelector("wish-card")).should("have.length", this.count);
});

Then("the wish with id {int} has {string} {string}", function (id, element, text) {
	const elements = {
		body: dataTestSelector("wish-body"),
		subject: dataTestSelector("accordion-header"),
		votes: dataTestSelector("wish-votes"),
	};
	cy.get(dataTestId(id)).find(elements[element]).should("contain", text);
});

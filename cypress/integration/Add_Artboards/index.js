import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
import { dataTestId } from "../../utils";

const testIds = {
	canvas: "canvas",
	artboard: "artboard",
};

Given("I am on the create screen", function () {
	cy.viewport(1600, 900);
	cy.visit("/create");
	cy.get(dataTestId("inner-frame")).should("be.visible");
});

When(`I rightclick on the {string}`, function (element) {
	this.pointer = {
		x: 400,
		y: 200,
	};
	cy.document().trigger("mousemove", {
		pageX: this.pointer.x,
		pageY: this.pointer.y,
	});
	if (element === "artboard") {
		cy.get(dataTestId("canvas")).find(dataTestId("artboard")).last().trigger("contextmenu", {
			pageX: this.pointer.x,
			pageY: this.pointer.y,
		});
	} else {
		cy.get(dataTestId("canvas")).last().trigger("contextmenu", {
			pageX: this.pointer.x,
			pageY: this.pointer.y,
		});
	}
});

Then(`I see a contextmenu`, function () {
	cy.get(dataTestId("contextmenu")).should("be.visible");
});

And(`I see {string} in the contextmenu`, function (text) {
	cy.get(dataTestId("contextmenu:item")).contains(text).should("be.visible");
});

When(`I click {string}`, function (text) {
	cy.get(dataTestId("contextmenu:item")).contains(text).click();
});

Then(`I see {string} artboards on the canvas`, function (count) {
	cy.get(dataTestId("canvas"))
		.find(dataTestId("artboard"))
		.should("have.length", parseInt(count, 10));
});

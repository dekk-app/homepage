import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
import { dataTestId } from "../../utils";

const testIds = {
	canvas: "canvas",
	artboard: "artboard",
};

Given("I am on the create screen", function () {
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
	cy.get(dataTestId(testIds[element])).trigger("contextmenu", {
		pageX: this.pointer.x,
		pageY: this.pointer.y,
	});
});

Then(`I see a contextmenu`, function () {
	cy.get(dataTestId("contextmenu")).should("be.visible");
});

And(`I see a {string} in the contextmenu`, function (text) {
	cy.get(dataTestId("contextmenu:item")).contains(text).should("be.visible");
});

When(`I click {string}`, function (text) {
	cy.get(dataTestId("contextmenu:item")).contains(text).click();
});

Then(`I see an artboard on the canvas`, function () {
	cy.get(dataTestId("artboard"))
		.should("exist")
		.then(function ($el) {
			this.artboardRect = $el[0].getBoundingClientRect();
		});
});

And(`the artboard is positioned where I clicked`, function () {
	cy.get(dataTestId("artboard")).should(function ($el) {
		expect(this.artboardRect.left).to.be.equal(this.pointer.x);
		expect(this.artboardRect.top).to.be.equal(this.pointer.y);
	});
});

Then(`I don't see an artboard on the canvas`, function () {
	cy.get(dataTestId("artboard")).should("not.exist");
});

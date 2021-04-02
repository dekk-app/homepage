import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
import { dataTestId } from "../../utils";

const testIds = {
	canvas: "canvas",
	artboard: "artboard",
};

Given("There is one artboard on the canvas", function () {
	cy.viewport(1600, 900);
	cy.visit("/create");
	cy.get(dataTestId("canvas")).should("be.visible");
});
const y = ["top", "bottom"];
const x = ["left", "right"];
const dir = {
	top: -1,
	right: 1,
	bottom: 1,
	left: -1,
};

When(`I drag the artboard {string} to the {string}`, function (distance, direction) {
	const pxDistance = parseFloat(distance);
	const move = {
		x: x.includes(direction) ? pxDistance * dir[direction] : 0,
		y: y.includes(direction) ? pxDistance * dir[direction] : 0,
	};

	this.pointer = {
		x: 600,
		y: 200,
	};
	cy.get(dataTestId("inner-frame")).then(function ($el) {
		this.originalFrameRect = $el[0].getBoundingClientRect();
	});

	cy.get(dataTestId("canvas"))
		.find(dataTestId("artboard"))
		.last()
		.then(function ($el) {
			this.originalArtboardRect = $el[0].getBoundingClientRect();
		})
		.trigger("mousedown", this.pointer.x, this.pointer.y, {
			buttons: 1,
			button: 1,
		})
		.trigger("mousemove", this.pointer.x + move.x, this.pointer.y + move.y, {
			button: 1,
			buttons: 1,
		})
		.trigger("mouseup", this.pointer.x + move.x, this.pointer.y + move.y, {
			button: 1,
			buttons: 1,
		});
	cy.get(dataTestId("inner-frame")).then(function ($el) {
		this.modifiedFrameRect = $el[0].getBoundingClientRect();
	});
});

Then("The artboard moves {string} to the {string}", function (distance, direction) {
	const parsedDistance = parseFloat(distance);
	cy.get(dataTestId("canvas"))
		.find(dataTestId("artboard"))
		.last()
		.then(function ($el) {
			this.modifiedArtboardRect = $el[0].getBoundingClientRect();
			const left = this.modifiedArtboardRect.left - this.originalArtboardRect.left;
			const top = this.modifiedArtboardRect.top - this.originalArtboardRect.top;
			// make sure the frame didn't move
			expect(JSON.stringify(this.modifiedFrameRect)).to.be.equal(
				JSON.stringify(this.originalFrameRect)
			);

			switch (direction) {
				case "left":
					expect(left).to.be.equal(-parsedDistance);
					break;
				case "right":
					expect(left).to.be.equal(parsedDistance);
					break;
				case "top":
					expect(top).to.be.equal(-parsedDistance);
					break;
				case "bottom":
					expect(top).to.be.equal(parsedDistance);
					break;
				default:
					throw new Error(`Direction: "${direction}" is not supported`);
			}
		});
});

import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
import { dataTestId } from "../../utils";

Given("I am on the create screen", function () {
	cy.viewport(1600, 900);
	cy.visit("/create");
	cy.get(dataTestId("inner-frame")).should("be.visible");
});

When("I drag the view {string} to the {string}", function (distance, direction) {
	cy.window().reload();
	cy.get(dataTestId("inner-frame")).then(function ($el) {
		this.originalFrameRect = $el[0].getBoundingClientRect();
	});

	const parsedDistance = parseFloat(distance);
	const deltaY =
		direction === "top" ? -parsedDistance : direction === "bottom" ? parsedDistance : 0;
	const deltaX =
		direction === "left" ? -parsedDistance : direction === "right" ? parsedDistance : 0;
	const initialPosition = { buttons: 1, pageX: 500, pageY: 100 };
	const finalPosition = {
		buttons: 1,
		pageX: initialPosition.pageX + deltaX,
		pageY: initialPosition.pageY + deltaY,
	};
	cy.get(dataTestId("canvas-wrapper"))
		.last()
		.trigger("mousedown", initialPosition.pageX, initialPosition.pageY, initialPosition)
		.trigger("mousemove", finalPosition.pageX, finalPosition.pageY, finalPosition)
		.trigger("mouseup", finalPosition.pageX, finalPosition.pageY, finalPosition);
});

Then("the screen moves {string} to the {string}", function (distance, direction) {
	const parsedDistance = parseFloat(distance);
	cy.get(dataTestId("inner-frame")).then(function ($el) {
		this.modifiedFrameRect = $el[0].getBoundingClientRect();

		const left = this.modifiedFrameRect.left - this.originalFrameRect.left;
		const top = this.modifiedFrameRect.top - this.originalFrameRect.top;

		switch (direction) {
			case "left":
				expect(left).to.be.equal(-parsedDistance);
				break;
			case "right":
				expect(left).to.be.equal(parsedDistance);
				break;
			case "top":
				expect(top).to.be.equal(parsedDistance);
				break;
			case "bottom":
				expect(top).to.be.equal(-parsedDistance);
				break;
			default:
				throw new Error(`Direction: "${direction}" is not supported`);
		}
	});
});

When("I {string} the view to the {string}", function (event, direction) {
	cy.window().reload();
	cy.get(dataTestId("inner-frame")).then(function ($el) {
		this.originalFrameRect = $el[0].getBoundingClientRect();
	});
	switch (event) {
		case "scroll":
			cy.window().trigger("wheel", {
				deltaY: direction === "top" ? 1 : -1,
			});
			cy.get(dataTestId("inner-frame")).then(function ($el) {
				this.modifiedFrameRect = $el[0].getBoundingClientRect();
			});
			break;
		case "metaKey+scroll":
			cy.window().trigger("keydown", { metaKey: true });
			cy.window().trigger("wheel", {
				deltaY: direction === "top" ? 1 : -1,
				metaKey: true,
			});
			cy.window().trigger("keydown", { metaKey: false });
			cy.get(dataTestId("inner-frame")).then(function ($el) {
				this.modifiedFrameRect = $el[0].getBoundingClientRect();
			});
			break;
		default:
			throw new Error(`${event} is not a valid event`);
	}
});

Then("the screen zooms {string}", function (direction) {
	switch (direction) {
		case "in":
			expect(this.modifiedFrameRect.height).to.be.greaterThan(this.originalFrameRect.height);
			break;
		case "out":
			expect(this.modifiedFrameRect.height).to.be.lessThan(this.originalFrameRect.height);
			break;
		default:
			throw new Error(`${direction} is not a valid event`);
			break;
	}
});

Then("the screen moves to the {string}", function (direction) {
	switch (direction) {
		case "bottom":
			expect(this.modifiedFrameRect.top).to.be.greaterThan(this.originalFrameRect.top);
			break;
		case "top":
			expect(this.modifiedFrameRect.top).to.be.lessThan(this.originalFrameRect.top);
			break;
		default:
			throw new Error(`${direction} is not a valid event`);
			break;
	}
});

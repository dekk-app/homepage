import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
import { dataTestId } from "../../utils";

Given("I am on the create screen", function () {
	this.originalFrameRect = { top: 0, left: 0, height: 0, width: 0 };
	this.modifiedFrameRect = { top: 0, left: 0, height: 0, width: 0 };
	cy.viewport(1600, 900);
	cy.visit("/create");
});

When("I drag the view {string} to the {string}", function (distance, direction) {
	cy.window().reload();
	cy.getBoundingClientRect(dataTestId("inner-frame"), this.originalFrameRect);

	const parsedDistance = parseFloat(distance);
	const deltaY =
		direction === "top" ? -parsedDistance : direction === "bottom" ? parsedDistance : 0;
	const deltaX =
		direction === "left" ? -parsedDistance : direction === "right" ? parsedDistance : 0;
	const initialPosition = { pageX: 500, pageY: 100 };
	const finalPosition = {
		pageX: initialPosition.pageX + deltaX,
		pageY: initialPosition.pageY + deltaY,
	};

	cy.drag(dataTestId("canvas-wrapper"), {
		initialPosition,
		finalPosition,
		options: {
			button: 0,
			buttons: 1,
			which: 1,
		},
	});
});

Then("the screen moves {string} to the {string}", function (distance, direction) {
	cy.getBoundingClientRect(dataTestId("inner-frame"), this.originalFrameRect);

	const left = this.modifiedFrameRect.left - this.originalFrameRect.left;
	const top = this.modifiedFrameRect.top - this.originalFrameRect.top;
	const parsedDistance = parseFloat(distance);

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

When("I {string} the view to the {string}", function (event, direction) {
	cy.window().reload();
	cy.getBoundingClientRect(dataTestId("inner-frame"), this.originalFrameRect);

	switch (event) {
		case "scroll":
			cy.get(dataTestId("canvas-wrapper")).trigger("wheel", {
				deltaY: direction === "top" ? 1 : -1,
			});
			cy.getBoundingClientRect(dataTestId("inner-frame"), this.modifiedFrameRect);

			break;
		case "metaKey+scroll":
			cy.window().trigger("keydown", { metaKey: true });
			cy.get(dataTestId("canvas-wrapper")).trigger("wheel", {
				deltaY: direction === "top" ? 1 : -1,
				metaKey: true,
			});
			cy.window().trigger("keyup", { metaKey: false });
			cy.getBoundingClientRect(dataTestId("inner-frame"), this.modifiedFrameRect);

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

import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
import { dataTestId } from "../../utils";

Given("I am on the create screen", () => {
	cy.visit("/create");
	cy.get(dataTestId("inner-frame")).should("be.visible");
});

const momentum = 2.0202019214630127;

When("I {string} the view {string} to the {string}", (event, distance, direction) => {
	cy.window().reload();
	cy.get(dataTestId("inner-frame")).should("be.visible");
	const parsedDistance = parseFloat(distance);
	const deltaY =
		direction === "top" ? -parsedDistance : direction === "bottom" ? parsedDistance : 0;
	const deltaX =
		direction === "left" ? -parsedDistance : direction === "right" ? parsedDistance : 0;
	if (event === "scroll") {
		cy.window().trigger("wheel", { deltaX, deltaY });
	} else if (event === "metaKey+scroll") {
		cy.window().trigger("keydown", { metaKey: true });
		cy.document().trigger("mousemove", {
			pageX: 300,
			pageY: 300,
			pageXOffset: 0,
			pageYOffset: 0,
		});
		for (let i = 0; i < Math.abs(Math.floor(parsedDistance / momentum)); i++) {
			cy.window().trigger("wheel", {
				deltaX: deltaX / Math.abs(deltaX),
				deltaY: deltaY / Math.abs(deltaY),
				deltaZ: 0,
				deltaMode: 0,
				metaKey: true,
			});
		}
		cy.window().trigger("keydown", { metaKey: false });
	} else if (event === "drag") {
		const initialPosition = { buttons: 1, pageX: 200, pageY: 200 };
		const finalPosition = {
			buttons: 1,
			pageX: initialPosition.pageX + deltaX,
			pageY: initialPosition.pageY + deltaY,
		};
		cy.get(dataTestId("outer-frame")).trigger("mousedown", initialPosition);
		cy.window().trigger("mousemove", finalPosition);
		cy.window().trigger("mouseup", finalPosition);
	}
});

Then("the screen moves {string} to the {string}", (distance, direction) => {
	const parsedDistance = parseFloat(distance);
	cy.get(dataTestId("inner-frame")).should($el => {
		const { left, top } = $el[0].getBoundingClientRect();

		switch (direction) {
			case "left":
				expect(left).to.be.equal(-parsedDistance);
				break;
			case "right":
				expect(left).to.be.equal(parsedDistance);
				break;
			case "top":
				expect(Math.floor(top)).to.be.equal(Math.floor(parsedDistance * momentum));
				break;
			case "bottom":
				expect(Math.floor(top)).to.be.equal(Math.floor(-parsedDistance * momentum));
				break;
			default:
				throw new Error(`Direction: "${direction}" is not supported`);
		}
	});
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

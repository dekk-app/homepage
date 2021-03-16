import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
import { dataTestId } from "../../utils";

Given("I am on the create screen", () => {
	cy.visit("/create");
	cy.get(dataTestId("inner-frame")).should("be.visible");
});

const momentum = 2.0202019214630127;

const store = {
	event: "",
	distance: "",
	direction: "",
}

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
		store.event = event
		store.distance = distance
		store.direction = direction
		cy.window().trigger("keydown", { metaKey: true });
		cy.document().trigger("mousemove", {
			pageX: 600,
			pageY: 600,
		});
		for (let i = 0; i < Math.abs(Math.floor(parsedDistance / momentum)); i++) {
			cy.window().trigger("wheel", {
				deltaX: deltaX / Math.abs(deltaX),
				deltaY: deltaY / Math.abs(deltaY),
				pageX: 600,
				pageY: 600,
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

const getFactor = (distance, {momentum = 1, scale = 0.99} = {}) => {
	let counter = Math.floor(distance / momentum);
	let factor = 1;
	while(counter--) {
		factor /= scale
	}
	return factor;
}

const toDecimals = (n, decimalCount) => Math.floor(n *Math.pow(10,decimalCount)) / Math.pow(10,decimalCount);

Then("the screen zooms {string}", (zoomFactor, direction) => {
	const factor = getFactor(parseFloat(store.distance), {momentum})
	cy.get(dataTestId("inner-frame")).then(inner => {

		cy.get(dataTestId("outer-frame")).then(outer => {
			const innerB = inner[0].getBoundingClientRect();
			const outerB = outer[0].getBoundingClientRect();
			const actualWidth = toDecimals(innerB.width, 2)
			let expectedWidth = toDecimals(outerB.width * factor, 2)
			switch(direction) {
				case "up":
					expect(expectedWidth).to.be.equal(actualWidth);
					break;
				case "down":
					expectedWidth = toDecimals(outerB.width / factor, 2)
					expect(expectedWidth).to.be.equal(actualWidth);
					break;
				default:
					break;
			}
		});
	});
});

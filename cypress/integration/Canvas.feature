Feature: Canvas

	As a user I want to navigate the canvas by dragging or scrolling
	in order to quickly get to my work.

	@focus
	Scenario: An endless canvas
		Given I am on the create screen
		When I "drag" the view "200px" to the "left"
		Then the screen moves "200px" to the "left"

		When I "drag" the view "400px" to the "right"
		Then the screen moves "400px" to the "right"

		When I "scroll" the view "100px" to the "top"
		Then the screen moves "100px" to the "top"

		When I "scroll" the view "300px" to the "bottom"
		Then the screen moves "300px" to the "bottom"

		When I "metaKey+scroll" the view "100px" to the "top"
		Then the screen zooms "up"

		When I "metaKey+scroll" the view "100px" to the "bottom"
		Then the screen zooms "down"

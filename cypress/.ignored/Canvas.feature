Feature: Canvas

	As a user I want to navigate the canvas by dragging or scrolling
	in order to quickly get to my work.

	@focus
	Scenario: An endless canvas
		Given I am on the create screen
		When I drag the view "200px" to the "left"
		Then the screen moves "200px" to the "left"

		When I drag the view "100px" to the "right"
		Then the screen moves "100px" to the "right"

		When I "scroll" the view to the "top"
		Then the screen moves to the "top"

		When I "scroll" the view to the "bottom"
		Then the screen moves to the "bottom"

		When I "metaKey+scroll" the view to the "top"
		Then the screen zooms "out"

		When I "metaKey+scroll" the view to the "bottom"
		Then the screen zooms "in"

Feature: Localized UI

	As a user I want to navigate the canvas by dragging or scrolling
	in order to quickly get to my work.

	@focus
	Scenario: I am on the create screen

		When I "drag" the view "200px" to the "left"
		Then the screen moves "200px" to the "left"

		When I "drag" the view "400px" to the "right"
		Then the screen moves "400px" to the "right"

		When I "scroll" the view "800px" to the "top"
		Then the screen moves "800px" to the "top"

		When I "scroll" the view "2000px" to the "bottom"
		Then the screen moves "2000px" to the "bottom"

		When I "ctrl+scroll" the view "100px" to the "top"
		Then the screen zooms to "n" times "up"

		When I "ctrl+scroll" the view "100px" to the "bottom"
		Then the screen zooms to "n" times "down"

		When I "ctrl+scroll" the view "100px" to the "top" with my mouse at "100px,100px"
		Then the screen zooms "n" times "up" centered to "100px,100px"


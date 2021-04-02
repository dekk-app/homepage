Feature: Create Artboards

	As a user I want to add and remove artboards
  in order to design slides.

	@focus
	Scenario: Adding and removing artboards

		Given I am on the create screen

		When I rightclick on the "canvas"
		Then I see a contextmenu
		And I see "New Artboard" in the contextmenu

		When I click "New Artboard"
		Then I see "2" artboards on the canvas

		When I rightclick on the "artboard"
		Then I see a contextmenu
		And I see "Remove" in the contextmenu

		When I click "Remove"
		Then I see "1" artboards on the canvas

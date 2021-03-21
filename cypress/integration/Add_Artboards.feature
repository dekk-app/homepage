Feature: Create Artboards

	As a user I want to add and remove artboards
  in order to design slides.

	@focus
	Scenario: Adding and removing artboards

		Given I am on the create screen

		When I rightclick on the "canvas"
		Then I see a contextmenu
		And I see a "New Artboard" in the contextmenu

		When I click "New Artboard"
		Then I see an artboard on the canvas
		And the artboard is positioned where I clicked

		When I rightclick on the "artboard"
		Then I see a contextmenu
		And I see a "Remove" in the contextmenu

		When I click "Remove"
		Then I don't see an artboard on the canvas

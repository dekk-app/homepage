Feature: Artboards List

	As a user I want to see all my artboards in the sidebar
	in order to have quick access to them


	@focus
	Scenario: Artboards are shown in the sidebar

		Given I am on the create screen with one artboard

		When I add an artboard
		Then I see two artboards in the sidebar

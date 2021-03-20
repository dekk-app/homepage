Feature: Dropdown Menu

	As a user I want to use a dropdown
	in order to quickly access features of the app.

	@focus
	Scenario: The Header has a menu

		Given I am on the create screen

		When I click a link in the header menu
		Then I see a dropdown

		When I click outside the dropdown
		Then the dropdown closes

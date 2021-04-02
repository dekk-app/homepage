Feature: Add text to artboard

	As a user I want to add text elements to my artboard
	in order to deliver a message.

	@focus
	Scenario: Text can be added to an artboard
		Given there is an artboard on the screen
		When I open the text menu
		Then I see various options to choose from
		When I click on one of the options
		Then text appears on the artboard

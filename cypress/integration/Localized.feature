Feature: Localized UI

	As a user I want to see a localized UI
	in order to better understand it.

	@focus
	Scenario: Seeing a localized UI

		When I prefer "en" as language
		Then I see "Create" on the page

		When I prefer "de" as language
		Then I see "Erstellen" on the page

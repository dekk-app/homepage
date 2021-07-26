Feature: Localized UI

	As a user I want to see a localized UI,
	so that I can understand it.

	@focus
	Scenario: The page exists in english and german

		When I prefer "en" as language
		Then I see "Wishlist" on the page

		When I prefer "de" as language
		Then I see "Wunschliste" on the page

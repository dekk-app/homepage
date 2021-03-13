Feature: Locale redirects

	As a user I want to see the page in my preferred language
	in order to better understand the user interface.

	@focus
	Scenario: Opening the root URL

		When I prefer "en" as language
		Then I see "/" in the url

		When I prefer "de" as language
		Then I see "/de" in the url

		When I prefer "en-US, en" as language
		Then I see "/" in the url

		When I prefer "de-DE, de" as language
		Then I see "/de" in the url

		When I prefer "fr-FR, fr" as language
		Then I see "/" in the url

		When I prefer "fr-FR, fr, de" as language
		Then I see "/de" in the url

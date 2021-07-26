Feature: Locale redirects

	As a user I want to see the page with my preferred locale,
	so that I can understand it.

	@focus
	Scenario: The website redirects users to their preferred locale

		Given the user is on the root page

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

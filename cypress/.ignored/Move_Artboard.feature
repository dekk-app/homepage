Feature: Move Artboards

	As as user I want to move artboards on the canvas
	in order to arrange them.

	@focus
	Scenario: Moving Artboards on the canvas

		Given There is one artboard on the canvas

		When I drag the artboard "100px" to the "left"
		Then The artboard moves "100px" to the "left"

		When I drag the artboard "100px" to the "top"
		Then The artboard moves "100px" to the "top"

import { HTMLRenderer } from "@/atomic-design/molecules/html-renderer";
import { Renderer } from "@/enums";
import React from "react";

export const Canvas: React.FC<{ renderer: Renderer }> = ({ renderer, children }) => {
	switch (renderer) {
		case Renderer.html:
			return <HTMLRenderer>{children}</HTMLRenderer>;
		case Renderer.svg:
		case Renderer.canvas:
		default:
			throw new Error(`Renderer ${renderer} is not implemented`);
	}
};

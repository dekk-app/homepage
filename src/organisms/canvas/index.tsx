import { Renderer } from "@/ions/enums";
import dynamic from "next/dynamic";
import React from "react";

const HTMLRenderer = dynamic<React.ComponentPropsWithRef<React.ElementType>>(async () =>
	import("@/molecules/html-renderer").then(mod => mod.HTMLRenderer)
);

const Canvas: React.FC<{ renderer: Renderer }> = ({ renderer, children }) => {
	switch (renderer) {
		case Renderer.html:
			return <HTMLRenderer>{children}</HTMLRenderer>;
		case Renderer.svg:
		case Renderer.canvas:
		default:
			throw new Error(`Renderer ${renderer} is not implemented`);
	}
};

export default Canvas;

import { Renderer } from "@/ions/enums";
import { CanvasProps } from "@/types";
import dynamic from "next/dynamic";
import React from "react";

const HTMLRenderer = dynamic<React.ComponentPropsWithRef<React.ElementType>>(async () =>
	import("@/molecules/html-renderer").then(mod => mod.HTMLRenderer)
);

const CanvasRenderer = dynamic<React.ComponentPropsWithRef<React.ElementType>>(
	async () => import("@/molecules/canvas-renderer")
);

const Canvas: React.FC<CanvasProps> = ({ renderer, children }) => {
	switch (renderer) {
		case Renderer.html:
			return <HTMLRenderer>{children}</HTMLRenderer>;
		case Renderer.canvas:
			return <CanvasRenderer>{children}</CanvasRenderer>;
		case Renderer.svg:
		default:
			throw new Error(`Renderer ${renderer} is not implemented`);
	}
};

const areEqual = () => {
	return true;
};

export default React.memo(Canvas, areEqual);

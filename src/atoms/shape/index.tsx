import { HTMLShape, SVGShape } from "@/atoms/shape/shapes";
import { Renderer, ShapeType } from "@/ions/enums";
import { useRenderContext } from "@/ions/hooks/context";
import React from "react";

const Shape: React.FC<{ shape: ShapeType }> = ({ shape }) => {
	const { renderer } = useRenderContext();
	switch (renderer) {
		case Renderer.html:
			return <HTMLShape shape={shape} />;
		case Renderer.svg:
			return <SVGShape shape={shape} />;
		case Renderer.canvas:
		default:
			throw new Error(`Renderer ${renderer} is not implemented`);
	}
};

export default Shape;

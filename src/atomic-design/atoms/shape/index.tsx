import { useRenderContext } from "@/hooks/render";
import { Renderer } from "@/enums";
import React from "react";

enum ShapeType {
	triangle = "triangle",
	rectangle = "rectangle",
	circle = "circle",
}

const shapePaths = {
	[ShapeType.triangle]: "",
	[ShapeType.rectangle]: "",
	[ShapeType.circle]: "",
};

export const SVGShape: React.FC<{ shape: ShapeType }> = ({ shape }) => {
	return (
		<g>
			<path d={shapePaths[shape]} />
		</g>
	);
};

export const HTMLShape: React.FC<{ shape: ShapeType }> = ({ shape }) => {
	return (
		<div>
			<svg>
				<path d={shapePaths[shape]} />
			</svg>
		</div>
	);
};

export const Shape: React.FC<{ shape: ShapeType }> = ({ shape }) => {
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

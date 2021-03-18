import { ShapeType } from "@/ions/constants";
import React from "react";

export const shapePaths = {
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

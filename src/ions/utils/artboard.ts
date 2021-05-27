import { ArtboardType } from "@/types";

export const findOuter = (artboards: ArtboardType[]) => {
	return artboards.reduce(
		(limits, artboard) => {
			return {
				x: Math.max(limits.x, artboard.x),
				y: limits.x < artboard.x ? artboard.y : limits.y,
			};
		},
		{ x: Number.NEGATIVE_INFINITY, y: Number.NEGATIVE_INFINITY }
	);
};

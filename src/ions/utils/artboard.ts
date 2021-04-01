import { ArtboardType } from "@/types";

export const findOuter = (artboards: ArtboardType[]) => {
	return artboards.reduce(
		(limits, artboard) => ({
			x: Math.max(limits.x, artboard.x),
			y: limits.x < artboard.x ? artboard.y : limits.y,
		}),
		{ x: 0, y: 0 }
	);
};

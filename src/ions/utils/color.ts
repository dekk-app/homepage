import { HexColor } from "@/types/units";

export const setOpacity = (hexColor: HexColor, opacity: number): HexColor =>
	`${hexColor}${Math.round((255 / 100) * opacity).toString(16)}`;

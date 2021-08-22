export type VWValue = `${number}vw`;

export type VHValue = `${number}vh`;

export type VMinValue = `${number}vmin`;

export type VMaxValue = `${number}vmax`;

export type EmValue = `${number}em`;

export type PxValue = `${number}px`;

export type RemValue = `${number}rem`;

export type SizeWithUnit = PxValue | RemValue | EmValue | VWValue | VHValue | VMinValue | VMaxValue;

export type SecondsValue = `${number}s`;

export type MilliSecondsValue = `${number}ms`;

export type TimeWithUnit = SecondsValue | MilliSecondsValue;

export type HexValue = `#${string | number}`;

export type RGBValue = `rgb(${number},${number},${number})`;

export type RGBAValue = `rgba(${number},${number},${number},${number})`;

export type HSLValue = `hsl(${number},${number}%,${number}%)`;

export type HSLAValue = `hsla(${number},${number}%,${number}%,${number})`;

export type CurrentColorValue = "currentColor";

export type NoneValue = "none";

export type TransparentValue = "transparent";

export type InheritValue = "inherit";

export type NameValue = "black" | "white";

export type ColorType =
	| "hex"
	| "rgb"
	| "rgba"
	| "hsl"
	| "hsla"
	| "none"
	| "currentColor"
	| "transparent"
	| "inherit";

export interface ColorValues {
	hex: HexValue;
	rgb: RGBValue;
	rgba: RGBAValue;
	hsl: HSLValue;
	hsla: HSLAValue;
	none: NoneValue;
	currentColor: CurrentColorValue;
	transparent: TransparentValue;
	inherit: InheritValue;
	name: NameValue;
}

export type ColorOfType<T> = T extends ColorType ? ColorValues[T] : never;

export type Color = ColorOfType<ColorType>;

export type NoneColor = ColorOfType<"none">;

export type CurrentColorColor = ColorOfType<"currentColor">;

export type TransparentColor = ColorOfType<"transparent">;

export type InheritColor = ColorOfType<"inherit">;

export type NameColor = ColorOfType<"name">;

export type HexColor = ColorOfType<"hex">;

export type RGBColor = ColorOfType<"rgb">;

export type RGBAColor = ColorOfType<"rgba">;

export type HSLColor = ColorOfType<"hsl">;

export type HSLAColor = ColorOfType<"hsla">;

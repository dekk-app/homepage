import { Color, HexValue, RemValue, TimeWithUnit } from "@/types/units";

export interface Palette {
	red: HexValue;
	green: HexValue;
	blue: HexValue;
	yellow: HexValue;
	highlight: HexValue;
	dark: HexValue;
	light: HexValue;
	brand: HexValue;
	brandDark: HexValue;
}

export type SpaceKey = "xxs" | "xs" | "s" | "m" | "l" | "xl" | "xxl";

export type SizeKey = "xs" | "s" | "m" | "l" | "xl";

export type ShapeKey = "xs" | "s" | "m" | "l" | "xl";

export type ShadowKey = "0" | "s" | "m" | "l";

export type SpeedKey = "fast" | "normal" | "slow" | "verySlow" | "extremelySlow";

export type Spaces = {
	[key in SpaceKey]: number;
};

export type Sizes = {
	[key in SizeKey]: number;
};

export type Shapes = {
	[key in ShapeKey]: RemValue;
};

export type Shadows = {
	[key in ShadowKey]: string;
};

export type Speeds = {
	[key in SpeedKey]: TimeWithUnit;
};

export interface GridConfig {
	gutter: Sizes;
	gridPadding: Sizes;
	maxWidth: number;
	colCount: Sizes;
}

export type MediaQueries = {
	[key in SizeKey]: `@media only screen and (min-width: ${RemValue})`;
};

export interface HeaderLayout {
	height: Sizes;
}

export interface Layout {
	header: HeaderLayout;
}

export interface ElementTheme {
	background?: Color;
	color?: Color;
	border?: string;
	error?: ElementTheme;
	focus?: ElementTheme;
	hover?: ElementTheme;
	active?: ElementTheme;
}

export interface Borders {
	focusRing: string;
}

export type Patterns = Record<string, ElementTheme>;

export type UIPatterns = Record<string, Patterns>;

export interface Theme {
	layout: Layout;
	palette: Palette;
	spaces: Spaces;
	shapes: Shapes;
	shadows: Shadows;
	speeds: Speeds;
	breakpoints: Sizes;
	borders: Borders;
	mq: MediaQueries;
	grid: GridConfig;
	ui: UIPatterns;
}

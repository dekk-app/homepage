export interface Palette {
	red: string;
	green: string;
	blue: string;
	yellow: string;
	dark: string;
	light: string;
	purple: string;
	darkPurple: string;
}

export type SpaceKey = "xxs" | "xs" | "s" | "m" | "l" | "xl" | "xxl";

export type SizeKey = "xs" | "s" | "m" | "l" | "xl";

export type ShapeKey = "xs" | "s" | "m" | "l" | "xl";

export type ShadowKey = "s" | "m" | "l";

export type SpeedKey = "fast" | "normal" | "slow" | "verySlow" | "extremelySlow";

export type Spaces = {
	[key in SpaceKey]: number;
};

export type Sizes = {
	[key in SizeKey]: number;
};

export type Shapes = {
	[key in ShapeKey]: string;
};

export type Shadows = {
	[key in ShadowKey]: string;
};

export type Speeds = {
	[key in SpeedKey]: string;
};

export interface GridConfig {
	gutter: Sizes;
	gridPadding: Sizes;
	maxWidth: number;
	colSpan: Sizes;
	debug?: boolean;
}

export type MediaQueries = {
	[key in SizeKey]: string;
};

export interface HeaderLayout {
	height: Sizes;
}

export interface Layout {
	header: HeaderLayout;
}

export interface ElementTheme {
	background?: string;
	color?: string;
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

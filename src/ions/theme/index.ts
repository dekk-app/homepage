import { setOpacity } from "@/ions/utils/color";
import { pxToRem } from "@/ions/utils/unit";
import {
	Borders,
	GridConfig,
	Layout,
	MediaQueries,
	Palette,
	Shadows,
	Shapes,
	Sizes,
	Spaces,
	Speeds,
	Theme,
	UIPatterns,
} from "@/types/theme";

export const palette: Palette = {
	red: "#D90303",
	green: "#2EFFB0",
	blue: "#2E93FF",
	yellow: "#FFD22E",
	highlight: "#FFA07A",
	dark: "#232424",
	light: "#F8F9FD",
	purple: "#6A28EA",
	darkPurple: "#4F13C2",
};

export const spaces: Spaces = {
	xxs: 4,
	xs: 8,
	s: 16,
	m: 24,
	l: 32,
	xl: 48,
	xxl: 64,
};

export const gutter: Sizes = {
	xs: spaces.s,
	s: spaces.s,
	m: spaces.m,
	l: spaces.m,
	xl: spaces.m,
};

export const gridPadding: Sizes = {
	xs: spaces.s,
	s: spaces.m,
	m: spaces.l,
	l: spaces.l,
	xl: spaces.l,
};

export const columnBaseWidth = 80;

export const breakpoints: Sizes = {
	xs: 0,
	s: columnBaseWidth * 4, // 320
	m: columnBaseWidth * 9.5, // 760
	l: columnBaseWidth * 13.5, // 1_080
	xl: columnBaseWidth * 16, // 1_280
};

export const colCount: Sizes = {
	xs: 2,
	s: 4,
	m: 8,
	l: 12,
	xl: 12,
};

export const getMediaQueries = (b: Sizes) =>
	Object.fromEntries(
		Object.entries(b).map(([key, value]: [string, number]) => [
			key,
			`@media only screen and (min-width: ${pxToRem(value)})`,
		])
	) as MediaQueries;

export const mq: MediaQueries = getMediaQueries(breakpoints);

export const grid: GridConfig = {
	gutter,
	gridPadding,
	maxWidth: breakpoints.xl,
	colCount,
};

export const layout: Layout = {
	header: {
		height: {
			xs: 64,
			s: 64,
			m: 64,
			l: 96,
			xl: 96,
		},
	},
};

export const borders: Borders = {
	focusRing: "2px",
};

export const shapes: Shapes = {
	xs: pxToRem(4),
	s: pxToRem(4),
	m: pxToRem(8),
	l: pxToRem(12),
	xl: pxToRem(16),
};

export const speeds: Speeds = {
	fast: "0.125s",
	normal: "0.25s",
	slow: "0.375s",
	verySlow: "0.75s",
	extremelySlow: "1.5s",
};

export const shadows: Shadows = {
	s: `0 ${pxToRem(1)} ${pxToRem(2)} rgba(0,0,0,0.1), 0 ${pxToRem(3)} ${pxToRem(
		5
	)} rgba(0,0,0,0.2)`,
	m: `0 ${pxToRem(3)} ${pxToRem(4)} rgba(0,0,0,0.1), 0 ${pxToRem(7)} ${pxToRem(
		10
	)} rgba(0,0,0,0.2)`,
	l: `0 ${pxToRem(5)} ${pxToRem(7)} rgba(0,0,0,0.1), 0 ${pxToRem(10)} ${pxToRem(
		15
	)} rgba(0,0,0,0.3)`,
};

export const ui: UIPatterns = {
	colors: {
		primary: {
			background: palette.purple,
			color: "#ffffff",
		},
		light: {
			background: palette.light,
			color: "#000000",
		},
		dark: {
			background: palette.dark,
			color: "#ffffff",
		},
		theme: {
			background: palette.dark,
			color: "#ffffff",
		},
		focusRing: {
			background: setOpacity(palette.purple, 20),
			border: palette.highlight,
		},
	},
	atoms: {
		inputLabel: {
			color: "#ffffff",
			focus: {
				color: "#ffffff",
			},
		},
		helpText: {
			background: "none",
			color: "currentColor",
		},
		errorText: {
			background: palette.red,
			color: "#ffffff",
		},
		button: {
			background: "none",
			color: "currentColor",
			hover: {
				background: setOpacity(palette.purple, 20),
			},
			focus: {
				background: setOpacity(palette.purple, 30),
			},
			active: {
				background: setOpacity(palette.purple, 40),
			},
		},
	},
	molecules: {
		inputField: {
			background: "rgba(0, 0, 0, 0.1)",
			color: "currentColor",
			focus: {
				border: palette.highlight,
				color: "currentColor",
				background: "rgba(0, 0, 0, 0.1)",
			},
			error: {
				border: palette.red,
				color: palette.red,
			},
		},
	},
};
export const theme: Theme = {
	borders,
	breakpoints,
	grid,
	layout,
	mq,
	palette,
	shapes,
	spaces,
	shadows,
	speeds,
	ui,
};

import { pxToRem } from "@/ions/utils/unit";
import { GridConfig, Layout, MediaQueries, Palette, Sizes, Spaces, Theme } from "../../types/theme";

export const palette: Palette = {
	red: "#D90303",
	green: "#2EFFB0",
	dark: "#1B1E2B",
	light: "#F8F9FD",
	purple: "#6A28EA",
	lightPurple: "#AD89F5",
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
	xs: 8,
	s: 8,
	m: 8,
	l: 12,
	xl: 12,
};

export const gridPadding: Sizes = {
	xs: 8,
	s: 16,
	m: 24,
	l: 24,
	xl: 24,
};

export const columnBaseWidth = 80;

export const breakpoints: Sizes = {
	xs: 0,
	s: columnBaseWidth * 4, // 320
	m: columnBaseWidth * 9, // 720
	l: columnBaseWidth * 16, // 1_280
	xl: columnBaseWidth * 16, // 1_280
};

export const getMediaQueries = (b: Sizes) =>
	Object.entries(b).reduce(
		(previousValue, [key, value]: [string, number]) => ({
			...previousValue,
			[key]: `(min-width: ${pxToRem(value)})`,
		}),
		{}
	) as MediaQueries;

export const mq: MediaQueries = getMediaQueries(breakpoints);

export const grid: GridConfig = {
	gutter,
	gridPadding,
	maxWidth: breakpoints.l - (gridPadding.l + gutter.l) * 2,
	colSpan: {
		xs: 2,
		s: 4,
		m: 8,
		l: 12,
		xl: 12,
	},
};

export const layout: Layout = {
	header: {
		height: {
			xs: 32,
			s: 64,
			m: 64,
			l: 96,
			xl: 96,
		},
	},
};

export const theme: Theme = {
	layout,
	palette,
	spaces,
	breakpoints,
	mq,
	grid,
	ui: {
		colors: {
			primary: {
				background: "#6a28ea",
				color: "#ffffff",
			},
			light: {
				background: "#F8F9FD",
				color: "#000000",
			},
			dark: {
				background: "#232424",
				color: "#ffffff",
			},
			theme: {
				background: "#232424",
				color: "#ffffff",
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
				background: "#F8F9FD",
				color: "#000000",
			},
		},
		molecules: {
			inputField: {
				background: "rgba(255,255,255,0.1)",
				color: "#ffffff",
				focus: {
					border: palette.green,
					color: "#fff",
					background: "rgba(255,255,255,0.1)",
				},
				error: {
					background: "#F8F9FD",
					border: palette.red,
					color: palette.red,
				},
			},
		},
	},
};

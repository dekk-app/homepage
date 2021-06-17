import { pxToRem } from "@/ions/utils/unit";
import { GridConfig, Layout, MediaQueries, Palette, Sizes, Spaces, Theme } from "../../types/theme";

export const palette: Palette = {
	red: "rgb(217,3,3)",
	green: "rgb(46,255,176)",
	dark: "rgb(27,30,43)",
	light: "rgb(248,249,253)",
	purple: "rgb(106,40,234)",
	darkPurple: "rgb(79,19,194)",
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
				background: "#ffffff",
				color: "#000000",
			},
			dark: {
				background: "#232424",
				color: "#ffffff",
			},
		},
	},
};

export const lightTheme = {
	...theme,
	ui: {
		...theme.ui,
		colors: {
			...theme.ui.colors,
			theme: {
				background: "#ffffff",
				color: "#000000",
			},
		},
		atoms: {
			inputLabel: {
				color: "#000000",
				focus: {
					color: "#2a2a2a",
				},
			},
		},
		molecules: {
			inputField: {
				background: "#ffffff",
				color: "#000000",
				focus: {
					border: palette.purple,
				},
				error: {
					border: palette.red,
					color: palette.red,
				},
			},
		},
	},
};

export const darkTheme = {
	...theme,
	ui: {
		...theme.ui,
		colors: {
			...theme.ui.colors,
			theme: {
				background: "#232424",
				color: "#ffffff",
			},
		},
		atoms: {
			inputLabel: {
				color: "#000000",
				focus: {
					color: "#2a2a2a",
				},
			},
		},
		molecules: {
			inputField: {
				background: "#ffffff",
				color: "#000000",
				focus: {
					border: palette.purple,
				},
				error: {
					border: palette.red,
					color: palette.red,
				},
			},
		},
	},
};

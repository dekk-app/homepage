import { pxToRem } from "@/ions/utils/unit";
import { GridConfig, Layout, MediaQueries, Palette, Sizes, Spaces, Theme } from "../../types/theme";

const palette: Palette = {
	red: "hsl(0,50%,50%)",
	green: "hsl(120,50%,50%)",
	blue: "hsl(210,50%,50%)",
	black: "hsl(0,0%,0%)",
	white: "hsl(0,0%,100%)",
	grey: "hsl(0,0%,50%)",
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

const gutter: Sizes = {
	xs: 8,
	s: 8,
	m: 8,
	l: 12,
	xl: 12,
};

const gridPadding: Sizes = {
	xs: 8,
	s: 16,
	m: 24,
	l: 24,
	xl: 24,
};

const padding: Sizes = {
	xs: 0,
	s: 0,
	m: 0,
	l: 0,
	xl: 0,
};

const columnBaseWidth = 80;

export const breakpoints: Sizes = {
	xs: 0,
	s: columnBaseWidth * 4,
	m: columnBaseWidth * 9,
	l: columnBaseWidth * 16,
	xl: columnBaseWidth * 16,
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
	padding,
	stageLimit: breakpoints.xl + breakpoints.s,
	maxWidth: breakpoints.xl - (gridPadding.l + gutter.l) * 2,
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
			artboard: {
				background: "#ffffff",
				color: "#000000",
				border: "#e1e4ea",
			},
		},
		organisms: {
			inputField: {
				background: "#ffffff",
				color: "#000000",
				focus: {
					border: "#6a28ea",
				},
				error: {
					border: "#D90303",
					color: "#D90303",
				},
			},
		},
		layout: {
			sidebar: {
				background: "#ffffff",
				border: "#eeeeee",
				color: "#000000",
			},
			header: {
				background: "#ffffff",
				border: "#eeeeee",
				color: "#000000",
			},
			main: {
				background: "#f7f7f8",
				color: "#000000",
			},
			dropdown: {
				background: "#ffffff",
				border: "#eeeeee",
				color: "#000000",
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
			artboard: {
				background: "#ffffff",
				color: "#000000",
				border: "#e1e4ea",
			},
		},
		organisms: {
			inputField: {
				background: "#ffffff",
				color: "#000000",
				focus: {
					border: "#6a28ea",
				},
				error: {
					border: "#D90303",
					color: "#D90303",
				},
			},
		},
		layout: {
			sidebar: {
				background: "#232424",
				border: "#2a2a2a",
				color: "#ffffff",
			},
			header: {
				background: "#232424",
				border: "#2a2a2a",
				color: "#ffffff",
			},
			main: {
				background: "#1d1d1d",
				color: "#ffffff",
			},
			dropdown: {
				background: "#171717",
				border: "#2a2a2a",
				color: "#ffffff",
			},
		},
	},
};

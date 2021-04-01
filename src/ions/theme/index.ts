import createMuiTheme from "@material-ui/core/styles/createMuiTheme";
import responsiveFontSizes from "@material-ui/core/styles/responsiveFontSizes";
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

export const breakpoints: Sizes = {
	xs: 0,
	s: 320,
	m: 640,
	l: 960,
	xl: 1280,
};

export const getMediaQueries = (b: Sizes) =>
	Object.entries(b).reduce(
		(previousValue, [key, value]: [string, number]) => ({
			...previousValue,
			[key]: `(min-width: ${value}px)`,
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
			},
		},
		molecules: {
			artboard: {
				background: "#ffffff",
				color: "#000000",
				border: "#e1e4ea",
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
			},
		},
		molecules: {
			artboard: {
				background: "#ffffff",
				color: "#000000",
				border: "#e1e4ea",
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

const muiBreakpoints = {
	values: {
		xs: breakpoints.xs,
		sm: breakpoints.s,
		md: breakpoints.m,
		lg: breakpoints.l,
		xl: breakpoints.xl,
	},
};

export const muiLight = responsiveFontSizes(
	createMuiTheme({
		palette: {
			type: "light",
		},
		breakpoints: muiBreakpoints,
	})
);

export const muiDark = responsiveFontSizes(
	createMuiTheme({
		palette: {
			type: "dark",
		},
		breakpoints: muiBreakpoints,
	})
);

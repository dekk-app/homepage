import { cache } from "@/ions/services/emotion/cache";
import { darkTheme, lightTheme } from "@/ions/theme";
// Import { pxToRem } from "@/ions/utils/unit";
import { CacheProvider, css, Global, ThemeProvider as EmotionThemeProvider } from "@emotion/react";
// Import styled from "@emotion/styled";
// import { Fab } from "@material-ui/core";
// import { StylesProvider, ThemeProvider as MaterialThemeProvider } from "@material-ui/styles";
import { Provider as NextAuthProvider } from "next-auth/client";
import { appWithTranslation } from "next-i18next";
import Head from "next/head";
import React from "react";
import useDarkMode from "use-dark-mode";
import pkg from "../../package.json";

export const fontFaces = css`
	body {
		font-family: poppins, sans-serif;
	}
`;

export const debugging = css`
	:root {
		--debug-color: hsla(180, 100%, 50%, 0.3);
		--debug-stroke: 1px;
	}
`;

// Export const StyledFab = styled(Fab)`
//	position: fixed;
//	z-index: 10;
//	right: ${pxToRem(16)};
//	bottom: ${pxToRem(16)};
//	background: white;
//	color: black;
// `;

const App = ({ Component, pageProps }) => {
	const { value: darkMode } = useDarkMode();
	const [theme, setTheme] = React.useState(lightTheme);
	// Const [muiTheme, setMuiTheme] = React.useState(muiLight);

	React.useEffect(() => {
		setTheme(darkMode ? darkTheme : lightTheme);
		// SetMuiTheme(darkMode ? muiDark : muiLight);
	}, [darkMode]);

	return (
		<CacheProvider value={cache}>
			<Global styles={fontFaces} />
			<Head>
				<title>Dekk</title>
				<link rel="preconnect" href="https://fonts.gstatic.com" />
				<meta charSet="utf-8" />
				<meta name="viewport" content="initial-scale=1.0, width=device-width" />
				<meta name="version" content={pkg.version} />
				<meta name="application-name" content="Dekk" />
				<meta name="apple-mobile-web-app-capable" content="yes" />
				<meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
				<meta name="apple-mobile-web-app-title" content="Dekk" />
				<meta name="format-detection" content="telephone=no" />
				<meta name="mobile-web-app-capable" content="yes" />
				<meta name="msapplication-TileColor" content={theme.ui.colors.theme.background} />
				<meta name="msapplication-tap-highlight" content="no" />
				<meta name="theme-color" content={theme.ui.colors.theme.background} />
				<link
					rel="apple-touch-icon"
					sizes="180x180"
					href={`/icons/apple-touch-icon.png?${pkg.version}`}
				/>
				<link
					rel="icon"
					type="image/png"
					sizes="32x32"
					href={`/icons/icon-32x32.png?${pkg.version}`}
				/>
				<link
					rel="icon"
					type="image/png"
					sizes="16x16"
					href={`/icons/icon-16x16.png?${pkg.version}`}
				/>
				<link rel="manifest" href="/manifest.json" />
				<link rel="shortcut icon" href={`favicon.ico?${pkg.version}`} />
			</Head>
			<NextAuthProvider session={pageProps.session}>
				<EmotionThemeProvider theme={theme}>
					<Component {...pageProps} />
					<link
						href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700&display=swap"
						rel="stylesheet"
					/>
				</EmotionThemeProvider>
			</NextAuthProvider>
		</CacheProvider>
	);
};

export default appWithTranslation(App);

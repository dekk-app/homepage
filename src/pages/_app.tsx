import { useApollo } from "@/ions/services/apollo/client";
import { cache } from "@/ions/services/emotion/cache";
import { muiLight, theme } from "@/ions/theme";
import { ApolloProvider } from "@apollo/client";
import { CacheProvider, ThemeProvider } from "@emotion/react";
import { ThemeProvider as MaterialThemeProvider } from "@material-ui/styles";
import { appWithTranslation } from "next-i18next";
import Head from "next/head";
import React from "react";
import pkg from "../../package.json";

const App = ({ Component, pageProps }) => {
	const apolloClient = useApollo(pageProps.initialApolloState);
	return (
		<CacheProvider value={cache}>
			<Head>
				<title>Dekk</title>
				<meta charSet="utf-8" />
				<meta name="viewport" content="initial-scale=1.0, width=device-width" />
				<meta name="version" content={pkg.version} />
				<meta name="application-name" content="Dekk" />
				<meta name="apple-mobile-web-app-capable" content="yes" />
				<meta name="apple-mobile-web-app-status-bar-style" content="default" />
				<meta name="apple-mobile-web-app-title" content="Dekk" />
				<meta name="format-detection" content="telephone=no" />
				<meta name="mobile-web-app-capable" content="yes" />
				<meta name="msapplication-TileColor" content="#2B5797" />
				<meta name="msapplication-tap-highlight" content="no" />
				<meta name="theme-color" content="#000000" />

				<link rel="apple-touch-icon" sizes="180x180" href="/icons/apple-touch-icon.png" />
				<link rel="icon" type="image/png" sizes="32x32" href="/icons/icon-32x32.png" />
				<link rel="icon" type="image/png" sizes="16x16" href="/icons/icon-16x16.png" />
				<link rel="manifest" href="/manifest.json" />
				<link rel="shortcut icon" href="/favicon.ico" />
			</Head>
			<ApolloProvider client={apolloClient}>
				<ThemeProvider theme={theme}>
					<MaterialThemeProvider theme={muiLight}>
						<Component {...pageProps} />
					</MaterialThemeProvider>
				</ThemeProvider>
			</ApolloProvider>
		</CacheProvider>
	);
};

export default appWithTranslation(App);

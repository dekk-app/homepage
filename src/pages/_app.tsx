import { useApollo } from "@/services/apollo/client";
import { cache } from "@/services/emotion/cache";
import { muiLight, theme } from "@/theme";
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
				<meta charSet="utf-8" />
				<meta name="viewport" content="initial-scale=1.0, width=device-width" />
				<meta name="version" content={pkg.version} />
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

import { useApollo } from "@/services/apollo/client";
import { cache } from "@/services/emotion/cache";
import { muiLight, theme } from "@/theme";
import { ApolloProvider } from "@apollo/client";
import { CacheProvider, ThemeProvider } from "@emotion/react";
import { ThemeProvider as MaterialThemeProvider } from "@material-ui/styles";
import Head from "next/head";
import React from "react";
import pkg from "../../package.json";

const App = ({ Component, pageProps, err }) => {
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
						{/* Workaround for https://github.com/vercel/next.js/issues/8592 */}
						<Component {...pageProps} err={err} />
					</MaterialThemeProvider>
				</ThemeProvider>
			</ApolloProvider>
		</CacheProvider>
	);
};

export default App;

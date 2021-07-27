import "@/ions/fonts/poppins.css";
import { ConsentProvider } from "@/ions/hooks/consent/context";
import routes from "@/ions/routes";
import { useApollo } from "@/ions/services/apollo/client";
import { cache } from "@/ions/services/emotion/cache";
import { theme } from "@/ions/theme";
import { PageProps } from "@/types";
import { ApolloProvider } from "@apollo/client";
import {
	CacheProvider as EmotionCacheProvider,
	css,
	Global,
	ThemeProvider as EmotionThemeProvider,
} from "@emotion/react";
import { Provider as NextAuthProvider } from "next-auth/client";
import { appWithTranslation } from "next-i18next";
import { AppProps } from "next/app";
import Head from "next/head";
import { useRouter } from "next/router";
import React from "react";
import pkg from "../../package.json";

export const fontFaces = css`
	body {
		font-family: "Poppins", sans-serif;
	}
`;

export const debugging = css`
	:root {
		--debug-color: hsla(180, 100%, 50%, 0.3);
		--debug-stroke: 1px;
	}
`;

const App = ({ Component, pageProps }: AppProps<PageProps>) => {
	const apolloClient = useApollo(pageProps as PageProps);
	const { locales, defaultLocale, route } = useRouter();
	return (
		<>
			<Global styles={fontFaces} />
			<Head>
				<title>Dekk</title>
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
				<link rel="shortcut icon" href={`/favicon.ico?${pkg.version}`} />
				<link rel="canonical" href={`https://dekk.app${route === "/" ? "" : route}`} />
				{locales.map(localeCode => {
					if (!routes[route as keyof typeof routes]) {
						return null;
					}

					const href =
						localeCode === defaultLocale
							? `https://dekk.app${route}`
							: `https://dekk.app/${localeCode}${
									routes[route as keyof typeof routes][localeCode] as string
							  }`;
					const hrefRoot =
						localeCode === defaultLocale
							? `https://dekk.app`
							: `https://dekk.app/${localeCode}`;
					return (
						<link
							key={localeCode}
							rel="alternate"
							hrefLang={localeCode}
							href={route === "/" ? hrefRoot : href}
						/>
					);
				})}
			</Head>
			<ConsentProvider consent={(pageProps as PageProps).consent ?? null}>
				<NextAuthProvider session={(pageProps as PageProps).session}>
					<ApolloProvider client={apolloClient}>
						<EmotionCacheProvider value={cache}>
							<EmotionThemeProvider theme={theme}>
								<Component {...pageProps} />
							</EmotionThemeProvider>
						</EmotionCacheProvider>
					</ApolloProvider>
				</NextAuthProvider>
			</ConsentProvider>
		</>
	);
};

export default appWithTranslation(App);

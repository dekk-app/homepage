import RouteLoader from "@/atoms/route-loader";
import { CookieConsentProvider } from "@/ions/contexts/cookie-consent";
import { CookieConsentModalProvider } from "@/ions/contexts/cookie-consent-modal";
import { ProvidersProvider } from "@/ions/contexts/providers";
import { ScrollBarWidthProvider } from "@/ions/contexts/scrollbar-width";
import { fontFace } from "@/ions/fonts/styles";
import routes, { Route } from "@/ions/routes";
import { useApollo } from "@/ions/services/apollo/client";
import { cache } from "@/ions/services/emotion/cache";
import { fontFaces } from "@/ions/styles/font-faces";
import { theme } from "@/ions/theme";
import { PageProps } from "@/types";
import { ApolloProvider } from "@apollo/client";
import {
	CacheProvider as EmotionCacheProvider,
	Global,
	ThemeProvider as EmotionThemeProvider,
} from "@emotion/react";
import pkg from "@pkg";
import { NextPage } from "next";
import { Provider as NextAuthProvider } from "next-auth/client";
import { appWithTranslation } from "next-i18next";
import { AppProps } from "next/app";
import Head from "next/head";
import { Router, useRouter } from "next/router";
import React, { useEffect, useState } from "react";

interface MyAppProps extends AppProps<PageProps> {
	pageProps: PageProps;
}

const App: NextPage<AppProps> = ({ Component, pageProps }: MyAppProps) => {
	const apolloClient = useApollo(pageProps);
	const { locales, defaultLocale, route } = useRouter();
	const [loading, setLoading] = useState(false);
	const [loaded, setLoaded] = useState(false);
	useEffect(() => {
		let timer: number;
		const start = () => {
			setLoaded(false);
			setLoading(true);
		};

		const end = () => {
			setLoading(false);
			setLoaded(true);

			timer = window.setTimeout(() => {
				setLoaded(false);
				setLoading(false);
			}, 250);
		};

		Router.events.on("routeChangeStart", start);
		Router.events.on("routeChangeComplete", end);

		const unsubscribe = () => {
			Router.events.off("routeChangeStart", start);
			Router.events.off("routeChangeComplete", end);
			window.clearTimeout(timer);
			setLoaded(false);
			setLoading(false);
		};

		return unsubscribe;
	}, []);
	return (
		<>
			<Global key="fontFace" styles={fontFace} />
			<Global key="fontFaces" styles={fontFaces} />
			<Head>
				<title key="title">Dekk</title>
				<meta charSet="utf-8" />
				<meta name="viewport" content="initial-scale=1.0, width=device-width" />
				<meta name="version" content={pkg.version} />
				<meta name="format-detection" content="telephone=no" />
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
					if (!routes[route as Route]) {
						return (
							<link
								key={localeCode}
								rel="alternate"
								hrefLang={localeCode === defaultLocale ? "x-default" : localeCode}
								href={
									localeCode === defaultLocale
										? `https://dekk.app${route}`
										: `https://dekk.app/${localeCode}${route}`
								}
							/>
						);
					}

					const href =
						localeCode === defaultLocale
							? `https://dekk.app${route}`
							: `https://dekk.app/${localeCode}${
									routes[route as Route][localeCode] as string
							  }`;
					const hrefRoot =
						localeCode === defaultLocale
							? `https://dekk.app`
							: `https://dekk.app/${localeCode}`;
					return (
						<link
							key={localeCode}
							rel="alternate"
							hrefLang={localeCode === defaultLocale ? "x-default" : localeCode}
							href={route === "/" ? hrefRoot : href}
						/>
					);
				})}
				<meta property="og:url" content={`https://dekk.app${route === "/" ? "" : route}`} />
				<meta property="og:site_name" content="Dekk" />
			</Head>
			<CookieConsentProvider consent={pageProps.consent}>
				<NextAuthProvider session={pageProps.session}>
					<ProvidersProvider providers={pageProps.providers}>
						<ApolloProvider client={apolloClient}>
							<EmotionCacheProvider value={cache}>
								<EmotionThemeProvider theme={theme}>
									<ScrollBarWidthProvider>
										<CookieConsentModalProvider>
											<RouteLoader loading={loading} loaded={loaded} />
											<Component {...pageProps} />
										</CookieConsentModalProvider>
									</ScrollBarWidthProvider>
								</EmotionThemeProvider>
							</EmotionCacheProvider>
						</ApolloProvider>
					</ProvidersProvider>
				</NextAuthProvider>
			</CookieConsentProvider>
		</>
	);
};

export default appWithTranslation(App);

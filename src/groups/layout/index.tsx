import { GlobalTypography } from "@/atoms/typography/global";
import { BreadcrumbsProvider } from "@/ions/contexts/breadcrumbs/context";
import { useCookieConsentModal } from "@/ions/contexts/cookie-consent-modal";
import { globalStyles } from "@/ions/styles";
import Footer from "@/organisms/footer";
import Header from "@/organisms/header";
import Main from "@/organisms/main";
import { css, Global, useTheme } from "@emotion/react";
import dynamic from "next/dynamic";
import Head from "next/head";
import process from "process";
import React, { FC, useMemo } from "react";
import { LayoutProps } from "./types";

const OverlayGrid = dynamic(async () => import("@/organisms/grid-overlay"));
const CookieBanner = dynamic(async () => import("@/organisms/cookie-banner"));

const Layout: FC<LayoutProps> = ({
	className,
	children,
	title,
	description,
	keywords,
	robots,
	dark,
	image,
	breadcrumbs: rawBreadcrumbs,
}) => {
	const theme = useTheme();
	const breadcrumbs = useMemo(() => rawBreadcrumbs || [], [rawBreadcrumbs]);
	const { isOpen: isCookieModalOpen } = useCookieConsentModal();

	return (
		<>
			<Global key="globalStyles" styles={globalStyles} />
			<GlobalTypography />
			{dark ? (
				<Global
					key="layout-theme"
					styles={css`
						body {
							background-color: ${theme.ui.colors.dark.background};
							color: ${theme.ui.colors.dark.color};
						}
					`}
				/>
			) : (
				<Global
					key="layout-theme"
					styles={css`
						body {
							background-color: ${theme.ui.colors.light.background};
							color: ${theme.ui.colors.light.color};
						}
					`}
				/>
			)}
			<Head>
				<title key="title">Dekk | {title}</title>
				{description && <meta key="description" name="description" content={description} />}
				{keywords && <meta key="keywords" name="keywords" content={keywords} />}
				{robots && <meta key="robots" name="robots" content={robots} />}
				<meta property="og:title" content={`Dekk | ${title}`} />
				{description && <meta property="og:description" content={description} />}
				{image && <meta property="og:image" content={image} />}
				<meta itemProp="name" content={`Dekk | ${title}`} />
				{description && <meta itemProp="description" content={description} />}
				{image && <meta itemProp="image" content={image} />}
			</Head>
			{isCookieModalOpen && <CookieBanner />}
			<Header dark={dark} />
			<BreadcrumbsProvider breadcrumbs={breadcrumbs}>
				<Main className={className}>{children}</Main>
			</BreadcrumbsProvider>
			<Footer dark={dark} />
			{process.env.NODE_ENV !== "production" && <OverlayGrid />}
		</>
	);
};

export default Layout;

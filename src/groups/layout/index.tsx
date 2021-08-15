import { GlobalTypography } from "@/atoms/typography/global";
import { BreadcrumbsProvider } from "@/ions/contexts/breadcrumbs/context";
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

const Layout: FC<LayoutProps> = ({
	className,
	children,
	title,
	description,
	keywords,
	robots,
	dark,
	breadcrumbs: rawBreadcrumbs,
}) => {
	const theme = useTheme();
	const breadcrumbs = useMemo(() => rawBreadcrumbs || [], [rawBreadcrumbs]);
	return (
		<>
			<Global styles={globalStyles} />
			<GlobalTypography />
			{dark ? (
				<Global
					key="dark"
					styles={css`
						body {
							background-color: ${theme.ui.colors.dark.background};
							color: ${theme.ui.colors.dark.color};
						}
					`}
				/>
			) : (
				<Global
					key="light"
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
			</Head>
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

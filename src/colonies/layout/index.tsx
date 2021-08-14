import process from "process";
import { GlobalTypography } from "@/atoms/typography/global";
import { LayoutProps } from "@/colonies/layout/types";
import { globalStyles } from "@/ions/styles";
import Footer from "@/organisms/footer";
import Header from "@/organisms/header";
import Main from "@/organisms/main";
import { css, Global, useTheme } from "@emotion/react";
import dynamic from "next/dynamic";
import Head from "next/head";
import React, { FC } from "react";

const OverlayGrid = dynamic(async () => import("@/organisms/grid-overlay"));

const Layout: FC<LayoutProps> = ({ className, children, title, description, dark }) => {
	const theme = useTheme();
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
			</Head>
			<Header />
			<Main className={className}>{children}</Main>
			<Footer dark={dark} />
			{process.env.NODE_ENV !== "production" && <OverlayGrid />}
		</>
	);
};

export default Layout;

import { GlobalTypography } from "@/atoms/typography/global";
import { globalStyles } from "@/ions/styles";
import Footer from "@/organisms/footer";
import Header from "@/organisms/header";
import Main from "@/organisms/main";
import { Global } from "@emotion/react";
import dynamic from "next/dynamic";
import Head from "next/head";
import React, { FC } from "react";

const OverlayGrid = dynamic(async () => import("@/organisms/grid-overlay"));

export interface LayoutProps {
	className?: string;
	title: string;
	description?: string;
}

const Layout: FC<LayoutProps> = ({ className, children, title, description }) => {
	return (
		<>
			<Global styles={globalStyles} />
			<GlobalTypography />
			<Head>
				<title>Dekk | {title}</title>
				{description && <meta name="description" content={description} />}
			</Head>
			<Header />
			<Main className={className}>{children}</Main>
			<Footer />
			{process.env.NODE_ENV !== "production" && <OverlayGrid />}
		</>
	);
};

export default Layout;

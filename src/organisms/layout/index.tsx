import { globalStyles, poppins } from "@/ions/styles";
import Footer from "@/organisms/footer";
import Main from "@/organisms/main";
import { Global } from "@emotion/react";
import dynamic from "next/dynamic";
import Head from "next/head";
import React, { FC } from "react";

const OverlayGrid = dynamic(async () => import("@/organisms/grid-overlay"));

export interface LayoutProps {
	className?: string;
}

const Layout: FC<LayoutProps> = ({ className, children }) => {
	return (
		<>
			<Global styles={poppins} />
			<Global styles={globalStyles} />
			<Head>
				<meta
					name="description"
					content="Dekk reimagines presentations. Create and present by intuition. Make a difference, make a Dekk."
				/>
			</Head>
			<Main className={className}>{children}</Main>
			<Footer />
			{process.env.NODE_ENV !== "production" && <OverlayGrid />}
		</>
	);
};

export default Layout;

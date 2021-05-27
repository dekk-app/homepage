import { globalStyles, poppins } from "@/ions/styles";
import { OverlayGrid } from "@/templates/home/components";
import { Global } from "@emotion/react";
import dynamic from "next/dynamic";
import React, { FC, memo } from "react";

const Header = dynamic(async () => import("@/organisms/header"));
const Main = dynamic(async () => import("@/organisms/main"));
const Head = dynamic(async () => import("next/head"));

export interface LayoutProps {
	header?: React.ComponentType<unknown>;
}

const Layout: FC<LayoutProps> = ({ header: HeaderComponent, children }) => {
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
			{HeaderComponent && (
				<Header>
					<HeaderComponent />
				</Header>
			)}
			<Main>{children}</Main>
			<OverlayGrid />
		</>
	);
};

export default memo(Layout);

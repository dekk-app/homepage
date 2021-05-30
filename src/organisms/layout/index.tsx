import { globalStyles, poppins } from "@/ions/styles";
import { OverlayGrid } from "@/templates/home/components";
import { Global } from "@emotion/react";
import dynamic from "next/dynamic";
import React, { FC, memo } from "react";

const Main = dynamic(async () => import("@/organisms/main"));
const Head = dynamic(async () => import("next/head"));

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
			{process.env.NODE_ENV !== "production" && <OverlayGrid />}
		</>
	);
};

export default memo(Layout);

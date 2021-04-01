import dynamic from "next/dynamic";
import React from "react";

const Header = dynamic(async () => import("@/organisms/header"));
const Main = dynamic(async () => import("@/organisms/main"));
const Sidebar = dynamic(async () => import("@/organisms/sidebar"));
const Head = dynamic(async () => import("next/head"));

export interface LayoutProps {
	header?: React.ForwardRefExoticComponent<unknown>;
	sidebarLeft?: React.ForwardRefExoticComponent<unknown>;
	sidebarRight?: React.ForwardRefExoticComponent<unknown>;
}
const Layout: React.FC<LayoutProps> = ({
	header: HeaderComponent,
	sidebarLeft: SidebarLeft,
	sidebarRight: SidebarRight,
	children,
}) => {
	return (
		<>
			<Head>
				<meta
					name="description"
					content="Dekk reimagines presentations. Create and present by intuition. Make a difference, make a Dekk."
				/>
			</Head>
			<Header>{HeaderComponent && <HeaderComponent />}</Header>
			<Sidebar anchor="left">{SidebarLeft && <SidebarLeft />}</Sidebar>
			<Main>{children}</Main>
			<Sidebar anchor="right">{SidebarRight && <SidebarRight />}</Sidebar>
		</>
	);
};

export default Layout;

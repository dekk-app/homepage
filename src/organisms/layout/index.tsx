import dynamic from "next/dynamic";
import React from "react";

const Header = dynamic(async () => import("@/organisms/header"));
const Main = dynamic(async () => import("@/organisms/main"));
const Sidebar = dynamic(async () => import("@/organisms/sidebar"));
const Head = dynamic(async () => import("next/head"));

export interface LayoutProps {
	header?: React.ComponentType<unknown>;
	sidebarLeft?: React.ComponentType<unknown>;
	sidebarRight?: React.ComponentType<unknown>;
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
			{HeaderComponent && (
				<Header>
					<HeaderComponent />
				</Header>
			)}
			{SidebarLeft && (
				<Sidebar anchor="left">
					<SidebarLeft />
				</Sidebar>
			)}
			<Main>{children}</Main>
			{SidebarRight && (
				<Sidebar anchor="right">
					<SidebarRight />
				</Sidebar>
			)}
		</>
	);
};

export default Layout;

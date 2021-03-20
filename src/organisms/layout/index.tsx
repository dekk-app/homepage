import dynamic from "next/dynamic";
import React from "react";

const Footer = dynamic(async () => import("@/organisms/footer"));
const Header = dynamic(async () => import("@/organisms/header"));
const Main = dynamic(async () => import("@/organisms/main"));
const Sidebar = dynamic(async () => import("@/organisms/sidebar"));
const Head = dynamic(async () => import("next/head"));

const Layout: React.FC = ({ children }) => {
	return (
		<>
			<Head>
				<meta
					name="description"
					content="Dekk reimagines presentations. Create and present by intuition. Make a difference, make a Dekk."
				/>
			</Head>
			<Header />
			<Sidebar anchor="left">Sidebar Left</Sidebar>
			<Main>{children}</Main>
			<Sidebar anchor="right">Sidebar Right</Sidebar>
			<Footer />
		</>
	);
};

export default Layout;

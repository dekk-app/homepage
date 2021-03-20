import { useTranslation } from "next-i18next";
import dynamic from "next/dynamic";
import React from "react";

const Footer = dynamic(async () => import("@/organisms/footer"));
const Header = dynamic(async () => import("@/organisms/header"));
const Main = dynamic(async () => import("@/organisms/main"));
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
			<Main>{children}</Main>
			<Footer />
		</>
	);
};

export default Layout;

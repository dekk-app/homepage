import dynamic from "next/dynamic";
import React from "react";

const Dropdown = dynamic(async () => import("@/molecules/dropdown"));
const Footer = dynamic(async () => import("@/organisms/footer"));
const Header = dynamic(async () => import("@/organisms/header"));
const Main = dynamic(async () => import("@/organisms/main"));
const Sidebar = dynamic(async () => import("@/organisms/sidebar"));
const Head = dynamic(async () => import("next/head"));

// @todo remove demo element
const MenuLink = React.forwardRef<HTMLButtonElement>(({ children, ...props }, ref) => (
	<button {...props} ref={ref} type="button" data-test-id="header-menu-link">
		Open Menu
	</button>
));

const Layout: React.FC = ({ children }) => {
	return (
		<>
			<Head>
				<meta
					name="description"
					content="Dekk reimagines presentations. Create and present by intuition. Make a difference, make a Dekk."
				/>
			</Head>
			<Header>
				<div>
					<Dropdown button={MenuLink} data-test-id="dropdown">
						Hello Dropdown
					</Dropdown>
				</div>
			</Header>
			<Sidebar anchor="left">Sidebar Left</Sidebar>
			<Main>{children}</Main>
			<Sidebar anchor="right">Sidebar Right</Sidebar>
			<Footer />
		</>
	);
};

export default Layout;

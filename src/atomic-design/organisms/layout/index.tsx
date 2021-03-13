import { Footer } from "@/atomic-design/organisms/footer";
import { Header } from "@/atomic-design/organisms/header";
import { Main } from "@/atomic-design/organisms/main";
import React from "react";

export const Layout: React.FC = ({ children }) => {
	return (
		<>
			<Header />
			<Main>{children}</Main>
			<Footer />
		</>
	);
};

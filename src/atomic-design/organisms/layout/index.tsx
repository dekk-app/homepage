import { Footer } from "@/atomic-design/organisms/footer";
import { Header, StyledHeader } from "@/atomic-design/organisms/header";
import { Main } from "@/atomic-design/organisms/main";
import { useTranslation } from "next-i18next";
import React from "react";

export const Layout: React.FC = ({ children }) => {
	const { t } = useTranslation("common");
	return (
		<>
			<Header />
			<Main>{children}</Main>
			<Footer />
		</>
	);
};

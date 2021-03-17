import { Footer } from "@/organisms/footer";
import { Header } from "@/organisms/header";
import { Main } from "@/organisms/main";
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

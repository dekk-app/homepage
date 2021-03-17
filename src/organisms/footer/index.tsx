import { LanguageSwitcher } from "@/molecules/language-switcher";
import { StyledFooter } from "@/organisms/footer/styled";
import React from "react";

export const Footer: React.FC = ({ children }) => (
	<StyledFooter>
		{children}
		<LanguageSwitcher />
	</StyledFooter>
);

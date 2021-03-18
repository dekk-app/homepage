import dynamic from "next/dynamic";
import React from "react";
import { StyledFooter } from "./styled";

const LanguageSwitcher = dynamic(async () =>
	import("@/molecules/language-switcher").then(mod => mod.LanguageSwitcher)
);

const Footer: React.FC = ({ children }) => (
	<StyledFooter>
		{children}
		<LanguageSwitcher />
	</StyledFooter>
);

export default Footer;

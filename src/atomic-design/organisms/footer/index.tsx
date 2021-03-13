import { LanguageSwitcher } from "@/atomic-design/molecules/language-switcher";
import React from "react";

export const Footer: React.FC = ({ children }) => (
	<footer>
		{children}
		<LanguageSwitcher />
	</footer>
);

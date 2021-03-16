import { LanguageSwitcher } from "@/atomic-design/molecules/language-switcher";
import styled from "@emotion/styled";
import React from "react";

export const StyledFooter = styled.footer`
	position: absolute;
	z-index: 10;
	right: 0;
	bottom: 0;
	left: 0;
	width: 100%;
	max-width: 1280px;
	margin: 0 auto;
	padding: 2em;
	background: white;
	color: black;
`;

export const Footer: React.FC = ({ children }) => (
	<StyledFooter>
		{children}
		<LanguageSwitcher />
	</StyledFooter>
);

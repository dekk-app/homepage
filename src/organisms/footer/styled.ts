import { pxToRem } from "@/ions/utils/unit";
import { Column } from "@/molecules/grid";
import { css } from "@emotion/react";
import styled from "@emotion/styled";

export const StyledFooter = styled.footer`
	${({ theme }) => css`
		padding: ${pxToRem(theme.spaces.xxl)} 0;
	`};
`;

export const StyledFooterItems = styled(Column)`
	display: grid;
	justify-content: flex-end;
	${({ theme }) => css`
		grid-template-columns: repeat(auto-fit, minmax(${pxToRem(theme.spaces.m)}, auto));
		grid-gap: ${pxToRem(theme.spaces.m)};
	`};
`;

export const StyledLanguageButton = styled.button`
	display: inline-flex;
	align-content: center;
	align-items: center;
	margin: 0;
	padding: 0;
	border: 0;
	background: none;
	color: currentColor;
	font-size: 1em;

	&:hover {
		text-decoration: underline;
	}
`;

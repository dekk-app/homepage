import { pxToRem } from "@/ions/utils/unit";
import { Column } from "@/molecules/grid";
import { css } from "@emotion/react";
import styled from "@emotion/styled";

export const StyledFooter = styled.footer`
	${({ theme }) => css`
		padding: ${pxToRem(theme.spaces.xxl)} 0;
		background-color: ${theme.ui.colors.dark.background};
		color: ${theme.ui.colors.dark.color};
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

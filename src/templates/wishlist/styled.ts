import Layout from "@/colonies/layout";
import { pxToRem } from "@/ions/utils/unit";
import { Column } from "@/molecules/grid";
import { css } from "@emotion/react";
import styled from "@emotion/styled";

export const StyledWishWrapper = styled(Column)`
	--padding-x: calc(var(--gap-x) / 2 + var(--grid-padding));

	display: flex;
	position: sticky;
	z-index: 1;
	top: 0;
	align-content: flex-end;
	align-items: flex-end;
	justify-content: flex-end;
	${({ theme }) => css`
		margin: 0 calc(var(--padding-x) * -1);
		padding: ${pxToRem(theme.spaces.m)} var(--padding-x);
		background: ${theme.ui.colors.light.background};
		color: ${theme.ui.colors.light.color};
	`};
`;

export const StyledLayout = styled(Layout)`
	${({ theme }) => css`
		padding-bottom: ${pxToRem(theme.spaces.xxl * 2)};
	`};
`;

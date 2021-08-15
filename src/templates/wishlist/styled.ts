import { pxToRem } from "@/ions/utils/unit";
import { Column } from "@/molecules/grid";
import { StyledWishWrapperProps } from "@/templates/wishlist/types";
import { css } from "@emotion/react";
import styled from "@emotion/styled";

export const StyledWishWrapper = styled(Column)<StyledWishWrapperProps>`
	--padding-x: calc(var(--gap-x) / 2 + var(--grid-padding));

	display: flex;
	position: sticky;
	z-index: 1;
	top: 0;
	align-content: flex-end;
	align-items: flex-end;
	justify-content: flex-end;
	${({ theme, dark }) => css`
		margin: 0 calc(var(--padding-x) * -1);
		padding: ${pxToRem(theme.spaces.m)} var(--padding-x);
		background: ${dark ? theme.ui.colors.dark.background : theme.ui.colors.light.background};
		color: ${dark ? theme.ui.colors.dark.color : theme.ui.colors.light.color};
	`};
`;

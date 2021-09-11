import { pxToRem } from "@/ions/utils/unit";
import { Column } from "@/molecules/grid";
import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { StyledButtonWrapperProps, StyledWishWrapperProps } from "./types";

export const StyledStickyWrapper = styled(Column)<StyledWishWrapperProps>`
	--padding-x: calc(var(--gap-x) / 2 + var(--grid-padding));

	display: flex;
	position: sticky;
	z-index: 1;
	top: 0;
	align-content: center;
	align-items: center;
	justify-content: flex-end;
	margin: 0 calc(var(--padding-x) * -1);
	${({ theme, dark }) => css`
		height: ${pxToRem(theme.layout.header.height.xs)};
		padding: 0 var(--padding-x);
		background: ${dark ? theme.ui.colors.dark.background : theme.ui.colors.light.background};
		color: ${dark ? theme.ui.colors.dark.color : theme.ui.colors.light.color};

		${theme.mq.l} {
			background: none;
			visibility: hidden;
			color: inherit;
		}
	`};
`;

export const StyledButtonWrapper = styled.div<StyledButtonWrapperProps>`
	${({ theme, elevated }) => css`
		${theme.mq.l} {
			visibility: visible;
			border-radius: ${theme.shapes.s};
			transition: box-shadow ${theme.speeds.slow};
			will-change: box-shadow;
			background: inherit;
			box-shadow: ${elevated ? theme.shadows.l : theme.shadows[0]};
		}
	`};
`;

export const StyledFiltersWrapper = styled(Column)`
	${({ theme }) => css`
		padding: 0 0 ${pxToRem(theme.spaces.m)};
	`};
`;

export const StyledSpinnerWrapper = styled(Column)`
	display: flex;
	justify-content: center;
	${({ theme }) => css`
		padding: ${pxToRem(theme.spaces.l)} 0;
	`};
`;

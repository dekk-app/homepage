import { pxToRem } from "@/ions/utils/unit";
import { Column } from "@/molecules/grid";
import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { StyledButtonWrapperProps, StyledWishWrapperProps } from "./types";

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

		${theme.mq.l} {
			visibility: hidden;
			padding-top: ${pxToRem(theme.spaces.xxs)};
			background: none;
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
			box-shadow: ${elevated ? theme.shadows.l : theme.shadows[0]};
		}
	`};
`;

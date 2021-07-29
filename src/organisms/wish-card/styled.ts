import { setOpacity } from "@/ions/utils/color";
import { pxToRem } from "@/ions/utils/unit";
import { Column } from "@/molecules/grid";
import { css } from "@emotion/react";
import styled from "@emotion/styled";

export const StyledIconButton = styled.button`
	display: flex;
	align-content: center;
	align-items: center;
	justify-content: center;
	width: ${pxToRem(48)};
	height: ${pxToRem(48)};
	margin: ${pxToRem(-12)};
	padding: 0;
	border: 0;
	border-radius: 50%;
	background: none;
	color: currentColor;

	&:focus {
		outline: 0;
	}

	&[disabled] {
		opacity: 0.2;
	}

	${({ theme }) => css`
		&:hover {
			background-color: ${theme.ui.atoms.button.hover.background};
			color: currentColor;
		}

		&:active {
			background-color: ${theme.ui.atoms.button.active.background};
			color: currentColor;
		}

		&:focus-visible {
			background-color: ${theme.ui.atoms.button.focus.background};
			box-shadow: inset 0 0 0 ${theme.borders.focusRing} ${theme.ui.colors.focusRing.border};
		}
	`};
`;

export const StyledCard = styled(Column)`
	display: flex;
	flex-direction: column;
	padding: ${pxToRem(24)};
	background-color: white;
	color: black;
	${({ theme }) => css`
		border-radius: ${theme.shapes.m};
	`};
`;

export const StyledVotes = styled.div`
	display: grid;
	grid-template-columns: ${pxToRem(32)} ${pxToRem(16)} auto;
	align-items: center;
	justify-content: start;
	${({ theme }) => css`
		grid-column-gap: ${pxToRem(theme.spaces.xs)};
	`};
`;

export const StyledArticle = styled.article`
	flex: 1;
`;

export const StyledTooltip = styled.div`
	visibility: hidden;
	position: absolute;
	bottom: 100%;
	left: 50%;
	width: ${pxToRem(200)};
	transition-property: visibility, opacity, transform;
	transition-duration: 0.125s;
	will-change: visibility, opacity, transform;
	opacity: 0;
	font-size: ${pxToRem(12)};
	${({ theme }) => css`
		padding: ${pxToRem(theme.spaces.s)};
		border-radius: ${theme.shapes.m};
		transform: translate3d(-50%, ${pxToRem(theme.spaces.s)}, 0);
		background: ${setOpacity(theme.ui.colors.dark.background, 90)};
		color: ${theme.ui.colors.dark.color};
	`};
`;

export const StyledIconButtonWrapper = styled.span`
	display: inline-flex;
	position: relative;
	&:hover {
		${StyledTooltip} {
			visibility: visible;
			transform: translate3d(-50%, 0, 0);
			opacity: 1;
		}
	}
`;

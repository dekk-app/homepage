import { StyledIconButton } from "@/atoms/icon-button/styled";
import { setOpacity } from "@/ions/utils/color";
import { pxToRem } from "@/ions/utils/unit";
import { Column } from "@/molecules/grid";
import { css } from "@emotion/react";
import styled from "@emotion/styled";

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

export const StyledArticle = styled.article`
	flex: 1;
`;

export const StyledTooltip = styled.div`
	visibility: hidden;
	position: absolute;
	bottom: 100%;
	left: 50%;
	max-width: ${pxToRem(200)};
	transition-property: visibility, opacity, transform;
	will-change: visibility, opacity, transform;
	opacity: 0;
	font-size: ${pxToRem(12)};
	${({ theme }) => css`
		padding: ${pxToRem(theme.spaces.s)};
		border-radius: ${theme.shapes.m};
		transform: translate3d(-50%, ${pxToRem(theme.spaces.s)}, 0);
		transition-duration: ${theme.speeds.fast};
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

export const StyledModeratorButtons = styled.div`
	display: flex;
	flex: 1;
	justify-content: flex-end;
`;

export const StyledVote = styled.div`
	display: flex;
	align-content: center;
	align-items: center;
	justify-content: center;
	width: ${pxToRem(48)};
	height: ${pxToRem(48)};
`;

export const StyledCardActions = styled.div`
	display: flex;
	align-content: center;
	align-items: center;
	${({ theme }) => css`
		margin: 0 ${pxToRem(-theme.spaces.m)};

		${StyledIconButton}, ${StyledVote} {
			margin: 0 ${pxToRem(theme.spaces.xs)};
		}
	`};
`;

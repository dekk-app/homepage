import { setOpacity } from "@/ions/utils/color";
import { pxToRem } from "@/ions/utils/unit";
import { Column } from "@/molecules/grid";
import { HexColor } from "@/types/units";
import { css } from "@emotion/react";
import styled from "@emotion/styled";

export const StyledCard = styled(Column)`
	display: flex;
	flex-direction: column;
	background-color: white;
	color: black;
	${({ theme }) => css`
		margin-bottom: ${pxToRem(theme.spaces.m)};
		padding: ${pxToRem(theme.spaces.m)};
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
	will-change: visibility, opacity, transform;
	opacity: 0;
	font-size: ${pxToRem(12)};
	${({ theme }) => css`
		padding: ${pxToRem(theme.spaces.s)};
		border-radius: ${theme.shapes.m};
		transform: translate3d(-50%, ${pxToRem(theme.spaces.s)}, 0);
		transition-duration: ${theme.speeds.fast};
		background: ${setOpacity(theme.ui.colors.dark.background as HexColor, 90)};
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

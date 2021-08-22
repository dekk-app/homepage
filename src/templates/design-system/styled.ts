import Typography from "@/atoms/typography";
import { pxToRem } from "@/ions/utils/unit";
import { Column } from "@/molecules/grid";
import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { SPACE_COLORS } from "./constants";
import { SpaceProps } from "./types";

export const StyledTypographySpace = styled.div`
	display: flex;
	position: relative;
	background: hsl(30, 80%, 70%);
	${({ theme }) => css`
		margin: ${pxToRem(theme.spaces.l)} 0;
	`};
`;

export const StyledTypography = styled(Typography)`
	width: 100%;
	background: hsl(230, 80%, 70%);
`;

export const StyledColumn = styled(Column)`
	min-height: 4em;
	margin-top: 1em;
	margin-bottom: 1em;
	box-shadow: inset 0 0 0 1px hsl(10, 50%, 70%);
`;

export const StyledSpace = styled.div<SpaceProps>`
	display: block;
	flex-grow: 0;
	flex-shrink: 0;
	width: 100%;
	${({ theme, space }) => css`
		height: ${pxToRem(theme.spaces[space])};
		color: ${SPACE_COLORS[space]};
		background: ${SPACE_COLORS[space]};
	`};
`;

import { setOpacity } from "@/ions/utils/color";
import { pxToRem } from "@/ions/utils/unit";
import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { StyledTagProps } from "./types";

export const StyledTag = styled.span<StyledTagProps>`
	width: max-content;
	${({ theme, colorScheme }) => css`
		padding: ${pxToRem(theme.spaces.xxs)} ${pxToRem(theme.spaces.xs)};
		border-radius: ${theme.shapes.s};
		font-size: ${pxToRem(14)};
		font-weight: 600;
		background: ${setOpacity(theme.palette[colorScheme], 20)};
		box-shadow: inset 0 0 0 1px ${setOpacity(theme.palette[colorScheme], 20)};
	`};
`;

export const StyledTags = styled.span`
	display: flex;
	flex-wrap: wrap;
	${({ theme }) => css`
		margin: ${pxToRem(-theme.spaces.xxs)} ${pxToRem(-theme.spaces.xs)};
		${StyledTag} {
			margin: ${pxToRem(theme.spaces.xxs)} ${pxToRem(theme.spaces.xs)};
		}
	`};
`;

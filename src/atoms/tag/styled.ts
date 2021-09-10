import { setOpacity } from "@/ions/utils/color";
import { pxToRem } from "@/ions/utils/unit";
import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { StyledTagProps } from "./types";

export const StyledTag = styled.span<StyledTagProps>`
	width: max-content;

	&:focus {
		outline: 0;
	}

	${({ theme, colorScheme, as }) => css`
		padding: ${pxToRem(as === "button" ? theme.spaces.xs : theme.spaces.xxs)}
			${pxToRem(as === "button" ? theme.spaces.s : theme.spaces.xs)};
		border-radius: ${theme.shapes.s};
		font-size: ${pxToRem(as === "button" ? 16 : 14)};
		line-height: ${pxToRem(as === "button" ? 32 : 18)};
		font-weight: 600;
		background: ${setOpacity(theme.palette[colorScheme], 20)};
		box-shadow: inset 0 0 0 1px ${setOpacity(theme.palette[colorScheme], 20)};

		${as === "button" &&
		css`
			&:hover {
				background: ${setOpacity(theme.palette[colorScheme], 30)};
				box-shadow: inset 0 0 0 1px ${setOpacity(theme.palette[colorScheme], 30)};
			}

			&:active {
				background: ${setOpacity(theme.palette[colorScheme], 40)};
				box-shadow: inset 0 0 0 1px ${setOpacity(theme.palette[colorScheme], 40)};
			}

			&:focus-visible {
				box-shadow: inset 0 0 0 ${theme.borders.focusRing}
					${theme.ui.colors.focusRing.border};
			}
		`};

		${theme.mq.m} {
			padding: ${pxToRem(theme.spaces.xxs)} ${pxToRem(theme.spaces.xs)};
			font-size: ${pxToRem(14)};
			line-height: ${pxToRem(18)};
		}
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

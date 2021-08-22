import { setOpacity } from "@/ions/utils/color";
import { pxToRem } from "@/ions/utils/unit";
import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { StyledButtonProps } from "./types";

export const StyledButtonWrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-content: center;
	align-items: center;
	width: 100%;
`;

export const StyledButton = styled.button<StyledButtonProps>`
	display: inline-flex;
	position: relative;
	align-content: center;
	align-items: center;
	justify-content: center;
	width: max-content;
	height: ${pxToRem(60)};
	margin: 0;
	padding: ${pxToRem(16)} ${pxToRem(24)};
	border: 0;
	font-size: ${pxToRem(16)};
	font-weight: 600;
	line-height: ${pxToRem(24)};
	text-decoration: none;
	vertical-align: bottom;
	white-space: nowrap;

	&:focus {
		outline: 0;
	}

	&::after {
		position: absolute;
		top: 0;
		right: 0;
		bottom: 0;
		left: 0;
		border-radius: inherit;
		pointer-events: none;
	}

	&[disabled] {
		opacity: 0.5;
		pointer-events: none;
	}

	${({ flex, fullWidth, text, primary, theme }) => css`
		width: ${fullWidth ? "100%" : "initial"};
		${flex &&
		css`
			flex: 1;
		`};
		border-radius: ${theme.shapes.s};
		background: ${primary
			? theme.ui.colors.primary.background
			: text
			? "none"
			: "rgba(0,0,0,0.1)"};
		color: ${primary ? theme.ui.colors.primary.color : "currentColor"};

		&:hover {
			background: ${primary
				? theme.palette.brandDark
				: theme.ui.atoms.button.hover.background};
			color: ${primary ? theme.ui.colors.primary.color : "currentColor"};
		}

		&:active {
			background: ${primary
				? `${theme.palette.brandDark} linear-gradient(rgba(0,0,0,0.2), rgba(0,0,0,0.1))`
				: theme.ui.atoms.button.active.background};
			color: ${primary ? theme.ui.colors.primary.color : "currentColor"};
		}

		&::after {
			box-shadow: inset 0 0 0 ${theme.borders.focusRing} ${theme.ui.colors.focusRing.border};
		}

		&:focus-visible {
			background: ${primary
				? theme.palette.brandDark
				: theme.ui.atoms.button.focus.background};
			color: ${primary ? theme.ui.colors.primary.color : "currentColor"};

			&::after {
				content: "";
			}
		}
	`};
`;

export const StyledLanguageButton = styled.button`
	display: inline-flex;
	position: relative;
	align-content: center;
	align-items: center;
	min-width: ${pxToRem(48)};
	min-height: ${pxToRem(48)};
	margin: 0;
	padding: 0;
	border: 0;
	background: none;
	color: currentColor;
	font-size: 1em;

	&::after {
		position: absolute;
		pointer-events: none;
	}

	&:focus {
		outline: 0;
	}

	svg {
		height: ${pxToRem(24)};
	}

	${({ theme }) => css`
		&:hover {
			&::after {
				content: "";
				background: ${setOpacity(theme.palette.brand, 30)};
			}
		}

		&:focus-visible {
			&::after {
				content: "";
				box-shadow: inset 0 0 0 ${theme.borders.focusRing}
					${theme.ui.colors.focusRing.border};
			}
		}

		&::after {
			top: ${pxToRem(-theme.spaces.xs)};
			right: ${pxToRem(-theme.spaces.xs)};
			bottom: ${pxToRem(-theme.spaces.xs)};
			left: ${pxToRem(-theme.spaces.xs)};
			border-radius: ${theme.shapes.s};
			background: ${theme.ui.atoms.button.focus.background};
		}

		${theme.mq.m} {
			min-width: unset;
			min-height: unset;

			svg {
				display: inline-flex;
				height: ${pxToRem(16)};
			}
		}
	`};
`;

export const StyledButtonGroup = styled.div`
	display: flex;
	flex-wrap: wrap;
	${({ theme }) => css`
		width: calc(100% + ${pxToRem(theme.spaces.xs * 2)});
		margin: ${pxToRem(-theme.spaces.xs)};
		${StyledButton}, ${StyledLanguageButton} {
			margin: ${pxToRem(theme.spaces.xs)};
		}
	`};
`;

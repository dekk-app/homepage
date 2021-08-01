import { StyledButtonProps } from "@/atoms/button/types";
import { setOpacity } from "@/ions/utils/color";
import { pxToRem } from "@/ions/utils/unit";
import { css } from "@emotion/react";
import styled from "@emotion/styled";

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
	height: ${pxToRem(60)};
	margin: 0;
	padding: ${pxToRem(16)} ${pxToRem(24)};
	border: 0;
	font-size: ${pxToRem(16)};
	font-weight: 600;
	line-height: ${pxToRem(24)};
	text-decoration: none;
	vertical-align: bottom;

	&:focus {
		outline: 0;
	}

	&::after {
		position: absolute;
		top: -1px;
		right: -1px;
		bottom: -1px;
		left: -1px;
		border-radius: inherit;
		pointer-events: none;
	}

	&[disabled] {
		opacity: 0.5;
		pointer-events: none;
	}

	${({ fullWidth, text, primary, theme }) => css`
		width: ${fullWidth ? "100%" : "initial"};
		border-radius: ${theme.shapes.s};
		background: ${primary
			? theme.ui.colors.primary.background
			: text
			? "none"
			: "rgba(0,0,0,0.1)"};
		color: ${primary ? theme.ui.colors.primary.color : "currentColor"};

		&:hover {
			background: ${primary
				? theme.palette.darkPurple
				: theme.ui.atoms.button.hover.background};
			color: ${primary ? theme.ui.colors.primary.color : "currentColor"};
		}

		&:active {
			background: ${primary
				? theme.palette.darkPurple
				: theme.ui.atoms.button.active.background};
			color: ${primary ? theme.ui.colors.primary.color : "currentColor"};
		}

		&::after {
			box-shadow: inset 0 0 0 ${theme.borders.focusRing} ${theme.ui.colors.focusRing.border};
		}

		&:focus-visible {
			background: ${primary
				? theme.palette.darkPurple
				: theme.ui.atoms.button.focus.background};
			color: ${primary ? theme.ui.colors.primary.color : "currentColor"};

			&::after {
				content: "";
			}
		}
	`};
`;

export const StyledSocialButton = styled.button`
	display: flex;
	flex: 1;
	align-content: center;
	align-items: center;
	justify-content: center;
	justify-self: stretch;
	height: ${pxToRem(60)};
	margin: 0;
	border: 0;
	background: none;
	color: currentColor;
	font-family: inherit;
	font-size: 1em;

	&:hover {
		color: currentColor;
	}

	&:focus {
		outline: 0;
	}

	&:focus-visible {
		color: currentColor;
	}

	&[disabled] {
		opacity: 0.5;
		pointer-events: none;
	}

	${({ theme }) => css`
		border-radius: ${theme.shapes.s};
		box-shadow: inset 0 0 0 1px currentColor;

		&:hover {
			background: ${theme.ui.atoms.button.hover.background};
		}

		&:active {
			background: ${theme.ui.atoms.button.active.background};
		}

		&:focus-visible {
			background: ${theme.ui.atoms.button.focus.background};
			box-shadow: inset 0 0 0 ${theme.borders.focusRing} ${theme.ui.colors.focusRing.border};
		}
	`};
`;

export const StyledSocialButtonLabel = styled.span`
	${({ theme }) => css`
		margin-left: ${pxToRem(theme.spaces.s)};
		color: currentColor;
	`};
`;

export const StyledSocialButtonWrapper = styled.div`
	display: grid;
	grid-column-gap: ${pxToRem(16)};
	grid-template-columns: repeat(2, 1fr);
	width: 100%;
	margin: 0 auto;
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
		min-width: ${pxToRem(24)};
		min-height: ${pxToRem(24)};
	}

	${({ theme }) => css`
		&:hover {
			&::after {
				content: "";
				background: ${setOpacity(theme.palette.purple, 30)};
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

		@media only screen and ${theme.mq.m} {
			min-width: unset;
			min-height: unset;

			svg {
				display: inline-flex;
				min-width: unset;
				min-height: ${pxToRem(24)};
				height: ${pxToRem(24)};
			}
		}
	`};
`;

export const StyledButtonGroup = styled.div`
	display: flex;
	flex-wrap: wrap;
	${({ theme }) => css`
		width: calc(100% + ${pxToRem(theme.spaces.xs * 2)});
		margin: 0 ${pxToRem(-theme.spaces.xs)};
		${StyledButton}, ${StyledSocialButton}, ${StyledLanguageButton} {
			margin: 0 ${pxToRem(theme.spaces.xs)};
		}
	`};
`;

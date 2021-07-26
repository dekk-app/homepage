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

export const StyledButton = styled.button<{ fullWidth?: boolean; text?: boolean }>`
	display: inline-flex;
	position: relative;
	align-content: center;
	align-items: center;
	justify-content: center;
	height: ${pxToRem(56)};
	padding: ${pxToRem(16)} ${pxToRem(24)};
	border: 0;
	font-size: ${pxToRem(16)};
	font-weight: 600;
	line-height: ${pxToRem(24)};
	text-decoration: none;

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

	${({ fullWidth, text, theme }) => css`
		width: ${fullWidth ? "100%" : "initial"};
		border-radius: ${theme.shapes.s};
		background: ${text ? "none" : theme.ui.colors.primary.background};
		color: ${theme.ui.colors.primary.color};

		&:hover {
			background: ${text ? theme.ui.atoms.button.hover.background : theme.palette.darkPurple};
			color: ${theme.ui.colors.primary.color};
		}

		&:active {
			background: ${text
				? theme.ui.atoms.button.active.background
				: theme.palette.darkPurple};
			color: ${theme.ui.colors.primary.color};
		}

		&::after {
			box-shadow: inset 0 0 0 ${theme.borders.focusRing} ${theme.ui.colors.focusRing.border};
		}

		&:focus-visible {
			background: ${text ? theme.ui.atoms.button.focus.background : theme.palette.darkPurple};
			color: ${theme.ui.colors.primary.color};

			&::after {
				content: "";
			}
		}
	`};
`;

export const StyledSocialButton = styled.button`
	display: flex;
	align-content: center;
	align-items: center;
	justify-content: center;
	justify-self: stretch;
	height: ${pxToRem(60)};
	border: 0;
	background: none;
	box-shadow: inset 0 0 0 1px #eee;

	&:hover {
		color: currentColor;
	}

	&:focus {
		outline: 0;
	}

	&:focus-visible {
		color: currentColor;
	}

	${({ theme }) => css`
		border-radius: ${theme.shapes.s};

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

export const StyledSocialButtonWrapper = styled.div`
	display: grid;
	grid-column-gap: ${pxToRem(16)};
	grid-template-columns: repeat(2, 1fr);
	width: 100%;
	margin: 0 auto;
`;

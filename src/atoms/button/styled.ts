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

export const StyledButton = styled.button<{ fullWidth?: boolean }>`
	display: inline-flex;
	position: relative;
	align-content: center;
	align-items: center;
	justify-content: center;
	height: ${pxToRem(56)};
	padding: ${pxToRem(16)} ${pxToRem(24)};
	border: 0;
	border-radius: ${pxToRem(10)};
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

	${({ fullWidth, theme }) => css`
		width: ${fullWidth ? "100%" : "initial"};
		background: ${theme.ui.colors.primary.background};
		color: ${theme.ui.colors.primary.color};

		&:hover {
			background: ${theme.palette.darkPurple};
		}

		&:after {
			box-shadow: 0 0 0 2px ${theme.ui.colors.primary.background};
		}

		&:focus-visible {
			background: ${theme.palette.darkPurple};

			&:after {
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
	border-radius: ${pxToRem(10)};
	background: none;
	box-shadow: inset 0 0 0 1px #eee;
	${({
		theme: {
			ui: {
				colors: {
					primary: { background },
				},
			},
		},
	}) => css`
		&:focus {
			outline: 0;
		}
		&:focus-visible {
			box-shadow: 0 0 0 1px ${background};
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

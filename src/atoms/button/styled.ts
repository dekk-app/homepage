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
	height: ${pxToRem(60)};
	padding: ${pxToRem(24)} ${pxToRem(18)};
	border: 0;
	border-radius: ${pxToRem(10)};
	font-size: ${pxToRem(14)};
	font-weight: 600;
	text-decoration: none;
	${({ fullWidth, theme }) => css`
		width: ${fullWidth ? "100%" : "initial"};
		background: ${theme.ui.colors.primary.background};
		color: ${theme.ui.colors.primary.color};

		&:focus {
			outline: 0;
		}

		&:focus-visible {
			box-shadow: 0 0 0 1px ${theme.ui.colors.dark.background},
				0 0 0 2px ${theme.ui.colors.primary.background};
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

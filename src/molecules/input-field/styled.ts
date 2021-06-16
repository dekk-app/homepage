import { pxToRem } from "@/ions/utils/unit";
import { css } from "@emotion/react";
import styled from "@emotion/styled";

export const StyledInputWrapper = styled.label<{ focused?: boolean; fullWidth?: boolean }>`
	position: relative;
	margin: 0 auto ${pxToRem(16)};
	padding: 0;
	${({ fullWidth }) => css`
		width: ${fullWidth ? "100%" : "auto"};
	`}
`;
export const StyledFloatingLabel = styled.span<{ floating?: boolean }>`
	display: flex;
	position: absolute;
	top: 50%;
	left: ${pxToRem(24)};
	transform-origin: 0 0;
	transition-property: color, font-size, transform;
	transition-duration: 0.3s;
	transition-timing-function: ease-in-out;
	font-weight: 400;
	${({
		floating,
		theme: {
			ui: {
				atoms: {
					inputLabel: { color, focus },
				},
			},
		},
	}) =>
		css`
			transform: ${floating
				? `scale3d(${10 / 14}, ${10 / 14}, 1) translate3d(0, ${pxToRem(-25)}, 0)`
				: "scale3d(1, 1, 1) translate3d(0, -50%, 0)"};
			color: ${floating ? focus.color : color};
		`};
`;
export const StyledInput = styled.input<{ invalid?: boolean }>`
	width: 100%;
	height: ${pxToRem(60)};
	margin: 0;
	padding: ${pxToRem(32)} ${pxToRem(24)} ${pxToRem(12)};
	border: 0;
	border-radius: ${pxToRem(10)};
	background: red;
	color: inherit;
	font-size: ${pxToRem(16)};
	line-height: ${pxToRem(16)};
	caret-color: var(--focus-color);
	${({
		invalid,
		theme: {
			ui: {
				organisms: {
					inputField: { background, color, focus, error },
				},
			},
		},
	}) => css`
		background: ${background};
		color: ${color};
		box-shadow: 0 0 0 1px ${invalid ? error.border : "transparent"};

		&:focus {
			outline: 0;
		}
		&:focus-visible {
			box-shadow: 0 0 0 1px ${focus.background};
		}
	`};
`;
export const StyledRequiredIndicator = styled.sup`
	${({
		theme: {
			ui: {
				colors: {
					primary: { background },
				},
			},
		},
	}) =>
		css`
			color: ${background};
		`};
`;

export const StyledError = styled.span`
	${({
		theme: {
			ui: {
				organisms: {
					inputField: { error },
				},
			},
		},
	}) => css`
		color: ${error.color};
	`};
`;

export const StyledHelpText = styled.div`
	width: 100%;
	margin-top: ${pxToRem(-12)};
	padding-left: ${pxToRem(16)};
`;

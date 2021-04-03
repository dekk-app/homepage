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
	font-weight: 300;
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
export const StyledInput = styled.input`
	width: 100%;
	height: ${pxToRem(60)};
	margin: 0;
	padding: ${pxToRem(32)} ${pxToRem(24)} ${pxToRem(12)};
	border: 0;
	border-radius: ${pxToRem(10)};
	background: red;
	color: inherit;
	line-height: ${pxToRem(16)};
	caret-color: var(--focus-color);
	${({
		theme: {
			ui: {
				organisms: {
					inputField: { background, color, focus },
				},
			},
		},
	}) => css`
		background: ${background};
		color: ${color};
		&:focus {
			outline: 0;
			box-shadow: 0 0 0 1px ${focus.border};
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

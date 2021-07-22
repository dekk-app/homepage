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
	transition-property: transform;
	will-change: transform;
	transition-duration: 0.125s;
	transition-timing-function: ease-in-out;
	font-weight: 400;
	${({ floating }) =>
		css`
			transform: ${floating
				? `scale3d(${10 / 14}, ${10 / 14}, 1) translate3d(0, ${pxToRem(-25)}, 0)`
				: "scale3d(1, 1, 1) translate3d(0, -50%, 0)"};
		`};
`;

export const disallowedProps: PropertyKey[] = ["invalid"];
export const StyledInput = styled("input", {
	shouldForwardProp(propName: PropertyKey): boolean {
		return !disallowedProps.includes(propName);
	},
})<{ invalid?: boolean }>`
	width: 100%;
	height: ${pxToRem(56)};
	margin: 0;
	padding: ${pxToRem(32)} ${pxToRem(24)} ${pxToRem(12)};
	border: 0;
	border-radius: ${pxToRem(10)};
	font-family: inherit;
	font-size: ${pxToRem(16)};
	line-height: ${pxToRem(24)};
	caret-color: var(--focus-color);
	${({
		invalid,
		theme: {
			ui: {
				molecules: {
					inputField: { background, color, focus, error },
				},
			},
		},
	}) => css`
		background: ${background};
		color: ${color};
		box-shadow: inset 0 0 0 1px ${invalid ? error.border : "transparent"};

		&:focus {
			outline: 0;
			box-shadow: inset 0 0 0 1px ${invalid ? error.border : focus.border};
		}
		&:focus-visible {
			background: ${focus.background};
			box-shadow: inset 0 0 0 1px ${invalid ? error.border : focus.border};
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
				molecules: {
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

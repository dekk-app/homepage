import { StyledInputProps, StyledToggleProps } from "@/atoms/toggle/types";
import { pxToRem } from "@/ions/utils/unit";
import { css } from "@emotion/react";
import styled from "@emotion/styled";

export const StyledToggle = styled.span<StyledToggleProps>`
	display: inline-flex;
	position: relative;
	width: ${pxToRem(96)};
	height: ${pxToRem(48)};
	border-radius: ${pxToRem(24)};

	&::before {
		content: "";
		position: absolute;
		top: 0;
		right: 0;
		bottom: 0;
		left: 0;
		border-radius: inherit;
	}

	&::after {
		content: "";
		position: absolute;
		top: 50%;
		left: ${pxToRem(2)};
		width: ${pxToRem(44)};
		height: ${pxToRem(44)};
		border-radius: ${pxToRem(22)};
	}

	${({ theme, checked, invalid }) => css`
		background: ${theme.ui.molecules.inputField.background};
		color: ${theme.ui.molecules.inputField.color};

		&::before {
			opacity: ${invalid ? 1 : 0.1};
			box-shadow: inset 0 0 0 1px
				${invalid ? theme.ui.molecules.inputField.error.border : "currentColor"};
		}

		&::after {
			background: ${checked ? theme.palette.brand : "currentColor"};
			transition: transform ${theme.speeds.fast} ease-in-out;
			transform: ${checked
				? "translate3d(calc(100% + 4px), -50%, 0)"
				: "translate3d(0, -50%, 0)"};
		}

		${theme.mq.m} {
			width: ${pxToRem(48)};
			height: ${pxToRem(24)};
			border-radius: ${pxToRem(12)};

			&::after {
				width: ${pxToRem(20)};
				height: ${pxToRem(20)};
				border-radius: ${pxToRem(10)};
			}
		}
	`};
`;
export const StyledToggleWrapper = styled.span`
	display: inline-flex;
	position: relative;
	margin: 1px;
	overflow: hidden;
	vertical-align: middle;
`;
export const StyledInput = styled.input<StyledInputProps>`
	position: absolute;
	top: 0;
	right: 100%;

	&:focus {
		outline: 0;
	}

	&[disabled] + ${StyledToggle} {
		opacity: 0.5;
		pointer-events: none;
	}

	&:focus-visible + ${StyledToggle} {
		${({ theme, invalid }) => css`
			&::before {
				opacity: 1;
				box-shadow: inset 0 0 0 ${theme.borders.focusRing}
					${invalid
						? theme.ui.molecules.inputField.error.border
						: theme.ui.colors.focusRing.border};
			}
		`};
	}
`;
export const StyledToggleLabel = styled.span`
	${({ theme }) => css`
		margin-left: ${pxToRem(theme.spaces.s)};
	`};
`;

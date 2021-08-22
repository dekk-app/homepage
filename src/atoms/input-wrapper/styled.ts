import { pxToRem } from "@/ions/utils/unit";
import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { StyledInputWrapperProps } from "./types";

export const StyledInputWrapper = styled.label<StyledInputWrapperProps>`
	position: relative;
	margin: 0 auto ${pxToRem(16)};
	padding: 0;

	&::before {
		content: "";
		position: absolute;
		z-index: 0;
		top: 0;
		right: 0;
		bottom: 0;
		left: 0;
		opacity: 0.1;
		pointer-events: none;
	}

	${({ theme, fullWidth, disabled }) => css`
		width: ${fullWidth ? "100%" : "auto"};
		${disabled &&
		css`
			opacity: 0.5;
		`};
		&::before {
			border-radius: ${theme.shapes.s};
			box-shadow: inset 0 0 0 1px currentColor;
		}
	`}
`;

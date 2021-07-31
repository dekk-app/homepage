import { spin } from "@/atoms/spinner/styles";
import { SpinnerProps } from "@/atoms/spinner/types";
import { css } from "@emotion/react";
import styled from "@emotion/styled";

export const StyledSpinner = styled.div<SpinnerProps>`
	display: inline-flex;
	border: var(--stroke) solid transparent;
	border-radius: 50%;

	&::before,
	&::after {
		content: "";
		position: absolute;
		top: calc(var(--stroke) * -1);
		right: calc(var(--stroke) * -1);
		bottom: calc(var(--stroke) * -1);
		left: calc(var(--stroke) * -1);
		border: inherit;
		border-radius: inherit;
	}

	${({ theme, color = "currentColor", size = "3em", strokeWidth = "2px" }) => css`
		--stroke: ${strokeWidth};

		width: ${size};
		height: ${size};
		border-top-color: ${color};
		animation: ${spin} ${theme.speeds.extremelySlow} infinite
			cubic-bezier(0.17, 0.67, 0.6, 0.66);

		&::before {
			animation: ${spin} ${theme.speeds.extremelySlow} infinite
				cubic-bezier(0.66, 0.21, 0.86, 0.87);
		}

		&::after {
			animation: ${spin} ${theme.speeds.extremelySlow} infinite
				cubic-bezier(0.17, 0.67, 0.6, 0.66);
		}
	`};
`;

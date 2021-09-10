import { pxToRem } from "@/ions/utils/unit";
import { css } from "@emotion/react";
import styled from "@emotion/styled";

export const StyledIconButton = styled.button`
	display: flex;
	align-content: center;
	align-items: center;
	justify-content: center;
	width: ${pxToRem(48)};
	height: ${pxToRem(48)};
	margin: ${pxToRem(-12)};
	padding: 0;
	border: 0;
	border-radius: 50%;
	background: none;
	color: currentColor;

	&:focus {
		outline: 0;
	}

	&[disabled] {
		opacity: 0.2;
	}

	${({ theme }) => css`
		&:hover {
			background-color: ${theme.ui.atoms.button.hover.background};
			color: currentColor;
		}

		&:active {
			background-color: ${theme.ui.atoms.button.active.background};
			color: currentColor;
		}

		&:focus-visible {
			box-shadow: inset 0 0 0 ${theme.borders.focusRing} ${theme.ui.colors.focusRing.border};
		}
	`};
`;

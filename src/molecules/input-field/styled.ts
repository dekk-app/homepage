import { pxToRem } from "@/ions/utils/unit";
import { css } from "@emotion/react";
import styled from "@emotion/styled";

export const disallowedProps: PropertyKey[] = ["invalid"];

export const StyledInput = styled("input", {
	shouldForwardProp(propName: PropertyKey): boolean {
		return !disallowedProps.includes(propName);
	},
})<{ invalid?: boolean }>`
	display: flex;
	position: relative;
	width: 100%;
	height: ${pxToRem(60)};
	margin: 0;
	padding: ${pxToRem(24)} ${pxToRem(24)} ${pxToRem(12)};
	border: 0;
	font-family: inherit;
	font-size: ${pxToRem(16)};
	line-height: ${pxToRem(24)};
	${({ invalid, theme }) => css`
		border-radius: ${theme.shapes.s};
		background: ${theme.ui.molecules.inputField.background};
		color: ${theme.ui.molecules.inputField.color};
		box-shadow: inset 0 0 0 1px
			${invalid ? theme.ui.molecules.inputField.error.border : "transparent"};

		&:focus {
			outline: 0;
			box-shadow: inset 0 0 0 1px
				${invalid
					? theme.ui.molecules.inputField.error.border
					: theme.ui.colors.focusRing.border};
		}

		&:focus-visible {
			background: ${theme.ui.colors.focusRing.background};
			box-shadow: inset 0 0 0 ${theme.borders.focusRing}
				${invalid
					? theme.ui.molecules.inputField.error.border
					: theme.ui.colors.focusRing.border};
		}
	`};
`;

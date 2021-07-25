import { pxToRem } from "@/ions/utils/unit";
import { css } from "@emotion/react";
import styled from "@emotion/styled";
import TextareaAutosize from "react-textarea-autosize";

export const disallowedProps: PropertyKey[] = ["invalid"];

export const StyledTextArea = styled(TextareaAutosize, {
	shouldForwardProp(propName: PropertyKey): boolean {
		return !disallowedProps.includes(propName);
	},
})<{ invalid?: boolean }>`
	width: 100%;
	min-height: ${pxToRem(200)};
	margin: 0;
	padding: ${pxToRem(32)} ${pxToRem(24)} ${pxToRem(12)};
	border: 0;
	border-radius: ${pxToRem(10)};
	font-family: inherit;
	font-size: ${pxToRem(16)};
	line-height: ${pxToRem(24)};
	caret-color: var(--focus-color);
	resize: none;
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

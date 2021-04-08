import { IconSize } from "@/ions/enums";
import { setOpacity } from "@/ions/utils/color";
import { pxToRem } from "@/ions/utils/unit";
import { css } from "@emotion/react";
import styled from "@emotion/styled";

export const StyledButtonBase = styled.button`
	display: flex;
	align-content: center;
	align-items: center;
	min-width: 0;
	min-height: 0;
	margin: 0;
	padding: 0;
	border: 0;
	background: none;
	color: inherit;
	font-family: inherit;
	font-size: inherit;
	appearance: none;

	&:focus {
		outline: 0;
	}
`;

export const StyledIconButton = styled(StyledButtonBase)<{
	size: IconSize;
	primary?: boolean;
	active?: boolean;
	type: "button";
}>`
	position: relative;
	justify-content: center;
	border-radius: ${pxToRem(4)};

	&::before {
		content: "";
		position: absolute;
		z-index: 0;
		top: 50%;
		left: 50%;
		width: ${pxToRem(48)};
		height: ${pxToRem(48)};
		transform: translate(-50%, -50%);
		box-shadow: inset 0 0 0 var(--debug-stroke) var(--debug-color);
	}

	svg {
		position: relative;
		z-index: 1;
		pointer-events: none;
	}

	${({
		size,
		primary,
		active,
		theme: {
			ui: {
				colors: {
					primary: { background, color },
				},
			},
		},
	}) => css`
		color: ${active ? color : primary ? background : "currentColor"};
		background: ${active ? background : "none"};
		height: ${pxToRem(size + 8)};
		width: ${pxToRem(size + 8)};

		&:focus-visible {
			background: ${active ? background : setOpacity(background, 0.3)};
		}
		&:active {
			background: ${active ? background : setOpacity(background, 0.2)};
		}
	`};
`;

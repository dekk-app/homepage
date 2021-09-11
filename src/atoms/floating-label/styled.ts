import { pxToRem } from "@/ions/utils/unit";
import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { StyledFloatingLabelProps } from "./types";

export const StyledFloatingLabel = styled.span<StyledFloatingLabelProps>`
	display: flex;
	position: absolute;
	z-index: 1;
	top: ${pxToRem(30)};
	left: ${pxToRem(24)};
	transform-origin: 0 0;
	transition-property: transform;
	will-change: transform;
	transition-timing-function: ease-in-out;
	font-weight: 400;
	white-space: nowrap;
	${({ theme, floating, initial }) =>
		css`
			transition-duration: ${initial ? "0s" : theme.speeds.fast};
			transform: ${floating
				? `scale3d(${10 / 16}, ${10 / 16}, 1) translate3d(0, ${pxToRem(-32)}, 0)`
				: "scale3d(1, 1, 1) translate3d(0, -50%, 0)"};
		`};
`;

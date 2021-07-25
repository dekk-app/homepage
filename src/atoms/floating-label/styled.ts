import { pxToRem } from "@/ions/utils/unit";
import { css } from "@emotion/react";
import styled from "@emotion/styled";

export const StyledFloatingLabel = styled.span<{ floating?: boolean; initial?: boolean }>`
	display: flex;
	position: absolute;
	top: ${pxToRem(28)};
	left: ${pxToRem(24)};
	transform-origin: 0 0;
	transition-property: transform;
	will-change: transform;
	transition-timing-function: ease-in-out;
	font-weight: 400;
	${({ floating, initial }) =>
		css`
			transition-duration: ${initial ? "0s" : "0.125s"};
			transform: ${floating
				? `scale3d(${10 / 14}, ${10 / 14}, 1) translate3d(0, ${pxToRem(-25)}, 0)`
				: "scale3d(1, 1, 1) translate3d(0, -50%, 0)"};
		`};
`;

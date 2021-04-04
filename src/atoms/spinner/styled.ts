import { pxToRem } from "@/ions/utils/unit";
import { css, keyframes } from "@emotion/react";
import styled from "@emotion/styled";

export const spin = keyframes`
	to {
		transform: rotate3d(0 ,0, 1, 1turn);
	}
`;

export const StyledSpinner = styled.div`
	position: fixed;
	top: 50%;
	left: 50%;
	width: ${pxToRem(96)};
	height: ${pxToRem(96)};
	margin: ${pxToRem(-48)};
	animation: ${spin} 0.5s infinite;
	border: ${pxToRem(10)} solid;
	border-radius: 50%;
	${({
		theme: {
			ui: {
				colors: {
					primary: { background },
				},
			},
		},
	}) => css`
		border-color: ${background} transparent;
	`};
`;

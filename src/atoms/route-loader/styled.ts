import { palette } from "@/ions/theme";
import { pxToRem } from "@/ions/utils/unit";
import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { StyledLoaderProps } from "./types";

export const StyledLoader = styled.div<StyledLoaderProps>`
	position: fixed;
	z-index: 1000;
	top: 0;
	right: 0;
	left: 0;
	height: ${pxToRem(3)};
	pointer-events: none;

	&::before {
		content: "";
		position: absolute;
		top: 0;
		right: 0;
		bottom: 0;
		left: 0;
		transform: scale3d(0, 1, 1);
		transform-origin: 0 0;
		background: ${palette.brand};
		${({ loading, loaded }) => css`
			transition: ${loading ? "5s" : loaded ? "0.2s" : "0s"};
			transform: scale3d(${loading ? 0.5 : loaded ? 1 : 0}, 1, 1);
		`};
	}
`;

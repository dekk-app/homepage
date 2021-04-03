import { pxToRem } from "@/ions/utils/unit";
import { css } from "@emotion/react";
import styled from "@emotion/styled";

export const StyledArtboard = styled.div`
	visibility: visible;
	position: absolute;
	top: 0;
	left: 0;
	background: white;
	color: black;
	pointer-events: all;
	${({
		theme: {
			ui: {
				molecules: {
					artboard: { border },
				},
			},
		},
	}) => css`
		box-shadow: 0 0 0 1px ${border};
	`};
`;

export const StyledArtboardTitle = styled.div`
	position: absolute;
	bottom: 100%;
	left: 0;
	overflow: hidden;
	transform-origin: 0 100%;
	font-size: ${pxToRem(12)};
	text-overflow: ellipsis;
	white-space: nowrap;
	pointer-events: none;
	user-select: none;
	${({
		theme: {
			ui: {
				layout: {
					main: { color },
				},
			},
		},
	}) => css`
		color: ${color};
	`};
`;
export const StyledArtboardPreview = styled(StyledArtboard)`
	transform-origin: 0 0;
	pointer-events: none;
`;

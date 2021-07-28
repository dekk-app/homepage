import { pxToRem } from "@/ions/utils/unit";
import { css } from "@emotion/react";
import styled from "@emotion/styled";

export const StyledButtonGroup = styled.div`
	display: grid;
	position: sticky;
	bottom: 0;
	grid-template-columns: 1fr auto;
	justify-content: start;
	${({ theme }) => css`
		grid-column-gap: ${pxToRem(theme.spaces.xs)};
		padding: ${pxToRem(theme.spaces.m)} 0 ${pxToRem(theme.spaces.l)};
		background: ${theme.ui.colors.dark.background};
		color: ${theme.ui.colors.dark.color};
	`};
`;

export const StyledModal = styled.div`
	position: fixed;
	top: 50%;
	left: 50%;
	width: 100%;
	height: 100%;
	overflow: auto;
	transform: translate(-50%, -50%);
	${({ theme }) => css`
		padding: ${pxToRem(theme.spaces.l)} calc(var(--gap-x) / 2 + var(--grid-padding)) 0;
		background: ${theme.ui.colors.dark.background};
		color: ${theme.ui.colors.dark.color};

		@media screen and ${theme.mq.m} {
			width: 600px;
			max-width: calc(100vw - ${pxToRem(theme.spaces.xl)});
			height: auto;
			max-height: calc(100vh - ${pxToRem(theme.spaces.xl)});
			border-radius: ${theme.shapes.m};
			box-shadow: ${theme.shadows.l};
		}
	`};
`;

export const StyledModalBackdrop = styled.div`
	display: none;
	position: fixed;
	top: 0;
	right: 0;
	bottom: 0;
	left: 0;
	background: rgba(0, 0, 0, 0.3);
	${({ theme }) => css`
		@media screen and ${theme.mq.m} {
			display: block;
		}
	`};
`;

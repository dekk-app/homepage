import { StyledIconButton } from "@/atoms/icon-button/styled";
import { pxToRem } from "@/ions/utils/unit";
import { ModalActionProps } from "@/molecules/modal/types";
import { css } from "@emotion/react";
import styled from "@emotion/styled";

export const StyledModalActions = styled.footer<ModalActionProps>`
	display: grid;
	z-index: 1;
	bottom: calc(var(--padding-y) * -1);
	grid-template-columns: 1fr auto;
	justify-content: start;
	${({ theme, sticky }) => css`
		position: ${sticky ? "sticky" : "static"};
		grid-column-gap: ${pxToRem(theme.spaces.xs)};
		margin: 0 calc(var(--padding-x) * -1) ${sticky ? "calc(var(--padding-y) * -1)" : ""};
		padding: ${sticky ? "var(--padding-y)" : 0} var(--padding-x);
		background: ${theme.ui.colors.dark.background};
		color: ${theme.ui.colors.dark.color};
	`};
`;

export const StyledModalHeader = styled.header`
	position: sticky;
	z-index: 1;
	top: calc(var(--padding-y) * -1);
	margin: calc(var(--padding-y) * -1) calc(var(--padding-x) * -1) 0;
	padding: var(--padding-y) var(--padding-x);
	${({ theme }) => css`
		background: ${theme.ui.colors.dark.background};
		color: ${theme.ui.colors.dark.color};
	`};
`;

export const StyledModalContent = styled.div`
	display: flex;
	flex: 1;
	flex-direction: column;
`;

export const StyledModal = styled.div`
	--padding-x: calc(var(--gap-x) / 2 + var(--grid-padding));

	display: flex;
	position: fixed;
	z-index: 10;
	top: 50%;
	left: 50%;
	flex-direction: column;
	width: 100%;
	height: 100%;
	overflow: auto;
	transform: translate(-50%, -50%);
	${({ theme }) => css`
		--padding-y: ${pxToRem(theme.spaces.m)};

		padding: var(--padding-y) var(--padding-x);
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
	z-index: 10;
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

export const StyledModalIconButton = styled(StyledIconButton)`
	pointer-events: all;
`;

export const StyledModalIconButtonWrapper = styled.div`
	display: flex;
	position: sticky;
	z-index: 2;
	justify-content: flex-end;
	pointer-events: none;
	${({ theme }) => css`
		top: ${pxToRem(theme.spaces.xs)};
		right: ${pxToRem(theme.spaces.s)};
	`};
`;

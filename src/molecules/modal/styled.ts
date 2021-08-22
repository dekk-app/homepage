import { StyledIconButton } from "@/atoms/icon-button/styled";
import { pxToRem } from "@/ions/utils/unit";
import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { ModalActionProps, ModalContentProps, ModalHeaderProps, StyledModalProps } from "./types";

export const StyledModalActions = styled.footer<ModalActionProps>`
	display: grid;
	z-index: 1;
	bottom: calc(var(--padding-y) * -1);
	justify-content: start;
	background: var(--background);
	color: var(--color);
	${({ theme, sticky, secondary }) => css`
		position: ${sticky ? "sticky" : "static"};
		grid-template-columns: ${secondary ? "1fr 1fr" : "1fr auto"};
		grid-column-gap: ${pxToRem(theme.spaces.xs)};
		grid-row-gap: ${pxToRem(theme.spaces.xs)};
		margin: 0 calc(var(--padding-x) * -1) ${sticky ? "calc(var(--padding-y) * -1)" : ""};
		padding: ${sticky ? "var(--padding-y)" : 0} var(--padding-x);
	`};
`;

export const StyledModalHeader = styled.header<ModalHeaderProps>`
	position: sticky;
	z-index: 1;
	top: calc(var(--padding-y) * -1);
	margin: calc(var(--padding-y) * -1) calc(var(--padding-x) * -1) 0;
	background: var(--background);
	color: var(--color);
	${({ raw }) => css`
		padding: ${raw ? 0 : "var(--padding-y)"} var(--padding-x);
	`};
`;

export const StyledModalContent = styled.div<ModalContentProps>`
	display: flex;
	flex: 1;
	flex-direction: column;
	${({ theme, raw }) => css`
		padding: ${raw ? 0 : pxToRem(theme.spaces.s)} 0;
	`};
`;
const styles = {
	top: {
		center: "50%",
		bottom: "auto",
		bottomRight: "auto",
	},
	right: {
		center: "auto",
		bottom: "0",
		bottomRight: "0",
	},
	bottom: {
		center: "auto",
		bottom: "0",
		bottomRight: "0",
	},
	left: {
		center: "50%",
		bottom: "0",
		bottomRight: "auto",
	},
	transform: {
		center: "translate(-50%, -50%)",
		bottom: "none",
		bottomRight: "none",
	},
	width: {
		center: "100%",
		bottom: "auto",
		bottomRight: "auto",
	},
	height: {
		center: "100%",
		bottom: "auto",
		bottomRight: "auto",
	},
};
const stylesM = {
	width: {
		center: "600px",
		bottom: "auto",
		bottomRight: "600px",
	},
};

export const StyledModal = styled.div<StyledModalProps>`
	--padding-x: calc(var(--gap-x) / 2 + var(--grid-padding));

	display: flex;
	position: fixed;
	z-index: 10;
	flex-direction: column;
	overflow: auto;
	${({ theme, dark, anchor }) => css`
		--padding-y: ${pxToRem(theme.spaces.m)};
		--background: ${dark ? theme.ui.colors.dark.background : theme.ui.colors.light.background};
		--color: ${dark ? theme.ui.colors.dark.color : theme.ui.colors.light.color};

		top: ${styles.top[anchor]};
		right: ${styles.right[anchor]};
		bottom: ${styles.bottom[anchor]};
		left: ${styles.left[anchor]};
		width: ${styles.width[anchor]};
		height: ${styles.height[anchor]};
		transform: ${styles.transform[anchor]};
		padding: var(--padding-y) var(--padding-x);
		background: var(--background);
		color: var(--color);

		${theme.mq.m} {
			width: ${stylesM.width[anchor]};
			max-width: ${anchor === "bottom"
				? "100vw"
				: `calc(100vw - ${pxToRem(theme.spaces.xl)})`};
			height: auto;
			max-height: calc(100vh - ${pxToRem(theme.spaces.xl)});
			margin: ${anchor === "bottomRight" ? pxToRem(theme.spaces.m) : 0};
			border-radius: ${anchor === "bottom" ? 0 : theme.shapes.m};
			box-shadow: ${anchor === "bottom" ? theme.shadows[0] : theme.shadows.l};
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
		${theme.mq.m} {
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
	order: -1;
	pointer-events: none;
	${({ theme }) => css`
		top: ${pxToRem(theme.spaces.xxs)};
		right: ${pxToRem(theme.spaces.xs)};
		margin: 0 calc(var(--padding-x) * -0.5);
	`};
`;

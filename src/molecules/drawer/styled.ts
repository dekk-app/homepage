import { pxToRem } from "@/ions/utils/unit";
import I18nLink from "@/molecules/i18n-link";
import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { StyledDrawerLinkProps, StyledDrawerProps } from "./types";

export const StyledDrawer = styled.aside<StyledDrawerProps>`
	position: fixed;
	z-index: 10;
	top: 0;
	bottom: 0;
	left: 0;
	width: ${pxToRem(300)};
	overflow: hidden;
	${({ theme, dark }) => css`
		max-width: calc(100vw - ${pxToRem(theme.spaces.xl)});
		background: ${dark ? theme.ui.colors.dark.background : theme.ui.colors.light.background};
		color: ${dark ? theme.ui.colors.dark.color : theme.ui.colors.light.color};
		box-shadow: ${theme.shadows.m};
	`};
`;

export const StyledDrawerBackdrop = styled.div`
	position: fixed;
	z-index: 10;
	top: 0;
	right: 0;
	bottom: 0;
	left: 0;
	background: rgba(0, 0, 0, 0.3);
`;

export const StyledDrawerHeader = styled.header`
	display: flex;
	align-content: center;
	align-items: center;
	justify-content: space-between;
	height: ${pxToRem(68)};
	${({ theme }) => css`
		padding: 0 ${pxToRem(theme.spaces.s)} 0 ${pxToRem(theme.spaces.l)};
		box-shadow: inset 0 -1px 0 0 rgba(0, 0, 0, 0.2);
	`};
`;
export const StyledDrawerContent = styled.div`
	${({ theme }) => css`
		padding: ${pxToRem(theme.spaces.s)};
	`};
`;

export const StyledDrawerLink = styled(I18nLink)<StyledDrawerLinkProps>`
	display: flex;
	${({ a11y }) =>
		a11y &&
		css`
			align-content: center;
			align-items: center;
			min-height: ${pxToRem(48)};
			min-width: ${pxToRem(48)};
		`};
	${({ theme }) => css`
		width: calc(100% + ${pxToRem(theme.spaces.s * 2)});
		margin: 0 ${pxToRem(-theme.spaces.s)};
		padding: 0 ${pxToRem(theme.spaces.s)};
	`};
`;

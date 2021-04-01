import { Icon } from "@/atoms/icon";
import { StyledButtonBase } from "@/atoms/icon-button/styled";
import { setOpacity } from "@/ions/utils/color";
import { pxToRem } from "@/ions/utils/unit";
import { PropsWithTheme } from "@/types/theme";
import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { motion } from "framer-motion";

export const StyledLayoutWrapper = styled.div`
	display: grid;
	grid-template-areas: "Header" "Main";
	grid-template-columns: 1fr;
	grid-template-rows: ${pxToRem(60)} 1fr;
	height: 100vh;
	margin: 0;
	overflow: hidden;

	@media (min-width: ${pxToRem(1120)}) {
		grid-template-areas: "Header Header Header" "SidebarLeft Main SidebarRight";
		grid-template-columns: ${pxToRem(250)} 1fr ${pxToRem(300)};

		/* Debugging helper
		 * @todo remove helper
		 */
		&::before {
			content: "";
			position: fixed;
			z-index: 9999;
			top: 60px;
			right: 300px;
			bottom: 0;
			left: 250px;
			box-shadow: inset 0 0 0 var(--debug-stroke) var(--debug-color);
			pointer-events: none;
		}
	}
`;

export const StyledCanvasWrapper = styled.div`
	position: fixed;
	top: 0;
	right: 0;
	bottom: 0;
	left: 0;
`;

export const StyledHeader = styled.div<PropsWithTheme>`
	display: flex;
	flex: 1;
	align-content: center;
	align-items: center;
	height: 100%;
	padding: 0 ${pxToRem(12)};
	${({
		theme: {
			ui: {
				layout: {
					sidebar: { background, color, border },
				},
			},
		},
	}) => css`
		background: ${background};
		box-shadow: inset 0 -1px 0 ${border};
		color: ${color};
	`};
`;
export const StyledPreview = styled.div<PropsWithTheme>`
	position: relative;
	width: ${pxToRem(50)};
	height: ${pxToRem(28)};
	margin-left: ${pxToRem(-12)};
	overflow: hidden;
	border-radius: ${pxToRem(2)};
	pointer-events: none;
	${({
		theme: {
			ui: {
				layout: {
					sidebar: { border },
				},
			},
		},
	}) => css`
		box-shadow: 0 0 0 1px ${border};
	`};
`;

export const StyledItemTitle = styled.span`
	display: inline-flex;
	flex: 1;
	align-content: center;
	align-items: center;
	height: ${pxToRem(28)};
	padding-left: ${pxToRem(8)};
	font-size: ${pxToRem(12)};
	font-weight: 600;
`;

export const StyledList = styled.ul<PropsWithTheme<HTMLUListElement>>`
	flex: 1;
	margin: 0;
	padding: ${pxToRem(16)} ${pxToRem(8)};
	overflow-x: hidden;
	overflow-y: auto;
	-webkit-overflow-scrolling: touch;
	list-style: none;
`;

export const StyledSidebarHeader = styled.header<PropsWithTheme>`
	display: flex;
	align-content: center;
	align-items: center;
	justify-content: space-between;
	height: ${pxToRem(68)};
	margin: 0 ${pxToRem(16)};
	font-size: ${pxToRem(12)};
	font-weight: 400;
	${({
		theme: {
			ui: {
				layout: {
					sidebar: { border },
				},
			},
		},
	}) => css`
		box-shadow: 0 1px 0 ${border};
	`};
`;

export const StyledItem = styled.li<PropsWithTheme<HTMLLIElement>>`
	display: flex;
	margin: ${pxToRem(2)} 0;
	padding: 0;
	list-style: none;
`;

export const StyledSidebarInner = styled.div`
	display: flex;
	flex-direction: column;
	height: 100%;
`;

export const StyledItemWrapper = styled.div<
	{ focused?: boolean; active?: boolean } & PropsWithTheme
>`
	display: flex;
	align-content: center;
	align-items: center;
	width: 100%;
	margin: 0;
	padding: ${pxToRem(8)};
	border: 0;
	border-radius: ${pxToRem(8)};
	${({
		theme: {
			ui: {
				colors: {
					primary: { background, color },
				},
			},
		},
		focused,
		active,
	}) =>
		css`
			background: ${active ? background : focused ? setOpacity(background, 0.3) : "none"};
			color: ${active ? color : "currentColor"};
		`};
`;

export const StyledChildrenWrapper = styled(motion.ul)`
	width: 100%;
	margin: 0;
	padding: 0 0 0 ${pxToRem(32)};
	overflow: hidden;
	list-style: none;
`;

export const StyledChild = styled.li`
	display: flex;
	align-content: center;
	align-items: center;
	width: 100%;
	height: ${pxToRem(40)};
	margin: 0;
	padding: 0 ${pxToRem(8)};
	font-size: ${pxToRem(12)};
	list-style: none;
`;

export const StyledGreyIcon = styled(Icon)<PropsWithTheme<SVGSVGElement>>`
	margin-right: ${pxToRem(12)};
	color: rgb(83, 83, 83);
`;

export const StyledItemButton = styled(StyledButtonBase)<
	{ focused?: boolean; type: "button" } & PropsWithTheme<HTMLButtonElement>
>`
	position: relative;
	flex: 1;
	margin-left: ${pxToRem(12)};

	&::before {
		content: "";
		position: absolute;
		z-index: 0;
		top: 50%;
		left: 0;
		width: calc(100% + ${pxToRem(8)});
		height: ${pxToRem(48)};
		transform: translateY(-50%);
		box-shadow: inset 0 0 0 var(--debug-stroke) var(--debug-color);
	}
`;

export const StyledFlex = styled.div`
	display: flex;
	flex: 1;
	align-content: center;
	align-items: center;
	justify-content: center;
`;
export const StyledIconGrid = styled.div`
	display: grid;
	grid-column-gap: ${pxToRem(16)};
	grid-template-columns: repeat(2, 1fr);
`;
export const StyledSeparator = styled.div<PropsWithTheme>`
	position: absolute;
	top: 50%;
	right: 0;
	width: 1px;
	height: ${pxToRem(18)};
	margin: ${pxToRem(-9)} 0;
	${({
		theme: {
			ui: {
				layout: {
					header: { border },
				},
			},
		},
	}) => css`
		background: ${border};
	`};
`;
export const StyledSpace = styled.div`
	display: flex;
	position: relative;
	align-content: center;
	align-items: center;
	width: ${pxToRem(304)};
	margin: 0 ${pxToRem(8)};
`;
export const StyledTitle = styled.h1`
	margin: 0;
	font-size: ${pxToRem(14)};
	font-weight: 400;
`;

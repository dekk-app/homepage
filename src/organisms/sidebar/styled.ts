import { pxToRem } from "@/ions/utils/unit";
import { SidebarProps } from "@/types";
import { css } from "@emotion/react";
import styled from "@emotion/styled";

export const areas = {
	left: "SidebarLeft",
	right: "SidebarRight",
};

export const transforms = {
	left: -100,
	right: 100,
};

export const StyledSidebar = styled.aside<SidebarProps>`
	position: fixed;
	z-index: 1;
	top: ${pxToRem(60)};
	bottom: 0;
	height: calc(100vh - ${pxToRem(60)});
	${({
		theme: {
			ui: {
				layout: {
					sidebar: { background, color, border },
				},
			},
		},
		anchor,
	}) => css`
		grid-area: ${areas[anchor]};
		${anchor}: 0;
		transform: translate3d(${transforms[anchor]}%, 0, 0);
		background: ${background};
		color: ${color};
		box-shadow: inset ${anchor === "left" ? -1 : 1}px 0 0 ${border};
	`};

	@media (min-width: ${pxToRem(1120)}) {
		position: relative;
		top: unset;
		bottom: unset;
		${({ anchor }) => css`
			${anchor}: unset;
			transform: unset;
		`};
	}
`;

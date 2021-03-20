import { css } from "@emotion/react";
import styled from "@emotion/styled";
import React from "react";

export type SidebarAnchor = "left" | "right";

export interface SidebarProps {
	anchor: SidebarAnchor;
}

const areas = {
	left: "SidebarLeft",
	right: "SidebarRight",
};

const transforms = {
	left: -100,
	right: 100,
};

export const StyledSidebar = styled.aside<SidebarProps>`
	position: fixed;
	z-index: 1;
	top: 4rem;
	bottom: 0;
	padding: 1rem;
	background: orange;
	color: black;
	${({ anchor }) => css`
		grid-area: ${areas[anchor]};
		${anchor}: 0;
		transform: translate3d(${transforms[anchor]}%, 0, 0);
	`};

	@media (min-width: 800px) {
		position: unset;
		top: unset;
		bottom: unset;
		${({ anchor }) => css`
			${anchor}: unset;
			transform: unset;
		`};
	}
`;

const Sidebar: React.FC<SidebarProps> = ({ children, anchor, ...props }) => (
	<StyledSidebar {...props} anchor={anchor} data-test-id={`sidebar:${anchor}`}>
		{children}
	</StyledSidebar>
);

export default Sidebar;

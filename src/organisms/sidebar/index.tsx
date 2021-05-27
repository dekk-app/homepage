import { StyledSidebar } from "@/organisms/sidebar/styled";
import { SidebarProps } from "@/types";
import React from "react";

const Sidebar: React.FC<SidebarProps> = ({ children, anchor, ...props }) => (
	<StyledSidebar {...props} anchor={anchor} data-test-id={`sidebar:${anchor}`}>
		{children}
	</StyledSidebar>
);

const areEqual = () => {
	return true;
};

export default React.memo(Sidebar, areEqual);

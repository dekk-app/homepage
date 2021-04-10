import React from "react";
import { StyledSidebarInner } from "./styled";

const SidebarRight: React.FC = () => {
	return <StyledSidebarInner>Sidebar Right</StyledSidebarInner>;
};

const areEqual = () => {
	return true;
};

export default React.memo(SidebarRight, areEqual);

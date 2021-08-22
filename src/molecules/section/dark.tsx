import React, { FC } from "react";
import { StyledDarkSection } from "./styled";

const DarkSection: FC = ({ children, ...props }) => {
	return <StyledDarkSection {...props}>{children}</StyledDarkSection>;
};

export default DarkSection;

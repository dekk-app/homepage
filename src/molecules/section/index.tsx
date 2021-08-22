import React, { FC } from "react";
import { StyledSection } from "./styled";

const Section: FC = ({ children, ...props }) => {
	return <StyledSection {...props}>{children}</StyledSection>;
};

export default Section;

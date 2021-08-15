import React, { FC } from "react";
import { StyledLightSection } from "./styled";

const LightSection: FC = ({ children, ...props }) => {
	return <StyledLightSection {...props}>{children}</StyledLightSection>;
};

export default LightSection;

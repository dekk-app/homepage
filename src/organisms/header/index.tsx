import React from "react";
import { StyledHeader } from "./styled";

const Header: React.FC = ({ children }) => {
	return <StyledHeader data-test-id="header">{children}</StyledHeader>;
};

const areEqual = () => {
	return true;
};

export default React.memo(Header, areEqual);

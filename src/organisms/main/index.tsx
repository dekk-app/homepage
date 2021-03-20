import React from "react";
import { StyledMain } from "./styled";

const Main: React.FC = ({ children, ...props }) => <StyledMain {...props}>{children}</StyledMain>;

export default Main;

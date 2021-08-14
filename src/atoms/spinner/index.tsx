import React from "react";
import { StyledSpinner } from "./styled";
import { SpinnerProps } from "./types";

const Spinner = (props: SpinnerProps) => {
	return <StyledSpinner {...props} />;
};

export default Spinner;

import { StyledSpinner } from "@/atoms/spinner/styled";
import { SpinnerProps } from "@/atoms/spinner/types";
import React from "react";

const Spinner = (props: SpinnerProps) => {
	return <StyledSpinner {...props} />;
};

export default Spinner;

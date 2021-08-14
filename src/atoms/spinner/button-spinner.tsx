import { pxToRem } from "@/ions/utils/unit";
import React from "react";
import { StyledButtonSpinner } from "./styled";
import { SpinnerProps } from "./types";

const ButtonSpinner = (props: SpinnerProps) => {
	return <StyledButtonSpinner size={pxToRem(22)} {...props} />;
};

export default ButtonSpinner;

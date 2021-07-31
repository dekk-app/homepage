import { StyledButtonSpinner } from "@/atoms/spinner/styled";
import { SpinnerProps } from "@/atoms/spinner/types";
import { pxToRem } from "@/ions/utils/unit";
import React from "react";

const ButtonSpinner = (props: SpinnerProps) => {
	return <StyledButtonSpinner size={pxToRem(22)} {...props} />;
};

export default ButtonSpinner;

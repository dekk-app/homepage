import { icons } from "@/ions/icons";
import React from "react";
import { StyledButtonSvg, StyledPath } from "./styled";
import { IconProps } from "./types";

const ButtonIcon = (props: IconProps) => {
	return (
		<StyledButtonSvg {...props} height={24} width={24} viewBox="0 0 24 24">
			<StyledPath fill="currentColor" d={icons[props.icon]} />
		</StyledButtonSvg>
	);
};

export default ButtonIcon;

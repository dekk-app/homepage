import { icons } from "@/ions/icons";
import React from "react";
import { StyledPath, StyledSvg } from "./styled";
import { IconProps } from "./types";

const Icon = (props: IconProps) => {
	return (
		<StyledSvg {...props} height={24} width={24} viewBox="0 0 24 24">
			<StyledPath fill="currentColor" d={icons[props.icon]} />
		</StyledSvg>
	);
};

export default Icon;

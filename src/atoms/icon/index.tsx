import { StyledPath, StyledSvg } from "@/atoms/icon/styled";
import React from "react";
import { icons } from "../../ions/icons";
import { IconProps } from "./types";

const Icon = (props: IconProps) => {
	return (
		<StyledSvg {...props} height={24} width={24} viewBox="0 0 24 24">
			<StyledPath fill="currentColor" d={icons[props.icon]} />
		</StyledSvg>
	);
};

export default Icon;

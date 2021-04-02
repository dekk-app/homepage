import { icons } from "@/ions/icons";
import { IconProps } from "@/types";
import React from "react";
import { StyledPath, StyledSvg } from "./styled";

export const Icon: React.FC<IconProps> = ({ icon, size, ...props }) => {
	return (
		<StyledSvg {...props} height={size} width={size} viewBox={`0 0 ${size} ${size}`}>
			<StyledPath d={icons[size][icon]} />
		</StyledSvg>
	);
};
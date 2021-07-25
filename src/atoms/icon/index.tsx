import React from "react";
import { icons } from "./icons";
import { IconProps } from "./types";

const Icon = (props: IconProps) => {
	return (
		<svg height={24} width={24} viewBox="0 0 24 24">
			<path fill="currentColor" d={icons[props.icon]} />
		</svg>
	);
};

export default Icon;

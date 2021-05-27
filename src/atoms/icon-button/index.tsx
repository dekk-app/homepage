import Icon from "@/atoms/icon";
import { IconButtonProps } from "@/types";
import React from "react";
import { StyledIconButton } from "./styled";

const IconButton = React.forwardRef<HTMLButtonElement, IconButtonProps>(
	({ icon, active, type, size, ...props }, ref) => {
		return (
			<StyledIconButton {...props} ref={ref} size={size} active={active} type={type}>
				<Icon size={size} icon={icon} />
			</StyledIconButton>
		);
	}
);

const areEqual = () => {
	return true;
};

export default React.memo(IconButton, areEqual);

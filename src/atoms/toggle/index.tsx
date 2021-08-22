import React from "react";
import { StyledInput, StyledToggle, StyledToggleWrapper } from "./styled";
import { ToggleProps } from "./types";

const Toggle = ({ checked, onChange, invalid, disabled, ...props }: ToggleProps) => {
	return (
		<StyledToggleWrapper {...props}>
			<StyledInput
				type="checkbox"
				checked={checked}
				invalid={invalid}
				disabled={disabled}
				onChange={onChange}
			/>
			<StyledToggle checked={checked} invalid={invalid} disabled={disabled} />
		</StyledToggleWrapper>
	);
};

export default Toggle;

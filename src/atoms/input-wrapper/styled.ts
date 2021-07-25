import { pxToRem } from "@/ions/utils/unit";
import { css } from "@emotion/react";
import styled from "@emotion/styled";

export const StyledInputWrapper = styled.label<{ focused?: boolean; fullWidth?: boolean }>`
	position: relative;
	margin: 0 auto ${pxToRem(16)};
	padding: 0;
	${({ fullWidth }) => css`
		width: ${fullWidth ? "100%" : "auto"};
	`}
`;

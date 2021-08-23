import { pxToRem } from "@/ions/utils/unit";
import { css } from "@emotion/react";
import styled from "@emotion/styled";

export interface StyledErrorTextProps {
	arrow?: boolean;
}
export const StyledErrorText = styled.div<StyledErrorTextProps>`
	--tip-size: ${pxToRem(8)};

	position: relative;
	width: 100%;
	margin: ${pxToRem(-6)} 0 ${pxToRem(12)};
	padding: ${pxToRem(6)} ${pxToRem(24)};
	${({ theme, arrow }) => css`
		border-radius: ${theme.shapes.s};
		background: ${theme.ui.atoms.errorText.background};
		color: ${theme.ui.atoms.errorText.color};

		${arrow &&
		css`
			&::before {
				content: "";
				position: absolute;
				bottom: 100%;
				left: calc(var(--tip-size) * 2);
				border: var(--tip-size) solid transparent;
				border-bottom-color: ${theme.ui.atoms.errorText.background};
				border-top: 0;
			}
		`};
	`};
`;

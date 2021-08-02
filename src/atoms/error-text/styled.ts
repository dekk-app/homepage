import { pxToRem } from "@/ions/utils/unit";
import { css } from "@emotion/react";
import styled from "@emotion/styled";

export const StyledErrorText = styled.div`
	--tip-size: ${pxToRem(8)};

	position: relative;
	width: 100%;
	margin: ${pxToRem(-6)} 0 ${pxToRem(12)};
	padding: ${pxToRem(6)} ${pxToRem(24)};

	&::before {
		content: "";
		position: absolute;
		bottom: 100%;
		left: calc(var(--tip-size) * 2);
		border: var(--tip-size) solid transparent;
		border-top: 0;
	}

	${({ theme }) => css`
		border-radius: ${theme.shapes.s};
		background: ${theme.ui.atoms.errorText.background};
		color: ${theme.ui.atoms.errorText.color};

		&::before {
			border-bottom-color: ${theme.ui.atoms.errorText.background};
		}
	`};
`;

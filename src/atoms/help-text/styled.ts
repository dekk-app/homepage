import { pxToRem } from "@/ions/utils/unit";
import { css } from "@emotion/react";
import styled from "@emotion/styled";

export const StyledHelpText = styled.div`
	width: 100%;
	margin: ${pxToRem(-6)} 0 ${pxToRem(12)};
	padding: ${pxToRem(6)} ${pxToRem(24)};
	${({ theme }) => css`
		border-radius: ${theme.shapes.s};
		background: ${theme.ui.atoms.helpText.background};
		color: ${theme.ui.atoms.helpText.color};
	`};
`;

import { pxToRem } from "@/ions/utils/unit";
import { css } from "@emotion/react";
import styled from "@emotion/styled";

export const StyledHelpText = styled.div`
	width: 100%;
	margin-top: ${pxToRem(-6)};
	margin-bottom: ${pxToRem(12)};
	padding-left: ${pxToRem(16)};
	border-radius: ${pxToRem(10)};
	${({ theme }) => css`
		padding: ${pxToRem(6)} ${pxToRem(24)};
		background: ${theme.ui.atoms.helpText.background};
		color: ${theme.ui.atoms.helpText.color};
	`};
`;

export const StyledError = styled.span`
	${({ theme }) => css`
		color: ${theme.ui.molecules.inputField.error.color};
	`};
`;

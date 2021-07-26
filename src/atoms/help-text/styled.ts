import { pxToRem } from "@/ions/utils/unit";
import { css } from "@emotion/react";
import styled from "@emotion/styled";

export const StyledHelpText = styled.div`
	width: 100%;
	margin-top: ${pxToRem(-6)};
	margin-bottom: ${pxToRem(12)};
	padding-left: ${pxToRem(16)};
	${({ theme }) => css`
		padding: ${pxToRem(6)} ${pxToRem(24)};
		border-radius: ${theme.shapes.s};
		background: ${theme.ui.atoms.helpText.background};
		color: ${theme.ui.atoms.helpText.color};
	`};
`;

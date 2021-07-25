import { pxToRem } from "@/ions/utils/unit";
import { css } from "@emotion/react";
import styled from "@emotion/styled";

export const StyledErrorText = styled.div`
	width: 100%;
	margin-top: ${pxToRem(-6)};
	margin-bottom: ${pxToRem(12)};
	padding-left: ${pxToRem(16)};
	border-radius: ${pxToRem(10)};
	${({ theme }) => css`
		padding: ${pxToRem(6)} ${pxToRem(24)};
		background: ${theme.ui.atoms.errorText.background};
		color: ${theme.ui.atoms.errorText.color};
	`};
`;

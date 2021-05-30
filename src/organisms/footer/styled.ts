import { pxToRem } from "@/ions/utils/unit";
import { css } from "@emotion/react";
import styled from "@emotion/styled";

export const StyledFooter = styled.footer`
	${({ theme }) => css`
		padding: ${pxToRem(theme.spaces.xxl)} 0;
		background-color: ${theme.ui.colors.dark.background};
		color: ${theme.ui.colors.dark.color};
	`};
`;

import { pxToRem } from "@/ions/utils/unit";
import { css } from "@emotion/react";
import styled from "@emotion/styled";

export const StyledSection = styled.section`
	${({ theme }) => css`
		padding-top: ${pxToRem(theme.spaces.xxl)};
		padding-bottom: ${pxToRem(theme.spaces.xxl)};
	`};
`;

export const StyledDarkSection = styled(StyledSection)`
	${({ theme }) => css`
		background: ${theme.ui.colors.dark.background};
		color: ${theme.ui.colors.dark.color};
	`};
`;

export const StyledLightSection = styled(StyledSection)`
	${({ theme }) => css`
		background: ${theme.ui.colors.light.background};
		color: ${theme.ui.colors.light.color};
	`};
`;

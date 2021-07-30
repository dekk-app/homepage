import { StyledH2Text } from "@/atoms/typography/styled";
import { pxToRem } from "@/ions/utils/unit";
import { css } from "@emotion/react";
import styled from "@emotion/styled";

export const StyledProHeadline = styled(StyledH2Text)`
	margin: 0 0 ${pxToRem(32)};
`;

export const StyledProBox = styled.div`
	flex: 1;
	width: 100%;
	${({ theme }) => css`
		padding: ${pxToRem(theme.spaces.xl)} ${pxToRem(theme.spaces.l)};
		border-radius: ${theme.shapes.l};
		background-color: ${theme.ui.colors.primary.background};
		color: ${theme.ui.colors.primary.color};
	`};
`;

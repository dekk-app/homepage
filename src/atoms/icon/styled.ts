import { pxToRem } from "@/ions/utils/unit";
import { css } from "@emotion/react";
import styled from "@emotion/styled";

export const StyledSvg = styled.svg`
	${({ height, width }) => css`
		width: ${typeof width === "number" ? pxToRem(width) : width};
		height: ${typeof height === "number" ? pxToRem(height) : height};
	`};
`;

export const StyledButtonSvg = styled(StyledSvg)`
	${({ theme }) => css`
		margin-right: ${pxToRem(theme.spaces.s)};
	`};
`;

export const StyledPath = styled.path``;

import { pxToRem } from "@/ions/utils/unit";
import { css } from "@emotion/react";
import styled from "@emotion/styled";

export const StyledBreadcrumbList = styled.ol`
	display: block;
	padding: 0;
	list-style: none;
	${({ theme }) => css`
		margin: ${pxToRem(theme.spaces.xs)} 0;
	`};
`;

export const StyledBreadcrumbListItem = styled.li`
	display: inline-flex;
	position: relative;
	align-content: stretch;
	align-items: stretch;
	margin: 0;
	padding: 0;
	list-style: none;
	&:last-child {
		margin-right: 0;
	}
`;

export const StyledSvg = styled.svg`
	position: absolute;
	top: 50%;
	left: 100%;
	transform: translateY(-50%);
	pointer-events: none;
`;

export const StyledBreadcrumbSeparator = styled.span`
	display: inline-flex;
	align-content: center;
	align-items: center;
	pointer-events: none;
	${({ theme }) => css`
		padding: 0 ${pxToRem(theme.spaces.xxs)};
	`};
`;

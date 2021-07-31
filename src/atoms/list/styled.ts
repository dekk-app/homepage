import { StyledListItemProps, StyledSvgProps } from "@/atoms/list/types";
import Typography from "@/atoms/typography";
import { pxToRem } from "@/ions/utils/unit";
import { css } from "@emotion/react";
import styled from "@emotion/styled";

export const StyledListItem = styled(Typography)<StyledListItemProps>`
	padding: 0;
	list-style: none;
	${({ flat, theme }) => css`
		${!flat &&
		css`
			position: relative;
			margin-left: ${pxToRem(18 + theme.spaces.xs)};
		`};
	`};
`;

export const StyledList = styled(Typography)`
	padding: 0;
	list-style: none;
`;

export const StyledSvg = styled.svg<StyledSvgProps>`
	display: inline;
	vertical-align: middle;
	${({ theme, dedent }) => css`
		margin-left: ${dedent ? pxToRem(-theme.spaces.xs - 18) : 0};
		margin-right: ${pxToRem(theme.spaces.xs)};
	`};
`;

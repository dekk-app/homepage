import { StyledLink } from "@/atoms/typography/styled";
import { pxToRem } from "@/ions/utils/unit";
import { Column } from "@/molecules/grid";
import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { StyledHeaderProps } from "./types";

export const StyledHeader = styled.header<StyledHeaderProps>`
	display: flex;
	z-index: 1;
	align-content: center;
	align-items: center;
	height: ${pxToRem(68)};
	${({ theme, dark, elevated }) => css`
		padding: ${pxToRem(theme.spaces.xs)} 0;
		background: ${dark ? theme.ui.colors.dark.background : theme.ui.colors.light.background};
		color: ${dark ? theme.ui.colors.dark.color : theme.ui.colors.light.color};

		${theme.mq.l} {
			position: sticky;
			top: 0;
			transition: box-shadow ${theme.speeds.normal};
			will-change: box-shadow;
			box-shadow: ${elevated ? theme.shadows.m : theme.shadows[0]};
		}
	`};
`;

export const StyledHeaderColumn = styled(Column)`
	display: flex;
	align-content: center;
	align-items: center;
`;

export const StyledHeaderItemsColumn = styled(StyledHeaderColumn)<{ indented?: boolean }>`
	justify-content: flex-end;
	${({ theme, indented }) => css`
		${theme.mq.l} {
			padding-right: ${indented ? "var(--sticky-button-width)" : 0};
			transition: padding-right ${theme.speeds.normal};
			will-change: padding-right;
		}
		${StyledLink} {
			margin-left: ${pxToRem(theme.spaces.s)};
			${theme.mq.m} {
				margin-left: ${pxToRem(theme.spaces.l)};
			}
		}
	`};
`;

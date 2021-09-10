import { StyledLink } from "@/atoms/typography/styled";
import { setOpacity } from "@/ions/utils/color";
import { pxToRem } from "@/ions/utils/unit";
import { Column } from "@/molecules/grid";
import { HexColor } from "@/types/units";
import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { StyledHeaderProps } from "./types";

export const StyledHeader = styled.header<StyledHeaderProps>`
	display: flex;
	z-index: 1;
	align-content: center;
	align-items: center;
	${({ theme, dark, elevated }) => css`
		padding: ${pxToRem(theme.spaces.xs)} 0;
		height: ${pxToRem(theme.layout.header.height.xs)};

		${theme.mq.l} {
			position: sticky;
			top: 0;
			height: ${pxToRem(theme.layout.header.height.l)};
			background-color: ${dark
				? theme.ui.colors.dark.background
				: theme.ui.colors.light.background};
			color: ${dark ? theme.ui.colors.dark.color : theme.ui.colors.light.color};
			transition: box-shadow ${theme.speeds.normal};
			will-change: box-shadow;
			box-shadow: ${elevated ? theme.shadows.m : theme.shadows[0]};

			@supports (backdrop-filter: blur(1px)) {
				background-color: ${dark
					? setOpacity(theme.ui.colors.dark.background as HexColor, 80)
					: setOpacity(theme.ui.colors.light.background as HexColor, 80)};
				backdrop-filter: blur(${pxToRem(10)}) saturate(50%);
			}
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

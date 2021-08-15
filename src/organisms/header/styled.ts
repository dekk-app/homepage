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
	${({ theme, dark }) => css`
		padding: ${pxToRem(theme.spaces.xs)} 0;
		background: ${dark ? theme.ui.colors.dark.background : theme.ui.colors.light.background};
		color: ${dark ? theme.ui.colors.dark.color : theme.ui.colors.light.color};

		${theme.mq.l} {
			position: sticky;
			top: 0;
		}
	`};
`;

export const StyledHeaderColumn = styled(Column)`
	display: flex;
	align-content: center;
	align-items: center;
`;

export const StyledHeaderItemsColumn = styled(StyledHeaderColumn)`
	justify-content: flex-end;
`;

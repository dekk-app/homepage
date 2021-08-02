import { pxToRem } from "@/ions/utils/unit";
import { Column } from "@/molecules/grid";
import { css } from "@emotion/react";
import styled from "@emotion/styled";

export const StyledHeader = styled.header`
	display: flex;
	align-content: center;
	align-items: center;
	height: ${pxToRem(68)};
	${({ theme }) => css`
		padding: ${pxToRem(theme.spaces.xs)} 0;
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

import { pxToRem } from "@/ions/utils/unit";
import { Column } from "@/molecules/grid";
import { css } from "@emotion/react";
import styled from "@emotion/styled";

export const StyledHeader = styled.header`
	${({ theme }) => css`
		padding: ${pxToRem(theme.spaces.xs)} 0;
	`};
`;

export const StyledHeaderItems = styled(Column)`
	display: grid;
	align-content: center;
	align-items: center;
	justify-content: flex-end;
	${({ theme }) => css`
		grid-template-columns: repeat(auto-fit, minmax(${pxToRem(theme.spaces.m)}, auto));
		grid-gap: ${pxToRem(theme.spaces.m)};
	`};
`;

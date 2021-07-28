import Layout from "@/colonies/layout";
import { pxToRem } from "@/ions/utils/unit";
import { Column } from "@/molecules/grid";
import { css } from "@emotion/react";
import styled from "@emotion/styled";

export const StyledWishWrapper = styled(Column)`
	display: flex;
	align-content: flex-end;
	align-items: flex-end;
	justify-content: flex-end;
`;

export const StyledLayout = styled(Layout)`
	${({ theme }) => css`
		padding-bottom: ${pxToRem(theme.spaces.xxl * 2)};
	`};
`;

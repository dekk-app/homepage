import { pxToRem } from "@/ions/utils/unit";
import { Row } from "@/molecules/grid";
import { StyledCenteredColumn } from "@/molecules/grid/styled-column";
import { css } from "@emotion/react";
import styled from "@emotion/styled";

export const StyledSlot = styled(Row)`
	${({ theme }) => css`
		margin-top: ${pxToRem(theme.spaces.xxl)};
		margin-bottom: ${pxToRem(theme.spaces.xxl)};
	`};
`;

export const StyledSlotColumn = styled(StyledCenteredColumn)`
	${({ theme, order = "initial" }) => css`
		order: initial;
		${theme.mq.m} {
			order: ${order};
		}
	`};
`;

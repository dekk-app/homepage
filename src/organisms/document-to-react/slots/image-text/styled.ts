import { pxToRem } from "@/ions/utils/unit";
import { Row } from "@/molecules/grid";
import { css } from "@emotion/react";
import styled from "@emotion/styled";

export const StyledImageTextSlot = styled(Row)`
	${({ theme }) => css`
		margin-top: ${pxToRem(theme.spaces.xxl)};
		margin-bottom: ${pxToRem(theme.spaces.xxl)};
	`};
`;

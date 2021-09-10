import { pxToRem } from "@/ions/utils/unit";
import { css } from "@emotion/react";
import styled from "@emotion/styled";

export const StyledSearchField = styled.div`
	display: flex;
	width: 100%;
	${({ theme }) => css`
		padding: ${pxToRem(theme.spaces.xxs)} 0;
	`};
`;

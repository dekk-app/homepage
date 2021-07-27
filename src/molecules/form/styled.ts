import { pxToRem } from "@/ions/utils/unit";
import { css } from "@emotion/react";
import styled from "@emotion/styled";

export const StyledFieldset = styled.fieldset`
	display: flex;
	flex-direction: column;
	align-content: center;
	align-items: center;
	margin: 0;
	padding: 0;
	border: 0;
`;

export const StyledLegend = styled.legend`
	display: block;
	width: 100%;
	margin: 0;
	padding: 0;
`;

export const StyledFormWrapper = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	width: 100%;
	${({ theme }) => css`
		margin: 0 0 ${pxToRem(theme.spaces.m)};
	`};
`;

export const StyledForm = styled.form`
	width: 100%;
`;

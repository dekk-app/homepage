import { pxToRem } from "@/ions/utils/unit";
import { css } from "@emotion/react";
import styled from "@emotion/styled";

export const StyledLink = styled.a`
	color: #3f5df8;
	font-weight: 600;
	text-decoration: none;
	${({
		theme: {
			ui: {
				colors: {
					primary: { background },
				},
			},
		},
	}) => css`
		&:focus {
			outline: 1px solid ${background};
			outline-offset: 3px;
		}
	`};
`;

export const StyledBodyText = styled.p<{ raw?: boolean; centered?: boolean }>`
	color: #5d6678;
	font-size: ${pxToRem(14)};
	line-height: ${pxToRem(24)};
	${({ centered, raw }) => css`
		margin: 0 auto ${raw ? 0 : pxToRem(16)};
		text-align: ${centered ? "center" : "initial"};
	`}
`;

export const StyledH1Text = styled.h1<{ raw?: boolean; centered?: boolean }>`
	padding: 0;
	font-size: ${pxToRem(40)};
	font-weight: 700;
	line-height: ${pxToRem(54)};
	text-align: center;
	${({ centered, raw }) => css`
		margin: 0 auto ${raw ? 0 : pxToRem(32)};
		text-align: ${centered ? "center" : "initial"};
	`}
`;

import { StyledLinkProps } from "@/types";
import { css } from "@emotion/react";
import styled from "@emotion/styled";

export const StyledLink = styled.a<StyledLinkProps>`
	padding: 0.5em;
	color: black;
	${({ active }) => css`
		text-decoration: ${active ? "underline" : "none"};
	`};
`;

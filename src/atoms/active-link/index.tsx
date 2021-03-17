import { ActiveLinkProps } from "@/atoms/active-link/types";
import { css } from "@emotion/react";
import styled from "@emotion/styled";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

export const StyledLink = styled.a<{ active?: boolean }>`
	padding: 0.5em;
	text-decoration: underline;
	${({ active }) => css`
		color: ${active ? "red" : "black"};
	`};
`;

export const ActiveLink: React.FC<ActiveLinkProps> = ({
	children,
	href,
	"data-test-id": dataTestId,
	...props
}) => {
	const router = useRouter();
	return (
		<Link {...props} passHref href={href}>
			<StyledLink active={href === router.asPath} data-test-id={dataTestId}>
				{children}
			</StyledLink>
		</Link>
	);
};

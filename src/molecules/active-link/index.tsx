import { ActiveLinkProps } from "@/types";
import dynamic from "next/dynamic";
import { useRouter } from "next/router";
import React from "react";
import { StyledLink } from "./styled";

const Link = dynamic(async () => import("next/link"));

const ActiveLink: React.FC<ActiveLinkProps> = ({
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

export default ActiveLink;

import Logo from "@/atoms/logo";
import { Grid } from "@/molecules/grid";
import I18nLink from "@/molecules/i18n-link";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";
import React, { FC, memo, useEffect, useState } from "react";
import { StyledHeader, StyledHeaderColumn, StyledHeaderItemsColumn } from "./styled";
import { HeaderProps } from "./types";

export const useScrollY = () => {
	const [scrollY, setScrollY] = useState(0);
	useEffect(() => {
		const handleScroll = () => {
			setScrollY(window.scrollY);
		};

		const unsubscribe = () => {
			window.removeEventListener("scroll", handleScroll);
		};

		window.addEventListener("scroll", handleScroll, { passive: true });

		return unsubscribe;
	}, []);
	return scrollY;
};

const Header: FC<HeaderProps> = ({ children, className, dark, innerRef, testId }) => {
	const { t } = useTranslation(["navigation"]);
	const scrollY = useScrollY();
	const { route } = useRouter();
	const isIndented = scrollY > 150 && route === "/wishlist";

	return (
		<StyledHeader
			ref={innerRef}
			dark={dark}
			elevated={scrollY > 0}
			className={className}
			data-test-id={testId}
		>
			{children}
			<Grid stretch>
				<StyledHeaderColumn colSpanS={2}>
					<I18nLink passHref href="/" data-test-id="link-to-home">
						<Logo aria-label={t("navigation:home")} />
					</I18nLink>
				</StyledHeaderColumn>
				<StyledHeaderItemsColumn
					indented={isIndented}
					colSpanS={2}
					colSpanM={6}
					colSpanL={10}
					as="nav"
				>
					<I18nLink passHref href="/wishlist" data-test-id="link-to-wishlist">
						{t("navigation:wishlist")}
					</I18nLink>
				</StyledHeaderItemsColumn>
			</Grid>
		</StyledHeader>
	);
};

export default memo(Header);

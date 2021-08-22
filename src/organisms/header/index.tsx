import Logo from "@/atoms/logo";
import { useScrollY } from "@/ions/hooks/scroll-y";
import { Grid } from "@/molecules/grid";
import I18nLink from "@/molecules/i18n-link";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";
import React, { FC, memo } from "react";
import { StyledHeader, StyledHeaderColumn, StyledHeaderItemsColumn } from "./styled";
import { HeaderProps } from "./types";

const Header: FC<HeaderProps> = ({ children, className, dark, innerRef, testId }) => {
	const { t } = useTranslation(["navigation"]);
	const { route } = useRouter();
	const isOnWishlist = route === "/wishlist";
	const scrollY = useScrollY(isOnWishlist);
	const isIndented = scrollY > 150;

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
				<StyledHeaderColumn colSpanS={1} colSpanM={2}>
					<I18nLink href="/" data-test-id="link-to-home">
						<Logo aria-label={t("navigation:home")} />
					</I18nLink>
				</StyledHeaderColumn>
				<StyledHeaderItemsColumn
					indented={isIndented}
					colSpanS={3}
					colSpanM={6}
					colSpanL={10}
					as="nav"
				>
					<I18nLink href="/about-us" data-test-id="link-to-about-us">
						{t("navigation:about-us")}
					</I18nLink>
				</StyledHeaderItemsColumn>
			</Grid>
		</StyledHeader>
	);
};

export default memo(Header);

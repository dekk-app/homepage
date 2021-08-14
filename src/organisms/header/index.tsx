import Logo from "@/atoms/logo";
import { Grid } from "@/molecules/grid";
import I18nLink from "@/molecules/i18n-link";
import { useTranslation } from "next-i18next";
import React, { FC, memo } from "react";
import { StyledHeader, StyledHeaderColumn, StyledHeaderItemsColumn } from "./styled";
import { HeaderProps } from "./types";

const Header: FC<HeaderProps> = ({ children, className, innerRef, testId }) => {
	const { t } = useTranslation(["navigation"]);
	return (
		<StyledHeader ref={innerRef} className={className} data-test-id={testId}>
			{children}
			<Grid>
				<StyledHeaderColumn colSpanS={2}>
					<I18nLink passHref href="/">
						<Logo aria-label={t("navigation:home")} />
					</I18nLink>
				</StyledHeaderColumn>
				<StyledHeaderItemsColumn colSpanS={2} colSpanM={6} colSpanL={10}>
					<I18nLink passHref href="/wishlist">
						{t("navigation:wishlist")}
					</I18nLink>
				</StyledHeaderItemsColumn>
			</Grid>
		</StyledHeader>
	);
};

export default memo(Header);

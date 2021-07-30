import I18nLink from "@/atoms/i18n-link";
import Logo from "@/atoms/logo";
import { Column, Grid } from "@/molecules/grid";
import { useTranslation } from "next-i18next";
import React, { FC, memo } from "react";
import { StyledHeader, StyledHeaderItems } from "./styled";
import { HeaderProps } from "./types";

const Header: FC<HeaderProps> = ({ children, className, innerRef, testId }) => {
	const { t } = useTranslation(["navigation"]);
	return (
		<StyledHeader ref={innerRef} className={className} data-test-id={testId}>
			{children}
			<Grid>
				<Column colSpanS={2}>
					<I18nLink passHref href="/">
						<Logo aria-label={t("navigation:home")} />
					</I18nLink>
				</Column>
				<StyledHeaderItems colSpanS={2} colSpanM={6} colSpanL={10}>
					<I18nLink passHref href="/wishlist">
						{t("navigation:wishlist")}
					</I18nLink>
				</StyledHeaderItems>
			</Grid>
		</StyledHeader>
	);
};

export default memo(Header);

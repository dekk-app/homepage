import Typography from "@/atoms/typography";
import { StyledLink } from "@/atoms/typography/styled";
import { pxToRem } from "@/ions/utils/unit";
import I18nLink from "@/molecules/i18n-link";
import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { useTranslation } from "next-i18next";
import Link from "next/link";
import React, { memo } from "react";

export const StyledLinksWrapper = styled.div`
	display: flex;
	flex-wrap: wrap;
	${({ theme }) => css`
		a {
			margin-right: ${pxToRem(theme.spaces.m)};
		}
	`};
`;

const WelcomeScreen = () => {
	const { t } = useTranslation(["common", "welcome"]);
	return (
		<>
			<Typography variant="h1">{t("welcome:headline")}</Typography>
			<Typography>
				{t("welcome:body-line1")}
				<br />
				{t("welcome:body-line2")}
			</Typography>
			<StyledLinksWrapper>
				<I18nLink passHref bold href="/wishlist" data-test-id="link-to-wishlist">
					{t("welcome:to-wishlist")}
				</I18nLink>
				<Link passHref href="/auth/signout">
					<StyledLink bold data-test-id="link-to-logout">
						{t("common:signout")}
					</StyledLink>
				</Link>
			</StyledLinksWrapper>
		</>
	);
};

export default memo(WelcomeScreen);

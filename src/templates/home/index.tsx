import { I18nLink } from "@/atoms/link";
import Typography from "@/atoms/typography";
import { Route } from "@/ions/enums";
import { StyledLink } from "@/molecules/active-link/styled";
import { useSession } from "next-auth/client";
import { useTranslation } from "next-i18next";
import dynamic from "next/dynamic";
import Link from "next/link";
import React from "react";

const Layout = dynamic(async () => import("@/organisms/layout"));

const Home: React.FC = () => {
	const [session] = useSession();
	const { t } = useTranslation();
	return (
		<Layout>
			<Typography variant="h1">{t("welcome-to-dekk")}</Typography>
			{session ? (
				<I18nLink passHref route={Route.dashboard}>
					<StyledLink>{t("dashboard")}</StyledLink>
				</I18nLink>
			) : (
				<>
					<Link passHref href="/auth">
						<StyledLink>{t("login")}</StyledLink>
					</Link>
					<I18nLink passHref route={Route.create}>
						<StyledLink>{t("try-now")}</StyledLink>
					</I18nLink>
				</>
			)}
			<br />
			<Link passHref href="/de">
				<StyledLink>{t("de")}</StyledLink>
			</Link>
			<Link passHref href="/" locale={false}>
				<StyledLink>{t("en")}</StyledLink>
			</Link>
		</Layout>
	);
};

export default Home;

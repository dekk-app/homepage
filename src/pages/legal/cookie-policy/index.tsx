import Button from "@/atoms/button";
import ButtonGroup from "@/atoms/button/button-group";
import Typography from "@/atoms/typography";
import { useCookieConsentContext } from "@/ions/contexts/cookie-consent";
import { GET_LEGAL_PAGE } from "@/ions/queries/legal-page";
import {
	addApolloState,
	contentfulQuery,
	initializeApollo,
	useContentfulQuery,
} from "@/ions/services/apollo/client";
import { withLoadingAndError } from "@/organisms/with-loading-and-error";
import LegalPage from "@/templates/legal-page";
import { PageProps, StaticPageProps } from "@/types";
import { PageCollection } from "@/types/contentful-api";
import { GetStaticProps, NextPage } from "next";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import React from "react";

const WrappedLegalPage = withLoadingAndError(LegalPage);

const consentKeys = [
	"necessary",
	"preferences",
	"statistics",
	"marketing",
	"firstParty",
	"thirdParty",
];

const Page: NextPage<PageProps> = props => {
	const { data, error, loading } = useContentfulQuery<{ pageCollection: PageCollection }>(
		GET_LEGAL_PAGE,
		{
			variables: {
				pageDirectory: "cookies",
				locale: props.locale,
			},
		}
	);
	const { t } = useTranslation(["cookie-banner"]);

	const { consent, acceptAllCookies, declineAllCookies } = useCookieConsentContext();

	return (
		<WrappedLegalPage data={data} error={error} loading={loading}>
			<div>
				<Typography variant="h3">{t("cookie-banner:consent-given")}</Typography>
				<ol>
					{consentKeys.map(key => {
						return (
							<Typography key={key} raw component="li">
								{t(`cookie-banner:${key}`)}:{" "}
								{consent[key] ? t("common:yes") : t("common:no")}
							</Typography>
						);
					})}
				</ol>
			</div>
			<ButtonGroup>
				<Button
					primary
					onClick={() => {
						acceptAllCookies();
					}}
				>
					{t("cookie-banner:accept-all")}
				</Button>
				<Button
					text
					onClick={() => {
						declineAllCookies();
					}}
				>
					{t("cookie-banner:deny-all")}
				</Button>
			</ButtonGroup>
		</WrappedLegalPage>
	);
};

export const getStaticProps: GetStaticProps = async context => {
	const apolloClient = initializeApollo();
	await contentfulQuery(apolloClient, {
		query: GET_LEGAL_PAGE,
		variables: {
			pageDirectory: "cookies",
			locale: context.locale,
		},
	});

	return addApolloState<StaticPageProps>(apolloClient, {
		props: {
			...(await serverSideTranslations(context.locale)),
			locale: context.locale,
		},
	});
};

export default Page;

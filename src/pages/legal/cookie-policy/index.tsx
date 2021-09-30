import Button from "@/atoms/button";
import ButtonGroup from "@/atoms/button/button-group";
import Toggle from "@/atoms/toggle";
import { StyledToggleLabel } from "@/atoms/toggle/styled";
import Typography from "@/atoms/typography";
import {
	getServerSideCookieConsent,
	useCookieConsentContext,
} from "@/ions/contexts/cookie-consent";
import { GET_LEGAL_PAGE } from "@/ions/queries/legal-page";
import {
	addApolloState,
	contentfulQuery,
	initializeApollo,
	useContentfulQuery,
} from "@/ions/services/apollo/client";
import { withLoadingAndError } from "@/organisms/with-loading-and-error";
import LegalPage from "@/templates/legal-page";
import { PageProps } from "@/types";
import { PageCollection } from "@/types/contentful-api";
import { GetServerSideProps, NextPage } from "next";
import { getProviders, getSession } from "next-auth/client";
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

	const { consent, acceptAllCookies, declineAllCookies, acceptCookies } =
		useCookieConsentContext();

	return (
		<WrappedLegalPage data={data} error={error} loading={loading}>
			<div>
				<Typography variant="h3">{t("cookie-banner:consent-given")}</Typography>
				<table>
					<tbody>
						{consentKeys.map(key => {
							return (
								<tr key={key}>
									<td>
										<Typography raw>
											{t(`cookie-banner:${key}`)}&nbsp;
										</Typography>
									</td>
									<td>
										<label>
											<Toggle
												checked={Boolean(
													key === "necessary" || consent[key]
												)}
												disabled={key === "necessary"}
												onChange={event_ => {
													acceptCookies({
														...consent,
														[key]: (event_.target as HTMLInputElement)
															.checked,
													});
												}}
											/>
											<StyledToggleLabel>
												{key === "necessary" || consent[key]
													? t("common:yes")
													: t("common:no")}
											</StyledToggleLabel>
										</label>
									</td>
								</tr>
							);
						})}
					</tbody>
				</table>
				<br />
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

export const getServerSideProps: GetServerSideProps<PageProps> = async context => {
	const apolloClient = initializeApollo(null, context.req.headers.cookie);

	await contentfulQuery(apolloClient, {
		query: GET_LEGAL_PAGE,
		variables: {
			pageDirectory: "cookies",
			locale: context.locale,
		},
	});

	return addApolloState(apolloClient, {
		props: {
			...(await serverSideTranslations(context.locale)),
			session: await getSession(context),
			providers: await getProviders(),
			locale: context.locale,
			consent: getServerSideCookieConsent(context),
			cookie: context.req.headers.cookie,
		},
	});
};

export default Page;

import Mail from "@/atoms/lottie/animations/mail";
import Layout from "@/colonies/layout";
import { StyledCenteredColumn } from "@/molecules/grid/styled-column";
import { StyledFlexedGrid } from "@/molecules/grid/styled-grid";
import ContactForm from "@/organisms/contact-form";
import { css, Global, useTheme } from "@emotion/react";
import { useTranslation } from "next-i18next";
import Head from "next/head";
import React from "react";

const Contact = () => {
	const { t } = useTranslation(["meta"]);
	const theme = useTheme();

	return (
		<Layout title={t("meta:contact.title")}>
			<Head>
				<meta name="robots" content="noindex,nofollow" />
			</Head>
			<Global
				styles={css`
					body {
						background-color: ${theme.ui.colors.dark.background};
						color: ${theme.ui.colors.dark.color};
					}
				`}
			/>

			<StyledFlexedGrid>
				<StyledCenteredColumn colSpanM={4} colSpanL={4} colStartL={2}>
					<ContactForm />
				</StyledCenteredColumn>
				<StyledCenteredColumn colSpanM={4} colSpanL={6} colStartL={7}>
					<Mail />
				</StyledCenteredColumn>
			</StyledFlexedGrid>
		</Layout>
	);
};

export default Contact;

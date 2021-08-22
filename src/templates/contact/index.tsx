import ContactForm from "@/groups/contact-form";
import Layout from "@/groups/layout";
import Mail from "@/molecules/animations/mail";
import { StyledCenteredColumn } from "@/molecules/grid/styled-column";
import { StyledFlexedGrid } from "@/molecules/grid/styled-grid";
import { useTranslation } from "next-i18next";
import React from "react";

const Contact = () => {
	const { t } = useTranslation(["meta"]);

	return (
		<Layout dark title={t("meta:contact.title")} robots="noindex,nofollow">
			<StyledFlexedGrid stretch>
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

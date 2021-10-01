import Button from "@/atoms/button";
import { StyledFormText } from "@/atoms/form-text/styled";
import Typography from "@/atoms/typography";
import { StyledFieldset, StyledForm, StyledLegend } from "@/molecules/form/styled";
import InputField from "@/molecules/input-field";
import TextArea from "@/molecules/textarea-field";
import Transdown from "@/organisms/transdown";
import { ContactFormProps } from "@/types";
import axios, { AxiosResponse } from "axios";
import { useTranslation } from "next-i18next";
import dynamic from "next/dynamic";
import { useRouter } from "next/router";
import React, { memo, useCallback, useState } from "react";
import { FormProvider, useForm } from "react-hook-form";

const ButtonSpinner = dynamic(async () => import("@/atoms/spinner/button-spinner"));

const ContactForm = () => {
	const { t } = useTranslation(["form"]);
	const { locale } = useRouter();
	const methods = useForm<ContactFormProps>();
	const [loading, setLoading] = useState(false);
	const [contactSuccess, setContactSuccess] = useState(false);
	const [contactError, setContactError] = useState(false);

	const handleSubmit = useCallback(
		async (data: ContactFormProps) => {
			setLoading(true);
			try {
				const response = await axios.post<
					ContactFormProps,
					AxiosResponse<{ status?: number; error?: unknown }>
				>(`/api/mail?locale=${locale}`, data);
				switch (response.data.status) {
					case 200:
						setContactSuccess(true);
						setContactError(false);
						break;
					case 500:
					default:
						setContactSuccess(false);
						setContactError(true);
				}
			} catch {
				setContactSuccess(false);
				setContactError(true);
			}
		},
		[locale]
	);

	if (contactSuccess) {
		return <Typography variant="h1">{t(`form:messages.contact-success`)}</Typography>;
	}

	if (contactError) {
		return <Typography variant="h1">{t(`form:messages.contact-error`)}</Typography>;
	}

	return (
		<FormProvider {...methods}>
			<StyledForm noValidate onSubmit={methods.handleSubmit(handleSubmit)}>
				<StyledFieldset>
					<StyledLegend>
						<Typography centered variant="h1">
							{t("form:legends.contact")}
						</Typography>
					</StyledLegend>
					<InputField
						fullWidth
						id="form:contact:email"
						helpText={t("form:help-texts.contact-email")}
						name="email"
						type="email"
						validation={{ required: true, pattern: /.*@.*\..*/ }}
					/>
					<TextArea
						fullWidth
						id="form:contact:body"
						name="body"
						helpText={t("form:help-texts.contact-body")}
						validation={{ required: true, minLength: 2 }}
					/>
				</StyledFieldset>
				<Button primary disabled={loading} type="submit">
					{loading && <ButtonSpinner />} Send
				</Button>
				<StyledFormText>
					<Typography centered>
						<Transdown i18nKey="form:texts.policy-data-agreement" />
					</Typography>
				</StyledFormText>
			</StyledForm>
		</FormProvider>
	);
};

export default memo(ContactForm);

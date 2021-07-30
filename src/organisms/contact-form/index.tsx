import Button from "@/atoms/button";
import Typography from "@/atoms/typography";
import { StyledFieldset, StyledForm, StyledLegend } from "@/molecules/form/styled";
import InputField from "@/molecules/input-field";
import TextArea from "@/molecules/textarea-field";
import { ContactFormProps } from "@/types";
import axios from "axios";
import { useTranslation } from "next-i18next";
import React, { useCallback, useState } from "react";
import { FormProvider, useForm } from "react-hook-form";

const ContactForm = () => {
	const { t } = useTranslation(["form"]);
	const methods = useForm<ContactFormProps>();
	const [contactSuccess, setContactSuccess] = useState(false);
	const [contactError, setContactError] = useState(false);

	const handleSubmit = useCallback(async (data: ContactFormProps) => {
		try {
			const response = await axios.post<{ success?: boolean; error?: boolean }>(
				"/api/mail",
				data
			);
			if (response.data.success) {
				setContactSuccess(true);
				setContactError(false);
			} else {
				setContactSuccess(false);
				setContactError(true);
			}
		} catch {
			setContactSuccess(false);
			setContactError(true);
		}
	}, []);

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
				<Button type="submit">Send</Button>
			</StyledForm>
		</FormProvider>
	);
};

export default ContactForm;

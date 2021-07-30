import Button from "@/atoms/button";
import {
	StyledButtonWrapper,
	StyledSocialButton,
	StyledSocialButtonLabel,
	StyledSocialButtonWrapper,
} from "@/atoms/button/styled";
import { StyledFormText } from "@/atoms/form-text/styled";
import Icon from "@/atoms/icon";
import { StyledStripe, StyledStripeWrapper } from "@/atoms/stripe/styled";
import Typography from "@/atoms/typography";
import { useProviders } from "@/ions/contexts/providers";
import {
	StyledFieldset,
	StyledForm,
	StyledFormWrapper,
	StyledLegend,
} from "@/molecules/form/styled";
import InputField from "@/molecules/input-field";
import { StyledScreenWrapper } from "@/molecules/screen/styled";
import Transdown from "@/molecules/transdown";
import { SigninFormProps } from "@/types";
import { signIn } from "next-auth/client";
import { useTranslation } from "next-i18next";
import React, { memo, useCallback } from "react";
import { FormProvider, useForm } from "react-hook-form";

const Signin = () => {
	const { providers } = useProviders();
	const { t } = useTranslation(["form"]);
	const methods = useForm<SigninFormProps>();
	const onSubmit = useCallback(
		(data: SigninFormProps) => {
			void signIn(providers.email.id, { email: data.email });
		},
		[providers]
	);

	return (
		<FormProvider {...methods}>
			<StyledScreenWrapper>
				<StyledForm noValidate onSubmit={methods.handleSubmit(onSubmit)}>
					<StyledFormWrapper>
						<StyledFieldset>
							<StyledLegend>
								<Typography centered variant="h2" component="h2">
									{t("form:legends.signin")}
								</Typography>
							</StyledLegend>
							<StyledSocialButtonWrapper>
								<StyledSocialButton
									type="button"
									aria-label="google"
									onClick={() => {
										void signIn(providers.google.id);
									}}
								>
									<Icon icon="google" />
									<StyledSocialButtonLabel>Google</StyledSocialButtonLabel>
								</StyledSocialButton>
								<StyledSocialButton
									type="button"
									aria-label="github"
									onClick={() => {
										void signIn(providers.github.id);
									}}
								>
									<Icon icon="github" />
									<StyledSocialButtonLabel>Github</StyledSocialButtonLabel>
								</StyledSocialButton>
							</StyledSocialButtonWrapper>
							<StyledStripeWrapper>
								<StyledStripe />
								<Typography raw light>
									{t(`form:texts.continue-with`)}
								</Typography>
								<StyledStripe />
							</StyledStripeWrapper>
							<InputField
								fullWidth
								id="form:signIn:email"
								helpText={t("form:help-texts.signin-register")}
								name="email"
								type="email"
								validation={{ required: true, pattern: /.*@.*\..*/ }}
							/>
						</StyledFieldset>
						<StyledButtonWrapper>
							<Button fullWidth primary type="submit">
								{t("form:button-labels.submit")}
							</Button>
						</StyledButtonWrapper>
					</StyledFormWrapper>
				</StyledForm>
				<StyledFormText>
					<Typography centered>
						<Transdown i18nKey="form:texts.policy-data-agreement" />
					</Typography>
				</StyledFormText>
			</StyledScreenWrapper>
		</FormProvider>
	);
};

export default memo(Signin);

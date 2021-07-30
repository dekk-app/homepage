import Button from "@/atoms/button";
import {
	StyledButtonGroup,
	StyledButtonWrapper,
	StyledSocialButton,
	StyledSocialButtonLabel,
} from "@/atoms/button/styled";
import { StyledFormText } from "@/atoms/form-text/styled";
import Icon from "@/atoms/icon";
import { StyledStripe, StyledStripeWrapper } from "@/atoms/stripe/styled";
import Typography from "@/atoms/typography";
import { useProviders } from "@/ions/contexts/providers";
import { pxToRem } from "@/ions/utils/unit";
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
import dynamic from "next/dynamic";
import React, { memo, useCallback, useState } from "react";
import { FormProvider, useForm } from "react-hook-form";

const ButtonSpinner = dynamic(async () => import("@/atoms/spinner/button-spinner"));
const Spinner = dynamic(async () => import("@/atoms/spinner"));

const Signin = () => {
	const { providers } = useProviders();
	const { t } = useTranslation(["form"]);
	const methods = useForm<SigninFormProps>();
	const [loadingGoogle, setLoadingGoogle] = useState(false);
	const [loadingGithub, setLoadingGithub] = useState(false);

	const handleSubmit = useCallback(
		(data: SigninFormProps) => {
			void signIn(providers.email.id, { email: data.email });
		},
		[providers]
	);

	const { isSubmitting, isSubmitSuccessful } = methods.formState;
	const loading = isSubmitting || isSubmitSuccessful;

	return (
		<FormProvider {...methods}>
			<StyledScreenWrapper>
				<StyledForm noValidate onSubmit={methods.handleSubmit(handleSubmit)}>
					<StyledFormWrapper>
						<StyledFieldset>
							<StyledLegend>
								<Typography centered variant="h1">
									{t("form:legends.signin")}
								</Typography>
							</StyledLegend>
							<StyledButtonGroup>
								<StyledSocialButton
									disabled={loadingGoogle}
									type="button"
									aria-label="google"
									onClick={() => {
										setLoadingGoogle(true);
										void signIn(providers.google.id);
									}}
								>
									{loadingGoogle ? (
										<Spinner size={pxToRem(24)} />
									) : (
										<Icon icon="google" />
									)}
									<StyledSocialButtonLabel>Google</StyledSocialButtonLabel>
								</StyledSocialButton>
								<StyledSocialButton
									disabled={loadingGithub}
									type="button"
									aria-label="github"
									onClick={() => {
										setLoadingGithub(true);
										void signIn(providers.github.id);
									}}
								>
									{loadingGithub ? (
										<Spinner size={pxToRem(24)} />
									) : (
										<Icon icon="github" />
									)}
									<StyledSocialButtonLabel>Github</StyledSocialButtonLabel>
								</StyledSocialButton>
							</StyledButtonGroup>
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
							<Button fullWidth primary disabled={loading} type="submit">
								{loading && <ButtonSpinner />}
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

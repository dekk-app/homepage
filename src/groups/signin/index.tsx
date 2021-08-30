import Button from "@/atoms/button";
import { StyledButtonGroup, StyledButtonWrapper } from "@/atoms/button/styled";
import { StyledFormText } from "@/atoms/form-text/styled";
import ButtonIcon from "@/atoms/icon/button-icon";
import { StyledStripe, StyledStripeWrapper } from "@/atoms/stripe/styled";
import Typography from "@/atoms/typography";
import { pxToRem } from "@/ions/utils/unit";
import {
	StyledFieldset,
	StyledForm,
	StyledFormWrapper,
	StyledLegend,
} from "@/molecules/form/styled";
import InputField from "@/molecules/input-field";
import { StyledScreenWrapper } from "@/molecules/screen/styled";
import Transdown from "@/organisms/transdown";
import { SigninFormProps } from "@/types";
import { signIn } from "next-auth/client";
import { useTranslation } from "next-i18next";
import dynamic from "next/dynamic";
import React, { memo, useCallback, useState } from "react";
import { FormProvider, useForm } from "react-hook-form";

const ButtonSpinner = dynamic(async () => import("@/atoms/spinner/button-spinner"));

const Signin = () => {
	const { t } = useTranslation(["form"]);
	const methods = useForm<SigninFormProps>();
	const [loadingGoogle, setLoadingGoogle] = useState(false);
	const [loadingGithub, setLoadingGithub] = useState(false);

	const handleSubmit = useCallback((data: SigninFormProps) => {
		void signIn("email", { email: data.email });
	}, []);

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
								<Button
									flex
									disabled={loadingGoogle}
									type="button"
									aria-label="google"
									onClick={() => {
										setLoadingGoogle(true);
										void signIn("google");
									}}
								>
									{loadingGoogle ? (
										<ButtonSpinner size={pxToRem(24)} />
									) : (
										<ButtonIcon icon="google" />
									)}
									Google
								</Button>
								<Button
									flex
									disabled={loadingGithub}
									type="button"
									aria-label="github"
									onClick={() => {
										setLoadingGithub(true);
										void signIn("github");
									}}
								>
									{loadingGithub ? (
										<ButtonSpinner size={pxToRem(24)} />
									) : (
										<ButtonIcon icon="github" />
									)}
									Github
								</Button>
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

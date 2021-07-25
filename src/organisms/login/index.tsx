import {
	StyledButton,
	StyledButtonWrapper,
	StyledSocialButton,
	StyledSocialButtonWrapper,
} from "@/atoms/button/styled";
import { StyledStripe, StyledStripeWrapper } from "@/atoms/stripe/styled";
import Typography from "@/atoms/typography";
import {
	StyledFieldset,
	StyledForm,
	StyledFormWrapper,
	StyledLegend,
} from "@/molecules/form/styled";
import InputField from "@/molecules/input-field";
import { StyledScreenBackground, StyledScreenWrapper } from "@/molecules/screen/styled";
import Transdown from "@/molecules/transdown";
import { LoginFormProps, LoginProps } from "@/types";
import { signIn } from "next-auth/client";
import { useTranslation } from "next-i18next";
import Image from "next/image";
import React, { FC, memo, useCallback } from "react";
import { FormProvider, useForm } from "react-hook-form";

const Login: FC<LoginProps> = ({ providers }) => {
	const { t } = useTranslation(["form"]);
	const methods = useForm<LoginFormProps>();
	const onSubmit = useCallback(
		(data: LoginFormProps) => {
			void signIn(providers.email.id, { email: data.email });
		},
		[providers]
	);

	return (
		<FormProvider {...methods}>
			<StyledScreenBackground>
				<StyledScreenWrapper>
					<StyledForm noValidate onSubmit={methods.handleSubmit(onSubmit)}>
						<StyledFormWrapper>
							<StyledFieldset>
								<StyledLegend>
									<Typography variant="h2" component="h1">
										{t("form:legends.login")}
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
										<Image
											src="/big-icons/Google.svg"
											alt="Google"
											height={36}
											width={36}
										/>
									</StyledSocialButton>
									<StyledSocialButton
										type="button"
										aria-label="github"
										onClick={() => {
											void signIn(providers.github.id);
										}}
									>
										<Image
											src="/big-icons/Github.svg"
											alt="Github"
											height={36}
											width={36}
										/>
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
									helpText={t("form:help-texts.login-register")}
									name="email"
									type="email"
									validation={{ required: true, pattern: /.*@.*\..*/ }}
								/>
							</StyledFieldset>
							<StyledButtonWrapper>
								<StyledButton fullWidth type="submit">
									{t("form:button-labels.submit")}
								</StyledButton>
							</StyledButtonWrapper>
						</StyledFormWrapper>
					</StyledForm>
					<Typography centered raw light>
						<Transdown i18nKey="form:texts.policy-data-agreement" />
					</Typography>
				</StyledScreenWrapper>
			</StyledScreenBackground>
		</FormProvider>
	);
};

export default memo(Login);

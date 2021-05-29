import {
	StyledButton,
	StyledButtonWrapper,
	StyledSocialButton,
	StyledSocialButtonWrapper,
} from "@/atoms/button/styled";
import { StyledStripe, StyledStripeWrapper } from "@/atoms/stripe/styled";
import {
	StyledFieldset,
	StyledForm,
	StyledFormWrapper,
	StyledLegend,
} from "@/molecules/form/styled";
import { StyledScreenBackground, StyledScreenWrapper } from "@/molecules/screen/styled";
import { LoginFormProps, LoginProps } from "@/types";
import { signIn } from "next-auth/client";
import { useTranslation } from "next-i18next";
import dynamic from "next/dynamic";
import React from "react";
import { FormProvider, useForm } from "react-hook-form";

const InputField = dynamic(async () => import("@/molecules/input-field"));
const Transdown = dynamic(async () => import("@/molecules/transdown"));
const Typography = dynamic(async () => import("@/atoms/typography"));

const Login: React.FC<LoginProps> = ({ providers }) => {
	const { t } = useTranslation(["form"]);
	const methods = useForm<LoginFormProps>();
	const onSubmit = React.useCallback(data => {
		console.log(data);
	}, []);

	return (
		<FormProvider {...methods}>
			<StyledScreenBackground>
				<StyledScreenWrapper>
					<StyledForm noValidate onSubmit={methods.handleSubmit(onSubmit)}>
						<StyledFormWrapper>
							<StyledFieldset>
								<StyledLegend>
									<Typography centered variant="h1">
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
										<img
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
										<img
											src="/big-icons/Github.svg"
											alt="Github"
											height={36}
											width={36}
										/>
									</StyledSocialButton>
								</StyledSocialButtonWrapper>
								<StyledStripeWrapper>
									<StyledStripe />
									<Typography raw>{t(`form:texts.continue-with`)}</Typography>
									<StyledStripe />
								</StyledStripeWrapper>
								<InputField
									fullWidth
									id="form:signIn:email"
									name="email"
									type="email"
									validation={{ required: true, pattern: /.*@.*\..*/ }}
								/>
							</StyledFieldset>
							<StyledButtonWrapper>
								<StyledButton fullWidth type="submit">
									{t("form:button-labels.login")}
								</StyledButton>
							</StyledButtonWrapper>
						</StyledFormWrapper>
					</StyledForm>
					<Typography centered raw>
						<Transdown i18nKey="form:texts.policy-data-agreement" />
					</Typography>
				</StyledScreenWrapper>
			</StyledScreenBackground>
		</FormProvider>
	);
};

export default React.memo(Login);

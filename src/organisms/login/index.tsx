import {
	StyledButton,
	StyledButtonWrapper,
	StyledSocialButton,
	StyledSocialButtonWrapper,
} from "@/atoms/button/styled";
import { StyledFullStripe, StyledStripe, StyledStripeWrapper } from "@/atoms/stripe/styled";
import Typography from "@/atoms/typography";
import {
	StyledFieldset,
	StyledForm,
	StyledFormWrapper,
	StyledLegend,
} from "@/molecules/form/styled";
import { InputField } from "@/molecules/input-field";
import { StyledScreenBackground, StyledScreenWrapper } from "@/molecules/screen/styled";
import Transdown from "@/molecules/transdown";
import { LoginFormProps, LoginProps } from "@/types";
import { signIn } from "next-auth/client";
import { useTranslation } from "next-i18next";
import React from "react";
import { FormProvider, useForm } from "react-hook-form";

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
									{/* Activate once we have a developer account
									<StyledSocialButton
										type="button"
										onClick={() => {
											void signIn(providers.apple.id);
										}}
										aria-label="apple"
									>
										<img
											src="/big-icons/Apple.svg"
											alt="Apple"
											height={36}
											width={31}
										/>
									</StyledSocialButton>
									*/}
									<StyledSocialButton
										type="button"
										aria-label="facebook"
										onClick={() => {
											void signIn(providers.facebook.id);
										}}
									>
										<img
											src="/big-icons/Facebook.svg"
											alt="Facebook"
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
								<InputField
									fullWidth
									id="form:signIn:password"
									name="password"
									type="password"
									validation={{ required: true }}
								/>
							</StyledFieldset>
							<StyledButtonWrapper>
								<StyledButton type="submit">
									{t("form:button-labels.login")}
								</StyledButton>
							</StyledButtonWrapper>
						</StyledFormWrapper>
					</StyledForm>
					<Typography centered>
						<Transdown i18nKey="form:texts.forgot-password" />
					</Typography>
					<Typography centered>
						<Transdown i18nKey="form:texts.have-no-account" />
					</Typography>
					<StyledFullStripe />
					<Typography centered raw>
						<Transdown i18nKey="form:texts.policy-data-agreement" />
					</Typography>
				</StyledScreenWrapper>
			</StyledScreenBackground>
		</FormProvider>
	);
};

export default Login;

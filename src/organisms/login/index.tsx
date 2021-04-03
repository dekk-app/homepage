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
import Transdown from "@/molecules/transdown";
import { StyledScreenBackground, StyledScreenWrapper } from "@/molecules/screen/styled";
import { LoginFormProps } from "@/types";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";
import React from "react";
import { FormProvider, useForm } from "react-hook-form";

const Login: React.FC = () => {
	const { t } = useTranslation(["form"]);
	const methods = useForm<LoginFormProps>();
	const router = useRouter();
	const onSubmit = React.useCallback(
		data => {
			void router.push("/dashboard");
		},
		[router]
	);

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
									<StyledSocialButton aria-label="google">
										<img
											src="/big-icons/Google.svg"
											alt="Google"
											height={36}
											width={36}
										/>
									</StyledSocialButton>
									<StyledSocialButton aria-label="apple">
										<img
											src="/big-icons/Apple.svg"
											alt="Apple"
											height={36}
											width={31}
										/>
									</StyledSocialButton>
									<StyledSocialButton aria-label="facebook">
										<img
											src="/big-icons/Facebook.svg"
											alt="Facebook"
											height={36}
											width={36}
										/>
									</StyledSocialButton>
									<StyledSocialButton aria-label="github">
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
									name="email"
									type="email"
									validation={{ required: true, pattern: /.*@.*\..*/ }}
								/>
								<InputField
									fullWidth
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

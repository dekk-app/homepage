import Button from "@/atoms/button";
import {
	StyledSocialButton,
	StyledSocialButtonLabel,
	StyledSocialButtonWrapper,
} from "@/atoms/button/styled";
import { StyledFormText } from "@/atoms/form-text/styled";
import Icon from "@/atoms/icon";
import { StyledStripe, StyledStripeWrapper } from "@/atoms/stripe/styled";
import Typography from "@/atoms/typography";
import { useProviders } from "@/ions/contexts/providers";
import { useSigninModal } from "@/ions/contexts/signin-modal";
import { useLockBodyScroll } from "@/ions/hooks/body-scroll-lock";
import { useEscapeKey } from "@/ions/hooks/escapeKey";
import { StyledFieldset, StyledForm, StyledFormWrapper } from "@/molecules/form/styled";
import InputField from "@/molecules/input-field";
import Transdown from "@/molecules/transdown";
import { SigninFormProps } from "@/types";
import { signIn } from "next-auth/client";
import { useTranslation } from "next-i18next";
import React, { memo, useCallback } from "react";
import { FormProvider, useForm } from "react-hook-form";
import Modal, { ModalActions, ModalContent, ModalHeader } from "../../molecules/modal";

const SigninModal = () => {
	const { providers } = useProviders();
	const { t } = useTranslation(["cancel", "form", "wishlist"]);
	const { close } = useSigninModal();
	const methods = useForm<SigninFormProps>();
	useLockBodyScroll();
	useEscapeKey(close);

	const handleSubmit = useCallback(
		async (data: SigninFormProps) => {
			await signIn(providers.email.id, { email: data.email });
			close();
		},
		[providers, close]
	);
	return (
		<Modal onClose={close}>
			<ModalHeader>
				<Typography centered variant="h2">
					{t("form:legends.signin")}
				</Typography>
			</ModalHeader>
			<ModalContent>
				<FormProvider {...methods}>
					<StyledForm noValidate onSubmit={methods.handleSubmit(handleSubmit)}>
						<StyledFormWrapper>
							<StyledFieldset>
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
							<ModalActions>
								<Button primary type="submit">
									{t("form:button-labels.submit")}
								</Button>
								<Button text type="button" onClick={close}>
									{t("common:cancel")}
								</Button>
							</ModalActions>
							<StyledFormText>
								<Typography centered raw light>
									<Transdown i18nKey="form:texts.policy-data-agreement" />
								</Typography>
							</StyledFormText>
						</StyledFormWrapper>
					</StyledForm>
				</FormProvider>
			</ModalContent>
		</Modal>
	);
};

export default memo(SigninModal);

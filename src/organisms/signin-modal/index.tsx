import Button from "@/atoms/button";
import {
	StyledButtonGroup,
	StyledSocialButton,
	StyledSocialButtonLabel,
} from "@/atoms/button/styled";
import { StyledFormText } from "@/atoms/form-text/styled";
import Icon from "@/atoms/icon";
import { StyledStripe, StyledStripeWrapper } from "@/atoms/stripe/styled";
import Typography from "@/atoms/typography";
import { useProviders } from "@/ions/contexts/providers";
import { useSigninModal } from "@/ions/contexts/signin-modal";
import { useLockBodyScroll } from "@/ions/hooks/body-scroll-lock";
import { useEscapeKey } from "@/ions/hooks/escapeKey";
import { pxToRem } from "@/ions/utils/unit";
import { StyledFieldset, StyledForm, StyledFormWrapper } from "@/molecules/form/styled";
import InputField from "@/molecules/input-field";
import Transdown from "@/molecules/transdown";
import { SigninFormProps } from "@/types";
import { signIn } from "next-auth/client";
import { useTranslation } from "next-i18next";
import dynamic from "next/dynamic";
import React, { memo, useCallback, useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import Modal, { ModalActions, ModalContent, ModalHeader } from "../../molecules/modal";

const ButtonSpinner = dynamic(async () => import("@/atoms/spinner/button-spinner"));
const Spinner = dynamic(async () => import("@/atoms/spinner"));

const SigninModal = () => {
	const { providers } = useProviders();
	const { t } = useTranslation(["cancel", "form", "wishlist"]);
	const { close } = useSigninModal();
	const methods = useForm<SigninFormProps>();
	const [loadingGoogle, setLoadingGoogle] = useState(false);
	const [loadingGithub, setLoadingGithub] = useState(false);

	useLockBodyScroll();
	useEscapeKey(close);

	const handleSubmit = useCallback(
		async (data: SigninFormProps) => {
			await signIn(providers.email.id, { email: data.email });
			close();
		},
		[providers, close]
	);

	const { isSubmitting, isSubmitSuccessful } = methods.formState;
	const loading = isSubmitting || isSubmitSuccessful;

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
								<StyledButtonGroup>
									<StyledSocialButton
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
										)}{" "}
										<StyledSocialButtonLabel>Google</StyledSocialButtonLabel>
									</StyledSocialButton>
									<StyledSocialButton
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
							<ModalActions>
								<Button primary type="submit">
									{loading && <ButtonSpinner />}
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

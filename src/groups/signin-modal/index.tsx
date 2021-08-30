import Button from "@/atoms/button";
import { StyledButtonGroup } from "@/atoms/button/styled";
import { StyledFormText } from "@/atoms/form-text/styled";
import ButtonIcon from "@/atoms/icon/button-icon";
import { StyledStripe, StyledStripeWrapper } from "@/atoms/stripe/styled";
import Typography from "@/atoms/typography";
import { useLockBodyScroll } from "@/ions/hooks/body-scroll-lock";
import { useEscapeKey } from "@/ions/hooks/escape-key";
import { useSigninModal } from "@/ions/stores/modal/signin";
import { pxToRem } from "@/ions/utils/unit";
import { StyledFieldset, StyledForm, StyledFormWrapper } from "@/molecules/form/styled";
import InputField from "@/molecules/input-field";
import Modal, { ModalActions, ModalContent, ModalHeader } from "@/molecules/modal";
import Transdown from "@/organisms/transdown";
import { SigninFormProps } from "@/types";
import { signIn } from "next-auth/client";
import { useTranslation } from "next-i18next";
import dynamic from "next/dynamic";
import React, { memo, useCallback, useState } from "react";
import { FormProvider, useForm } from "react-hook-form";

const ButtonSpinner = dynamic(async () => import("@/atoms/spinner/button-spinner"));

const SigninModal = () => {
	const { t } = useTranslation(["cancel", "form", "wishlist"]);
	const close = useSigninModal(state => state.close);
	const methods = useForm<SigninFormProps>();
	const [loadingGoogle, setLoadingGoogle] = useState(false);
	const [loadingGithub, setLoadingGithub] = useState(false);

	useLockBodyScroll();
	useEscapeKey(close);

	const handleSubmit = useCallback(
		async (data: SigninFormProps) => {
			await signIn("email", { email: data.email });
			close();
		},
		[close]
	);

	const { isSubmitting, isSubmitSuccessful } = methods.formState;
	const loading = isSubmitting || isSubmitSuccessful;

	return (
		<Modal dark backdrop onClose={close}>
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
									<Button
										flex
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

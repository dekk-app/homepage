import Button from "@/atoms/button";
import Typography from "@/atoms/typography";
import { useLockBodyScroll } from "@/ions/hooks/body-scroll-lock";
import { useEscapeKey } from "@/ions/hooks/escape-key";
import { CREATE_WISH, NEW_WISH_FRAGMENT, UPDATE_WISH } from "@/ions/queries/wishes";
import { useError } from "@/ions/stores/error";
import { useAddWishModal } from "@/ions/stores/modal/wish";
import { useWish } from "@/ions/stores/wish";
import { StyledFieldset, StyledForm } from "@/molecules/form/styled";
import InputField from "@/molecules/input-field";
import Modal, { ModalActions, ModalContent, ModalHeader } from "@/molecules/modal";
import TextArea from "@/molecules/textarea-field";
import { WishFormProps } from "@/types";
import { Wish } from "@/types/backend-api";
import { ApolloError, isApolloError, useMutation } from "@apollo/client";
import { useSession } from "next-auth/client";
import { useTranslation } from "next-i18next";
import dynamic from "next/dynamic";
import React, { useCallback } from "react";
import { FormProvider, useForm } from "react-hook-form";

const ButtonSpinner = dynamic(async () => import("@/atoms/spinner/button-spinner"));

const AddWishModal = () => {
	const [session] = useSession();
	const { t } = useTranslation(["cancel", "form", "wishlist"]);
	const setBody = useWish(state => state.setBody);
	const setSubject = useWish(state => state.setSubject);
	const id = useWish(state => state.id);
	const body = useWish(state => state.body);
	const subject = useWish(state => state.subject);
	const setWishlistError = useError(state => state.setError);
	const close = useAddWishModal(state => state.close);
	useEscapeKey(close);
	useLockBodyScroll();
	const methods = useForm<WishFormProps>({
		defaultValues: {
			"wish-subject": subject,
			"wish-body": body,
		},
	});

	const [createWish, { loading: loadingCreateWish }] = useMutation<{
		createWish: Wish;
	}>(CREATE_WISH, {
		variables: {
			id: session?.user.id,
			subject,
			body,
		},
		update(cache, { data: { createWish } }) {
			cache.modify({
				fields: {
					wishes(existingWishes: Wish[] = []) {
						const newWishRef = cache.writeFragment({
							data: createWish,
							fragment: NEW_WISH_FRAGMENT,
						});
						return [newWishRef, ...existingWishes];
					},
				},
			});
		},
	});

	const [updateWish, { loading: loadingUpdateWish }] = useMutation<{
		updateWish: Wish;
	}>(UPDATE_WISH, {
		variables: {
			id,
			subject,
			body,
		},
		update(cache, { data: { updateWish } }) {
			cache.modify({
				fields: {
					wishes(existingWishes: Wish[] = []) {
						const newWishRef = cache.writeFragment({
							data: updateWish,
							fragment: NEW_WISH_FRAGMENT,
						});
						return existingWishes.map(existingWish =>
							existingWish.id === updateWish.id ? newWishRef : existingWish
						);
					},
				},
			});
		},
	});

	const loading = loadingUpdateWish || loadingCreateWish;

	const handleSubmit = useCallback(async () => {
		if (id) {
			try {
				await updateWish();
				close();
			} catch (error_: unknown) {
				close();
				if (isApolloError(error_ as Error)) {
					switch ((error_ as ApolloError).message) {
						case "CANNOT_UPDATE_VOTED_WISH":
						case "CANNOT_UPDATE_MODERATED_WISH":
							setWishlistError(t(`form:errors.${(error_ as ApolloError).message}`));
							break;
						default:
							setWishlistError(t("form:errors.generic-error"));
							break;
					}
				}
			}
		} else {
			try {
				await createWish();
				close();
			} catch {
				close();
				setWishlistError(t("form:errors.generic-error"));
			}
		}
	}, [id, updateWish, createWish, close, setWishlistError, t]);

	return (
		<Modal dark backdrop onClose={close}>
			<ModalHeader>
				<Typography centered raw variant="h2">
					{t("wishlist:add-wish.headline")}
				</Typography>
			</ModalHeader>
			<ModalContent>
				<FormProvider {...methods}>
					<Typography centered>{t("wishlist:add-wish.body")}</Typography>
					<StyledForm noValidate onSubmit={methods.handleSubmit(handleSubmit)}>
						<StyledFieldset>
							<InputField
								fullWidth
								autoFocus
								id="form:wishlist:wish-subject"
								name="wish-subject"
								helpText={t("form:help-texts.wish-subject")}
								validation={{
									required: true,
									minLength: 2,
									maxLength: 255,
								}}
								onChange={setSubject}
							/>
							<TextArea
								fullWidth
								id="form:wishlist:wish-body"
								name="wish-body"
								helpText={t("form:help-texts.wish-body")}
								validation={{ required: true, minLength: 2, maxLength: 65_535 }}
								onChange={setBody}
							/>
						</StyledFieldset>
						<ModalActions sticky>
							<Button primary type="submit">
								{loading && <ButtonSpinner />}
								{id
									? t("wishlist:button.update-wish")
									: t("wishlist:button.add-wish")}
							</Button>
							<Button text type="button" onClick={close}>
								{t("common:cancel")}
							</Button>
						</ModalActions>
					</StyledForm>
				</FormProvider>
			</ModalContent>
		</Modal>
	);
};

export default AddWishModal;

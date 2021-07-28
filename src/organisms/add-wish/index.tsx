import Button from "@/atoms/button";
import Typography from "@/atoms/typography";
import { useWish } from "@/ions/hooks/wishes/wish";
import { useWishModal } from "@/ions/hooks/wishes/wish-modal";
import { useWishlist } from "@/ions/hooks/wishes/wishlist";
import { CREATE_WISH, UPDATE_WISH } from "@/ions/queries/wishes";
import { StyledFieldset, StyledForm } from "@/molecules/form/styled";
import { Column } from "@/molecules/grid";
import InputField from "@/molecules/input-field";
import TextArea from "@/molecules/textarea-field";
import { StyledButtonGroup } from "@/templates/wishlist/styled";
import { WishFormProps } from "@/types";
import { Wish } from "@/types/backend-api";
import { useMutation } from "@apollo/client";
import { useSession } from "next-auth/client";
import { useTranslation } from "next-i18next";
import React, { useCallback, useEffect } from "react";
import { FormProvider, useForm } from "react-hook-form";

const AddWish = () => {
	const [session] = useSession();
	const { t } = useTranslation(["cancel", "form", "wishlist"]);
	const { body, subject, changeBody, changeSubject } = useWish();
	const { add: addWish } = useWishlist();
	const { close: closeModal, id, body: previousBody, subject: previousSubject } = useWishModal();
	const methods = useForm<WishFormProps>({
		defaultValues: {
			"wish-subject": previousSubject,
			"wish-body": previousBody,
		},
	});
	const { update: updateMyWish } = useWishlist();

	const [createWish, { data: dataCreateWish }] = useMutation<{
		createWish: Wish;
	}>(CREATE_WISH, {
		variables: {
			email: session?.user.email,
			subject,
			body,
		},
	});

	const [updateWish, { data: dataUpdateWish }] = useMutation<{
		updateWish: Wish;
	}>(UPDATE_WISH, {
		variables: {
			id,
			subject,
			body,
		},
	});

	const handleSubmit = useCallback(async () => {
		await (id ? updateWish() : createWish());
		closeModal();
	}, [id, updateWish, createWish, closeModal]);

	// Add new wish
	useEffect(() => {
		if (dataCreateWish?.createWish) {
			addWish(dataCreateWish.createWish);
		}
	}, [addWish, dataCreateWish]);

	// Edit existing wish
	useEffect(() => {
		if (dataUpdateWish?.updateWish) {
			updateMyWish(id, () => ({
				body: dataUpdateWish.updateWish.body,
				subject: dataUpdateWish.updateWish.subject,
			}));
		}
	}, [id, updateMyWish, dataUpdateWish]);

	return (
		<FormProvider {...methods}>
			<Column colSpanL={8} colStartL={3}>
				<Typography centered variant="h1">
					{t("wishlist:add-wish.headline")}
				</Typography>
				<Typography centered>{t("wishlist:add-wish.body")}</Typography>
			</Column>
			<Column colSpanL={6} colStartL={4} colSpanM={4} colStartM={3}>
				<StyledForm noValidate onSubmit={methods.handleSubmit(handleSubmit)}>
					<StyledFieldset>
						<InputField
							fullWidth
							id="form:wishlist:wish-subject"
							name="wish-subject"
							helpText={t("form:help-texts.wish-subject")}
							validation={{
								required: true,
								minLength: 2,
							}}
							onChange={changeSubject}
						/>
						<TextArea
							fullWidth
							id="form:wishlist:wish-body"
							name="wish-body"
							helpText={t("form:help-texts.wish-body")}
							validation={{ required: true, minLength: 2 }}
							onChange={changeBody}
						/>
					</StyledFieldset>
					<StyledButtonGroup>
						<Button text type="button" onClick={closeModal}>
							{t("common:cancel")}
						</Button>
						<Button type="submit">
							{id ? t("wishlist:button.update-wish") : t("wishlist:button.add-wish")}
						</Button>
					</StyledButtonGroup>
				</StyledForm>
			</Column>
		</FormProvider>
	);
};

export default AddWish;

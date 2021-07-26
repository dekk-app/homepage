import Button from "@/atoms/button";
import Icon from "@/atoms/icon";
import { StyledStripe, StyledStripeWrapper } from "@/atoms/stripe/styled";
import Typography from "@/atoms/typography";
import { StyledLink } from "@/atoms/typography/styled";
import { WishlistProvider, WishModalProvider, WishProvider } from "@/ions/hooks/wishes/context";
import { useWish } from "@/ions/hooks/wishes/wish";
import { useWishModal } from "@/ions/hooks/wishes/wish-modal";
import { useWishlist } from "@/ions/hooks/wishes/wishlist";
import { StyledFieldset, StyledForm } from "@/molecules/form/styled";
import { Column, Grid } from "@/molecules/grid";
import InputField from "@/molecules/input-field";
import TextArea from "@/molecules/textarea-field";
import {
	CREATE_WISH,
	CREATE_WISH_VOTE,
	DELETE_WISH_VOTE,
	UPDATE_WISH,
	USER,
	WISHES,
} from "@/templates/wishlist/queries";
import { AddWishProps, ListOfWishesProps, WishFormProps } from "@/types";
import { User, Wish, WishVote } from "@/types/backend-api";
import { useMutation, useQuery } from "@apollo/client";
import { css, Global, useTheme } from "@emotion/react";
import { useSession } from "next-auth/client";
import { useTranslation } from "next-i18next";
import Link from "next/link";
import React, { FC, useCallback, useEffect } from "react";
import { FormProvider, useForm } from "react-hook-form";
import {
	StyledArticle,
	StyledButtonGroup,
	StyledCard,
	StyledIconButton,
	StyledLayout,
	StyledVotes,
	StyledWishWrapper,
} from "./styled";

const WishCard: FC<{ wish: Wish }> = ({ wish: { body, id, subject, votes, voted, authorId } }) => {
	const [session] = useSession();
	const { t } = useTranslation(["wishlist"]);
	const { update: updateWish } = useWishlist();
	const { open } = useWishModal();

	const { data: userData } = useQuery<{ user: User }>(USER, {
		variables: {
			email: session?.user.email,
		},
	});

	const [createWishVote, { data: dataCreateWishVote }] = useMutation<{
		createWishVote: WishVote;
	}>(CREATE_WISH_VOTE, {
		variables: {
			userId: userData?.user?.id,
			wishId: id,
		},
	});

	const [deleteWishVote, { data: dataDeleteWishVote }] = useMutation<{
		deleteWishVote: WishVote;
	}>(DELETE_WISH_VOTE, {
		variables: {
			userId: userData?.user?.id,
			wishId: id,
		},
	});

	useEffect(() => {
		if (dataCreateWishVote?.createWishVote) {
			updateWish(id, (previousState: Wish) => ({
				voted: true,
				votes: previousState.votes + 1,
			}));
		}
	}, [id, updateWish, dataCreateWishVote]);

	useEffect(() => {
		if (dataDeleteWishVote?.deleteWishVote) {
			updateWish(id, (previousState: Wish) => ({
				voted: false,
				votes: previousState.votes - 1,
			}));
		}
	}, [id, updateWish, dataDeleteWishVote]);

	return (
		<StyledCard colSpanS={4} colSpanL={6}>
			<StyledArticle>
				<Typography variant="subtitle" component="h2">
					{subject}
				</Typography>
				<Typography light variant="body2">
					{body}
				</Typography>
			</StyledArticle>
			<StyledVotes>
				{session &&
					(userData?.user?.id === authorId ? (
						<Icon icon="heartFilled" />
					) : (
						<StyledIconButton
							aria-label={
								voted
									? t("wishlist:button.down-vote")
									: t("wishlist:button.up-vote")
							}
							onClick={() => {
								if (voted) {
									void deleteWishVote();
								} else {
									void createWishVote();
								}
							}}
						>
							<Icon icon={voted ? "heartFilled" : "heartOutlined"} />
						</StyledIconButton>
					))}
				<Typography raw light variant="body2">
					{votes}
				</Typography>
				{userData?.user.id === authorId && (
					<StyledIconButton
						aria-label={t("wishlist:button.edit")}
						disabled={votes > 0}
						onClick={() => {
							if (votes < 1) {
								open(id, subject, body);
							}
						}}
					>
						<Icon icon="edit" />
					</StyledIconButton>
				)}
			</StyledVotes>
		</StyledCard>
	);
};

const AddWish: FC<AddWishProps> = () => {
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

const ListOfWishes: FC<ListOfWishesProps> = () => {
	const { t } = useTranslation(["cancel", "wishlist"]);
	const [session] = useSession();
	const { wishes } = useWishlist();
	const { open: openModal } = useWishModal();

	return (
		<>
			<Column colSpanL={8}>
				<Typography variant="h1">{t("wishlist:headline")}</Typography>
				<Typography variant="body">{t("wishlist:description")}</Typography>
			</Column>
			<StyledWishWrapper colSpanL={4}>
				{session ? (
					<Button
						type="button"
						onClick={() => {
							openModal();
						}}
					>
						{t("wishlist:button.wish")}
					</Button>
				) : (
					<Link passHref href="/">
						<StyledLink>{t("common:cancel")}</StyledLink>
					</Link>
				)}
			</StyledWishWrapper>
			<Column>
				<StyledStripeWrapper>
					<StyledStripe />
				</StyledStripeWrapper>
			</Column>
			{wishes.map(wish => (
				<WishCard key={wish.id} wish={wish} />
			))}
		</>
	);
};

const Wishlist = () => {
	const { isOpen } = useWishModal();
	const theme = useTheme();
	return (
		<StyledLayout>
			<Global
				styles={css`
					body {
						background-color: ${theme.ui.colors.dark.background};
						color: ${theme.ui.colors.dark.color};
					}
				`}
			/>
			<Grid>{isOpen ? <AddWish /> : <ListOfWishes />}</Grid>
		</StyledLayout>
	);
};

const StatefulWishlist = () => {
	const { data } = useQuery<{ wishes: Wish[] }>(WISHES, {
		pollInterval: 60_000,
	});
	return (
		<WishModalProvider>
			<WishlistProvider initialState={data?.wishes}>
				<WishProvider>
					<Wishlist />
				</WishProvider>
			</WishlistProvider>
		</WishModalProvider>
	);
};

export default StatefulWishlist;

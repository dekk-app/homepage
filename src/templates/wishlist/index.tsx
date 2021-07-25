import Button from "@/atoms/button";
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
	USER,
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

const hearts = {
	outlined:
		"M12.1,18.55L12,18.65L11.89,18.55C7.14,14.24 4,11.39 4,8.5C4,6.5 5.5,5 7.5,5C9.04,5 10.54,6 11.07,7.36H12.93C13.46,6 14.96,5 16.5,5C18.5,5 20,6.5 20,8.5C20,11.39 16.86,14.24 12.1,18.55M16.5,3C14.76,3 13.09,3.81 12,5.08C10.91,3.81 9.24,3 7.5,3C4.42,3 2,5.41 2,8.5C2,12.27 5.4,15.36 10.55,20.03L12,21.35L13.45,20.03C18.6,15.36 22,12.27 22,8.5C22,5.41 19.58,3 16.5,3Z",
	filled: "M12,21.35L10.55,20.03C5.4,15.36 2,12.27 2,8.5C2,5.41 4.42,3 7.5,3C9.24,3 10.91,3.81 12,5.08C13.09,3.81 14.76,3 16.5,3C19.58,3 22,5.41 22,8.5C22,12.27 18.6,15.36 13.45,20.03L12,21.35Z",
};

const WishCard: FC<{ wish: Wish }> = ({ wish: { body, id, subject, votes, voted, authorId } }) => {
	const [session] = useSession();
	const { t } = useTranslation(["wishlist"]);
	const { update: updateWish } = useWishlist();

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
						<svg height={24} width={24} viewBox="0 0 24 24">
							<path fill="currentColor" d={hearts.filled} />
						</svg>
					) : (
						<StyledIconButton
							aria-label={
								voted
									? t("wishlist:button.down-vote")
									: t("wishlist:button.up-vote")
							}
							disabled={userData?.user?.id === authorId}
							onClick={() => {
								if (voted) {
									void deleteWishVote();
								} else {
									void createWishVote();
								}
							}}
						>
							<svg height={24} width={24} viewBox="0 0 24 24">
								<path
									fill="currentColor"
									d={voted ? hearts.filled : hearts.outlined}
								/>
							</svg>
						</StyledIconButton>
					))}
				<Typography raw light variant="body2">
					{votes}
				</Typography>
			</StyledVotes>
		</StyledCard>
	);
};

const AddWish: FC<AddWishProps> = () => {
	const [session] = useSession();
	const { t } = useTranslation(["cancel", "form", "wishlist"]);
	const methods = useForm<WishFormProps>();
	const { body, subject, changeBody, changeSubject } = useWish();
	const { add: addWish } = useWishlist();
	const { close: closeModal } = useWishModal();

	const [createWish, { data: dataCreateWish }] = useMutation<{
		createWish: Wish;
	}>(CREATE_WISH, {
		variables: {
			email: session?.user.email,
			subject,
			body,
		},
	});

	const handleSubmit = useCallback(async () => {
		await createWish();
		closeModal();
	}, [createWish, closeModal]);

	// Add new wishes
	useEffect(() => {
		if (dataCreateWish?.createWish) {
			addWish(dataCreateWish.createWish);
		}
	}, [addWish, dataCreateWish]);

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
						<Button type="submit">{t("wishlist:button.add-wish")}</Button>
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
			</Column>
			<StyledWishWrapper colSpanL={4}>
				{session ? (
					<Button type="button" onClick={openModal}>
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

const StatefulWishlist: FC<{ data: { wishes: Wish[] } }> = props => {
	return (
		<WishModalProvider>
			<WishlistProvider initialState={props.data.wishes}>
				<WishProvider>
					<Wishlist />
				</WishProvider>
			</WishlistProvider>
		</WishModalProvider>
	);
};

export default StatefulWishlist;
export { WISHES } from "@/templates/wishlist/queries";

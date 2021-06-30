import Button from "@/atoms/button";
import Typography from "@/atoms/typography";
import { StyledLink } from "@/atoms/typography/styled";
import { WishlistProvider, WishProvider } from "@/ions/hooks/wishes/context";
import { useWishlist } from "@/ions/hooks/wishes/wishlist";
import { StyledFieldset, StyledForm } from "@/molecules/form/styled";
import { Column, Grid } from "@/molecules/grid";
import InputField from "@/molecules/input-field";
import TextArea from "@/molecules/textarea-field";
import { CREATE_WISH, CREATE_WISH_VOTE, USER } from "@/templates/wishlist/queries";
import { AddWishProps, ListOfWishesProps, WishFormProps } from "@/types";
import { User, Wish, WishVote } from "@/types/backend-api";
import { useMutation, useQuery } from "@apollo/client";
import { css, Global, useTheme } from "@emotion/react";
import styled from "@emotion/styled";
import { useSession } from "next-auth/client";
import { useTranslation } from "next-i18next";
import Link from "next/link";
import React, { FC, useEffect, useMemo, useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import {
	StyledArticle,
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

export const PurpleTypography = styled(Typography)`
	${({ theme }) => css`
		color: ${theme.palette.purple};
	`};
`;

const WishCard: FC<{ wish: Wish }> = ({ wish: { body, id, subject, votes, voted, authorId } }) => {
	const [session] = useSession();
	const { t } = useTranslation(["wishlist"]);
	const { data: userData, error: userError } = useQuery<{ user: User }>(USER, {
		variables: {
			email: session?.user.email,
		},
	});

	const [createWishVote, { data }] = useMutation<{ createWishVote: WishVote }>(CREATE_WISH_VOTE, {
		variables: {
			userId: userData?.user?.id,
			wishId: id,
		},
	});

	const hasVote = Boolean(voted || data?.createWishVote);

	useEffect(() => {
		console.log("userError", userError);
	}, [userError]);

	useEffect(() => {
		console.log("userData", userData);
	}, [userData]);

	return (
		<StyledCard key={id} colSpanS={4} colSpanL={6}>
			<StyledArticle>
				<PurpleTypography variant="subtitle" component="h2">
					{subject}
				</PurpleTypography>
				<Typography light variant="body2">
					{body}
				</Typography>
			</StyledArticle>
			<StyledVotes>
				{userData?.user?.id === authorId ? (
					<svg height={24} width={24} viewBox="0 0 24 24">
						<path fill="currentColor" d={hearts.filled} />
					</svg>
				) : (
					<StyledIconButton
						aria-label={
							hasVote ? t("wishlist:button.down-vote") : t("wishlist:button.up-vote")
						}
						disabled={userData?.user?.id === authorId}
						onClick={() => {
							if (hasVote) {
								console.log("hasVote");
								// Add once implemented
								// void removeWishVote();
							} else {
								void createWishVote();
							}
						}}
					>
						<svg height={24} width={24} viewBox="0 0 24 24">
							<path
								fill="currentColor"
								d={hasVote ? hearts.filled : hearts.outlined}
							/>
						</svg>
					</StyledIconButton>
				)}

				<Typography raw light variant="body2">
					{votes + (data?.createWishVote ? 1 : 0)}
				</Typography>
			</StyledVotes>
		</StyledCard>
	);
};

const AddWish: FC<AddWishProps> = ({ onChangeBody, onChangeSubject, onSubmit }) => {
	const { t } = useTranslation(["wishlist"]);
	const methods = useForm<WishFormProps>();

	return (
		<FormProvider {...methods}>
			<Column colSpanL={8} colStartL={3}>
				<Typography centered variant="h1">
					{t("wishlist:add-wish.headline")}
				</Typography>
				<Typography centered>{t("wishlist:add-wish.body")}</Typography>
			</Column>
			<Column colSpanL={6} colStartL={4} colSpanM={4} colStartM={3}>
				<StyledForm noValidate onSubmit={methods.handleSubmit(onSubmit)}>
					<StyledFieldset>
						<InputField
							fullWidth
							id="form:wishlist:wish-subject"
							name="wish-subject"
							validation={{
								required: true,
								minLength: 2,
							}}
							onChange={value => {
								onChangeSubject(value);
							}}
						/>
						<TextArea
							fullWidth
							id="form:wishlist:wish-body"
							name="wish-body"
							validation={{ required: true, minLength: 2 }}
							onChange={value => {
								onChangeBody(value);
							}}
						/>
					</StyledFieldset>
					<Button type="submit">Add wish</Button>
				</StyledForm>
			</Column>
		</FormProvider>
	);
};

const ListOfWishes: FC<ListOfWishesProps> = ({ onAddWish }) => {
	const { t } = useTranslation(["wishlist"]);
	const [session] = useSession();
	const { wishes } = useWishlist();
	return (
		<>
			<Column colSpanL={6}>
				<Typography raw variant="h1">
					{t("wishlist:headline")}
				</Typography>
			</Column>
			<StyledWishWrapper colSpanL={6}>
				{session ? (
					<Button type="button" onClick={onAddWish}>
						{t("wishlist:button.wish")}
					</Button>
				) : (
					<Link passHref href="/">
						<StyledLink>Login</StyledLink>
					</Link>
				)}
			</StyledWishWrapper>
			{wishes.map(wish => (
				<WishCard key={wish.id} wish={wish} />
			))}
		</>
	);
};

const Wishlist: FC<{ data: { wishes: Wish[] } }> = ({ data: { wishes } }) => {
	const [localWishes, setLocalWishes] = useState<Wish[]>([]);
	const [addingWish, setAddingWish] = useState(false);
	const [wishSubject, setWishSubject] = useState<string | undefined>();
	const [wishBody, setWishBody] = useState<string | undefined>();
	const theme = useTheme();

	const [session] = useSession();

	const [createWish, { data, error }] = useMutation<{ createWish: Wish }>(CREATE_WISH, {
		variables: {
			email: session?.user.email,
			subject: wishSubject,
			body: wishBody,
		},
	});

	// Add new wishes to the local state to get immediate feedback
	useEffect(() => {
		if (data?.createWish) {
			setLocalWishes(previousState => [data.createWish, ...previousState]);
		}
	}, [data]);

	// In case of errors, report them
	// ToDo handle errors and display them so the user is aware that something went wrong
	useEffect(() => {
		if (error) {
			console.error(error);
		}
	}, [error]);

	const wishlistState = useMemo(
		() => ({
			wishes: [...localWishes, ...wishes]
				.filter(Boolean)
				.reduce((previousValue: Wish[], currentValue) => {
					const duplicate = previousValue.some(({ id }) => {
						return currentValue.id === id;
					});
					if (duplicate) {
						return previousValue;
					}

					return [...previousValue, currentValue];
				}, []),
			create: createWish,
		}),
		[wishes, localWishes, createWish]
	);

	const wishState = useMemo(
		() => ({
			body: wishBody,
			subject: wishSubject,
		}),
		[wishBody, wishSubject]
	);

	return (
		<WishlistProvider value={wishlistState}>
			<WishProvider wish={wishState}>
				<StyledLayout>
					<Global
						styles={css`
							body {
								background-color: ${theme.palette.dark};
								color: ${theme.ui.colors.dark.color};
							}
						`}
					/>
					<Grid>
						{addingWish ? (
							<AddWish
								onChangeBody={(value: string) => {
									setWishBody(value);
								}}
								onChangeSubject={(value: string) => {
									setWishSubject(value);
								}}
								onSubmit={() => {
									void createWish();
									setAddingWish(false);
								}}
							/>
						) : (
							<ListOfWishes
								onAddWish={() => {
									setAddingWish(true);
								}}
							/>
						)}
					</Grid>
				</StyledLayout>
			</WishProvider>
		</WishlistProvider>
	);
};

export default Wishlist;
export { WISHES } from "@/templates/wishlist/queries";

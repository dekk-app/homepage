import Button from "@/atoms/button";
import I18nLink from "@/atoms/i18n-link";
import { StyledStripe, StyledStripeWrapper } from "@/atoms/stripe/styled";
import Typography from "@/atoms/typography";
import { WishlistProvider, WishModalProvider, WishProvider } from "@/ions/hooks/wishes/context";
import { useWishModal } from "@/ions/hooks/wishes/wish-modal";
import { useWishlist } from "@/ions/hooks/wishes/wishlist";
import { Column, Grid } from "@/molecules/grid";
import WishCard from "@/organisms/wish-card";
import { Wish } from "@/types/backend-api";
import { css, Global, useTheme } from "@emotion/react";
import { useSession } from "next-auth/client";
import { useTranslation } from "next-i18next";
import dynamic from "next/dynamic";
import React, { FC } from "react";
import { StyledLayout, StyledWishWrapper } from "./styled";

const AddWish = dynamic(async () => import("@/organisms/add-wish"));

const ListOfWishes = () => {
	const { t } = useTranslation(["common", "wishlist"]);
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
					<I18nLink passHref href="/">
						{t("common:signin")}
					</I18nLink>
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
	const { t } = useTranslation(["meta"]);
	return (
		<StyledLayout title={t("meta:wishlist.title")} description={t("meta:wishlist.description")}>
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

const StatefulWishlist: FC<{ data: { wishes: Wish[] } }> = ({ data }) => {
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

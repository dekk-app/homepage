import Button from "@/atoms/button";
import I18nLink from "@/atoms/i18n-link";
import { StyledStripe, StyledStripeWrapper } from "@/atoms/stripe/styled";
import Typography from "@/atoms/typography";
import { ModalProvider, useModal } from "@/ions/contexts/modal";
import { WishProvider } from "@/ions/contexts/wish";
import { useWishlist, WishlistProvider } from "@/ions/contexts/wishlist";
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

const Wishlist = () => {
	const [session] = useSession();
	const { wishes } = useWishlist();
	const { open: openModal, isOpen } = useModal();
	const theme = useTheme();

	const { t } = useTranslation(["common", "wishlist", "meta"]);
	return (
		<StyledLayout title={t("meta:wishlist.title")} description={t("meta:wishlist.description")}>
			<Global
				styles={css`
					body {
						background-color: ${theme.ui.colors.light.background};
						color: ${theme.ui.colors.light.color};
					}
				`}
			/>
			<Grid>
				<Column colSpanL={8}>
					<Typography variant="h1">{t("wishlist:headline")}</Typography>
					<Typography variant="body">{t("wishlist:description")}</Typography>
				</Column>
				<StyledWishWrapper>
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
				{wishes.map(wish => (
					<WishCard key={wish.id} wish={wish} />
				))}
				{isOpen && <AddWish />}
			</Grid>
		</StyledLayout>
	);
};

const StatefulWishlist: FC<{ data: { wishes: Wish[] } }> = ({ data }) => {
	return (
		<ModalProvider>
			<WishlistProvider initialState={data?.wishes}>
				<WishProvider>
					<Wishlist />
				</WishProvider>
			</WishlistProvider>
		</ModalProvider>
	);
};

export default StatefulWishlist;

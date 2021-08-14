import Button from "@/atoms/button";
import Typography from "@/atoms/typography";
import { AddWishModalProvider, useAddWishModal } from "@/ions/contexts/add-wish-modal";
import { SigninModalProvider, useSigninModal } from "@/ions/contexts/signin-modal";
import { WishProvider } from "@/ions/contexts/wish";
import { useWishlist, WishlistProvider } from "@/ions/contexts/wishlist";
import { useSession } from "@/ions/hooks/session";
import { Column, Grid } from "@/molecules/grid";
import WishCard from "@/organisms/wish-card";
import { Wish } from "@/types/backend-api";
import { css, Global, useTheme } from "@emotion/react";
import { useTranslation } from "next-i18next";
import dynamic from "next/dynamic";
import React, { FC, memo } from "react";
import { StyledLayout, StyledWishWrapper } from "./styled";

const AddWishModal = dynamic(async () => import("@/organisms/add-wish-modal"));
const SigninModal = dynamic(async () => import("@/groups/signin-modal"));

export interface WishlistProps {
	data: { wishes: Wish[] };
}

const Wishlist = () => {
	const [session] = useSession();
	const { wishes } = useWishlist();
	const { open: openAddWishModal, isOpen: isAddWishModalOpen } = useAddWishModal();
	const { open: openSigninModal, isOpen: isSigninModalOpen } = useSigninModal();
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
							primary
							type="button"
							onClick={() => {
								openAddWishModal();
							}}
						>
							{t("wishlist:button.wish")}
						</Button>
					) : (
						<Button
							primary
							type="button"
							onClick={() => {
								openSigninModal();
							}}
						>
							{t("common:signin")}
						</Button>
					)}
				</StyledWishWrapper>
				{wishes.map(wish => (
					<WishCard key={wish.id} wish={wish} />
				))}
				{isAddWishModalOpen && <AddWishModal />}
				{isSigninModalOpen && <SigninModal />}
			</Grid>
		</StyledLayout>
	);
};

const MemoizedWishlist = memo(Wishlist);

const StatefulWishlist: FC<WishlistProps> = ({ data }) => {
	return (
		<SigninModalProvider>
			<AddWishModalProvider>
				<WishlistProvider initialState={data?.wishes}>
					<WishProvider>
						<MemoizedWishlist />
					</WishProvider>
				</WishlistProvider>
			</AddWishModalProvider>
		</SigninModalProvider>
	);
};

export default StatefulWishlist;

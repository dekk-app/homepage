import Button from "@/atoms/button";
import Typography from "@/atoms/typography";
import Layout from "@/groups/layout";
import { AddWishModalProvider, useAddWishModal } from "@/ions/contexts/add-wish-modal";
import { RawBreadcrumb } from "@/ions/contexts/breadcrumbs/types";
import { SigninModalProvider, useSigninModal } from "@/ions/contexts/signin-modal";
import { WishProvider } from "@/ions/contexts/wish";
import { useWishlist, WishlistProvider } from "@/ions/contexts/wishlist";
import { Column, Grid } from "@/molecules/grid";
import Breadcrumbs from "@/organisms/breadcrumbs";
import WishCard from "@/organisms/wish-card";
import { Wish } from "@/types/backend-api";
import { useSession } from "next-auth/client";
import { useTranslation } from "next-i18next";
import dynamic from "next/dynamic";
import React, { FC, memo, useMemo } from "react";
import { StyledWishWrapper } from "./styled";

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
	const { t } = useTranslation(["navigation", "common", "wishlist", "meta"]);
	const breadcrumbs: RawBreadcrumb[] = useMemo(
		() => [
			{
				href: "/",
				title: t("navigation:home"),
			},
			{
				href: "/wishlist",
				title: t("navigation:wishlist"),
			},
		],
		[t]
	);

	return (
		<Layout
			title={t("meta:wishlist.title")}
			description={t("meta:wishlist.description")}
			keywords={t("meta:wishlist.keywords")}
			breadcrumbs={breadcrumbs}
		>
			<Grid>
				<Column colSpanL={8}>
					<Breadcrumbs />
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
		</Layout>
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

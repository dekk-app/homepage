import { StyledButton } from "@/atoms/button/styled";
import Typography from "@/atoms/typography";
import Layout from "@/groups/layout";
import { AddWishModalProvider, useAddWishModal } from "@/ions/contexts/add-wish-modal";
import { RawBreadcrumb } from "@/ions/contexts/breadcrumbs/types";
import { SigninModalProvider, useSigninModal } from "@/ions/contexts/signin-modal";
import { WishProvider } from "@/ions/contexts/wish";
import { useWishlist, WishlistProvider } from "@/ions/contexts/wishlist";
import { useScrollY } from "@/ions/hooks/scroll-y";
import { pxToRem } from "@/ions/utils/unit";
import { Column, Grid, Row } from "@/molecules/grid";
import Breadcrumbs from "@/organisms/breadcrumbs";
import WishCard from "@/organisms/wish-card";
import { Wish } from "@/types/backend-api";
import { css, Global } from "@emotion/react";
import { useSession } from "next-auth/client";
import { useTranslation } from "next-i18next";
import dynamic from "next/dynamic";
import React, { FC, memo, useCallback, useEffect, useMemo, useRef, useState } from "react";
import { StyledButtonWrapper, StyledWishWrapper } from "./styled";

const Snackbar = dynamic(async () => import("@/molecules/snackbar"));
const AddWishModal = dynamic(async () => import("@/organisms/add-wish-modal"));
const SigninModal = dynamic(async () => import("@/groups/signin-modal"));

export interface WishlistProps {
	data: { wishes: Wish[] };
}

const Wishlist = () => {
	const [session] = useSession();
	const { wishes, error, setError } = useWishlist();
	const { open: openAddWishModal, isOpen: isAddWishModalOpen } = useAddWishModal();
	const { open: openSigninModal, isOpen: isSigninModalOpen } = useSigninModal();
	const scrollY = useScrollY(true);
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
	const buttonRef = useRef<HTMLButtonElement>(null);
	const [stickyButtonVar, setStickyButtonVar] = useState(css``);
	const resetError = useCallback(() => {
		setError(null);
	}, [setError]);
	useEffect(() => {
		if (buttonRef.current) {
			const { width } = buttonRef.current.getBoundingClientRect();
			setStickyButtonVar(css`
				:root {
					--sticky-button-width: ${pxToRem(width + 32)};
				}
			`);
		}
	}, [buttonRef]);
	const stickyButtonHeight = 60;
	const stickyButtonTop = 276;
	const headerHeight = 68;
	const elevateButtonAt = stickyButtonTop - stickyButtonHeight - headerHeight;
	const dark = false;
	const isElevated = scrollY > elevateButtonAt && scrollY < stickyButtonTop;

	return (
		<Layout
			dark={dark}
			title={t("meta:wishlist.title")}
			description={t("meta:wishlist.description")}
			keywords={t("meta:wishlist.keywords")}
			breadcrumbs={breadcrumbs}
		>
			<Global key="sticky-button" styles={stickyButtonVar} />
			<Grid>
				<Column colSpanL={8}>
					<Breadcrumbs />
					<Typography variant="h1">{t("wishlist:headline")}</Typography>
					<Typography variant="body">{t("wishlist:description")}</Typography>
				</Column>
				<StyledWishWrapper dark={dark}>
					<StyledButtonWrapper elevated={isElevated}>
						{session ? (
							<StyledButton
								ref={buttonRef}
								primary
								type="button"
								onClick={() => {
									openAddWishModal();
								}}
							>
								{t("wishlist:button.wish")}
							</StyledButton>
						) : (
							<StyledButton
								ref={buttonRef}
								primary
								type="button"
								onClick={() => {
									openSigninModal();
								}}
							>
								{t("common:signin")}
							</StyledButton>
						)}
					</StyledButtonWrapper>
				</StyledWishWrapper>
				<Column>
					<Row stretch>
						{wishes.map(wish => (
							<WishCard key={wish.id} wish={wish} />
						))}
					</Row>
				</Column>
				{error && (
					<Snackbar fixed id="wishlistError" level="error" onClose={resetError}>
						{error}
					</Snackbar>
				)}
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

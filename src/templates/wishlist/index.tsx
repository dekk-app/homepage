import Button from "@/atoms/button";
import Spinner from "@/atoms/spinner";
import Tag from "@/atoms/tag";
import { StyledTags } from "@/atoms/tag/styled";
import Typography from "@/atoms/typography";
import Layout from "@/groups/layout";
import { useBreakpoint } from "@/ions/hooks/breakpoint";
import { useScrollY } from "@/ions/hooks/scroll-y";
import { MY_WISHES, WISHES } from "@/ions/queries/wishes";
import { useError } from "@/ions/stores/error";
import { useSigninModal } from "@/ions/stores/modal/signin";
import { useAddWishModal } from "@/ions/stores/modal/wish";
import { useSearchQuery } from "@/ions/stores/query";
import { useWish } from "@/ions/stores/wish";
import { pxToRem } from "@/ions/utils/unit";
import { Column, Grid, Row } from "@/molecules/grid";
import Breadcrumbs from "@/organisms/breadcrumbs";
import SearchField from "@/organisms/search-field";
import WishCard from "@/organisms/wish-card";
import { Wish } from "@/types/backend-api";
import { useQuery } from "@apollo/client";
import { css, Global, useTheme } from "@emotion/react";
import { useSession } from "next-auth/client";
import { useTranslation } from "next-i18next";
import dynamic from "next/dynamic";
import React, { memo, useEffect, useMemo, useRef, useState } from "react";
import { useDebounce } from "use-debounce";
import {
	StyledButtonWrapper,
	StyledFiltersWrapper,
	StyledSpinnerWrapper,
	StyledStickyWrapper,
} from "./styled";

const Snackbar = dynamic(async () => import("@/molecules/snackbar"));
const AddWishModal = dynamic(async () => import("@/organisms/add-wish-modal"));
const SigninModal = dynamic(async () => import("@/groups/signin-modal"));

const Wishlist = () => {
	const theme = useTheme();
	const [session] = useSession();
	const { t } = useTranslation(["navigation", "common", "wishlist", "meta"]);

	// References
	const offsetRef = useRef<HTMLDivElement>(null);
	const buttonRef = useRef<HTMLDivElement>(null);

	// Listeners
	const isLargeScreen = useBreakpoint("l", false);
	const scrollY = useScrollY(isLargeScreen);

	// State management
	const setError = useError(state => state.setError);
	const error = useError(state => state.error);

	const isAddWishModalOpen = useAddWishModal(state => state.isOpen);
	const openAddWishModal = useAddWishModal(state => state.open);

	const isSigninModalOpen = useSigninModal(state => state.isOpen);
	const openSigninModal = useSigninModal(state => state.open);

	const clearWish = useWish(state => state.clear);

	const query = useSearchQuery(state => state.query);

	const [authorId, setAuthorId] = useState<null | number>(null);

	const [stickyButtonVar, setStickyButtonVar] = useState(css``);
	const [offsetObject, setOffsetObject] = useState({
		height: 84,
		top: 272,
	});

	const [debouncedQuery] = useDebounce(query.trim(), 1000);

	// Graphql & Data Management
	const { data, loading } = useQuery<{ wishes: Wish[] }>(authorId ? MY_WISHES : WISHES, {
		variables: {
			query: debouncedQuery,
			authorId,
		},
	});

	// Side-effects
	useEffect(() => {
		if (offsetRef.current && buttonRef.current && isLargeScreen) {
			const { width } = buttonRef.current.getBoundingClientRect();
			const { top, height } = offsetRef.current.getBoundingClientRect();
			setOffsetObject({
				height,
				top: top + window.scrollY,
			});
			setStickyButtonVar(css`
				:root {
					--sticky-button-width: ${pxToRem(width + 32)};
				}
			`);
		}
	}, [offsetRef, buttonRef, isLargeScreen]);

	const elevateButtonAt = offsetObject.top - offsetObject.height - theme.layout.header.height.l;
	const isStickyButtonElevated = scrollY > elevateButtonAt && scrollY < offsetObject.top;

	return (
		<Layout
			title={t("meta:wishlist.title")}
			description={t("meta:wishlist.description")}
			keywords={t("meta:wishlist.keywords")}
			robots="noindex,nofollow"
			breadcrumbs={useMemo(
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
			)}
		>
			<Global key="sticky-button" styles={stickyButtonVar} />
			<Grid>
				<Column order={-1}>
					<Breadcrumbs />
					<Typography variant="h1">{t("wishlist:headline")}</Typography>
					<Typography variant="body">{t("wishlist:description")}</Typography>
				</Column>
				<Column innerRef={offsetRef} colSpanL={6} order={-1}>
					<SearchField label={t("wishlist:search-wishes")} />
				</Column>
				<StyledFiltersWrapper>
					{session && (
						<>
							<Typography variant="subtitle">{t("wishlist:filter")}</Typography>
							<StyledTags>
								<Tag
									colorScheme={authorId ? "green" : "dark"}
									as="button"
									onClick={() => {
										setAuthorId(previousState =>
											typeof previousState === "number"
												? null
												: (session.user.id as number)
										);
									}}
								>
									{t("wishlist:my-wish")}
								</Tag>
							</StyledTags>
						</>
					)}
				</StyledFiltersWrapper>
				<StyledStickyWrapper colSpanL={6} order={-1}>
					<StyledButtonWrapper ref={buttonRef} elevated={isStickyButtonElevated}>
						{session ? (
							<Button
								primary
								slim
								type="button"
								onClick={() => {
									clearWish();
									openAddWishModal();
								}}
							>
								{t("wishlist:button.wish")}
							</Button>
						) : (
							<Button
								primary
								slim
								type="button"
								onClick={() => {
									openSigninModal();
								}}
							>
								{t("common:signin")}
							</Button>
						)}
					</StyledButtonWrapper>
				</StyledStickyWrapper>

				<Column>
					<Row stretch>
						{loading && (
							<StyledSpinnerWrapper>
								<Spinner size={pxToRem(100)} color={theme.palette.brand} />
							</StyledSpinnerWrapper>
						)}
						{data?.wishes.map(wish => (
							<WishCard key={wish.id} wish={wish} />
						))}
					</Row>
				</Column>
				{error && (
					<Snackbar
						fixed
						id="wishlistError"
						level="error"
						onClose={() => {
							setError(null);
						}}
					>
						{error}
					</Snackbar>
				)}
				{isAddWishModalOpen && <AddWishModal />}
				{isSigninModalOpen && <SigninModal />}
			</Grid>
		</Layout>
	);
};

export default memo(Wishlist);

import Button from "@/atoms/button";
import Spinner from "@/atoms/spinner";
import Tag from "@/atoms/tag";
import { StyledTags } from "@/atoms/tag/styled";
import Typography from "@/atoms/typography";
import Layout from "@/groups/layout";
import { useBreakpoint } from "@/ions/hooks/breakpoint";
import { useObjectSnakeToCamel } from "@/ions/hooks/case";
import { useQueryRouter } from "@/ions/hooks/query-router";
import { useScrollY } from "@/ions/hooks/scroll-y";
import { MY_WISHES, MY_WISHES_COUNT, WISHES, WISHES_COUNT } from "@/ions/queries/wishes";
import { useError } from "@/ions/stores/error";
import { useSigninModal } from "@/ions/stores/modal/signin";
import { useAddWishModal } from "@/ions/stores/modal/wish";
import { useWish } from "@/ions/stores/wish";
import { objectCamelToSnake } from "@/ions/utils/object";
import { toString } from "@/ions/utils/string";
import { pxToRem } from "@/ions/utils/unit";
import { Column, Grid, Row } from "@/molecules/grid";
import Hidden from "@/molecules/hidden";
import Breadcrumbs from "@/organisms/breadcrumbs";
import Pager, { config } from "@/organisms/pager";
import SearchField from "@/organisms/search-field";
import WishCard from "@/organisms/wish-card";
import { AggregateWish, Wish } from "@/types/backend-api";
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

const toggleItemInArray = (array: string[], value: string) => {
	if (array.includes(value)) {
		array.splice(array.indexOf(value), 1);
	} else {
		array.push(value);
	}

	return array;
};

const toggleItemInString = (string: string, value: string) =>
	toggleItemInArray(string.split(",").filter(Boolean), value).sort().join(",");

const SearchFilters = () => {
	const { t } = useTranslation(["common"]);
	const [session] = useSession();
	const { push: queryPush, query: routerQuery } = useQueryRouter();
	const { authorId, moderateNotIn = "" } = useObjectSnakeToCamel(routerQuery);
	return (
		session && (
			<StyledFiltersWrapper>
				<Row>
					<Column>
						<Typography variant="subtitle">{t("wishlist:filter")}</Typography>
						<StyledTags>
							<Tag
								colorScheme={
									authorId &&
									Number.parseInt(authorId as string, 10) === session.user.id
										? "blue"
										: "dark"
								}
								as="button"
								onClick={() => {
									void queryPush(
										objectCamelToSnake({
											authorId:
												authorId &&
												Number.parseInt(authorId as string, 10) ===
													session.user.id
													? null
													: toString(session.user.id as number),
											page: null,
											moderateNotIn: null,
										})
									);
								}}
							>
								{t("wishlist:my-wish")}
							</Tag>
							<Tag
								colorScheme={moderateNotIn.includes("accepted") ? "dark" : "blue"}
								as="button"
								onClick={() => {
									void queryPush(
										objectCamelToSnake({
											moderateNotIn:
												toggleItemInString(
													moderateNotIn as string,
													"accepted"
												) || null,
											page: null,
										})
									);
								}}
							>
								{t("wishlist:accepted")}
							</Tag>
							<Tag
								colorScheme={moderateNotIn.includes("pending") ? "dark" : "blue"}
								as="button"
								onClick={() => {
									void queryPush(
										objectCamelToSnake({
											moderateNotIn:
												toggleItemInString(
													moderateNotIn as string,
													"pending"
												) || null,
											page: null,
										})
									);
								}}
							>
								{t("wishlist:pending")}
							</Tag>
							<Tag
								colorScheme={moderateNotIn.includes("declined") ? "dark" : "blue"}
								as="button"
								onClick={() => {
									void queryPush(
										objectCamelToSnake({
											moderateNotIn:
												toggleItemInString(
													moderateNotIn as string,
													"declined"
												) || null,
											page: null,
										})
									);
								}}
							>
								{t("wishlist:declined")}
							</Tag>
						</StyledTags>
					</Column>
				</Row>
			</StyledFiltersWrapper>
		)
	);
};

export const INITIAL_PAGE_SIZE = 12;

const Wishlist = () => {
	const theme = useTheme();
	const [session] = useSession();
	const { query } = useQueryRouter();
	const { t } = useTranslation(["navigation", "common", "wishlist", "meta"]);
	const darkMode = false;

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

	const objectQuery = useObjectSnakeToCamel(query);
	const pageSize = objectQuery.pageSize
		? Number.parseInt(objectQuery.pageSize as string, 10)
		: INITIAL_PAGE_SIZE;
	const page = objectQuery.page ? Number.parseInt(objectQuery.page as string, 10) - 1 : 0;
	const authorId = objectQuery.authorId
		? Number.parseInt(objectQuery.authorId as string, 10)
		: null;
	const moderate = objectQuery.moderateNotIn
		? (objectQuery.moderateNotIn as string).split(",")
		: [];
	const searchQuery = objectQuery.searchQuery ?? "";

	const [stickyButtonVar, setStickyButtonVar] = useState(css``);
	const [offsetObject, setOffsetObject] = useState({
		height: 84,
		top: 272,
	});

	const [debouncedQuery] = useDebounce((searchQuery as string).trim(), 1000);

	// Graphql & Data Management
	const { data, loading } = useQuery<{ wishes: Wish[] }>(authorId ? MY_WISHES : WISHES, {
		variables: {
			query: debouncedQuery,
			authorId,
			take: pageSize,
			skip: pageSize * page,
			moderate,
		},
	});

	const { data: dataCount } = useQuery<{ aggregateWish: AggregateWish }>(
		authorId ? MY_WISHES_COUNT : WISHES_COUNT,
		{
			variables: {
				query: debouncedQuery,
				authorId,
				moderate,
			},
		}
	);

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
			dark={darkMode}
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
				<Column>
					<SearchFilters />
					{dataCount?.aggregateWish && (
						<Pager
							items={dataCount.aggregateWish.count._all}
							pageSize={{ property: "pageSize", step: pageSize }}
							elements={{
								currentPage: dataCount.aggregateWish.count._all / pageSize > 1,
								toPrevious: dataCount.aggregateWish.count._all / pageSize > 1,
								toNext: dataCount.aggregateWish.count._all / pageSize > 1,
								toLast: false,
								toFirst: false,
							}}
							property="page"
						/>
					)}
				</Column>
				<StyledStickyWrapper dark={darkMode} colSpanL={6} order={-1}>
					<StyledButtonWrapper ref={buttonRef} elevated={isStickyButtonElevated}>
						{session ? (
							<Button
								primary
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
					{dataCount && (
						<Hidden hideXS hideS>
							<Pager
								fullWidth
								items={dataCount.aggregateWish.count._all}
								pageSize={{ property: "pageSize", step: INITIAL_PAGE_SIZE }}
								elements={config.full}
								property="page"
							/>
						</Hidden>
					)}
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

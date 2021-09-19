import { BreakLines } from "@/atoms/break-lines";
import Icon from "@/atoms/icon";
import { StyledIconButton } from "@/atoms/icon-button/styled";
import Spinner from "@/atoms/spinner";
import { StyledTags } from "@/atoms/tag/styled";
import Typography from "@/atoms/typography";
import {
	CREATE_WISH_VOTE,
	DELETE_WISH_VOTE,
	MODERATE_WISH,
	NEW_WISH_FRAGMENT,
} from "@/ions/queries/wishes";
import { useAddWishModal } from "@/ions/stores/modal/wish";
import { useWish } from "@/ions/stores/wish";
import { pxToRem } from "@/ions/utils/unit";
import Accordion from "@/molecules/accordion";
import { Moderation, Role, Wish, WishVote } from "@/types/backend-api";
import { useMutation } from "@apollo/client";
import { useSession } from "next-auth/client";
import { useTranslation } from "next-i18next";
import dynamic from "next/dynamic";
import React, { FC, memo } from "react";
import {
	StyledArticle,
	StyledCard,
	StyledCardActions,
	StyledIconButtonWrapper,
	StyledModeratorButtons,
	StyledVote,
} from "./styled";

const Tag = dynamic(async () => import("@/atoms/tag"));

const WishCard: FC<{ wish: Wish }> = ({
	wish: { body, id, subject, votes, voted, authorId, moderate, __typename },
}) => {
	const [session] = useSession();
	const { t } = useTranslation(["wishlist"]);
	const open = useAddWishModal(state => state.open);
	const setId = useWish(state => state.setId);
	const setBody = useWish(state => state.setBody);
	const setSubject = useWish(state => state.setSubject);

	const [createWishVote] = useMutation<{
		createWishVote: WishVote;
	}>(CREATE_WISH_VOTE, {
		variables: {
			userId: session?.user.id,
			wishId: id,
		},
		update(cache, { data: { createWishVote } }) {
			cache.modify({
				fields: {
					wishes(existingWishes: Wish[] = []) {
						const newWishRef = cache.writeFragment({
							data: {
								__typename,
								id,
								body,
								authorId,
								moderate,
								subject,
								voted: true,
								votes: votes + 1,
							},
							fragment: NEW_WISH_FRAGMENT,
						});
						return existingWishes.map(existingWish =>
							existingWish.id === createWishVote.id ? newWishRef : existingWish
						);
					},
				},
			});
		},
	});

	const [deleteWishVote] = useMutation<{
		deleteWishVote: WishVote;
	}>(DELETE_WISH_VOTE, {
		variables: {
			userId: session?.user.id,
			wishId: id,
		},
		update(cache, { data: { deleteWishVote } }) {
			cache.modify({
				fields: {
					wishes(existingWishes: Wish[] = []) {
						const newWishRef = cache.writeFragment({
							data: {
								__typename,
								id,
								body,
								subject,
								authorId,
								moderate,
								voted: false,
								votes: votes - 1,
							},
							fragment: NEW_WISH_FRAGMENT,
						});
						return existingWishes.map(existingWish =>
							existingWish.id === deleteWishVote.id ? newWishRef : existingWish
						);
					},
				},
			});
		},
	});

	const [moderateWish, { loading: loadingUpdateWish }] = useMutation<{
		updateWish: Wish;
	}>(MODERATE_WISH, {
		update(cache, { data: { updateWish } }) {
			cache.modify({
				fields: {
					wishes(existingWishes: Wish[] = []) {
						const newWishRef = cache.writeFragment({
							data: updateWish,
							fragment: NEW_WISH_FRAGMENT,
						});
						return existingWishes.map(existingWish =>
							existingWish.id === updateWish.id ? newWishRef : existingWish
						);
					},
				},
			});
		},
	});

	return (
		<StyledCard colSpanS={4} colSpanL={6} data-test-selector="wish-card" data-test-id={`${id}`}>
			<StyledArticle>
				<Accordion ellipsis heading={subject} id={`__wish-card__${id}`}>
					<Typography light variant="body2" data-test-selector="wish-body">
						<BreakLines text={body} />
					</Typography>
				</Accordion>
			</StyledArticle>
			<StyledTags>
				{session?.user.id === authorId && (
					<Tag colorScheme="blue">{t("wishlist:my-wish")}</Tag>
				)}
				{moderate === Moderation.Pending && (
					<Tag colorScheme="yellow">{t("wishlist:pending")}</Tag>
				)}
				{moderate === Moderation.Declined && (
					<Tag colorScheme="red">{t("wishlist:declined")}</Tag>
				)}
			</StyledTags>
			<StyledCardActions>
				{session ? (
					session.user.id === authorId ? (
						<StyledVote>
							<Icon icon="heartFilled" />
						</StyledVote>
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
					)
				) : (
					<StyledVote>
						<Icon icon="heartOutlined" />
					</StyledVote>
				)}
				<Typography raw light variant="body2" data-test-selector="wish-votes">
					{votes}
				</Typography>
				<StyledModeratorButtons>
					{session?.user.id === authorId && moderate === Moderation.Pending && (
						<StyledIconButtonWrapper>
							<StyledIconButton
								aria-label={t("wishlist:button.edit")}
								onClick={() => {
									setId(id);
									setBody(body);
									setSubject(subject);
									open();
								}}
							>
								<Icon icon="edit" />
							</StyledIconButton>
						</StyledIconButtonWrapper>
					)}
					{session?.user.role === Role.Admin && (
						<>
							<StyledIconButton
								aria-label={t("wishlist:button.approve")}
								onClick={() => {
									void moderateWish({
										variables: { id, moderate: Moderation.Accepted },
									});
								}}
							>
								{loadingUpdateWish ? (
									<Spinner size={pxToRem(24)} />
								) : (
									<Icon icon="checkCircleOutline" />
								)}
							</StyledIconButton>
							<StyledIconButton
								aria-label={t("wishlist:button.decline")}
								onClick={() => {
									void moderateWish({
										variables: { id, moderate: Moderation.Declined },
									});
								}}
							>
								{loadingUpdateWish ? (
									<Spinner size={pxToRem(24)} />
								) : (
									<Icon icon="minusCircleOutline" />
								)}
							</StyledIconButton>
						</>
					)}
				</StyledModeratorButtons>
			</StyledCardActions>
		</StyledCard>
	);
};

export default memo(WishCard);

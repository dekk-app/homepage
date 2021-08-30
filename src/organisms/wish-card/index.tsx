import Icon from "@/atoms/icon";
import { StyledIconButton } from "@/atoms/icon-button/styled";
import Typography from "@/atoms/typography";
import { CREATE_WISH_VOTE, DELETE_WISH_VOTE, NEW_WISH_FRAGMENT } from "@/ions/queries/wishes";
import { useAddWishModal } from "@/ions/stores/modal/wish";
import { useWish } from "@/ions/stores/wish";
import { Wish, WishVote } from "@/types/backend-api";
import { useMutation } from "@apollo/client";
import { useSession } from "next-auth/client";
import { useTranslation } from "next-i18next";
import React, { FC, memo } from "react";
import {
	StyledArticle,
	StyledCard,
	StyledIconButtonWrapper,
	StyledTooltip,
	StyledVotes,
} from "./styled";

const WishCard: FC<{ wish: Wish }> = ({
	wish: { body, id, subject, votes, voted, authorId, __typename },
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

	return (
		<StyledCard colSpanS={4} colSpanL={6} data-test-selector="wish-card" data-test-id={`${id}`}>
			<StyledArticle>
				<Typography variant="subtitle" component="h2" data-test-selector="wish-subject">
					{subject}
				</Typography>
				<Typography light variant="body2" data-test-selector="wish-body">
					{body}
				</Typography>
			</StyledArticle>
			<StyledVotes>
				{session ? (
					session?.user.id === authorId ? (
						<Icon icon="heartFilled" />
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
					<Icon icon="heartOutlined" />
				)}
				<Typography raw light variant="body2" data-test-selector="wish-votes">
					{votes}
				</Typography>
				{session?.user.id === authorId && (
					<StyledIconButtonWrapper>
						<StyledIconButton
							aria-label={t("wishlist:button.edit")}
							disabled={votes > 0}
							onClick={() => {
								if (votes < 1) {
									setId(id);
									setBody(body);
									setSubject(subject);
									open();
								}
							}}
						>
							<Icon icon="edit" />
						</StyledIconButton>
						{votes > 0 && (
							<StyledTooltip>{t("wishlist:tooltip.disabled")}</StyledTooltip>
						)}
					</StyledIconButtonWrapper>
				)}
			</StyledVotes>
		</StyledCard>
	);
};

export default memo(WishCard);

import Icon from "@/atoms/icon";
import { StyledIconButton } from "@/atoms/icon-button/styled";
import Typography from "@/atoms/typography";
import { useAddWishModal } from "@/ions/contexts/add-wish-modal";
import { useWishlist } from "@/ions/contexts/wishlist";
import { useSession } from "@/ions/hooks/session";
import { CREATE_WISH_VOTE, DELETE_WISH_VOTE } from "@/ions/queries/wishes";
import {
	StyledArticle,
	StyledCard,
	StyledIconButtonWrapper,
	StyledTooltip,
	StyledVotes,
} from "@/organisms/wish-card/styled";
import { Wish, WishVote } from "@/types/backend-api";
import { useMutation } from "@apollo/client";
import { useTranslation } from "next-i18next";
import React, { FC, memo, useEffect } from "react";

const WishCard: FC<{ wish: Wish }> = ({ wish: { body, id, subject, votes, voted, authorId } }) => {
	const [session] = useSession();
	const { t } = useTranslation(["wishlist"]);
	const { update: updateWish } = useWishlist();
	const { open } = useAddWishModal();

	const [createWishVote, { data: dataCreateWishVote }] = useMutation<{
		createWishVote: WishVote;
	}>(CREATE_WISH_VOTE, {
		variables: {
			userId: session?.user.id,
			wishId: id,
		},
	});

	const [deleteWishVote, { data: dataDeleteWishVote }] = useMutation<{
		deleteWishVote: WishVote;
	}>(DELETE_WISH_VOTE, {
		variables: {
			userId: session?.user.id,
			wishId: id,
		},
	});

	useEffect(() => {
		if (dataCreateWishVote?.createWishVote) {
			updateWish(id, (previousState: Wish) => ({
				voted: true,
				votes: previousState.votes + 1,
			}));
		}
	}, [id, updateWish, dataCreateWishVote]);

	useEffect(() => {
		if (dataDeleteWishVote?.deleteWishVote) {
			updateWish(id, (previousState: Wish) => ({
				voted: false,
				votes: previousState.votes - 1,
			}));
		}
	}, [id, updateWish, dataDeleteWishVote]);

	return (
		<StyledCard colSpanS={4} colSpanL={6}>
			<StyledArticle>
				<Typography variant="subtitle" component="h2">
					{subject}
				</Typography>
				<Typography light variant="body2">
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
				<Typography raw light variant="body2">
					{votes}
				</Typography>
				{session?.user.id === authorId && (
					<StyledIconButtonWrapper>
						<StyledIconButton
							aria-label={t("wishlist:button.edit")}
							disabled={votes > 0}
							onClick={() => {
								if (votes < 1) {
									open(id, subject, body);
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

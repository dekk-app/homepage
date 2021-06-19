import Button from "@/atoms/button";
import Typography from "@/atoms/typography";
import { Column, Grid } from "@/molecules/grid";
import { Wish } from "@/types/backend-api";
import { gql, useMutation } from "@apollo/client";
import { useTranslation } from "next-i18next";
import React, { FC, useEffect, useState } from "react";
import { StyledCard, StyledLayout, StyledWishWrapper } from "./styled";

const ADD_WISH = gql`
	mutation ($subject: String!, $body: String!, $email: String) {
		createWish(
			data: { author: { connect: { email: $email } }, subject: $subject, body: $body }
		) {
			body
			id
			subject
			votes
		}
	}
`;
const Wishlist: FC<{ data: { wishes: Wish[] } }> = ({ data: { wishes } }) => {
	const { t } = useTranslation(["wishlist"]);
	const [localWishes, setLocalWishes] = useState<Wish[]>([]);
	const [addWish, { data, error }] = useMutation<{ createWish: Wish }>(ADD_WISH, {
		variables: {
			email: "greg@pixelass.com",
			body: "This is my Wish",
			subject: "More wishes",
		},
	});

	// Add new wishes to the local state to get immediate feedback
	useEffect(() => {
		if (data?.createWish) {
			setLocalWishes(previousState => [...previousState, data.createWish]);
		}
	}, [data]);

	// In case of errors, report them
	// ToDo handle errors and display the so the user is aware that something went wrong
	useEffect(() => {
		if (error) {
			console.error(error);
		}
	}, [error]);

	// In case of loading, report
	// ToDo handle loading and display the so the user is aware that the wish has been sent
	useEffect(() => {
		if (error) {
			console.error(error);
		}
	}, [error]);
	return (
		<StyledLayout>
			<Grid>
				<Column colSpanL={6}>
					<Typography raw variant="h1">
						{t("wishlist:headline")}
					</Typography>
				</Column>
				<StyledWishWrapper colSpanL={6}>
					<Button
						type="button"
						onClick={() => {
							void addWish();
						}}
					>
						{t("wishlist:button.wish")}
					</Button>
				</StyledWishWrapper>
				{[...wishes, ...localWishes]
					.filter(Boolean)
					.map(({ body, id, subject, votes }, index) => (
						<StyledCard key={id} colSpanS={4} colStartL={index === 0 && 1}>
							<Typography variant="h3" component="h2">
								{subject}
							</Typography>
							<Typography>{body}</Typography>
							<Typography>{votes}</Typography>
						</StyledCard>
					))}
			</Grid>
		</StyledLayout>
	);
};

export default Wishlist;

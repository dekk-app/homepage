import { gql } from "@apollo/client";

export const WISHES = gql`
	query wishes {
		wishes {
			authorId
			body
			id
			subject
			voted
			votes
		}
	}
`;

export const CREATE_WISH_VOTE = gql`
	mutation createWishVote($userId: Int, $wishId: Int) {
		createWishVote(
			data: { user: { connect: { id: $userId } }, wish: { connect: { id: $wishId } } }
		) {
			id
		}
	}
`;

export const CREATE_WISH = gql`
	mutation createWish($subject: String!, $body: String!, $email: String) {
		createWish(
			data: { author: { connect: { email: $email } }, subject: $subject, body: $body }
		) {
			authorId
			body
			id
			subject
			voted
			votes
		}
	}
`;

export const USER = gql`
	query user($email: String!) {
		user(where: { email: $email }) {
			id
			name
			role
			emailVerified
		}
	}
`;

import { gql } from "@apollo/client";

export const WISHES = gql`
	query wishes {
		wishes(orderBy: { createdAt: desc }) {
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

export const DELETE_WISH_VOTE = gql`
	mutation deleteWishVote($userId: Int!, $wishId: Int!) {
		deleteWishVote(where: { userId_wishId: { userId: $userId, wishId: $wishId } }) {
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

export const UPDATE_WISH = gql`
	mutation updateWish($subject: String!, $body: String!, $id: Int) {
		updateWish(where: { id: $id }, data: { subject: $subject, body: $body }) {
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

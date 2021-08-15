import { gql } from "@apollo/client";

export const GET_LEGAL_PAGE = gql`
	query ($pageDirectory: String, $locale: String) {
		pageCollection(limit: 1, where: { pageDirectory: $pageDirectory }, locale: $locale) {
			items {
				sys {
					publishedAt
				}
				seo {
					sys {
						id
					}
					pageTitle
					description
					keywords
					robots
				}
				body {
					json
				}
			}
		}
	}
`;

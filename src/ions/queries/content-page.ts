import { gql } from "@apollo/client";

export const GET_CONTENT_PAGE = gql`
	query ($pageDirectory: String, $locale: String) {
		pageCollection(limit: 1, where: { pageDirectory: $pageDirectory }, locale: $locale) {
			items {
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
					links {
						entries {
							block {
								sys {
									id
								}
								__typename
								... on ImageText {
									imageCollection {
										items {
											sys {
												id
											}
											url
											description
											height
											width
										}
									}
									text {
										json
									}
								}
							}
						}
					}
				}
			}
		}
	}
`;

import { APOLLO_STATE_PROP_NAME } from "@/ions/constants";
import { PageProps } from "@/types";
import {
	ApolloClient,
	ApolloLink,
	HttpLink,
	InMemoryCache,
	NormalizedCacheObject,
	OperationVariables,
	QueryHookOptions,
	QueryResult,
	TypedDocumentNode,
	useQuery,
} from "@apollo/client";
import { QueryOptions } from "@apollo/client/core/watchQueryOptions";
import merge from "deepmerge";
import { DocumentNode } from "graphql";
import isEqual from "lodash.isequal";
import process from "process";
import { useMemo } from "react";

let apolloClient: ApolloClient<NormalizedCacheObject>;

const contentful = new HttpLink({
	uri: `https://graphql.contentful.com/content/v1/spaces/${process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID}/environments/${process.env.NEXT_PUBLIC_CONTENTFUL_ENVIRONMENT}?access_token=${process.env.NEXT_PUBLIC_CONTENT_DELIVERY_API_KEY}`,
});

function createApolloClient() {
	const backend = new HttpLink({
		uri: process.env.NEXT_PUBLIC_BACKEND_URI,
		credentials: "include",
	});
	return new ApolloClient({
		ssrMode: typeof window === "undefined",
		credentials: "include",
		link: ApolloLink.split(
			operation => {
				return operation.getContext().clientName === "contentful";
			},
			contentful,
			backend
		),
		cache: new InMemoryCache().restore({}),
		defaultOptions: {
			query: {
				fetchPolicy:
					process.env.NEXT_PUBLIC_NO_CACHE === "true" ? "no-cache" : "cache-first",
				errorPolicy: "all",
			},
		},
	});
}

export function initializeApollo(initialState: NormalizedCacheObject = null) {
	const _apolloClient = apolloClient ?? createApolloClient();

	// If your page has Next.js data fetching methods that use Apollo Client, the initial state
	// gets hydrated here
	if (initialState) {
		// Get existing cache, loaded during client side data fetching
		const existingCache = _apolloClient.extract();

		// Merge the existing cache into data passed from getStaticProps/getServerSideProps
		const data = merge(initialState, existingCache, {
			// Combine arrays using object equality (like in sets)
			arrayMerge: (destinationArray: unknown[], sourceArray: unknown[]) => [
				...sourceArray,
				...destinationArray.filter(d => sourceArray.every(s => !isEqual(d, s))),
			],
		});

		// Restore the cache with the merged data
		_apolloClient.cache.restore(data);
	}

	// For SSG and SSR always create a new Apollo Client
	if (typeof window === "undefined") {
		return _apolloClient;
	}

	// Create the Apollo Client once in the client
	if (!apolloClient) {
		apolloClient = _apolloClient;
	}

	return _apolloClient;
}

export const addApolloState = <Props = PageProps>(
	client: ApolloClient<NormalizedCacheObject>,
	pageProps: {
		props: Props;
	}
): {
	props: Props;
} => {
	if (pageProps?.props) {
		pageProps.props[APOLLO_STATE_PROP_NAME] = client.cache.extract();
	}

	return pageProps;
};

export const useApollo = (pageProps: PageProps) =>
	useMemo(() => initializeApollo(pageProps[APOLLO_STATE_PROP_NAME]), [pageProps]);

export const useContentfulQuery = <
	TData extends Record<string, unknown> = any,
	TVariables = OperationVariables
>(
	query: DocumentNode | TypedDocumentNode<TData, TVariables>,
	options?: QueryHookOptions<TData, TVariables>
): QueryResult<TData, TVariables> =>
	useQuery<TData, TVariables>(query, {
		...options,
		context: { ...(options.context || {}), clientName: "contentful" },
	});

export const contentfulQuery = async <T = any, TVariables = OperationVariables>(
	client: ApolloClient<NormalizedCacheObject>,
	options: QueryOptions<TVariables, T>
) =>
	client.query({
		...options,
		context: { clientName: "contentful" },
	});

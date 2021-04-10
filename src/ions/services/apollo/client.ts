import { ApolloClient, HttpLink, InMemoryCache, NormalizedCacheObject } from "@apollo/client";
import React from "react";

let apolloClient: ApolloClient<NormalizedCacheObject>;

const backend = new HttpLink({
	uri: process.env.NEXT_PUBLIC_BACKEND_URI,
	credentials: "include",
});

function createApolloClient() {
	return new ApolloClient({
		ssrMode: typeof window === "undefined",
		link: backend,
		cache: new InMemoryCache().restore({}),
		defaultOptions: {
			query: {
				fetchPolicy: process.env.NODE_ENV === "production" ? "cache-first" : "no-cache",
				errorPolicy: "all",
			},
		},
	});
}

export function initializeApollo(initialState: NormalizedCacheObject | null = null) {
	const _apolloClient = apolloClient ?? createApolloClient();

	// If your page has Next.js data fetching methods that use Apollo Client,
	// the initial state gets hydrated here
	if (initialState) {
		// Get existing cache, loaded during client side data fetching
		const existingCache = _apolloClient.extract();

		// Restore the cache using the data passed from
		// getStaticProps/getServerSideProps combined with the existing cached data
		_apolloClient.cache.restore({ ...existingCache, ...initialState });
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

export function useApollo(initialState: NormalizedCacheObject) {
	return React.useMemo(() => initializeApollo(initialState), [initialState]);
}

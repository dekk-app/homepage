import { useSession } from "next-auth/client";
import { useRouter } from "next/router";
import React from "react";

export const useCheckForAuth = (asPath: string) => {
	const router = useRouter();
	const [session] = useSession();
	React.useEffect(() => {
		if (session && router.asPath !== asPath) {
			void router.replace(asPath);
		} else {
			void router.replace("/auth");
		}
	}, [session, router, asPath]);
};

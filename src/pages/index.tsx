import { NextPage } from "next";
import { useRouter } from "next/router";
import React from "react";
const locales = new Set(["en", "de"]);
const Page: NextPage = () => {
	const router = useRouter();
	React.useEffect(() => {
		const { languages } = navigator;
		const preferredLocale = languages.find(lang => locales.has(lang));
		void router.replace(`/${preferredLocale ?? "en"}`);
	}, [router]);
	return null;
};

export default Page;

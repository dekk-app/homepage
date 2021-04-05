import { Route } from "@/ions/enums";
import { getI18nRoute } from "@/ions/utils/route";
import { v4 as uuid } from "uuid";

const Page = () => null;

export async function getServerSideProps(context) {
	const { locale, defaultLocale } = context;
	return {
		redirect: {
			destination: `${getI18nRoute(Route.create, { locale, defaultLocale })}/${uuid()}`,
			permanent: false,
		},
	};
}

export default Page;

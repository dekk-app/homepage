import { DekkSession } from "@/types/dekk-api";
import { useSession as useNextAuthSession } from "next-auth/client";

export const useSession = (): [null | DekkSession, boolean] => {
	const [session, loading] = useNextAuthSession();
	return [session as DekkSession, loading];
};

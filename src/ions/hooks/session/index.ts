import { DekkSession } from "@/types/dekk-api";
import { useSession as useNextAuthSession } from "next-auth/client";
import { UseSessionReturn } from "./types";

export const useSession = (): UseSessionReturn => {
	const [session, loading] = useNextAuthSession();
	return [session as DekkSession, loading];
};

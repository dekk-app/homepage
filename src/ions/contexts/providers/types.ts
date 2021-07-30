import { ClientSafeProvider } from "next-auth/client";

export interface ProvidersState {
	providers: Record<string, ClientSafeProvider>;
}

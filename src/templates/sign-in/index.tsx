import { StyledLayoutWrapper } from "@/templates/sign-in/styled";
import { NextAuthProvider } from "@/types";
import { useSession } from "next-auth/client";
import dynamic from "next/dynamic";
import { useRouter } from "next/router";
import React from "react";

const Layout = dynamic(async () => import("@/organisms/layout"));
const Login = dynamic(async () => import("@/organisms/login"));

export interface SignInPageProps {
	providers: NextAuthProvider;
}

const SignIn: React.FC<SignInPageProps> = ({ providers }) => {
	const router = useRouter();
	const [session] = useSession();
	React.useEffect(() => {
		if (session) {
			void router.replace("/dashboard");
		}
	}, [session, router]);

	return (
		<StyledLayoutWrapper>
			<Layout>
				<Login providers={providers} />
			</Layout>
		</StyledLayoutWrapper>
	);
};

export default SignIn;

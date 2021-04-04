import { NextAuthProvider } from "@/types";
import { GetServerSideProps } from "next";
import { Session } from "next-auth";
import { getSession, providers } from "next-auth/client";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import dynamic from "next/dynamic";
import React from "react";

const SignIn = dynamic(async () => import("@/templates/sign-in"));

export interface AuthPageProps {
	providers: NextAuthProvider;
	session: Session;
}

export const getServerSideProps: GetServerSideProps<AuthPageProps> = async context => {
	return {
		props: {
			...(await serverSideTranslations(context.locale)),
			providers: await providers(),
			session: await getSession(),
		},
	};
};

const AuthPage: React.FC<AuthPageProps> = ({ providers }) => {
	return <SignIn providers={providers} />;
};

export default AuthPage;

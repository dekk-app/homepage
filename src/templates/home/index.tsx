import { routeMap } from "@/ions/routes";
import { useTranslation } from "next-i18next";
import dynamic from "next/dynamic";
import { useRouter } from "next/router";
import React from "react";

const Layout = dynamic(async () => import("@/organisms/layout"));
const ActiveLink = dynamic(async () => import("@/molecules/active-link"));
const Login = dynamic(async () => import("@/organisms/login"));
const Forgot = dynamic(async () => import("@/organisms/forgot"));
const Register = dynamic(async () => import("@/organisms/register"));

const Header: React.FC = () => {
	const { locale } = useRouter();
	const { t } = useTranslation("common");

	return (
		<div>
			<nav data-test-id="header:nav">
				<ActiveLink href="/" data-test-id="header-nav-link">
					{t("home")}
				</ActiveLink>
				{routeMap.map(
					({
						config: {
							breadcrumb: { [locale]: breadcrumb },
							dir: { [locale]: dir },
						},
						template,
					}) => {
						return (
							<ActiveLink
								key={template}
								href={`/${dir}`}
								data-test-id="header-nav-link"
							>
								{breadcrumb}
							</ActiveLink>
						);
					}
				)}
			</nav>
		</div>
	);
};

const Home: React.FC = () => {
	const { t } = useTranslation(["form"]);
	const [type, setType] = React.useState("login");
	const Screen = React.useCallback(() => {
		switch (type) {
			case "register":
				return <Register />;
			case "forgot":
				return <Forgot />;
			case "login":
			default:
				return <Login />;
		}
	}, [type]);
	return (
		<Layout header={Header}>
			<Screen />
			{(type === "register" || type === "forgot") && (
				<a
					href="#login"
					data-test-id="form:to-login"
					onClick={event_ => {
						event_.preventDefault();
						setType("login");
					}}
				>
					{t(`form:links.to-login`)}
				</a>
			)}
			{(type === "login" || type === "forgot") && (
				<a
					href="#register"
					data-test-id="form:to-register"
					onClick={event_ => {
						event_.preventDefault();
						setType("register");
					}}
				>
					{t(`form:links.to-register`)}
				</a>
			)}
			{(type === "register" || type === "login") && (
				<a
					href="#forgot"
					data-test-id="form:to-forgot"
					onClick={event_ => {
						event_.preventDefault();
						setType("forgot");
					}}
				>
					{t(`form:links.to-forgot`)}
				</a>
			)}
		</Layout>
	);
};

export default Home;

import Typography from "@/atoms/typography";
import { StyledLink } from "@/molecules/active-link/styled";
import { useSession } from "next-auth/client";
import dynamic from "next/dynamic";
import Link from "next/link";
import React from "react";

const Layout = dynamic(async () => import("@/organisms/layout"));

const Home: React.FC = () => {
	const [session] = useSession();
	return (
		<Layout>
			<Typography variant="h1">Welcome to Dekk</Typography>
			{session ? (
				<Link passHref href="/dashboard">
					<StyledLink>Dashboard</StyledLink>
				</Link>
			) : (
				<>
					<Link passHref href="/auth">
						<StyledLink>Login</StyledLink>
					</Link>
					<Link passHref href="/create">
						<StyledLink>Try now</StyledLink>
					</Link>
				</>
			)}
		</Layout>
	);
};

export default Home;

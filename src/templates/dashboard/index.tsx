import Typography from "@/atoms/typography";
import routes from "@/ions/routes";
import { pxToRem } from "@/ions/utils/unit";
import Layout from "@/organisms/layout";
import styled from "@emotion/styled";
import { User } from "next-auth";
import { signOut, useSession } from "next-auth/client";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";
import Link from "next/link";
import React from "react";
import { StyledLayoutWrapper } from "./styled";

export const StyledUserCard = styled.div`
	display: flex;
	flex-direction: column;
	align-content: center;
	align-items: center;
`;

export const StyledAvatar = styled.img`
	border-radius: inherit;
`;

export const StyledAvatarWrapper = styled.div`
	width: ${pxToRem(96)};
	height: ${pxToRem(96)};
	border-radius: ${pxToRem(10)};
`;

export interface AccountCardProps {
	user: User;
}

export const AccountCard: React.FC<AccountCardProps> = ({ user }) => {
	return (
		<StyledUserCard>
			<StyledAvatarWrapper>
				<StyledAvatar src={user.image} alt={user.name} height={96} width={96} />
			</StyledAvatarWrapper>
			<Typography>{user.name}</Typography>
		</StyledUserCard>
	);
};

const SidebarLeft = () => {
	const { t } = useTranslation(["common", "dashboard"]);
	const router = useRouter();
	const [session] = useSession();
	return (
		<>
			<AccountCard user={session.user} />
			<button
				type="button"
				onClick={() => {
					void signOut();
				}}
			>
				{t("logout")}
			</button>
			<button
				type="button"
				onClick={() => {
					void router.push("/create");
				}}
			>
				{t("dashboard:new-presentation")}
			</button>
		</>
	);
};

const projects = [
	{ id: "my-project-1" },
	{ id: "my-project-2" },
	{ id: "my-project-3" },
	{ id: "my-project-4" },
	{ id: "my-project-5" },
	{ id: "my-project-6" },
];

const Projects = () => {
	const { locale } = useRouter();
	return (
		<div>
			{projects.map(project => (
				<div key={project.id}>
					<Link passHref href={`/${routes.create.dir[locale]}/${project.id}`}>
						<a>Project</a>
					</Link>
				</div>
			))}
		</div>
	);
};

const Dashboard: React.FC = () => {
	const router = useRouter();
	const [session, loading] = useSession();
	React.useEffect(() => {
		if (!session && !loading) {
			void router.replace("/auth");
		}
	}, [loading, session, router]);

	return session ? (
		<StyledLayoutWrapper>
			<Layout sidebarLeft={SidebarLeft}>
				<Projects />
			</Layout>
		</StyledLayoutWrapper>
	) : null;
};

export default Dashboard;

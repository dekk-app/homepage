import Typography from "@/atoms/typography";
import { pxToRem } from "@/ions/utils/unit";
import Layout from "@/organisms/layout";
import styled from "@emotion/styled";
import { User } from "next-auth";
import { signOut, useSession } from "next-auth/client";
import { useRouter } from "next/router";
import React from "react";

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

const Dashboard: React.FC = () => {
	const router = useRouter();
	const [session, loading] = useSession();
	React.useEffect(() => {
		if (!session && !loading) {
			void router.replace("/auth");
		}
	}, [loading, session, router]);

	return session ? (
		<Layout>
			<AccountCard user={session.user} />
			<button
				type="button"
				onClick={() => {
					void signOut();
				}}
			>
				Sign out
			</button>
			<button
				type="button"
				onClick={() => {
					void router.push("/create");
				}}
			>
				New Presentation
			</button>
		</Layout>
	) : null;
};

export default Dashboard;

import { globalStyles } from "@/ions/styles";
import { Global } from "@emotion/react";
import styled from "@emotion/styled";
import dynamic from "next/dynamic";
import React from "react";

const Layout = dynamic(async () => import("@/organisms/layout"));
const Login = dynamic(async () => import("@/organisms/login"));

const StyledLayoutWrapper = styled.div`
	display: flex;
	align-content: center;
	align-items: center;
	justify-content: center;
	width: 100%;
	min-height: 100vh;
	background: #f8f9fd;
`;

const Home: React.FC = () => {
	return (
		<StyledLayoutWrapper>
			<Global styles={globalStyles} />
			<Layout>
				<Login />
			</Layout>
		</StyledLayoutWrapper>
	);
};

export default Home;

import dynamic from "next/dynamic";
import React from "react";

const Layout = dynamic(async () => import("@/organisms/layout"));

const Home: React.FC = ({ children }) => {
	return <Layout>{children}</Layout>;
};

export default Home;

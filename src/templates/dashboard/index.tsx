import dynamic from "next/dynamic";
import React from "react";

const Layout = dynamic(async () => import("@/organisms/layout"));

const Dashboard: React.FC = () => {
	return <Layout>Dashboard</Layout>;
};

export default Dashboard;

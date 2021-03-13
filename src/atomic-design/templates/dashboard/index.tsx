import { Layout } from "@/atomic-design/organisms/layout";
import React from "react";

export const Template: React.FC = ({ children }) => {
	return <Layout>{children}</Layout>;
};

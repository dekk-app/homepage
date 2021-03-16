import { Canvas } from "@/atomic-design/organisms/canvas";
import { Layout } from "@/atomic-design/organisms/layout";
import { Renderer } from "@/enums";
import React from "react";

export const Template: React.FC = ({ children }) => {
	return (
		<Layout>
			<Canvas renderer={Renderer.html}>{children}</Canvas>
		</Layout>
	);
};

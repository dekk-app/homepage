import { Canvas } from "@/atomic-design/organisms/canvas";
import { Layout } from "@/atomic-design/organisms/layout";
import { Renderer } from "@/enums";
import styled from "@emotion/styled";
import React from "react";

const DemoElement = styled.div`
	width: 800px;
	height: 450px;
	background: white;
`;

export const Template: React.FC = ({ children }) => {
	return (
		<Layout>
			<Canvas renderer={Renderer.html}>
				<DemoElement />
			</Canvas>
		</Layout>
	);
};

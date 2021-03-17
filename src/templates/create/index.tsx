import { Renderer } from "@/ions/enums";
import { Canvas } from "@/organisms/canvas";
import { Layout } from "@/organisms/layout";
import styled from "@emotion/styled";
import React from "react";

// @todo remove this component: DemoElement
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

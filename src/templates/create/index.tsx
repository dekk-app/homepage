import { Renderer } from "@/ions/enums";
import styled from "@emotion/styled";
import dynamic from "next/dynamic";
import React from "react";

const Canvas = dynamic(async () => import("@/organisms/canvas"));
const Layout = dynamic(async () => import("@/organisms/layout"));

// @todo remove this component: DemoElement
const DemoElement = styled.div`
	width: 300px;
	height: 750px;
	background: white;
`;

const Create: React.FC = ({ children }) => {
	return (
		<Layout>
			<Canvas renderer={Renderer.html}>
				<DemoElement />
			</Canvas>
		</Layout>
	);
};

export default Create;

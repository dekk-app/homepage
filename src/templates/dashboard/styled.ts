import { pxToRem } from "@/ions/utils/unit";
import styled from "@emotion/styled";

export const StyledLayoutWrapper = styled.div`
	display: grid;
	grid-template-areas: "SidebarLeft Main";
	grid-template-columns: ${pxToRem(250)} 1fr;
	height: 100vh;
	margin: 0;
	overflow: hidden;
`;

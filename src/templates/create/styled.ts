import styled from "@emotion/styled";

export const StyledLayoutWrapper = styled.div`
	display: grid;
	grid-template-areas: "Header" "Main" " Footer";
	grid-template-columns: 1fr;
	grid-template-rows: 4rem 1fr 4rem;
	height: 100vh;
	margin: 0;
	overflow: hidden;

	@media (min-width: 800px) {
		grid-template-areas: "Header Header Header" "SidebarLeft Main SidebarRight" "Footer Footer Footer";
		grid-template-columns: 19rem 1fr 19rem;
		grid-template-rows: 4rem 1fr 4rem;
	}
`;

export const StyledCanvasWrapper = styled.div`
	position: absolute;
	top: 0;
	right: 0;
	bottom: 0;
	left: 0;
`;

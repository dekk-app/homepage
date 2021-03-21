import styled from "@emotion/styled";

export const StyledFrame = styled.div`
	position: fixed;
	top: 0;
	right: 0;
	bottom: 0;
	left: 0;
`;

export const StyledInnerFrame = styled(StyledFrame)`
	transform-origin: 0 0;
	background: #a4c123;
`;

export const StyledOuterFrame = styled(StyledFrame)`
	overflow: hidden;
	background: #212121;
`;

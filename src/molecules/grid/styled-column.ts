import styled from "@emotion/styled";
import { StyledColumn } from "./styled";

export const StyledVerticalFlexColumn = styled(StyledColumn)`
	display: flex;
	position: relative;
	flex-direction: column;
`;

export const StyledCenteredColumn = styled(StyledVerticalFlexColumn)`
	justify-content: center;
`;

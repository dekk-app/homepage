import styled from "@emotion/styled";
import { StyledColumn } from "./styled";

export const StyledVerticalFlexColumn = styled(StyledColumn)`
	display: flex;
	flex-direction: column;
`;

export const StyledCenteredColumn = styled(StyledVerticalFlexColumn)`
	justify-content: center;
`;

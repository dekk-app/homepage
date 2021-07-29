import { Column } from "@/molecules/grid/index";
import styled from "@emotion/styled";

export const StyledVerticalFlexColumn = styled(Column)`
	display: flex;
	flex-direction: column;
`;

export const StyledCenteredColumn = styled(StyledVerticalFlexColumn)`
	justify-content: center;
`;

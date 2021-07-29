import Layout from "@/colonies/layout";
import { Column } from "@/molecules/grid";
import styled from "@emotion/styled";

export const StyledLayout = styled(Layout)`
	display: flex;
	flex-direction: column;
	justify-content: center;
	overflow: hidden;
`;

export const StyledColumn = styled(Column)`
	display: flex;
	flex-direction: column;
`;

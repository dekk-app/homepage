import { pxToRem } from "@/ions/utils/unit";
import styled from "@emotion/styled";

export const StyledMain = styled.main`
	display: flex;
	flex-direction: column;
	min-height: calc(100vh - ${pxToRem(68)});
`;

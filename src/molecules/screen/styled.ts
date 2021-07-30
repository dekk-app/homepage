import { pxToRem } from "@/ions/utils/unit";
import styled from "@emotion/styled";

export const StyledScreenWrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-content: center;
	align-items: center;
	justify-content: center;
	width: 100%;
	margin: ${pxToRem(16)} auto;
`;

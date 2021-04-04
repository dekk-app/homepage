import { pxToRem } from "@/ions/utils/unit";
import { css } from "@emotion/react";
import styled from "@emotion/styled";

export const StyledScreenWrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-content: center;
	align-items: center;
	justify-content: center;
	max-width: ${pxToRem(386)};
	margin: ${pxToRem(16)} auto;
	padding: 0 ${pxToRem(16)};
`;

export const StyledScreenBackground = styled.div`
	display: flex;
	flex-direction: column;
	align-content: center;
	align-items: center;
	justify-content: center;
	width: 100%;
	${({ theme: { mq } }) => css`
		@media ${mq.l} {
			background-image: url(/illustrations/start_left.svg),
				url(/illustrations/start_right.svg);
			background-repeat: no-repeat;
			background-position: calc(50% - ${pxToRem(620)}) 50%, calc(50% + ${pxToRem(620)}) 50%;
			background-size: ${pxToRem(323)} ${pxToRem(550)};
		}
	`}
`;
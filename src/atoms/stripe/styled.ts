import { pxToRem } from "@/ions/utils/unit";
import styled from "@emotion/styled";

export const StyledStripeWrapper = styled.div`
	display: flex;
	align-content: center;
	align-items: center;
	width: 100%;
	margin: ${pxToRem(32)} auto ${pxToRem(16)};
`;

export const StyledStripe = styled.div`
	flex: 1;
	height: 1px;
	margin: 0;
	opacity: 0.1;
	background: #fff;

	&:first-of-type {
		margin-right: ${pxToRem(16)};
	}

	&:last-of-type {
		margin-left: ${pxToRem(16)};
	}
`;

export const StyledFullStripe = styled.div`
	width: 100%;
	height: 1px;
	margin: 0 auto ${pxToRem(16)};
	opacity: 0.1;
	background: #fff;
`;

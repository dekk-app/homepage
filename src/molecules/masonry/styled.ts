import Box from "@/atoms/box";
import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { CSSProperties } from "react";

export const StyledMasonryGrid = styled.div<{
	style?: CSSProperties & {
		"--col-count-xs"?: number | string;
		"--col-count-s"?: number | string;
		"--col-count-m"?: number | string;
		"--col-count-l"?: number | string;
	};
}>`
	--col-count: var(--col-count-xs);

	column-gap: var(--gap-x);
	column-count: var(--col-count);
	${({ theme }) => css`
		${theme.mq.s} {
			--col-count: var(--col-count-s);
		}
		${theme.mq.m} {
			--col-count: var(--col-count-m);
		}
		${theme.mq.l} {
			--col-count: var(--col-count-l);
		}
	`};
`;

export const StyledMasonryBox = styled(Box)`
	margin-bottom: var(--gap-x);
	break-inside: avoid;
`;

import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { HiddenProps } from "./types";

export const StyledHidden = styled.div<HiddenProps>`
	${({ theme, hideXS, hideS, hideM, hideL }) => css`
		${hideXS &&
		css`
			display: none;
		`};

		${theme.mq.s} {
			display: ${hideS ? "none" : "block"};
		}

		${theme.mq.m} {
			display: ${hideM ? "none" : "block"};
		}

		${theme.mq.l} {
			display: ${hideL ? "none" : "block"};
		}
	`};
`;

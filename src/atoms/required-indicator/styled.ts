import { css } from "@emotion/react";
import styled from "@emotion/styled";

export const StyledRequiredIndicator = styled.sup`
	${({ theme }) =>
		css`
			color: ${theme.ui.colors.primary.background};
		`};
`;

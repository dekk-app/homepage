import { pxToRem } from "@/ions/utils/unit";
import { css } from "@emotion/react";
import styled from "@emotion/styled";

export const StyledDropdown = styled.div`
	z-index: 10;
	margin-top: ${pxToRem(16)};
`;

export const StyledDropdownContent = styled.div`
	width: ${pxToRem(250)};
	min-height: ${pxToRem(400)};
	padding: ${pxToRem(8)};
	border-radius: ${pxToRem(4)};
	${({
		theme: {
			ui: {
				layout: {
					dropdown: { border, background },
				},
			},
		},
	}) => css`
		background: ${background};
		box-shadow: 0 0 0 1px ${border}, 0 ${pxToRem(30)} ${pxToRem(27)} 0 rgba(0, 0, 0, 0.09);
	`};
`;

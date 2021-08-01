import I18nLink from "@/atoms/i18n-link";
import { StyledLink } from "@/atoms/typography/styled";
import { pxToRem } from "@/ions/utils/unit";
import { Column } from "@/molecules/grid";
import { css } from "@emotion/react";
import styled from "@emotion/styled";

export const StyledFooter = styled.footer`
	${({ theme }) => css`
		padding: ${pxToRem(theme.spaces.xxl)} 0;
	`};
`;

export const StyledFooterItems = styled(Column)`
	display: flex;
	align-content: center;
	align-items: center;

	${StyledLink} {
		display: flex;
		align-content: center;
		align-items: center;
	}

	${({ theme }) => css`
		@media only screen and ${theme.mq.m} {
			${StyledLink} {
				display: inline-flex;
				margin-left: ${pxToRem(theme.spaces.m)};
			}
		}
	`};
`;

export const StyledFooterLink = styled(I18nLink)`
	display: inline-flex;
	width: max-content;
`;

export const StyledFooterColumn = styled(Column)`
	display: flex;
	flex-direction: column;
`;

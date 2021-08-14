import { StyledLink } from "@/atoms/typography/styled";
import { pxToRem } from "@/ions/utils/unit";
import { Column } from "@/molecules/grid";
import I18nLink from "@/molecules/i18n-link";
import { css } from "@emotion/react";
import styled from "@emotion/styled";

export const StyledFooter = styled.footer<{ dark?: boolean }>`
	${({ theme, dark }) => css`
		padding: ${pxToRem(theme.spaces.xxl)} 0;
		background: ${dark ? "rgba(0, 0, 0, 0.2)" : "rgba(255, 255, 255, 0.5)"};
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

export const StyledFooterIconLink = styled.a`
	display: inline-flex;
	align-content: center;
	align-items: center;
	justify-content: center;
	min-width: ${pxToRem(48)};
	height: ${pxToRem(48)};
	color: currentColor;
	text-decoration: none;
	${({ theme }) => css`
		@media only screen and ${theme.mq.m} {
			min-width: auto;
			height: auto;
		}
	`};
`;

export const StyledFooterColumn = styled(Column)`
	display: flex;
	flex-direction: column;
`;

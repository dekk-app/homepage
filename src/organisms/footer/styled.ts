import { StyledSvg } from "@/atoms/icon/styled";
import { StyledLink } from "@/atoms/typography/styled";
import { pxToRem } from "@/ions/utils/unit";
import { Column } from "@/molecules/grid";
import I18nLink from "@/molecules/i18n-link";
import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { StyledFooterLinkProps, StyledFooterProps } from "./types";

export const StyledFooter = styled.footer<StyledFooterProps>`
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
		${theme.mq.m} {
			${StyledLink} {
				display: inline-flex;
				margin-left: ${pxToRem(theme.spaces.m)};
			}
		}
	`};
`;

export const StyledFooterLink = styled(I18nLink)<StyledFooterLinkProps>`
	display: inline-flex;
	width: max-content;
	${({ a11y }) =>
		a11y &&
		css`
			align-content: center;
			align-items: center;
			min-height: ${pxToRem(48)};
			min-width: ${pxToRem(48)};
		`};
`;

export const StyledFooterIconLink = styled(StyledLink)`
	display: inline-flex;
	align-content: center;
	align-items: center;
	justify-content: center;
	min-width: ${pxToRem(48)};
	height: ${pxToRem(48)};
	color: currentColor;
	text-decoration: none;

	${StyledSvg} {
		width: ${pxToRem(48)};
		height: ${pxToRem(48)};
	}

	${({ theme }) => css`
		${theme.mq.m} {
			min-width: unset;
			height: unset;

			${StyledSvg} {
				width: ${pxToRem(24)};
				height: ${pxToRem(24)};
			}
		}
	`};
`;

export const StyledFooterMenu = styled.div`
	display: flex;
	flex-direction: column;
`;

import Button from "@/atoms/button";
import Typography from "@/atoms/typography";
import { Column, Grid } from "@/molecules/grid";
import { useTranslation } from "next-i18next";
import React, { FC } from "react";
import { mock } from "./mock";
import { StyledCard, StyledLayout, StyledWishWrapper } from "./styled";

const Wishlist: FC = () => {
	const { t } = useTranslation(["wishlist"]);
	return (
		<StyledLayout>
			<Grid>
				<Column colSpanL={6}>
					<Typography raw variant="h1">
						{t("wishlist:headline")}
					</Typography>
				</Column>
				<StyledWishWrapper colSpanL={6}>
					<Button type="button">{t("wishlist:button.wish")}</Button>
				</StyledWishWrapper>
				{mock.map(({ title, description, id }, index) => (
					<StyledCard key={id} colSpanS={4} colStartL={index === 0 && 1}>
						<Typography variant="h3" component="h2">
							{title}
						</Typography>
						<Typography>{description}</Typography>
					</StyledCard>
				))}
			</Grid>
		</StyledLayout>
	);
};

export default Wishlist;

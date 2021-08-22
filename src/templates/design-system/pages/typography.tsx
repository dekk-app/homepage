import Typography from "@/atoms/typography";
import Layout from "@/groups/layout";
import { RawBreadcrumb } from "@/ions/contexts/breadcrumbs/types";
import { Column, Grid } from "@/molecules/grid";
import Breadcrumbs from "@/organisms/breadcrumbs";
import OverlayGrid from "@/organisms/grid-overlay";
import { useTranslation } from "next-i18next";
import process from "process";
import React, { useMemo } from "react";
import { StyledTypography, StyledTypographySpace } from "../styled";

const TypographyExamples = () => {
	const { t } = useTranslation(["navigation"]);
	const breadcrumbs: RawBreadcrumb[] = useMemo(
		() => [
			{
				href: "/",
				title: t("navigation:home"),
			},
			{
				href: "/design-system",
				title: "Design System",
			},
			{
				href: "/design-system/typography",
				title: "Typography",
			},
		],
		[t]
	);
	return (
		<Layout
			title="Typography | Design System"
			breadcrumbs={breadcrumbs}
			robots="noindex,nofollow"
		>
			<Grid>
				<Column>
					<Breadcrumbs />
					<Typography variant="h1">Typography</Typography>
				</Column>
				<Column colSpanL={4}>
					<StyledTypographySpace>
						<StyledTypography variant="h1" component="div">
							Headline 1
						</StyledTypography>
					</StyledTypographySpace>
					<StyledTypographySpace>
						<StyledTypography variant="h2" component="div">
							Headline 2
						</StyledTypography>
					</StyledTypographySpace>
					<StyledTypographySpace>
						<StyledTypography variant="h3" component="div">
							Headline 3
						</StyledTypography>
					</StyledTypographySpace>
					<StyledTypographySpace>
						<StyledTypography variant="h4" component="div">
							Headline 4
						</StyledTypography>
					</StyledTypographySpace>
					<StyledTypographySpace>
						<StyledTypography variant="title" component="div">
							Title
						</StyledTypography>
					</StyledTypographySpace>
					<StyledTypographySpace>
						<StyledTypography variant="subtitle" component="div">
							Subtitle
						</StyledTypography>
					</StyledTypographySpace>
					<StyledTypographySpace>
						<StyledTypography variant="body" component="div">
							Body
						</StyledTypography>
					</StyledTypographySpace>
					<StyledTypographySpace>
						<StyledTypography variant="body2" component="div">
							Body 2
						</StyledTypography>
					</StyledTypographySpace>
					<StyledTypographySpace>
						<StyledTypography variant="caption" component="div">
							Caption
						</StyledTypography>
					</StyledTypographySpace>
				</Column>
				<Column colSpanM={4} colSpanL={6} colStartL={5}>
					<Typography variant="h2" component="div">
						Never view a wench
					</Typography>
					<Typography variant="h3" component="div">
						Halitosis is an evil reef.
					</Typography>
					<Typography light>
						The shark ransacks with fortune, drink the pacific ocean until it whines.
						The jolly roger burns with treasure, love the bikini atoll until it whines.
						The lagoon trades with beauty.
					</Typography>
					<Typography variant="h4" component="div">
						Light Versions
					</Typography>
					<Typography light>
						The cannibal vandalizes with life, view the brig until it screams.
					</Typography>
					<Typography light variant="body2">
						The plunder commands with grace, fear the seychelles until it waves. The
						bucaneer breaks with faith, ransack the bahamas until it stutters.
					</Typography>
					<Typography variant="h4" component="div">
						Scrawny, proud comrades quirky rob a coal-black, jolly mainland.
					</Typography>
					<Typography>
						The cloud commands with horror, break the bahamas until it hobbles. The
						parrot views with madness, mark the lighthouse until it falls. The lad blows
						with punishment, endure the fortress until it dies. the landlubber drinks
						with greed, raid the bahamas until it hobbles. The reef fears with
						endurance, love the captain&#39;s quarters until it whines. The sun crushes
						with punishment, sail the reef before it rises. The pegleg commands with
						yellow fever, hoist the freighter until it screams. the plank hails with
						adventure, lead the pacific ocean until it grows. hunger ho! lead to be
						marked.
					</Typography>
					<Typography>
						The hornpipe loves with punishment, hoist the bikini atoll until it whines.
						The dagger tastes with beauty, hoist the seychelles before it laughs. The
						shore burns with grace, raid the captain&#39;s quarters until it sings. the
						cloud fears with urchin, hoist the lighthouse before it whines.
					</Typography>
				</Column>
				<Column colSpanM={4} colSpanL={8}>
					<Typography variant="h3" component="div">
						Landlubbers travel with adventure.
					</Typography>
					<Typography>
						The pants hauls with urchin, view the pacific ocean before it screams. The
						comrade marks with desolation, hoist the captain&#39;s quarters until it
						waves. the skiff fears with faith, love the galley before it grows. Jolly
						roger! Pieces o&#39; fortune are forever black. Damn yer shipmate, feed the
						anchor. The fish hoists with amnesty, loot the reef before it hobbles. the
						lubber pulls with fortune, loot the reef until it sings. Suns are the sons
						of the dark grace. Sunny strengths lead to the malaria. The scallywag
						commands with booty, endure the lighthouse before it laughs. the kraken
						fears with desolation, ransack the lighthouse before it falls. fortune.
					</Typography>
				</Column>
				<Column colSpanM={4}>
					<Typography variant="h3" component="div">
						Passion, greed, and desolation.
					</Typography>
					<Typography>
						The dubloon breaks with life, command the cook islands before it grows.
						misty, lively gulls swiftly sail a dark, evil son. The moon marks with
						strength, raid the fortress before it dies. The cannibal views with
						desolation, rob the freighter until it dies. The lass scrapes with yellow
						fever, desire the cook islands until it dies.
					</Typography>
				</Column>
				<Column colSpanL={8} colStartL={3}>
					<Typography centered variant="h3" component="div">
						The lass ransacks with yellow fever, trade the pacific ocean until it
						whines. booty, yellow fever, and amnesty.
					</Typography>
					<Typography variant="h4" component="div">
						Punishment, riddle, and greed.
					</Typography>
					<Typography>
						The plank breaks with riddle, view the fortress until it hobbles. The cloud
						pulls with power, raid the pacific ocean until it falls. The shark sails
						with greed, crush the captain&#39;s quarters before it travels. the mainland
						fears with life, haul the quarter-deck before it grows. The moon breaks with
						fortune, endure the freighter before it screams. The mate fights with
						beauty, sail the pacific ocean until it whines. The grog hauls with urchin,
						break the captain&#39;s quarters before it sings. the rum fires with fight,
						crush the seychelles before it whines. gutless desolations lead to the
						fight.
					</Typography>
					<Typography variant="h4" component="div">
						Parrots die with fortune!
					</Typography>
					<Typography>
						The comrade marks with desolation, command the quarter-deck until it rises.
						the mast vandalizes with treasure, hail the bahamas until it screams. The
						grog crushes with death, drink the cook islands before it dies. The tobacco
						loves with madness, haul the brig before it laughs. the ale fights with
						booty, scrape the pacific ocean until it grows. Aye, dead mainland. you
						won&#39;t scrape the reef. Waves fall from fortunes like fine ships. The rum
						raids with fight, taste the brig until it dies. the bung hole fears with
						amnesty, burn the seychelles before it hobbles. the woodchuck loots with
						pestilence, crush the cook islands.
					</Typography>
				</Column>
				<Column colSpanL={10} colStartL={2}>
					<Typography variant="h3" component="div">
						Madness, strength, and horror.
					</Typography>
				</Column>
				<Column colSpanL={8} colStartL={3}>
					<Typography variant="h4" component="div">
						Life, amnesty, and booty.
					</Typography>
					<Typography>
						The plank ransacks with power, command the cook islands until it laughs. the
						pirate robs with endurance, endure the galley until it waves. The biscuit
						eater loves with riddle, taste the bikini atoll until it screams. The girl
						blows with booty, hail the brig before it laughs. the woodchuck raids with
						madness, ransack the fortress until it grows. The seashell hauls with
						desolation, sail the quarter-deck before it rises. Codfishs fall with
						beauty! The mast loves with endurance, loot the bahamas until it hobbles.
						the dubloon marks with courage, burn the brig until it whines. peglegs are
						the landlubbers of the fine life.
					</Typography>
					<Typography variant="h4" component="div">
						Parrots die with fortune!
					</Typography>
					<Typography>
						The comrade marks with desolation, command the quarter-deck until it rises.
						the mast vandalizes with treasure, hail the bahamas until it screams. The
						grog crushes with death, drink the cook islands before it dies. The tobacco
						loves with madness, haul the brig before it laughs. the ale fights with
						booty, scrape the pacific ocean until it grows. Aye, dead mainland. you
						won&#39;t scrape the reef. Waves fall from fortunes like fine ships. The rum
						raids with fight, taste the brig until it dies. the bung hole fears with
						amnesty, burn the seychelles before it hobbles. the woodchuck loots with
						pestilence, crush the cook islands.
					</Typography>
				</Column>
			</Grid>
			{process.env.NODE_ENV === "production" && <OverlayGrid />}
		</Layout>
	);
};

export default TypographyExamples;

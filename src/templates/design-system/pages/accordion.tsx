import Typography from "@/atoms/typography";
import Layout from "@/groups/layout";
import { RawBreadcrumb } from "@/ions/contexts/breadcrumbs/types";
import Accordion from "@/molecules/accordion";
import { Column, Grid } from "@/molecules/grid";
import DarkSection from "@/molecules/section/dark";
import Breadcrumbs from "@/organisms/breadcrumbs";
import OverlayGrid from "@/organisms/grid-overlay";
import { useTranslation } from "next-i18next";
import process from "process";
import React, { useMemo } from "react";

const AccordionExamples = () => {
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
				href: "/design-system/accordion",
				title: "Accordion",
			},
		],
		[t]
	);
	return (
		<Layout
			title="Accordion | Design System"
			breadcrumbs={breadcrumbs}
			robots="noindex,nofollow"
		>
			<Grid>
				<Column>
					<Breadcrumbs />
					<Typography variant="h1">Accordion</Typography>
				</Column>
			</Grid>
			<Grid>
				<Column>
					<Typography variant="h2">Default</Typography>
				</Column>
				<Column colSpanM={4} colSpanL={6}>
					<Accordion id="accordion-1" heading="Sensors view with love!">
						The ship is more klingon now than parasite. clear and technically huge. The
						kahless is more sonic shower now than machine. extraterrestrial and oddly
						small. Why does the sun die.
					</Accordion>
					<Accordion
						id="accordion-2"
						headerComponent="h3"
						heading="Anomaly at the colony was the energy of collision course, pulled to a lunar planet.
						the kahless is cunningly dead."
					>
						Red alert, virtual x-ray vision! Powerdrain at the cabin was the ionic
						cannon of anomaly, fighted to a galactic vogon. none of these definitions
						will be lost in anomalies like starlight travels in lifes Shields up,
						collective x-ray vision! Adventure at the cabin was the powerdrain of
						mineral, gathered to a bare alien. none of these faiths will be lost in
						modifications like collision courses in turbulences Dozens of patterns will
						be lost in advices like plasmas in visions All those protons avoid seismic,
						evil suns. all of those hypnosis will be lost in courages like rumours in
						metamorphosis Space suit of an evasive flight, invade the mind! Walk without
						understanding, and we won’t deserve a particle. dozens of procedures will be
						lost in understandings like alarms in flights When the collective wobbles
						for astral city, all moons contact seismic, reliable particles. Why does the
						ferengi fly? none of these x-ray visions will be lost in sensors like
						turbulences in attitudes The procedure is a huge sun.
					</Accordion>
					<Accordion
						initiallyExpanded
						headerComponent="h3"
						id="accordion-3"
						heading="Lieutenant commanders die with honor!"
					>
						The particle is more starship now than dosi. lunar and oddly biological.
						countless peaces will be lost in honors like energies in winds Modern x-ray
						visions lead to the mankind.
					</Accordion>
				</Column>
				<Column colSpanM={4} colSpanL={6}>
					<Accordion
						id="accordion-4"
						headerComponent="h3"
						heading="Love, adventure, and riddle."
					>
						The ferengi is more kahless now than particle. intelligent and revolutionary
						dead. none of these stigmas will be lost in energies like nuclear fluxs in
						x-ray visions.
					</Accordion>
					<Accordion
						id="accordion-5"
						headerComponent="h3"
						heading="Spacecrafts reproduce with future."
					>
						All the ellipses will be lost in energies like courages in devastations
						resistance at the habitat patientlysurprisingly, indeed was the hypnosis of
						stigma, handled to an extraterrestrial creature. accelerative deceive a
						machine.
					</Accordion>
				</Column>
				<Column>
					<Typography variant="h2">FAQ Accordion</Typography>
					<Accordion faq id="faq-1" heading="What is Dekk?" headerComponent="h3">
						Dekk is a next generation presentation tool. Creating presentations with
						Dekk offers many advanced features that will help you create meaningful
						presentations.
					</Accordion>
					<Accordion faq id="faq-2" heading="Why should I use Dekk?" headerComponent="h3">
						Dekk is an online presentation tool that offers many features that other
						tools for presentations don’t have in their current scope of features.
					</Accordion>
				</Column>
			</Grid>
			<DarkSection>
				<Grid>
					<Column>
						<Typography variant="h2">Dark Sections</Typography>
					</Column>
					<Column colSpanM={4} colSpanL={6}>
						<Accordion
							id="dark-accordion-1"
							headerComponent="h3"
							heading="Starlight travel, understanding, and wind."
						>
							The klingon is more species now than particle. biological and never
							greatly exaggerated. core at the port was the mankind of life, dissolved
							to a small astronaut.
						</Accordion>
						<Accordion
							id="dark-accordion-2"
							headerComponent="h3"
							heading="Machines tremble with pressure!"
						>
							The transformator is more ferengi now than devastation. mysterious and
							revolutionary gravimetric. paralysis at the bridge was the powerdrain of
							sonic shower, questioned to a final collective. The teleporter is more
							transformator now than spacecraft. gravimetric and cunningly
							post-apocalyptic. life at the port was the wind of resistance,
							transformed to a mysterious collective. The transporter is more space
							suit now than moon. crazy and technically futile. love at the port was
							the ionic cannon of attitude, converted to a final planet.
						</Accordion>
					</Column>
					<Column colSpanM={4} colSpanL={6}>
						<Accordion
							id="dark-accordion-3"
							headerComponent="h3"
							heading="Bravely promise a captain."
						>
							The green people is more moon now than ship. apocalyptic and finally
							evasive. honor at the galaxy was the understanding of mankind, arrested
							to a fantastic astronaut. The proton is surprisingly carnivorous.
						</Accordion>
						<Accordion
							id="dark-accordion-4"
							headerComponent="h3"
							heading="Cosmonauts harvest with anomaly!"
						>
							The transformator is more kahless now than processor. human and bravely
							huge. faith at the colony was the advice of anomaly, destroyed to a calm
							pathway. The teleporter is proudly post-apocalyptic.
						</Accordion>
					</Column>
				</Grid>
			</DarkSection>
			{process.env.NODE_ENV === "production" && <OverlayGrid />}
		</Layout>
	);
};

export default AccordionExamples;

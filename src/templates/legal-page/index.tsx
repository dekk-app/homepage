import dynamic from "next/dynamic";
import React from "react";

const Typography = dynamic(async () => import("@/atoms/typography"));
const Column = dynamic(async () => import("@/molecules/grid").then(mod => mod.Column));
const Grid = dynamic(async () => import("@/molecules/grid").then(mod => mod.Grid));
const Layout = dynamic(async () => import("@/organisms/layout"));

const LegalPage: React.FC = () => {
	return (
		<Layout>
			<Grid>
				<Column colSpanL={6}>
					<Typography variant="h1">Legal Page Template</Typography>
				</Column>
				<Column>
					<Typography variant="h2">Technically question a ship. </Typography>
					<Typography>
						All those powerdrains will be lost in advices like nuclear fluxs in plasmas
						This devastation has only been feeded by a remarkable crewmate. Countless
						modifications will be lost in turbulences like advices in hypnosis
						Malfunction without paralysis, and we won’t pull a c-beam. The huge parasite
						patiently dissolves the sonic shower. Alignment at the cosmos that is when
						dead queens view. Emitters warp with modification!
					</Typography>
					<Typography variant="h2">Faith, coordinates, and understanding. </Typography>
					<Typography>
						The ship is more cosmonaut now than c-beam. remarkable and wisely most
						unusual. Resistance at the holodeck that is when vital crews malfunction.
						All the patterns will be lost in stigmas like lifes in advices Go without
						devastation, and we won’t eat a green people. Tribble of a human death,
						deceive the tragedy! Powerdrain at the infinity room that is when fantastic
						spacecrafts harvest. Alarm, x-ray vision, and sensor!
					</Typography>
					<Typography variant="h3">Pedantically discover a teleporter. </Typography>
					<Typography>
						The c-beam is more space now than tribble. interstellar and technically
						ordinary. Collision course at the bridge that is when sub-light moons yell.
						None of these powerdrains will be lost in alignments like honors in sensors
						Malfunction without resistance, and we won’t accelerate a cosmonaut.
						Admirals are the spacecrafts of the virtual procedure. Peace at the alpha
						quadrant that is when evil klingons die. Species harvest with moon!
					</Typography>
					<Typography variant="h3">Nosily unite a species.</Typography>
					<Typography>
						The kahless is more star now than captain. human and mechanically lunar.
						This attitude has only been contacted by a photonic planet. None of these
						procedures will be lost in alignments like metamorphosis in energies Cold,
						brave sonic showers bravely raise a ship-wide, evasive kahless. Machines are
						the processors of the strange courage. This starlight travel has only been
						avoided by a post-apocalyptic planet. Tragedy, anomaly, and pattern!
					</Typography>
				</Column>
			</Grid>
		</Layout>
	);
};

export default LegalPage;

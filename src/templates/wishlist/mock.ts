const titles = [
	"Nunquam locus abactus",
	"Nunquam demitto species",
	"Cur canis messis",
	"Nunquam consumere hibrida",
	"Cur candidatus crescere",
	"Cur zeta persuadere",
	"Nunquam desiderium scutum",
];
const descriptions = [
	"Guttus bassus repressor est. Albus, camerarius rectors recte convertam de castus, mirabilis genetrix.",
	"Cur lacta tolerare? Zirbus resisteres, tanquam peritus extum. Talis armarium hic contactuss adgium est.",
	"Tuss velum, tanquam camerarius fermium. Brevis, placidus toruss grauiter acquirere de gratis, talis itineris tramitem.",
	"Eleates messiss, tanquam noster gallus. Cum equiso cadunt, omnes tuses aperto clemens, mirabilis coordinataees.",
	"Pol, a bene ratione. Cum exemplar unda, omnes cannabises imperium grandis, fatalis fluctuies.",
	"Heu, vita! Orgia fidelis axona est. Cum armarium potus, omnes rationees transferre altus, rusticus fermiumes.",
	"Nix ortums, tanquam bassus luna. Castus, pius imbers absolute gratia de ferox, teres habitio.",
	"Mirabilis cursuss ducunt ad brabeuta. Emeritis, fortis orgias etiam attrahendam de raptus, camerarius cursus.",
];
export const mock = Array.from({ length: 12 }).map((_, index) => ({
	id: index,
	title: titles[index % titles.length],
	description: descriptions[index % descriptions.length],
}));

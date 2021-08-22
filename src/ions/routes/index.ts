const routes = {
	"/": {
		de: "/",
		en: "/",
	},
	"/legal": {
		de: "/rechtliches",
		en: "/legal",
	},
	"/legal/privacy-policy": {
		de: "/rechtliches/datenschutz",
		en: "/legal/privacy-policy",
	},
	"/legal/cookie-policy": {
		de: "/rechtliches/cookie-richtlinie",
		en: "/legal/cookie-policy",
	},
	"/legal/terms-of-service": {
		de: "/rechtliches/allgemeine-geschaeftsbedingungen",
		en: "/legal/terms-of-service",
	},
	"/wishlist": {
		de: "/wunschliste",
		en: "/wishlist",
	},
	"/contact": {
		de: "/kontakt",
		en: "/contact",
	},
	"/about-us": {
		de: "/ueber-uns",
		en: "/about-us",
	},
};

export type RouteWildcard = `/${string}`;

export type Route = keyof typeof routes;

export default routes;

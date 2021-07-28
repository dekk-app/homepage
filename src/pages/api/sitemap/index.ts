import routes from "@/ions/routes";
import { SitemapStream, streamToPromise } from "sitemap";

export default async (req, res) => {
	try {
		const smStream = new SitemapStream({
			hostname: "https://dekk.app",
		});

		// List of posts
		const blogPosts = [
			//{ slug: "foo", lastmod: "2021-07-28T07:17:37.920Z", priority: 0.9 },
			//{ slug: "bar", lastmod: "2021-07-28T07:17:37.920Z" },
			//{ slug: "baz", changefreq: "daily", priority: 0.8 },
		];

		// Create each URL row
		blogPosts.forEach(({ slug, lastmod, priority, changefreq }) => {
			smStream.write({
				url: `/blog/${slug}`,
				changefreq,
				lastmod,
				priority,
			});
		});

		const defaultLocale = "en";
		const locales: Array<"de" | "en"> = ["en", "de"];
		const indexedRoutes: Array<keyof typeof routes> = ["/", "/wishlist"];
		locales.forEach(locale => {
			indexedRoutes.forEach(route => {
				smStream.write({
					url: (locale === defaultLocale
						? `${routes[route][locale]}`
						: `/${locale}${routes[route][locale]}`
					).replace(/\/$/, ""),
					changefreq: "daily",
					priority: 0.9,
				});
			});
		});

		// End sitemap stream
		smStream.end();

		// XML sitemap string
		const sitemapOutput = (await streamToPromise(smStream)).toString();

		// Change headers
		res.writeHead(200, {
			"Content-Type": "application/xml",
		});

		// Display output to user
		res.end(sitemapOutput);
	} catch (e) {
		console.log(e);
		res.send(JSON.stringify(e));
	}
};

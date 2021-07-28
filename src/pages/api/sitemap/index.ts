import routes from "@/ions/routes";
import { NextApiRequest, NextApiResponse } from "next";
import { SitemapStream, streamToPromise } from "sitemap";

const handler = async (request: NextApiRequest, response: NextApiResponse) => {
	try {
		const smStream = new SitemapStream({
			hostname: "https://dekk.app",
		});

		// // List of posts
		// const blogPosts = [
		// 	// { slug: "foo", lastmod: "2021-07-28T07:17:37.920Z", priority: 0.9 },
		// 	// { slug: "bar", lastmod: "2021-07-28T07:17:37.920Z" },
		// 	// { slug: "baz", changefreq: "daily", priority: 0.8 },
		// ];
		// // Create each URL row
		// for (const { slug, lastmod, priority, changefreq } of blogPosts) {
		// 	smStream.write({
		// 		url: `/blog/${slug}`,
		// 		changefreq,
		// 		lastmod,
		// 		priority,
		// 	});
		// }

		const defaultLocale = "en";
		const locales: Array<"de" | "en"> = ["en", "de"];
		const indexedRoutes: Array<keyof typeof routes> = ["/", "/wishlist"];
		for (const locale of locales) {
			for (const route of indexedRoutes) {
				smStream.write({
					url: (locale === defaultLocale
						? `${routes[route][locale]}`
						: `/${locale}${routes[route][locale]}`
					).replace(/\/$/, ""),
					changefreq: "daily",
					priority: 0.9,
				});
			}
		}

		// End sitemap stream
		smStream.end();

		// XML sitemap string
		const sitemapOutput = (await streamToPromise(smStream)).toString();

		// Change headers
		response.writeHead(200, {
			"Content-Type": "application/xml",
		});

		// Display output to user
		response.end(sitemapOutput);
	} catch (error_: unknown) {
		console.log(error_);
		response.send(JSON.stringify(error_));
	}
};

export default handler;

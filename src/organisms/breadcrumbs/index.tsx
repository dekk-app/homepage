import { useBreadcrumbs } from "@/ions/contexts/breadcrumbs";
import React from "react";
import { BreadcrumbItem, BreadcrumbList } from "./components";

/**
 * @see https://w3c.github.io/aria-practices/examples/breadcrumb/index.html
 * @see https://schema.org/BreadcrumbList
 * @see https://developer.mozilla.org/en-US/docs/Glossary/Breadcrumb
 */
const Breadcrumbs = () => {
	const breadcrumbs = useBreadcrumbs();
	return (
		<BreadcrumbList>
			{breadcrumbs.map(breadcrumb => {
				return (
					<BreadcrumbItem
						key={breadcrumb.id}
						href={breadcrumb.href}
						position={breadcrumb.position}
						aria-current={breadcrumb.current}
					>
						{breadcrumb.title}
					</BreadcrumbItem>
				);
			})}
		</BreadcrumbList>
	);
};

export default Breadcrumbs;

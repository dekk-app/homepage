import { RawBreadcrumb } from "@/ions/contexts/breadcrumbs/types";

export interface LayoutProps {
	className?: string;
	title: string;
	description?: string;
	keywords?: string;
	robots?: string;
	dark?: boolean;
	breadcrumbs?: RawBreadcrumb[];
}

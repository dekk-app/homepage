import { useRouteLoader } from "@/ions/hooks/route-loader";
import React, { memo } from "react";
import { StyledLoader } from "./styled";

const RouteLoader = () => {
	const { loaded, loading } = useRouteLoader();

	return <StyledLoader isLoading={loading} isLoaded={loaded} />;
};

export default memo(RouteLoader);

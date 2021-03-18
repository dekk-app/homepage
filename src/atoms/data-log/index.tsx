import { StyledPre } from "@/atoms/data-log/styled";
import React from "react";

const DataLog: React.FC<{ data: unknown }> = ({ data, ...props }) => (
	<StyledPre {...props}>
		<code>{JSON.stringify(data, null, 4)}</code>
	</StyledPre>
);
export default DataLog;

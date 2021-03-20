import { StyledPre } from "@/atoms/data-log/styled";
import { DataLogProps } from "@/types";
import React from "react";

/**
 * Datalog is a helper-component that simply renders data on screen and optionally logs the data in
 * the console.
 *
 * @param {unknown} data
 * @param logToConsole
 * @param {Pick<{data: unknown} & {children?: React.ReactNode}, "children">} props
 * @returns {JSX.Element}
 * @constructor
 */
const DataLog: React.FC<DataLogProps> = ({ data, logToConsole, ...props }) => {
	React.useEffect(() => {
		if (logToConsole) {
			console.log(data);
		}
	}, [data, logToConsole]);

	return (
		<StyledPre {...props}>
			<code>{JSON.stringify(data, null, 4)}</code>
		</StyledPre>
	);
};

export default DataLog;

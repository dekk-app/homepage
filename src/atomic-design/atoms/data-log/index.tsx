import React from "react";

export const DataLog: React.FC<{ data: unknown }> = ({ data }) => (
	<pre>
		<code>{JSON.stringify(data, null, 4)}</code>
	</pre>
);

import styled from "@emotion/styled";
import React from "react";

const StyledPre = styled.pre`
	width: min-content;
	margin: 1em;
	padding: 1em;
	border-radius: 2px;
	background: #333;
	color: #fec;
`;
export const DataLog: React.FC<{ data: unknown }> = ({ data, ...props }) => (
	<StyledPre {...props}>
		<code>{JSON.stringify(data, null, 4)}</code>
	</StyledPre>
);

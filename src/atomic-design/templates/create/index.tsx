import React from "react";

export const Template: React.FC = ({ children }) => {
	return (
		<main>
			<h1>Create</h1>
			<div>{children}</div>
		</main>
	);
};

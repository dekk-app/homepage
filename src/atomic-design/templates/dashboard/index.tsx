import React from "react";

export const Template: React.FC = ({ children }) => {
	return (
		<main>
			<h1>Dashboard</h1>
			<div>{children}</div>
		</main>
	);
};

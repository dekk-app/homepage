import React, { FC, Fragment } from "react";

export const BreakLines: FC<{ text: string }> = ({ text }) => {
	const lines = text.split(/\n/g).map((value, index) => ({ value, id: `_${index}` }));
	return (
		<>
			{lines.map((line, index) => (
				<Fragment key={line.id}>
					{line.value}
					{index < lines.length - 1 && <br />}
				</Fragment>
			))}
		</>
	);
};

import Abcq from "abcq";
import React, { FC, Fragment } from "react";
// This will prevent lint warnings/errors
// @see {@link https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-array-index-key.md}
// @see {@link https://www.npmjs.com/package/abcq}
// @example
// encode(1); // a
// encode(2); // b
// encode(1234567890); // clRjXk
const { encode } = new Abcq();

export const BreakLines: FC<{ text: string }> = ({ text }) => {
	const lines = text.split(/\n/g);
	return (
		<>
			{lines.map((line, index) => (
				// Make sure to encode the index to prevent lint warnings/errors
				// @see {@link https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-array-index-key.md}
				<Fragment key={encode(index)}>
					{line}
					{index < lines.length - 1 && <br />}
				</Fragment>
			))}
		</>
	);
};

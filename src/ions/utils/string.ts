/**
 * SmartTruncate - Smartly™ truncate a given string.
 *
 * @param  {String} string - A string with a minimum lenght of 4 chars.
 * @param  {Number} length - The length of the truncated result.
 * @param  {Object} [options]
 * @param  {Number} [options.position] - The index of the ellipsis (zero based).
 *                                      Default is the end.
 * @param  {String} [options.mark = '…'] - The character[s] indicating omission.
 * @return {String} - Return a truncated string w/ ellipsis or a custom mark.
 *
 * Example: smartTruncate('Steve Miller', 8) === 'Steve M…'.
 * Example: smartTruncate('Steve Miller', 9, {position: 4}) === 'Stev…ller'.
 */

let box: HTMLDivElement;
const measureText = (
	string: string,
	{
		fontSize,
		fontFamily,
		fontWeight,
	}: { fontSize?: string; fontFamily?: string; fontWeight?: string } = {}
) => {
	if (typeof document === "undefined") {
		return -1;
	}

	if (!box) {
		box = box || document.createElement("div");
		box.style.whiteSpace = "nowrap";
		box.style.overflow = "hidden";
		box.style.visibility = "hidden";
		box.style.display = "inline-block";
		document.body.append(box);
	}

	box.style.fontSize = fontSize;
	box.style.fontFamily = fontFamily;
	box.style.fontWeight = fontWeight;
	box.innerHTML = string;
	return box.offsetWidth;
};

export const smartTruncate = (
	string: string,
	length: number,
	{
		mark = "\u2026", // Ellipsis = …
		position = length - 1,
	} = {}
) => {
	const markOffset = mark.length;
	const minLength = 3;

	const string_ = string.trim();

	const invalid =
		string_.length < minLength || length <= minLength || length >= string_.length - markOffset;

	if (invalid) {
		return string;
	}

	if (position >= length - markOffset) {
		const start = string_.slice(0, Math.max(0, length - markOffset));
		return `${start}${mark}`;
	}

	const start = string_.slice(0, Math.max(0, position));
	const end = string_.slice(position + markOffset - length);

	return `${start}${mark}${end}`;
};

export const truncateByWidth = (
	string: string,
	width: number,
	proposal: number,
	options: { fontSize?: string; fontFamily?: string; fontWeight?: string } = {}
) => {
	let s = string;
	let t = measureText(s, options);
	if (t === -1) {
		return string;
	}

	let c = proposal;
	while (t > width && c > 5) {
		s = smartTruncate(string, --c, { position: c / 2 });
		t = measureText(s, options);
	}

	return s;
};

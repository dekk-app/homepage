import { CSSProperties, LegacyRef, MutableRefObject, RefObject } from "react";

export interface BaseProps {
	className?: string;
	testId?: string;
	style?: CSSProperties;
}

export interface BasePropsWithInnerRef<T extends Element = HTMLElement> extends BaseProps {
	innerRef?: MutableRefObject<T> | RefObject<T> | LegacyRef<T>;
}

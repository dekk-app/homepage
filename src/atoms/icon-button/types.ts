import { HTMLAttributes, HTMLProps } from "react";
import { Except } from "type-fest";

export interface IconButtonProps
	extends HTMLAttributes<HTMLButtonElement>,
		Except<HTMLProps<HTMLButtonElement>, "as" | "type"> {}

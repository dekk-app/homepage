import { objectSnakeToCamel } from "@/ions/utils/object";
import { useMemo } from "react";

export const useObjectSnakeToCamel = <T>(value: Record<string, T>) =>
	useMemo(() => objectSnakeToCamel<T>(value), [value]);

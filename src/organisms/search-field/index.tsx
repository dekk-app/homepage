import { StyledFloatingLabel } from "@/atoms/floating-label/styled";
import { StyledInputWrapper } from "@/atoms/input-wrapper/styled";
import { useObjectSnakeToCamel } from "@/ions/hooks/case";
import { useQueryRouter } from "@/ions/hooks/query-router";
import { objectCamelToSnake } from "@/ions/utils/object";
import { StyledInput } from "@/molecules/input-field/styled";
import { useTranslation } from "next-i18next";
import React, { ChangeEvent, FC, useState } from "react";
import { useDebouncedCallback } from "use-debounce";
import { StyledSearchField } from "./styled";
import { SearchFieldProps } from "./types";

const SearchField: FC<SearchFieldProps> = ({ label }) => {
	const { t } = useTranslation(["form"]);
	const [isFocused, setIsFocused] = useState(false);
	const { push, query } = useQueryRouter();
	const { searchQuery } = useObjectSnakeToCamel(query);
	const isFloating = Boolean(isFocused || searchQuery);
	const handleChange = useDebouncedCallback((event_: ChangeEvent<HTMLInputElement>) => {
		void push(objectCamelToSnake({ searchQuery: event_.target.value || null }));
	}, 1000);
	return (
		<StyledSearchField>
			<StyledInputWrapper fullWidth>
				<StyledFloatingLabel floating={isFloating}>
					{label ?? t("form:field-labels.search")}
				</StyledFloatingLabel>
				<StyledInput
					name="wishes:search"
					type="text"
					defaultValue={searchQuery}
					onChange={handleChange}
					onFocus={() => {
						setIsFocused(true);
					}}
					onBlur={() => {
						setIsFocused(false);
					}}
				/>
			</StyledInputWrapper>
		</StyledSearchField>
	);
};

export default SearchField;

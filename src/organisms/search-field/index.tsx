import { StyledFloatingLabel } from "@/atoms/floating-label/styled";
import { StyledInputWrapper } from "@/atoms/input-wrapper/styled";
import { useSearchQuery } from "@/ions/stores/query";
import { StyledInput } from "@/molecules/input-field/styled";
import { useTranslation } from "next-i18next";
import React, { FC, useState } from "react";
import { StyledSearchField } from "./styled";
import { SearchFieldProps } from "./types";

const SearchField: FC<SearchFieldProps> = ({ label }) => {
	const { t } = useTranslation(["form"]);
	const [isFocused, setIsFocused] = useState(false);
	const setQuery = useSearchQuery(state => state.setQuery);
	const query = useSearchQuery(state => state.query);
	const isFloating = Boolean(isFocused || query);
	return (
		<StyledSearchField>
			<StyledInputWrapper fullWidth>
				<StyledFloatingLabel floating={isFloating}>
					{label ?? t("form:field-labels.search")}
				</StyledFloatingLabel>
				<StyledInput
					name="wishes:search"
					type="text"
					value={query}
					onChange={event_ => {
						setQuery(event_.target.value);
					}}
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

import { Person } from "@/types/contentful-api";

export interface PersonSlotProps {
	entry: Person;
	flip?: boolean;
}

import { BasePropsWithInnerRef } from "@/types/components";

export interface HeaderProps extends BasePropsWithInnerRef {
	dark?: boolean;
}

export interface StyledHeaderProps {
	dark?: boolean;
	elevated?: boolean;
}

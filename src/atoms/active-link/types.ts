import { WithDataTestId } from "@/types";
import { LinkProps } from "next/link";

export interface ActiveLinkProps extends LinkProps, WithDataTestId {}

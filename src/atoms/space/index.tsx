import { StyledSpace } from "@/atoms/space/styled";
import { SpaceProps } from "@/atoms/space/types";
import React, { FC } from "react";

export const Space: FC<SpaceProps> = ({ space }) => <StyledSpace space={space} />;

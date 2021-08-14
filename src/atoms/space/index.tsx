import React, { FC } from "react";
import { StyledSpace } from "./styled";
import { SpaceProps } from "./types";

export const Space: FC<SpaceProps> = ({ space }) => <StyledSpace space={space} />;

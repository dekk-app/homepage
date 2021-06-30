import { WishContext } from "@/ions/hooks/wishes/context";
import { useContext } from "react";

export const useWish = () => useContext(WishContext);

import { WishlistContext } from "@/ions/hooks/wishes/context";
import { useContext } from "react";

export const useWishlist = () => useContext(WishlistContext);

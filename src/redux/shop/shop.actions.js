import { ShopActionTypes } from "../types/shop.types";

export const updateCollections = collectionMap => ({
  type: ShopActionTypes.UPDATE_COLLECTIONS,
  payload: collectionMap
});

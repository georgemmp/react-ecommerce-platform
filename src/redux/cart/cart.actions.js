import { CartActionTYpes } from "../types/cart.types";

export const toggleCartHidden = () => ({
  type: CartActionTYpes.TOGGLE_CART_HIDDEN
});

export const addItem = item => ({
  type: CartActionTYpes.ADD_ITEM,
  payload: item
})

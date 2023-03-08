import { produce } from "immer";

import { Products } from "../../pages/Home/components/Gallery/products";
import { ActionTypes } from "./actions";

export function productsReducer(state: Products[], action: any) {
  if (action.type === ActionTypes.ADD_NEW_PRODUCTS) {
    return produce(state, (draft) => {
      draft.push(action.payload.newProductsSelected);
    });
  }

  if (action.type === ActionTypes.UPDATE_COFFEE_IN_CART_BY_ID) {
    return state.map((coffee: any) => {
      if (coffee.id === action.payload.id) {
        return { ...coffee, quantity: action.payload.quantity };
      }
      return coffee;
    });
  }

  if (action.type === ActionTypes.DELETE_COFFEE_IN_CART_BY_ID)
    return state.filter((coffee) => coffee.id !== action.payload.coffeeId);

  return state;
}

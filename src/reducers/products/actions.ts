import { CreateProductsSelectedData } from "../../contexts/ProductsContext";

export enum ActionTypes {
  ADD_NEW_PRODUCTS = "ADD_NEW_PRODUCTS",
  UPDATE_COFFEE_IN_CART_BY_ID = "UPDATE_COFFEE_IN_CART_BY_ID",
  DELETE_COFFEE_IN_CART_BY_ID = "DELETE_COFFEE_IN_CART_BY_ID",
}

export function addNewProductsSelectedsAction(
  newProductsSelected: CreateProductsSelectedData
) {
  return {
    type: ActionTypes.ADD_NEW_PRODUCTS,
    payload: {
      newProductsSelected,
    },
  };
}

export function updateCoffeeInCartByIdAction(id: string, quantity: number) {
  return {
    type: ActionTypes.UPDATE_COFFEE_IN_CART_BY_ID,
    payload: {
      id,
      quantity,
    },
  };
}

export function deleteCoffeeInCartByIdAction(id: string) {
  return {
    type: ActionTypes.DELETE_COFFEE_IN_CART_BY_ID,
    payload: {
      coffeeId: id,
    },
  };
}

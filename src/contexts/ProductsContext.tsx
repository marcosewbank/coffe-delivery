import {
  createContext,
  ReactNode,
  useReducer,
  useState,
  MouseEvent,
} from "react";
import { Products } from "../pages/Home/components/Gallery/products";
import { productsReducer } from "../reducers/products/reducer";
import {
  addNewProductsSelectedsAction,
  deleteCoffeeInCartByIdAction,
  updateCoffeeInCartByIdAction,
} from "../reducers/products/actions";

export interface CreateProductsSelectedData {
  price: number;
  image?: string;
  name: string;
  quantity: number;
  id: number;
}

export interface DataFormAdress {
  cep: string;
  city: string;
  complement: string;
  district: string;
  number: number;
  uf: string;
  street: string;
}

interface ProductsSelectedContextType {
  createProductsSelecteds: (
    product: CreateProductsSelectedData,
    count: number
  ) => void;
  updateCoffeeInCartById: (id: string, quantity: number) => void;
  products: Products[];
  handleCreateAddress: (data: any) => void;
  dataForm: any;
  handleGetvalueButton: (event: MouseEvent<HTMLButtonElement>) => void;
  buttonPaymentValue: string;
  deleteCoffeeInCartById: (id: string) => void;
}

interface ProductsSelecteContextProviderProps {
  children: ReactNode;
}

export const ProductsSelectedContext = createContext(
  {} as ProductsSelectedContextType
);

export function ProductsSelectedContextProvider({
  children,
}: ProductsSelecteContextProviderProps) {
  const [productsState, dispatch] = useReducer(productsReducer, []);

  const [dataForm, setDataForm] = useState({});
  const [buttonPaymentValue, setButtonPaymentValue] = useState("");

  const products = productsState;

  function createProductsSelecteds(
    product: CreateProductsSelectedData,
    count: number
  ) {
    const newProductsSelected: CreateProductsSelectedData = {
      price: product.price,
      image: product.image,
      name: product.name,
      quantity: count,
      id: product.id,
    };

    dispatch(addNewProductsSelectedsAction(newProductsSelected));
  }

  function updateCoffeeInCartById(id: string, quantity: number) {
    dispatch(updateCoffeeInCartByIdAction(id, quantity));
  }

  function deleteCoffeeInCartById(id: string) {
    dispatch(deleteCoffeeInCartByIdAction(id));
  }

  function handleCreateAddress(data: DataFormAdress) {
    setDataForm(data);
  }

  function handleGetvalueButton(event: MouseEvent<HTMLButtonElement>) {
    setButtonPaymentValue(event.currentTarget.value);
  }

  return (
    <ProductsSelectedContext.Provider
      value={{
        createProductsSelecteds,
        updateCoffeeInCartById,
        products,
        handleCreateAddress,
        dataForm,
        handleGetvalueButton,
        buttonPaymentValue,
        deleteCoffeeInCartById,
      }}
    >
      {children}
    </ProductsSelectedContext.Provider>
  );
}

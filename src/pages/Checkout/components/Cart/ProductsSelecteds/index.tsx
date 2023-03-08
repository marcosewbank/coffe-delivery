import { useState, useContext } from "react";
import { ProductsSelectedContext } from "../../../../../contexts/ProductsContext";
import { CountQuantity } from "../../../../Home/components/CountQuantity";
import { RemoveButton } from "../RemoveButton";
import {
  ContentMainCart,
  ContentProductCart,
  ContentSelectedAndRemoveProduct,
  ProductPriceCart,
  ProductTitleCart,
} from "./styles";

export function ProductSelecteds({ product }: any) {
  const { updateCoffeeInCartById, deleteCoffeeInCartById } = useContext(
    ProductsSelectedContext
  );

  const [count, setCount] = useState(product.quantity);

  const changeQuantityCart = (quantity: number) => {
    setCount(quantity);
    updateCoffeeInCartById(product.id, quantity);
  };

  const handleRemoveProduct = () => {
    deleteCoffeeInCartById(product.id);
  };

  return (
    <>
      {count > 0 && (
        <ContentMainCart>
          <ContentProductCart>
            <img src={product.image} />
            <div>
              <ProductTitleCart>{product.name}</ProductTitleCart>
              <ContentSelectedAndRemoveProduct>
                <CountQuantity
                  changeQuantity={changeQuantityCart}
                  count={count}
                />
                <RemoveButton handleRemoveProduct={handleRemoveProduct} />
              </ContentSelectedAndRemoveProduct>
            </div>
          </ContentProductCart>
          <ProductPriceCart>R${product.price}</ProductPriceCart>
        </ContentMainCart>
      )}
    </>
  );
}

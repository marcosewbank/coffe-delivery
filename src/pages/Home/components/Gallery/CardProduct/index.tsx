import { ShoppingCartSimple } from "phosphor-react";
import { Key, useContext, useState } from "react";
import { ProductsSelectedContext } from "../../../../../contexts/ProductsContext";
import { CountQuantity } from "../../CountQuantity";

import {
  ShelfContainer,
  ContainerFlags,
  NameProduct,
  DescriptionProduct,
  ContainerSelect,
  MiniCartShelf,
  Flag,
} from "./styles";

export function CardProduct({ product }: any) {
  const { createProductsSelecteds } = useContext(ProductsSelectedContext);
  const [count, setCount] = useState(0);

  const changeQuantity = (quantity: number) => {
    setCount(quantity);
  };

  return (
    <ShelfContainer key={product.id}>
      <img src={product.image} />
      <ContainerFlags>
        {product?.flags?.map((flag: string, index: Key | null | undefined) => {
          return <Flag key={index}>{flag}</Flag>;
        })}
      </ContainerFlags>
      <NameProduct>{product.name}</NameProduct>
      <DescriptionProduct>{product.description}</DescriptionProduct>
      <ContainerSelect>
        <strong>
          <span>R$</span>
          {product.price}
        </strong>
        <div>
          <CountQuantity changeQuantity={changeQuantity} count={count} />
          <MiniCartShelf
            onClick={() => {
              createProductsSelecteds(product, count);
            }}
          >
            <ShoppingCartSimple size={25} color="#fff" weight="fill" />
          </MiniCartShelf>
        </div>
      </ContainerSelect>
    </ShelfContainer>
  );
}

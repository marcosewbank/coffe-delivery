import {
  ContainerCountQuantity,
  MinusQuantitySelect,
  PlusQuantitySelect,
} from "./styles";

export function CountQuantity({
  changeQuantity,
  count,
}: {
  changeQuantity: (number: number) => void;
  count: number;
}) {
  return (
    <ContainerCountQuantity>
      <MinusQuantitySelect
        onClick={() => count > 0 && changeQuantity(count - 1)}
      >
        -
      </MinusQuantitySelect>
      {count}
      <PlusQuantitySelect onClick={() => changeQuantity(count + 1)}>
        +
      </PlusQuantitySelect>
    </ContainerCountQuantity>
  );
}

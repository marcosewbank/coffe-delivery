import { Trash } from "phosphor-react";
import { ContainerButtonRemove } from "./styles";

export function RemoveButton({
  handleRemoveProduct,
}: {
  handleRemoveProduct: () => void;
}) {
  return (
    <ContainerButtonRemove onClick={handleRemoveProduct}>
      <Trash size={20} color="#8047F8" /> <p>REMOVER</p>
    </ContainerButtonRemove>
  );
}

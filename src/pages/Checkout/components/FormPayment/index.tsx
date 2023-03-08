import { Bank, CreditCard, CurrencyDollar, Money } from "phosphor-react";
import { useContext } from "react";
import { ProductsSelectedContext } from "../../../../contexts/ProductsContext";

import {
  ButtonPayment,
  ContainerTitlePayment,
  MainFormPayment,
  ContainerButtonsPayment,
} from "./style";

export function FormPayment() {
  const { handleGetvalueButton } = useContext(ProductsSelectedContext);
  return (
    <MainFormPayment>
      <ContainerTitlePayment>
        <div>
          <CurrencyDollar size={20} color="#8047F8" />
        </div>
        <div>
          <p>Pagamento</p>
          <span>
            O pagamento é feito na entrega. Escolha a forma que deseja pagar
          </span>
        </div>
      </ContainerTitlePayment>
      <ContainerButtonsPayment>
        <ButtonPayment value="Cartão de Crédito" onClick={handleGetvalueButton}>
          <CreditCard size={15} color="#8047F8" /> Cartão de Crédito
        </ButtonPayment>
        <ButtonPayment value="Cartão de Débito" onClick={handleGetvalueButton}>
          <Bank size={15} color="#8047F8" />
          Cartão de Débito
        </ButtonPayment>
        <ButtonPayment value=" Dinheiro" onClick={handleGetvalueButton}>
          <Money size={15} color="#8047F8" />
          Dinheiro
        </ButtonPayment>
      </ContainerButtonsPayment>
    </MainFormPayment>
  );
}

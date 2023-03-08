import { useContext } from "react";
import { ProductsSelectedContext } from "../../contexts/ProductsContext";
import CoffeConfirmation from "../../assets/coffee-confirmation.png";
import {
  ContainerOrderPlaced,
  SubTitleOrderPlaced,
  TitleOrderPlaced,
  ContainerDatasOrderPlaced,
  ImagecontainerOrderPlaced,
  ContentDatasOrderPlaced,
  ContainerIconeOrderPlacedDelivery,
  ContainerIconeOrderPlacedTime,
  ContainerIconeOrderPlacedPayment,
} from "./styles";
import { CurrencyDollar, MapPin, Timer } from "phosphor-react";

export function OrderPlaced() {
  const { dataForm, buttonPaymentValue } = useContext(ProductsSelectedContext);

  return (
    <ContainerOrderPlaced>
      <div>
        <TitleOrderPlaced>Uhu! Pedido confirmado </TitleOrderPlaced>
        <SubTitleOrderPlaced>
          Agora é só aguardar que logo o café chegará até você
        </SubTitleOrderPlaced>
        <ContainerDatasOrderPlaced>
          <ContentDatasOrderPlaced>
            <ContainerIconeOrderPlacedDelivery>
              <MapPin size={20} color="#fff" weight="fill" />
            </ContainerIconeOrderPlacedDelivery>
            <div>
              <p>
                Entrega em{" "}
                <strong>
                  {dataForm.street}, {dataForm.number}
                </strong>
              </p>
              <p>
                {dataForm.district} - {dataForm.city}, {dataForm.uf}
              </p>
            </div>
          </ContentDatasOrderPlaced>
          <ContentDatasOrderPlaced>
            <ContainerIconeOrderPlacedTime>
              <Timer size={20} color="#fff" weight="fill" />
            </ContainerIconeOrderPlacedTime>
            <div>
              <p>Previsão de entrega</p>
              <strong>20 min - 30 min</strong>
            </div>
          </ContentDatasOrderPlaced>
          <ContentDatasOrderPlaced>
            <ContainerIconeOrderPlacedPayment>
              <CurrencyDollar size={20} color="#fff" weight="fill" />
            </ContainerIconeOrderPlacedPayment>
            <div>
              <p>Pagamento na entrega</p>
              <strong>{buttonPaymentValue}</strong>
            </div>
          </ContentDatasOrderPlaced>
        </ContainerDatasOrderPlaced>
      </div>
      <ImagecontainerOrderPlaced>
        <img src={CoffeConfirmation} />
      </ImagecontainerOrderPlaced>
    </ContainerOrderPlaced>
  );
}

import { Cart } from "./components/Cart";
import { FormAddress } from "./components/FormAddress";
import { FormPayment } from "./components/FormPayment";
import { MainCheckout, TitleCart } from "./styles";

export function Checkout() {
  return (
    <MainCheckout>
      <div>
        <TitleCart>Complete seu pedido</TitleCart>
        <FormAddress />
        <FormPayment />
      </div>
      <div>
        <TitleCart>Cafés selecionados</TitleCart>
        <Cart />
      </div>
    </MainCheckout>
  );
}

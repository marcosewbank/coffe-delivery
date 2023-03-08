import { MapPinLine } from "phosphor-react";
import {
  ContainerTitleForm,
  FormAddressContainer,
  InputFormCepAndNumberAndDistrict,
  InputFormStreet,
  InputFormComplement,
  InputFormCity,
  InputFormUf,
  MainFormAdress,
  FormAddressLines,
} from "./styles";
import { useForm } from "react-hook-form";
import { useContext } from "react";
import { ProductsSelectedContext } from "../../../../contexts/ProductsContext";

export function FormAddress() {
  const { register, handleSubmit } = useForm();
  const { handleCreateAddress } = useContext(ProductsSelectedContext);

  return (
    <MainFormAdress>
      <ContainerTitleForm>
        <MapPinLine size={20} color="#c47f17" />
        <div>
          <p>Endereço de Entrega</p>
          <span>Informe o endereço onde deseja receber seu pedido</span>
        </div>
      </ContainerTitleForm>
      <FormAddressContainer onBlur={handleSubmit(handleCreateAddress)}>
        <InputFormCepAndNumberAndDistrict
          type="number"
          placeholder="CEP"
          {...register("cep", {
            required: true,
          })}
        />
        <InputFormStreet
          type="text"
          placeholder="Rua"
          {...register("street", {
            required: true,
          })}
        />
        <FormAddressLines>
          <InputFormCepAndNumberAndDistrict
            type="number"
            placeholder="Número"
            {...register("number", {
              required: true,
            })}
          />
          <InputFormComplement
            type="text"
            placeholder="Complemento"
            {...register("complement")}
          />
        </FormAddressLines>
        <FormAddressLines>
          <InputFormCepAndNumberAndDistrict
            type="text"
            placeholder="Bairro"
            {...register("district", {
              required: true,
            })}
          />
          <InputFormCity
            type="text"
            placeholder="Cidade"
            {...register("city", {
              required: true,
            })}
          />
          <InputFormUf type="text" placeholder="UF" {...register("uf")} />
        </FormAddressLines>
      </FormAddressContainer>
    </MainFormAdress>
  );
}

import styled from "styled-components";

export const ContainerTitleForm = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 0.5rem;

  p {
    color: ${(props) => props.theme["base-subtitle"]};
  }

  span {
    font-size: 0.875rem;
    color: ${(props) => props.theme["base-text"]};
  }
`;

export const MainFormAdress = styled.main`
  background: ${(props) => props.theme["base-card"]};
  max-width: 40rem;
  padding: 2.5rem;
  height: 23.25rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  margin: 0.9375rem 0;
  border-radius: 6px;
`;

export const FormAddressContainer = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const BaseInputForm = styled.input`
  height: 2.625rem;
  border: 0.0625rem solid ${(props) => props.theme["base-button"]};
  border-radius: 0.25rem;
  background: ${(props) => props.theme["base-input"]};
`;

export const FormAddressLines = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const InputFormCepAndNumberAndDistrict = styled(BaseInputForm)`
  width: 12.5rem;
  padding: 0.75rem;
`;

export const InputFormStreet = styled(BaseInputForm)`
  width: 100%;
  padding: 0.75rem;
`;

export const InputFormComplement = styled(BaseInputForm)`
  width: 21.75rem;
  padding: 0.75rem;
`;

export const InputFormCity = styled(BaseInputForm)`
  width: 17.25rem;
  padding: 0.75rem;
`;

export const InputFormUf = styled(BaseInputForm)`
  width: 3.625rem;
  padding: 0.75rem;
`;

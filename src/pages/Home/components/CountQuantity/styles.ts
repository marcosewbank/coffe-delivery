import styled from "styled-components";

export const ContainerCountQuantity = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  width: 4.5rem;
  height: 2.375rem;
  background: ${(props) => props.theme["base-button"]};
  border-radius: 6px;
`;

export const BaseQuantitySelect = styled.button`
  border: none;
  background: transparent;
  color: ${(props) => props.theme["purple-default"]};
  cursor: pointer;
`;

export const PlusQuantitySelect = styled(BaseQuantitySelect)`
  font-size: 1.125rem;
`;

export const MinusQuantitySelect = styled(BaseQuantitySelect)`
  font-size: 1.875rem;
`;

import styled from "styled-components";

export const ContentMainCart = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0 2.5rem;
  border-bottom: 1px solid ${(props) => props.theme["base-button"]};
  padding: 2.5rem 0;
`;

export const ContentProductCart = styled.div`
  display: flex;
  gap: 1.25rem;
`;

export const ProductTitleCart = styled.p`
  color: ${(props) => props.theme["base-subtitle"]};
`;

export const ProductPriceCart = styled.p`
  color: ${(props) => props.theme["base-text"]};
  font-weight: 700;
`;

export const ContentSelectedAndRemoveProduct = styled.div`
  display: flex;
  gap: 0.5rem;
  margin-top: 0.5rem;
`;

import styled from "styled-components";

export const MainCart = styled.main`
  width: 28rem;
  height: 35.125rem;
  background: ${(props) => props.theme["base-card"]};
  border-radius: 0.375rem 2.75rem;
  margin: 0.9375rem 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  img {
    max-width: 4rem;
    max-height: 4rem;
  }
  a {
    display: flex;
    justify-content: center;
    text-decoration: none;
    margin-top: 1.5rem;
  }
`;

export const ContentCartProducts = styled.div`
  max-height: 18.75rem;
  overflow: auto;

  ::-webkit-scrollbar {
    width: 0.25rem;
  }

  ::-webkit-scrollbar-track {
    background: transparent;
    margin: 2.1875rem;
  }
  ::-webkit-scrollbar-thumb {
    background: ${(props) => props.theme["base-label"]};
    border-radius: 20px;
  }
`;

export const ProductsValuesCart = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0.75rem 2.5rem;

  span {
    font-size: 0.875rem;
    color: ${(props) => props.theme["base-text"]};
  }

  strong {
    font-size: 1.25rem;
    color: ${(props) => props.theme["base-subtitle"]};
  }
`;

export const ConfirmatedButton = styled.button`
  background: ${(props) => props.theme["yellow-default"]};
  border-radius: 6px;
  min-width: 23rem;
  height: 2.875rem;
  border: none;
  text-transform: uppercase;
  font-weight: 700;
  font-size: 0.875rem;
  color: white;
  cursor: pointer;
`;

export const ContentSummaryCart = styled.div`
  padding: 1.875rem 0;
`;

export const CartEmpty = styled.p`
  color: ${(props) => props.theme["purple-default"]};
  font-size: 0.875rem;
  font-family: "Baloo 2";
`;

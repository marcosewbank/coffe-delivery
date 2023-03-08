import styled from "styled-components";

export const TitleCart = styled.h1`
  font-weight: 700;
  font-size: 1.125rem;
  font-family: "Baloo 2";
  color: ${(props) => props.theme["base-subtitle"]};
`;

export const MainCheckout = styled.main`
  display: flex;
  gap: 2rem;
`;

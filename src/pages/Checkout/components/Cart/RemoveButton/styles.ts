import styled from "styled-components";

export const ContainerButtonRemove = styled.button`
  width: 5.6875rem;
  height: 2.375rem;
  background: ${(props) => props.theme["base-button"]};
  border-radius: 6px;
  display: flex;
  align-items: center;
  border: none;
  justify-content: space-evenly;
  cursor: pointer;

  p {
    color: ${(props) => props.theme["base-text"]};
    font-size: 12px;
  }
`;

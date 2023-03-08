import styled from "styled-components";

export const ContainerOrderPlaced = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 6.25rem;
`;

export const TitleOrderPlaced = styled.h1`
  color: ${(props) => props.theme["yellow-dark"]};
  font-size: 2rem;
  font-family: "Baloo 2";
`;

export const SubTitleOrderPlaced = styled.p`
  color: ${(props) => props.theme["base-subtitle"]};
  font-size: 1.25rem;
`;

export const ContainerDatasOrderPlaced = styled.div`
  width: 32.875rem;
  height: 16.875rem;
  display: flex;
  flex-direction: column;
  background: linear-gradient(#fff, #fff) padding-box,
    linear-gradient(#dbac2c, #8047f8) border-box;
  border: 1px solid transparent;
  border-radius: 0.375rem 2.25rem;
  justify-content: space-evenly;
  padding: 0 2.5rem;
  margin-top: 2.5rem;

  p {
    color: ${(props) => props.theme["base-text"]};
  }
`;

export const ContentDatasOrderPlaced = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
`;

export const BaseContainerIconeOrderPlaced = styled.div`
  width: 2rem;
  height: 2rem;
  border-radius: 1000px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ContainerIconeOrderPlacedDelivery = styled(
  BaseContainerIconeOrderPlaced
)`
  background: ${(props) => props.theme["purple-default"]};
`;

export const ContainerIconeOrderPlacedTime = styled(
  BaseContainerIconeOrderPlaced
)`
  background: ${(props) => props.theme["yellow-default"]};
`;

export const ContainerIconeOrderPlacedPayment = styled(
  BaseContainerIconeOrderPlaced
)`
  background: ${(props) => props.theme["yellow-dark"]};
`;

export const ImagecontainerOrderPlaced = styled.div`
  display: flex;
  align-items: end;

  img {
    object-fit: none;
  }
`;

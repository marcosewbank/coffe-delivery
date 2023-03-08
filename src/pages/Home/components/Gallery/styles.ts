import styled from "styled-components";

export const GalleryContainer = styled.main`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(4, 1fr);
  grid-column-gap: 2rem;
  grid-row-gap: 2.5rem;
  margin-top: 1.25rem;
`;

export const TitleGallery = styled.h1`
  font-family: "Baloo 2";
  padding: 2rem 0;
  color: ${(props) => props.theme["base-subtitle"]};
`;

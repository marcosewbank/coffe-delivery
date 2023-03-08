import styled from "styled-components";

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  height: 6.5rem;
  align-items: center;
`;

export const HeaderContent = styled.div`
  display: flex;
  gap: 0.75rem;
`;

export const HeaderLocationContent = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 0.25rem;
  background: ${(props) => props.theme["purple-light"]};
  border-radius: 6px;
  width: 8.9375rem;
  height: 2.375rem;
  justify-content: center;

  span {
    color: ${(props) => props.theme["purple-dark"]};
    font-size: 0.875rem;
  }
`;

export const HeaderMiniCart = styled.nav`
  display: flex;
  align-items: center;
  border-radius: 6px;
  background: ${(props) => props.theme["yellow-light"]};
  width: 2.375rem;
  height: 2.375rem;
  justify-content: center;
  position: relative;

  span {
    position: absolute;
    top: -0.625rem;
    background: ${(props) => props.theme["yellow-dark"]};
    border-radius: 1000px;
    width: 1.25rem;
    height: 1.25rem;
    color: #ffffff;
    font-size: 0.75rem;
    display: flex;
    align-items: center;
    justify-content: center;
    right: -0.625rem;
  }
`;

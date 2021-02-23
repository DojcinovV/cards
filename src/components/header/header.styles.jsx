import styled from "styled-components";

export const HeaderContainer = styled.div`
  background-color: blue;
  color: white;
  display: flex;
  font-size: 1rem;
`;
export const HeaderMenuContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  place-content: flex-end;
`;
export const MenuItemsContainer = styled.div`
  display: flex;
  margin: 0 2vw;
  align-items: center;
`;
export const MenuItem = styled.div`
  padding: 0 1vw;
  cursor: pointer;
  margin: 0 auto;
  display: inherit;
  align-items: center;
`;

import React from "react";
import {
  HeaderContainer,
  HeaderMenuContainer,
  MenuItem,
  MenuItemsContainer,
} from "./header.styles";

import { useHistory } from "react-router-dom";

const Header = () => {
  const history = useHistory();
  return (
    <HeaderContainer>
      <div>Logo here</div>
      <HeaderMenuContainer>
        <MenuItemsContainer>
          <MenuItem onClick={() => history.push("/cards/add")}>
            Add Card
          </MenuItem>
        </MenuItemsContainer>
      </HeaderMenuContainer>
    </HeaderContainer>
  );
};

export default Header;

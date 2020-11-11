import React from "src/components/header/node_modules/react";
import PersonIcon from "src/components/header/node_modules/@material-ui/icons/Person";
import ForumIcon from "src/components/header/node_modules/@material-ui/icons/Forum";
import { IconButton } from "src/components/header/node_modules/@material-ui/core";

import HeaderStyle from "./header.style";

const Header = () => {
  return (
    <HeaderStyle>
      <IconButton>
        <PersonIcon fontSize="large" className="header-icon" />
      </IconButton>

      <img
        src="https://1000logos.net/wp-content/uploads/2018/07/tinder-logo.png"
        className="tinder-image"
      />

      <IconButton>
        <ForumIcon fontSize="large" className="header-icon"/>
      </IconButton>
    </HeaderStyle>
  );
};

export default Header;

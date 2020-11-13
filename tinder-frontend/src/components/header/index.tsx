import React from "react";
import PersonIcon from "@material-ui/icons/Person";
import ForumIcon from "@material-ui/icons/Forum";
import { IconButton } from "@material-ui/core";

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
        alt="tinder logo"
      />

      <IconButton>
        <ForumIcon fontSize="large" className="header-icon" />
      </IconButton>
    </HeaderStyle>
  );
};

export default Header;

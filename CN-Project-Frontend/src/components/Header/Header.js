import React from "react";
import { HeaderStyle } from "./Header.styled";

import AppLogo from "../../assets/images/logo.png";
import SdsuLogo from "../../assets/images/sdsu-logo.png";

const Header = () => {
  return (
    <div>
      <HeaderStyle>
        <a href="https://www.sdsu.edu/">
          <img
            src={SdsuLogo}
            alt="San Diego State University"
            height="40"
            width="240"
          />
        </a>

        <img src={AppLogo} alt="logo" width="80" />
      </HeaderStyle>
    </div>
  );
};

export default Header;

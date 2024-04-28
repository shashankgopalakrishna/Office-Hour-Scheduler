import React from "react";
import { LogoStyle, HeaderStyle } from "./Header.styled";

const Header = () => {
  return (
    <div>
      <HeaderStyle>
        <LogoStyle>
          <a href="https://www.sdsu.edu/">
            <img
              src="https://ou-resources.sdsu.edu/images/_sdsu/logo-2022/logo.png"
              alt="San Diego State University"
              height="40"
              width="176"
            />
          </a>
        </LogoStyle>
      </HeaderStyle>
    </div>
  );
};

export default Header;

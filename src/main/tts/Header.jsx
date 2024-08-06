import React from "react";
import Logo from "../../style/images/logo.png";

const Header = () => {
  return (
    <div>
      <img src={Logo} alt="logo" style={{ width: "50%", height: "50%" }}></img>
    </div>
  );
};

export default Header;

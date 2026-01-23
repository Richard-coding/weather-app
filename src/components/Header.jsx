import React from "react";
import Logo from "../assets/images/logo.svg";
import Button from "./Button";

const Header = () => {
  return (
    <header className="flex justify-between">
      <img src={Logo} alt="logo" className="w-32"/>
      <Button text="Units"/>
    </header>
  );
};

export default Header;

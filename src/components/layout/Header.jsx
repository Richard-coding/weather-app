import Logo from "../../assets/images/logo.svg";
import Dropdown from "../units/Dropdown";

const Header = () => {
  return (
    <header className="flex justify-between items-center">
      <img src={Logo} alt="logo" className="w-[137px] h-7" />
      <Dropdown  />
    </header>
  );
};

export default Header;

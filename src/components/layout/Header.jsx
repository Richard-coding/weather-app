import Logo from "../../assets/images/logo.svg";
import Dropdown from "../ui/Dropdown";

const itemsDropdown = [
  {
    key: "Temperature",
    options: ["Celsius (ºC)", "Fahrenheit (ºF)"],
  },
  {
    key: "Windspeed",
    options: ["km/h", "mph"],
  },
  {
    key: "Precipitation",
    options: ["Millimeters (mm)", "Inches (in)"],
  },
  {
    id: temperature,
    label: ""
  }
];

const itemsDays = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

const Header = () => {
  return (
    <header className="flex justify-between items-center">
      <img src={Logo} alt="logo" className="w-[137px] h-7" />
      <Dropdown items={itemsDropdown} days={itemsDays} />
    </header>
  );
};

export default Header;

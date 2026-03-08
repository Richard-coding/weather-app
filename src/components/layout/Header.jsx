import Logo from "../../assets/images/logo.svg";
import Dropdown from "../ui/Dropdown";

const items = [
  {
    label: "Temperature",
    options: [
      { unit: "Celsius (ºC)", value: "celcius_unit" },
      { unit: "Fahrenheit (ºF)", value: "fahrenheit_unit" },
    ],
  },
  {
    label: "Windspeed",
    options: [
      { unit: "km/h", value: "kmh" },
      { unit: "mph", value: "mph" },
    ],
  },
  {
    label: "Precipitation",
    options: [
      { unit: "Millimeters (mm)", value: "millimeters_mm" },
      { unit: "Inches (in)", value: "inches_in" },
    ],
  },
];

const Header = () => {
  return (
    <header className="flex justify-between items-center">
      <img src={Logo} alt="logo" className="w-[137px] h-7" />
      <Dropdown items={items} />
    </header>
  );
};

export default Header;

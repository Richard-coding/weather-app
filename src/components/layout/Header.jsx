import Logo from "../../assets/images/logo.svg";
import Dropdown from "../ui/Dropdown";

const dropDownList = [
  {
    label: "Temperature",
    key: "temperature",
    options: [
      { label: "Celsius (°C)", value: "celsius" },
      { label: "Fahrenheit (°F)", value: "fahrenheit" },
    ],
  },
  {
    label: "Windspeed",
    key: "windspeed",
    options: [
      { label: "km/h", value: "kmh" },
      { label: "mph", value: "mph" },
    ],
  },
  {
    label: "Precipitation",
    key: "precipitation",
    options: [
      { label: "Millimeters (mm)", value: "mm" },
      { label: "Inches (in)", value: "inch" },
    ],
  },
];

const Header = ({ unit, setUnit }) => {
  return (
    <header className="flex justify-between items-center">
      <img src={Logo} alt="logo" className="w-[137px] h-7" />
      <Dropdown dropDownList={dropDownList} unit={unit} setUnit={setUnit} />
    </header>
  );
};

export default Header;

import { useContext, useState } from "react";
import Button from "../common/Button";
import Unit from "../../assets/images/icon-dropdown.svg?react";
import Config from "../../assets/images/icon-units.svg?react";
import Check from "../../assets/images/icon-checkmark.svg?react";
import { WeatherContext } from "../../context/WeatherContext";

const options = [
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

const Dropdown = () => {
  const [isOpen, setIsOpen] = useState(false);

  const { unit, setUnit } = useContext(WeatherContext);

  const handleSelectUnit = (key, value) => {
    setUnit((prevUnit) => ({
      ...prevUnit,
      [key]: value,
    }));
  };

  const handleToggleUnits = () => {
    const isMetric =
      unit.temperature === "celsius" &&
      unit.windspeed === "kmh" &&
      unit.precipitation === "mm";

    if (isMetric) {
      setUnit({
        temperature: "fahrenheit",
        windspeed: "mph",
        precipitation: "inch",
      });
    } else {
      setUnit({
        temperature: "celsius",
        windspeed: "kmh",
        precipitation: "mm",
      });
    }
  };

  return (
    <article className="relative">
      <Button className="rounded-8" onClick={() => setIsOpen((prev) => !prev)}>
        <div className="flex items-center gap-[6px] px-[10px] py-2 w-[89px] h-[33px]">
          <Config className="w-[14px] h-[14px]" />
          <p className="text-preset-8 font-medium">Units</p>
          <Unit className="w-[14px] h-[14px]" />
        </div>
      </Button>

      {isOpen && (
        <div className="absolute mt-[10px] right-0 rounded-12 border-neutral-600 border-[1px] border-solid bg-neutral-800 px-2 py-[6px] min-w-[214px] grid grid-cols-1 gap-[10px] z-50">
          <button
            className={`text-preset-7 px-2 py-[10px] rounded-8 text-start w-full flex gap-[10px] items-center justify-between ${
              unit.temperature ? "bg-neutral-700" : "hover:bg-neutral-700"
            }`}
            onClick={() => handleToggleUnits()}
          >
            <span>
              Switch to {unit.temperature === "celsius" ? "Imperial" : "Metric"}
            </span>
            {unit.temperature && <Check className="w-4 h-4" />}
          </button>

          {options?.map((group, index) => (
            <div key={group.key} className="flex flex-col gap-1">
              <p className="text-neutral-300 text-preset-8 pt-[5px] px-1">
                {group.label}
              </p>

              <div>
                {group.options?.map((option) => {
                  const isSelected = unit[group.key] === option.value;

                  return (
                    <div key={option.value}>
                      <button
                        className={`flex rounded-8 text-preset-7 px-2 py-2 w-full text-start items-center justify-between mb-1 ${
                          isSelected ? "bg-neutral-700" : "hover:bg-neutral-700"
                        }`}
                        onClick={() => {
                          handleSelectUnit(group.key, option.value);
                        }}
                      >
                        <span>{option.label}</span>
                        {isSelected && <Check className="w-4 h-4" />}
                      </button>
                    </div>
                  );
                })}
              </div>

              {index !== options.length - 1 && (
                <div className="w-full h-px bg-neutral-600"></div>
              )}
            </div>
          ))}
        </div>
      )}
    </article>
  );
};

export default Dropdown;

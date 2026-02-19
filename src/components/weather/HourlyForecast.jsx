import React from "react";
import Button from "../ui/Button";
import Unit from "../../assets/images/icon-dropdown.svg?react";
import DrizzleIcon from "../../assets/images/icon-drizzle.webp";
import FogIcon from "../../assets/images/icon-fog.webp";
import OvercastIcon from "../../assets/images/icon-overcast.webp";
import RainIcon from "../../assets/images/icon-rain.webp";
import SunnyIcon from "../../assets/images/icon-sunny.webp";
import StormIcon from "../../assets/images/icon-storm.webp";
import SnowIcon from "../../assets/images/icon-snow.webp";
import PartlyCloudIcon from "../../assets/images/icon-partly-cloudy.webp";

const dayItems = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

const WEATHER_ICONS = {
  drizzle: DrizzleIcon,
  fog: FogIcon,
  overcast: OvercastIcon,
  partly: PartlyCloudIcon,
  rain: RainIcon,
  snow: SnowIcon,
  storm: StormIcon,
  sunny: SunnyIcon,
};

const hourtlyItems = [
  {
    condition: "storm",
    hour: 3,
    period: "day",
    temperature: 56,
  },
  {
    condition: "partly",
    hour: 4,
    period: "night",
    temperature: 56,
  },
  {
    condition: "partly",
    hour: 3,
    period: "night",
    temperature: 56,
  },
  {
    condition: "partly",
    hour: 3,
    period: "night",
    temperature: 56,
  },
  {
    condition: "partly",
    hour: 3,
    period: "night",
    temperature: 56,
  },
  {
    condition: "partly",
    hour: 3,
    period: "night",
    temperature: 56,
  },
];

const ItemsHourty = [{ icon: "sunny", hour: 3, temperature: 68 }];

const HourlyForecast = () => {
  const [open, setOpen] = React.useState(false);

  return (
    <section className="grid gap-4 bg-neutral-800 px-4 py-5 rounded-20">
      <div className="flex justify-between items-center  ">
        <p className="text-preset-5 font-medium">Hourly forecast</p>
        <Button className=" flex items-center gap-3 bg-neutral-600 px-4 py-2 text-preset-7">
          <p>Tuesday</p>
          <Unit />
        </Button>
      </div>

      {hourtlyItems.map((item, index) => (
        <div
          key={index}
          className="bg-neutral-700 border-neutral-600 border-solid border-[1px] rounded-8 pl-3 pr-4 py-[10px] flex justify-between items-center"
        >
          <div className="flex items-center gap-2">
            <img
              src={WEATHER_ICONS[item.condition]}
              alt={item.condition}
              className="w-10 h-10"
            />
            <div className="flex gap-[6px] text-preset-5">
              <p>{item.hour}</p>
              <p>{item.period === "day" ? "AM" : "PM"}</p>
            </div>
          </div>

          <p className="text-preset-7">{item.temperature}º</p>
        </div>
      ))}
    </section>
  );
};

export default HourlyForecast;

import DrizzleIcon from "../../assets/images/icon-drizzle.webp";
import FogIcon from "../../assets/images/icon-fog.webp";
import OvercastIcon from "../../assets/images/icon-overcast.webp";
import RainIcon from "../../assets/images/icon-rain.webp";
import SunnyIcon from "../../assets/images/icon-sunny.webp";
import StormIcon from "../../assets/images/icon-storm.webp";
import SnowIcon from "../../assets/images/icon-snow.webp";
import PartlyCloudIcon from "../../assets/images/icon-partly-cloudy.webp";
import { twMerge } from "tailwind-merge";

const WEATHER_ICONS = {
  drizzle: DrizzleIcon,
  fog: FogIcon,
  overcast: OvercastIcon,
  rain: RainIcon,
  sunny: SunnyIcon,
  storm: StormIcon,
  snow: SnowIcon,
  partlyCloudy: PartlyCloudIcon,
};

const Icons = ({ weatherCode, className }) => {
  let icon = "sunny";

  if (weatherCode === 0) {
    icon = "sunny";
  } else if (weatherCode >= 1 && weatherCode <= 2) {
    icon = "partlyCloudy";
  } else if (weatherCode === 3) {
    icon = "overcast";
  } else if (weatherCode === 45 || weatherCode === 48) {
    icon = "fog";
  } else if (weatherCode >= 51 && weatherCode <= 57) {
    icon = "drizzle";
  } else if (weatherCode >= 61 && weatherCode <= 67) {
    icon = "rain";
  } else if (weatherCode >= 71 && weatherCode <= 77) {
    icon = "snow";
  } else if (weatherCode >= 95 && weatherCode <= 99) {
    icon = "storm";
  }

  return (
    <img
      src={WEATHER_ICONS[icon]}
      alt={icon}
      className={twMerge(`w-10 h-10 ${className || ""}`)}
    />
  );
};

export default Icons;
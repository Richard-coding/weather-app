import React from "react";
import iconSunny from "../../assets/images/icon-sunny.webp";

const location = [
  {
    downtown: "Berlin",
    country: "Germany",
    week: "Tuesday",
    mounth: "Aug",
    day: 5,
    year: 2025,
    temperature: 68,
  },
];

const WeatherInfo = () => {
  return (
    <section>
      {location.map((item, index) => (
        <div
          key={index}
          className="bg-mobile md:bg-desktop text-center bg-cover flex flex-wrap items-center md:justify-between gap-4 px-6 py-20 rounded-16"
        >
          <div className="text-center">
            <p className="text-preset-4">
              {item.downtown}, {item.country}
            </p>
            <p className="text-preset-6 opacity-80">
              {item.week}, {item.mounth} {item.day}, {item.year}
            </p>
          </div>

          <div className="flex items-center gap-5">
            <img src={iconSunny} alt="sun" className="w-[120px] h-[120px]" />
            <p key={index} className="text-preset-1">
              {item.temperature}º
            </p>
          </div>
        </div>
      ))}
    </section>
  );
};

export default WeatherInfo;

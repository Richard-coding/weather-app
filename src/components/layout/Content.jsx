import React from "react";
import WeatherInfo from "../weather/WeatherInfo";
import WeatherDetails from "../weather/WeatherDetails";
import DailyForecast from "../weather/DailyForecast";
import HourlyForecast from "../weather/HourlyForecast"

const Content = () => {
  return (
    <main className="grid grid-cols-1w pt-8 pb-12 lg:gap-8 lg:grid-cols-[2fr_1fr]">
      <div>
        <WeatherInfo />
        <WeatherDetails />
        <DailyForecast />
      </div>
      <HourlyForecast />
    </main>
  );
};

export default Content;

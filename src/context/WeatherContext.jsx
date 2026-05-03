import React, { createContext, useEffect } from "react";
import useWeather from "../hooks/useWeather";

export const WeatherContext = createContext();

export const WeatherStorage = ({ children }) => {
  const weather = useWeather();

  return (
    <WeatherContext.Provider value={weather}>
      {children}
    </WeatherContext.Provider>
  );
};

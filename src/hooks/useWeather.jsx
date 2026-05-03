import React, { createContext, useEffect, useState } from "react";

const defaultCity = {
  name: "Osasco",
  admin1: "São Paulo",
  latitude: -23.5505,
  longitude: -46.6333,
};

const useWeather = () => {
  const [data, setData] = useState(null);
  const [cities, setCities] = useState(null);
  const [unit, setUnit] = useState({
    temperature: "celsius",
    windspeed: "kmh",
    precipitation: "mm",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [selected, setSelected] = useState(defaultCity);

  const request = async (city) => {
    try {
      setLoading(true);
      setError(null);
      const response = await fetch(
        `https://api.open-meteo.com/v1/forecast?latitude=${city.latitude}&longitude=${city.longitude}&daily=temperature_2m_max,temperature_2m_min,rain_sum,showers_sum,snowfall_sum,precipitation_sum,weather_code&hourly=apparent_temperature,rain,showers,snowfall,snow_depth,weather_code&current=temperature_2m,relative_humidity_2m,apparent_temperature,is_day,precipitation,rain,showers,snowfall,wind_speed_10m,weather_code&wind_speed_unit=${unit.windspeed}&temperature_unit=${unit.temperature}&precipitation_unit=${unit.precipitation}`,
      );

      if (!response.ok) {
        throw new Error("Failed to fetch weather data");
      }

      const json = await response.json();
      setSelected(city);
      setData(json);

      return { response, json };
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  const search = async (city) => {
    try {
      const response = await fetch(
        `https://geocoding-api.open-meteo.com/v1/search?name=${city}&count=5&language=pt&format=json`,
      );

      if (!response.ok) {
        setCities([]);
        return [];
      }

      const json = await response.json();

      if (!json.results) {
        setCities([]);
        return [];
      }

      setCities(json.results);
      return json.results;
    } catch (error) {
      setError(error);
      setCities([]);
      return [];
    }
  };

  useEffect(() => {
    request(selected, unit);
  }, [unit]);

  return {
    data,
    cities,
    selected,
    unit,
    loading,
    error,
    search,
    request,
    setUnit,
  };
};

export default useWeather;

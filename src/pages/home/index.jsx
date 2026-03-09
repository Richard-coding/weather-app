import Container from "../../components/layout/Container";
import Header from "../../components/layout/Header";
import Content from "../../components/layout/Content";
import SearchBar from "../../components/search/SearchBar";
import { useState, useEffect } from "react";

const cities = [
  {
    capital: "Brasília",
    country: "Brazil",
    country_code: "BR",
    continent: "South America",
    latitude: -15.793889,
    longitude: -47.882778,
  },
  {
    capital: "Tokyo",
    country: "Japan",
    country_code: "JP",
    continent: "Asia",
    latitude: 35.6897,
    longitude: 139.6922,
  },
  {
    capital: "Berlin",
    country: "Germany",
    country_code: "DE",
    continent: "Europe",
    latitude: 52.52,
    longitude: 13.405,
  },
  {
    capital: "Cairo",
    country: "Egypt",
    country_code: "EG",
    continent: "Africa",
    latitude: 30.0444,
    longitude: 31.2357,
  },
  {
    capital: "Canberra",
    country: "Australia",
    country_code: "AU",
    continent: "Oceania",
    latitude: -35.282,
    longitude: 149.1287,
  },
];

const Home = () => {
  const [apiData, setApiData] = useState({});
  const [selectedCity, setSelectedCity] = useState(cities[0]);

  const handleFetchApi = async (city) => {
    try {
      const response = await fetch(
        `https://api.open-meteo.com/v1/forecast?latitude=${city.latitude}&longitude=${city.longitude}&daily=temperature_2m_max,temperature_2m_min,rain_sum,showers_sum,snowfall_sum,precipitation_sum,weather_code&hourly=apparent_temperature,rain,showers,snowfall,snow_depth,weather_code&current=temperature_2m,relative_humidity_2m,apparent_temperature,is_day,precipitation,rain,showers,snowfall,wind_speed_10m,weather_code`,
      );
      const json = await response.json();
      setApiData(json);
    } catch (error) {}
  };

  useEffect(() => {
    handleFetchApi(selectedCity);
  }, [selectedCity]);

  return (
    <Container>
      <Header />

      <h1 className="text-center text-6xl font-medium my-12">
        How`s the sky looking today?
      </h1>

      <SearchBar cities={cities} setSelectedCity={setSelectedCity} />
      <Content data={apiData} selectedCity={selectedCity} />
    </Container>
  );
};

export default Home;

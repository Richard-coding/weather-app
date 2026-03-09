import Container from "../../components/layout/Container";
import Header from "../../components/layout/Header";
import Content from "../../components/layout/Content";
import SearchBar from "../../components/search/SearchBar";
import { useState, useEffect } from "react";
import { buildWeatherUrl } from "../../services/buildWeatherUrl";

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

const units = {
  temperature: "celsius",
  windspeed: "kmh",
  precipitation: "mm",
};

const Home = () => {
  const [apiData, setApiData] = useState({});
  const [selectedCity, setSelectedCity] = useState(cities[0]);
  const [unit, setUnit] = useState(units);

  const handleFetchApi = async (city) => {
    try {
      const response = await fetch(buildWeatherUrl(city, unit));
      const json = await response.json();
      setApiData(json);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    handleFetchApi(selectedCity);
  }, [selectedCity, unit]);

  return (
    <Container>
      <Header unit={unit} setUnit={setUnit} />

      <h1 className="text-center text-6xl font-medium my-12">
        How`s the sky looking today?
      </h1>

      <SearchBar cities={cities} setSelectedCity={setSelectedCity} />
      <Content data={apiData} selectedCity={selectedCity} />
    </Container>
  );
};

export default Home;

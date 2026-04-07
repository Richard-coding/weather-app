import Container from "../../components/layout/Container";
import Header from "../../components/layout/Header";
import Content from "../../components/layout/Content";
import SearchBar from "../../components/search/SearchBar";
import { useState, useEffect } from "react";
import { buildWeatherUrl } from "../../services/buildWeatherUrl";import errorIcon from "../../assets/images/icon-error.svg";
import Retry from "../../assets/images/icon-retry.svg?react";

const cities = [
  {
    capital: "Brasilia",
    country: "Brazil",
    country_code: "BR",
    continent: "South America",
    latitude: -15.7939,
    longitude: -47.8828,
  },
  {
    capital: "Washington, D.C.",
    country: "United States",
    country_code: "US",
    continent: "North America",
    latitude: 38.9072,
    longitude: -77.0369,
  },
  {
    capital: "Ottawa",
    country: "Canada",
    country_code: "CA",
    continent: "North America",
    latitude: 45.4215,
    longitude: -75.6972,
  },
  {
    capital: "London",
    country: "United Kingdom",
    country_code: "GB",
    continent: "Europe",
    latitude: 51.5072,
    longitude: -0.1276,
  },
  {
    capital: "Paris",
    country: "France",
    country_code: "FR",
    continent: "Europe",
    latitude: 48.8566,
    longitude: 2.3522,
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
    capital: "Tokyo",
    country: "Japan",
    country_code: "JP",
    continent: "Asia",
    latitude: 35.6762,
    longitude: 139.6503,
  },
  {
    capital: "Beijing",
    country: "China",
    country_code: "CN",
    continent: "Asia",
    latitude: 39.9042,
    longitude: 116.4074,
  },
  {
    capital: "New Delhi",
    country: "India",
    country_code: "IN",
    continent: "Asia",
    latitude: 28.6139,
    longitude: 77.209,
  },
  {
    capital: "Pretoria",
    country: "South Africa",
    country_code: "ZA",
    continent: "Africa",
    latitude: -25.7479,
    longitude: 28.2293,
  },
];

const units = {
  temperature: "celsius",
  windspeed: "kmh",
  precipitation: "mm",
};

const Home = () => {
  const [unit, setUnit] = useState(units);
  const [selectedCity, setSelectedCity] = useState(cities[0]);
  const [apiData, setApiData] = useState({});
  const [loading, setLoading] = useState(false);
  const [noResults, setNoResults] = useState(false);
  const [error, setError] = useState(false);

  const handleFetchApi = async (city) => {
    try {
      setLoading(true);
      setError(false);
      setNoResults(false);

      const response = await fetch(buildWeatherUrl(city, unit));

      if (!response.ok) {
        throw new Error("API response error");
      }

      const json = await response.json();
      setApiData(json);
    } catch (error) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    handleFetchApi(selectedCity);
  }, [selectedCity, unit]);

  if (error) {
    return (
      <Container>
        <Header unit={unit} setUnit={setUnit} />
        <div className="flex flex-col items-center justify-center text-center gap-6 mt-16">
          <img src={errorIcon} alt="Error icon" className="w-12 h-[50px]" />
          <p className="text-preset-4">Something went wrong.</p>
          <p>
            We couldn’t connect to the server (API error). Please try again in a
            few moments.
          </p>
          <button
            className="flex gap-[10px] items-center bg-neutral-800 px-4 py-3 rounded-8"
            onClick={() => handleFetchApi(selectedCity)}
          >
            <Retry className="w-4 h-4" /> Retry
          </button>
        </div>
      </Container>
    );
  }

  return (
    <Container>
      <Header unit={unit} setUnit={setUnit} />

      <h1 className="text-center text-6xl font-medium my-16">
        How`s the sky looking today?
      </h1>

      <SearchBar
        cities={cities}
        setSelectedCity={setSelectedCity}
        setNoResults={setNoResults}
      />
      <Content
        data={apiData}
        selectedCity={selectedCity}
        loading={loading}
        noResults={noResults}
      />
    </Container>
  );
};

export default Home;

import Header from "../components/layout/Header";
import SearchBar from "../components/search/SearchBar";
import Error from "../components/layout/Error";
import Content from "../components/layout/Content";
import { useState, useEffect, useContext } from "react";
import { WeatherContext } from "../context/WeatherContext";

const Home = () => {
  const { error, cities } = useContext(WeatherContext);

  return (
    <div className="h-screen max-w-7xl p-4 mx-auto">
      {error ? (
        <Error />
      ) : (
        <div>
          <Header />

          <h1 className="text-center text-6xl font-medium my-16">
            How`s the sky looking today?
          </h1>

          <SearchBar />

          {cities?.length === 0 ? (
            <div className="mt-12 text-center">
              <p className="text-preset-4">No search result found!</p>
            </div>
          ) : (
            <Content />
          )}
        </div>
      )}
    </div>
  );
};

export default Home;

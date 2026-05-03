import Button from "../common/Button";
import loadingIcon from "../../assets/images/icon-loading.svg";
import Icon from "../../assets/images/icon-search.svg?react";
import { useContext, useEffect, useState } from "react";
import { WeatherContext } from "../../context/WeatherContext";

const SearchBar = () => {
  const [input, setInput] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const { cities, loading, unit, request, search } = useContext(WeatherContext);

  const handleSearch = (city) => {
    request(city, unit);
    setIsOpen(false);
  };

  const handleButton = async () => {
    const results = await search(input.trim());

    if (results.length === 0) {
      return;
    }

    request(results[0]);
  };

  return (
    <form
      onSubmit={() => handleButton()}
      className="grid grid-cols-1 m-auto md:grid-cols-[8fr_1fr] gap-3 lg:max-w-[654px]"
    >
      <div className="relative">
        <div className="relative">
          <input
            type="text"
            value={input}
            onChange={({ target }) => {
              const value = target.value;

              setInput(value);
              setIsOpen(true);

              if (value.trim().length > 2) {
                search(value);
              }
            }}
            className="w-full h-14 pl-[60px] pr-4 rounded-12 bg-neutral-700"
            placeholder="Search for a place..."
          />

          <Icon className="absolute left-6 top-1/2 -translate-y-1/2 w-5 h-5" />
        </div>

        {cities && cities.length > 0 && input.trim() && isOpen && (
          <div className="absolute bg-neutral-800 border-[1px] border-neutral-700 w-full rounded-12 p-2 flex flex-col gap-1 mt-[10px] z-10">
            {cities.map((city, index) => (
              <ul key={index}>
                <li>
                  <button
                    className="px-2 py-[10px] hover:bg-neutral-700 rounded-8 border-solid border-transparent border-[1px] hover:border-neutral-600 w-full text-start"
                    onClick={() => {
                      handleSearch(city);
                    }}
                  >
                    {city.name}, {city.admin1}, {city.admin2} - {city.country_code}
                  </button>
                </li>
              </ul>
            ))}
          </div>
        )}

        {loading && isOpen && (
          <div className="absolute bg-neutral-800 border-[1px] border-neutral-700 w-full rounded-12 p-2 flex items-center gap-[10px] mt-[10px] z-10">
            <img src={loadingIcon} alt="loading" className="w-4 h-4" />
            <p>Search in progress</p>
          </div>
        )}
      </div>

      <Button
        className="px-6 py-4 rounded-12 text-preset-5 font-medium"
        color="#4658D9"
      >
        Search
      </Button>
    </form>
  );
};

export default SearchBar;

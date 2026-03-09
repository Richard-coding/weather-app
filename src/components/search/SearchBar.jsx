import React from "react";
import InputField from "../ui/InputField";
import Button from "../ui/Button";

const SearchBar = ({ cities, setSelectedCity }) => {
  const [input, setInput] = React.useState("");
  const [isOpen, setIsOpen] = React.useState(false);

  const handleCitySelected = (city) => {
    setInput(`${city.capital}, ${city.country}`); 
    setSelectedCity(city);
    setIsOpen(false);
  };

  const handleSearchCity = () => {
    const matchedCity = cities.find(
      (city) =>
        city.capital.toLowerCase() === input.toLowerCase() ||
        city.country.toLowerCase() === input.toLowerCase(),
    );

    if (!matchedCity) return;

    setInput(`${matchedCity.capital}, ${matchedCity.country}`);
    setSelectedCity(matchedCity);
    setIsOpen(false);
  };

  const filter = cities.filter(
    (city) =>
      city.capital.toLowerCase().includes(input.toLowerCase()) ||
      city.country.toLowerCase().includes(input.toLowerCase()),
  );

  return (
    <div className="grid grid-cols-1 m-auto md:grid-cols-[8fr_1fr] gap-3 lg:max-w-[654px]">
      <div className="relative">
        <InputField
          value={input}
          onChange={(e) => {
            const value = e.target.value;

            setInput(value);
            setIsOpen(!!value.trim());
          }}
        />
        {isOpen && input.trim() && filter.length > 0 &&(
          <div className="absolute bg-neutral-800 border-[1px] border-neutral-700 w-full rounded-12 p-2 flex flex-col gap-1">
            {filter.map((city, index) => (
              <ul key={index}>
                <li>
                  <button
                    className="px-2 py-[10px] hover:bg-neutral-700 rounded-8 border-solid border-transparent border-[1px] hover:border-neutral-600 w-full text-start"
                    onClick={() => handleCitySelected(city)}
                  >
                    {city.capital}, {city.country}, {city.continent}
                  </button>
                </li>
              </ul>
            ))}
          </div>
        )}
      </div>

      <Button
        className="px-6 py-4 rounded-12 text-preset-5 font-medium"
        color="#4658D9"
        onClick={handleSearchCity}
      >
        Search
      </Button>
    </div>
  );
};

export default SearchBar;

import{ useState } from "react";
import InputField from "../ui/InputField";
import Button from "../ui/Button";
import loadingIcon from "../../assets/images/icon-loading.svg";

const SearchBar = ({ cities, setSelectedCity, setNoResults }) => {
  const [input, setInput] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const fakeSearchCity = (input) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const normalizedInput = input
          .split(",")[0]
          .trim()
          .toLowerCase();

        if (normalizedInput === "error") {
          reject(new Error("Erro simulado da API"));
          return;
        }

        const matchedCity = cities.find(
          (city) =>
            city.capital.toLowerCase() === normalizedInput ||
            city.country.toLowerCase() === normalizedInput,
        );

        resolve(matchedCity || null);
      }, 300);
    });
  };

  const handleCitySelected = (city) => {
    setInput(`${city.capital}, ${city.country}`);
    setSelectedCity(city);
    setNoResults(false);
    setIsOpen(false);
    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
    }, 300);
  };

  const handleSearchCity = async () => {
    if (!input.trim()) return;

    try {
      setIsLoading(true);
      setIsOpen(false);
      setNoResults(false);

      const matchedCity = await fakeSearchCity(input);

      if (!matchedCity) {
        setNoResults(true);
        return;
      }

      setSelectedCity(matchedCity);
      setInput(`${matchedCity.capital}, ${matchedCity.country}`);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
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
            setNoResults(false);
          }}
        />

        {isOpen && input.trim() && filter.length > 0 && (
          <div className="absolute bg-neutral-800 border-[1px] border-neutral-700 w-full rounded-12 p-2 flex flex-col gap-1 mt-[10px] z-10">
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

        {isLoading && (
          <div className="absolute bg-neutral-800 border-[1px] border-neutral-700 w-full rounded-12 p-2 flex items-center gap-[10px] mt-[10px] z-10">
            <img src={loadingIcon} alt="loading" className="w-4 h-4" />
            <p>Search in progress</p>
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
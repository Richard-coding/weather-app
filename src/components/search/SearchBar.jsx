import React from "react";
import InputField from "../ui/InputField"
import Button from "../ui/Button"

const SearchBar = () => {
  const [input, setInput] = React.useState("");

  function handleSearch() {
    console.log("Buscando:", input);
  }

  return (
    <div className="grid grid-cols-1 m-auto md:grid-cols-[8fr_1fr] gap-3 lg:max-w-[654px]">
      <div>
        <InputField value={input} onChange={(e) => setInput(e.target.value)} />
      </div>

      <Button
        className="px-6 py-4 rounded-12 text-preset-5 font-medium"
        color="#4658D9"
        onClick={handleSearch}
      >
        Search
      </Button>
    </div>
  );
};

export default SearchBar;

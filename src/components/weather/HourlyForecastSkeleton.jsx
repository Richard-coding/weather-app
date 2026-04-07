import Button from "../ui/Button";
import Unit from "../../assets/images/icon-dropdown.svg?react";

const HourlyForecast = () => {
  return (
    <section className="flex flex-col gap-4 bg-neutral-800 px-4 py-5 rounded-20">
      <div className="flex justify-between items-center">
        <p className="text-preset-5 font-medium">Hourly forecast</p>

        <div className="relative">
          <Button className="flex items-center gap-3 bg-neutral-600 px-4 py-2 text-preset-7 rounded-8">
            <span>-</span>
            <Unit />
          </Button>
        </div>
      </div>

      {Array.from({ length: 8 }).map((_, index) => {
        return (
          <div
            key={index}
            className="bg-neutral-700 border-neutral-600 border-solid border-[1px] rounded-8 pl-3 pr-4 py-[10px] flex justify-between items-center max-h-[60px] h-[58px] animate-pulse"
          ></div>
        );
      })}
    </section>
  );
};

export default HourlyForecast;

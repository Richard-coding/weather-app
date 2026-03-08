import Button from "../ui/Button";
import Unit from "../../assets/images/icon-dropdown.svg?react";
import Icons from "./Icons";

const HourlyForecast = ({ hourly, hourly_units }) => {
  const formatHour = (time) => {
    const date = new Date(time);

    let hour = date.getHours();
    const period = hour >= 12 ? "PM" : "AM";

    hour = hour % 12;
    hour = hour === 0 ? 12 : hour;

    return {
      hour,
      period,
    };
  };

  return (
    <section className="grid gap-4 bg-neutral-800 px-4 py-5 rounded-20">
      <div className="flex justify-between items-center  ">
        <p className="text-preset-5 font-medium">Hourly forecast</p>
        <Button className=" flex items-center gap-3 bg-neutral-600 px-4 py-2 text-preset-7">
          <p>Tuesday</p>
          <Unit />
        </Button>
      </div>

      {hourly?.time?.slice(0, 7).map((time, index) => {
        const { hour, period } = formatHour(time);

        return (
          <div
            key={index}
            className="bg-neutral-700 border-neutral-600 border-solid border-[1px] rounded-8 pl-3 pr-4 py-[10px] flex justify-between items-center"
          >
            <div className="flex items-center gap-2">
              <Icons
                weatherCode={hourly.weather_code[index]}
                className="w-10 h-10"
              />

              <div className="flex gap-[6px] text-preset-5">
                <p>{hour}</p>
                <p>{period}</p>
              </div>
            </div>

            <p className="text-preset-7">
              {hourly?.apparent_temperature[index]}
              {hourly_units?.apparent_temperature}
            </p>
          </div>
        );
      })}
    </section>
  );
};

export default HourlyForecast;

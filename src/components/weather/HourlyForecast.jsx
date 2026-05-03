import { useState, useEffect, useMemo, useContext } from "react";
import Button from "../common/Button";
import Unit from "../../assets/images/icon-dropdown.svg?react";
import Icons from "./Icons";
import { WeatherContext } from "../../context/WeatherContext";

const HourlyForecast = () => {
  const { data } = useContext(WeatherContext);

  const [selectedDay, setSelectedDay] = useState("");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

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

  const getDayName = (time) => {
    const date = new Date(time);

    return date.toLocaleDateString("en-US", {
      weekday: "long",
    });
  };

  const forecastByDay = useMemo(() => {
    return (
      data?.hourly?.time?.reduce((acc, time, index) => {
        const dayName = getDayName(time);

        if (!acc[dayName]) {
          acc[dayName] = [];
        }

        acc[dayName].push({
          time,
          weather_code: data?.hourly?.weather_code[index],
          apparent_temperature: data?.hourly?.apparent_temperature[index],
        });

        return acc;
      }, {}) || {}
    );
  }, [data]);

  const selectedForecast = forecastByDay[selectedDay] || [];

  const weekOrder = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];

  const days = weekOrder.filter((day) => forecastByDay[day]);

  useEffect(() => {
    if (days.length > 0) {
      setSelectedDay((prev) => {
        if (days.includes(prev)) return prev;
        return days[0];
      });
    }
  }, [days]);

  const handleDaySelect = (day) => {
    setSelectedDay(day);
    setIsDropdownOpen(false);
  };

  return (
    <section className="flex flex-col gap-4 bg-neutral-800 px-4 py-5 rounded-20">
      <div className="flex justify-between items-center">
        <p className="text-preset-5 font-medium">Hourly forecast</p>

        <div className="relative">
          <Button
            onClick={() => setIsDropdownOpen((prev) => !prev)}
            className="flex items-center gap-3 bg-neutral-600 px-4 py-2 text-preset-7 rounded-8"
          >
            <span>{selectedDay || "Select Day"}</span>
            <Unit />
          </Button>

          {isDropdownOpen && (
            <div className="absolute right-0 bg-neutral-800 rounded-12 p-2 mt-1 border border-neutral-600 flex flex-col gap-1 w-[214px] z-50">
              {days.map((day) => (
                <button
                  key={day}
                  onClick={() => handleDaySelect(day)}
                  className="w-full text-start text-preset-7 hover:bg-neutral-700 px-2 py-[10px] rounded-8 z-10"
                >
                  {day}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>

      {selectedForecast.slice(0, 8).map((item, index) => {
        const { hour, period } = formatHour(item.time);

        return (
          <div
            key={index}
            className="bg-neutral-700 border-neutral-600 border-solid border-[1px] rounded-8 pl-3 pr-4 py-[10px] flex justify-between items-center max-h-[60px]"
          >
            <div className="flex items-center gap-2">
              <Icons weatherCode={item.weather_code} className="w-10 h-10" />

              <div className="flex gap-[6px] text-preset-5">
                <p>{hour}</p>
                <p>{period}</p>
              </div>
            </div>

            <p className="text-preset-7">
              {item.apparent_temperature}
              {data?.hourly_units?.apparent_temperature}
            </p>
          </div>
        );
      })}
    </section>
  );
};

export default HourlyForecast;

import { useContext, useEffect } from "react";
import { WeatherContext } from "../../context/WeatherContext";
import Icons from "./Icons";

const WeatherInfo = () => {
  const { data, selected } = useContext(WeatherContext);

  const today = data?.daily?.time?.[0]
    ? new Intl.DateTimeFormat("pt-BR", {
        weekday: "short",
        day: "2-digit",
        month: "short",
      }).format(new Date(data.daily.time[0]))
    : "";

  return (
    <section>
      <div className="bg-mobile md:bg-desktop text-center bg-cover flex flex-wrap items-center md:justify-between gap-4 px-6 py-20 rounded-16">
        <div className="mx-auto md:mx-0">
          <p className="text-preset-4">
            {selected?.name}, {selected?.admin1}
          </p>
          <p className="text-preset-6 opacity-80">{today}</p>
        </div>
        <div className="flex items-center gap-5">
          <Icons
            weatherCode={data?.current?.weather_code}
            className="w-[120px] h-[120px]"
          />
          <p className="text-5xl xs:text-preset-1">
            {data?.current?.temperature_2m}
            {data?.current_units?.temperature_2m}
          </p>
        </div>
      </div>
    </section>
  );
};
export default WeatherInfo;

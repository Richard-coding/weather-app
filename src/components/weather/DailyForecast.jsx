import { useContext } from "react";
import Icons from "./Icons";
import { WeatherContext } from "../../context/WeatherContext";

const Forecast = () => {
  const { data } = useContext(WeatherContext);
  return (
    <section className="my-12 lg:mb-0">
      <p className="mb-5">Daily forecast</p>

      <div className="grid grid-cols-3 md:grid-cols-7 gap-4">
        {data?.daily?.time?.map((_, index) => (
          <div
            key={index}
            className="flex flex-col gap-4 bg-neutral-800 border-solid border-neutral-600 border-[1px] min-w-[84px] px-[10px] py-4 rounded-12"
          >
            <p className="text-preset-6 text-center">
              {new Intl.DateTimeFormat("pt-BR", {
                weekday: "short",
              }).format(new Date(data?.daily?.time[index]))}
            </p>
            <Icons
              weatherCode={data?.daily?.weather_code[index]}
              className="h-[60px] w-[60px] mx-auto"
            />

            <div className="flex justify-around text-preset-6">
              <p className="text-preset-7">
                {data?.daily.temperature_2m_max[index]}º
              </p>
              <p className="text-preset-7 text-neutral-200">
                {data?.daily.temperature_2m_min[index]}º
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Forecast;

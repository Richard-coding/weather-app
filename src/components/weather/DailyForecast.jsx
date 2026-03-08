import Icons from "./Icons";

const Forecast = ({ daily }) => {
  return (
    <section className="my-8 lg:mb-0">
      <p className="mb-5">Daily forecast</p>

      <div className="grid grid-cols-3 md:grid-cols-7 gap-4">
        {daily?.time?.map((_, index) => (
          <div
            key={index}
            className="flex flex-col gap-4 bg-neutral-800 border-solid border-neutral-600 border-[1px] min-w-[84px] px-[10px] py-4 rounded-12"
          >
            <p className="text-preset-6 text-center">
              {new Intl.DateTimeFormat("pt-BR", {
                weekday: "short",
              }).format(new Date(daily.time[index]))}
            </p>
            <Icons weatherCode={daily.weather_code[index]} className="h-[60px] w-[60px] mx-auto" />

            <div className="flex justify-between text-preset-6">
              <p className="text-preset-7">{daily.temperature_2m_min[index]}º</p>
              <p className="text-preset-7 text-neutral-200">{daily.temperature_2m_min[index]}º</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Forecast;

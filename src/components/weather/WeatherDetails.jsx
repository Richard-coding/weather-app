const WeatherDetails = ({ data }) => {
  if (!data) return null;

  const details = [
    {
      key: "Feels Like",
      value: data?.current?.apparent_temperature,
      unit: data?.current_units?.apparent_temperature,
    },
    {
      key: "Humidty",
      value: data?.current?.relative_humidity_2m,
      unit: data?.current_units?.relative_humidity_2m,
    },
    {
      key: "Wind",
      value: data?.current?.wind_speed_10m,
      unit: data?.current_units?.wind_speed_10m,
    },
    {
      key: "Preciptation",
      value: data?.current?.precipitation,
      unit: data?.current_units?.precipitation,
    },
  ];

  return (
    <section
      className="grid grid-cols-2 md:grid-cols-4
 gap-4 mt-8 "
    >
      {details.map((item, index) => (
        <div
          key={index}
          className="border-solid border-neutral-600 border-[1px] bg-neutral-800 p-5 rounded-12"
        >
          <p className="mb-6 text-preset-6 text-neutral-200">{item.key}</p>
          <p className="text-preset-3">
            {item.value} <span>{item.unit}</span>
          </p>
        </div>
      ))}
    </section>
  );
};

export default WeatherDetails;

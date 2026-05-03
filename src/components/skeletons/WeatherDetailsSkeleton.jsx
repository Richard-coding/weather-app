const WeatherDetailsSkeleton = () => {
  const details = [
    {
      label: "Feels Like",
    },
    {
      label: "Humidty",
    },
    {
      label: "Wind",
    },
    {
      label: "Preciptation",
    },
  ];

  return (
    <section className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8 ">
      {details.map((item, index) => (
        <div
          key={index}
          className="border-solid border-neutral-600 border-[1px] bg-neutral-800 p-5 rounded-12"
        >
          <p className="mb-6 text-preset-6 text-neutral-200 animate-pulse">
            {item.label}
          </p>

          <p className="text-preset-3">-</p>
        </div>
      ))}
    </section>
  );
};

export default WeatherDetailsSkeleton;

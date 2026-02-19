import React from "react";

const details = [
  {
    key: "Feels Like",
    value: 64,
    unit: "º",
  },
  {
    key: "Humidty",
    value: 46,
    unit: "%",
  },
  {
    key: "Wind",
    value: 9,
    unit: " mph",
  },
  {
    key: "Preciptation",
    value: 0,
    unit: " in",
  },
];

const WeatherDetails = () => {
  return (
    <section
      className="grid grid-cols-2 md:grid-cols-4
 gap-4 mt-5 "
    >
      {details.map((item, index) => (
        <div
          key={index}
          className="border-solid border-neutral-600 border-[1px] bg-neutral-800 p-5 rounded-12"
        >
          <p className="mb-6 text-preset-6 text-neutral-200">{item.key}</p>
          <p className="text-preset-3">
            {item.value}
            {item.unit}
          </p>
        </div>
      ))}
    </section>
  );
};

export default WeatherDetails;

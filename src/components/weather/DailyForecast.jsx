import iconStorm from "../../assets/images/icon-storm.webp";

const daily = [
  {
    key: "Tue",
    icon: null,
    min: 68,
    max: 57,
  },
  {
    key: "Tue",
    icon: null,
    min: 68,
    max: 57,
  },
  {
    key: "Tue",
    icon: null,
    min: 68,
    max: 57,
  },
  {
    key: "Tue",
    icon: null,
    min: 68,
    max: 57,
  },
  {
    key: "Tue",
    icon: null,
    min: 68,
    max: 57,
  },
  {
    key: "Tue",
    icon: null,
    min: 68,
    max: 57,
  },
  {
    key: "Tue",
    icon: null,
    min: 68,
    max: 57,
  },
];

const Forecast = () => {
  return (
    <section className="my-8 lg:mb-0">
      <p className="mb-5">Daily forecast</p>

      <div className="grid grid-cols-3 md:grid-cols-7 gap-4">
        {daily.map((item, index) => (
          <div
            key={index}
            className="flex flex-col gap-4 bg-neutral-800 border-solid border-neutral-600 border-[1px] min-w-[84px] px-[10px] py-4 rounded-12"
          >
            <p className="text-preset-5 text-center">{item.key}</p>
            <img
              className="w-[60px] h-[60px] mx-auto"
              src={iconStorm}
              alt="storm"
            />

            <div className="flex justify-between text-preset-6">
              <p>{item.min}º</p>
              <p className="text-neutral-200">{item.max}º</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Forecast;

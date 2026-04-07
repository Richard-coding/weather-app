const DailyForecastSkeleton = () => {
  return (
    <section className="my-8 lg:mb-0">
      <p className="mb-5">Daily forecast</p>

      <div className="grid grid-cols-3 md:grid-cols-7 gap-4 animate-pulse">
        {Array.from({ length: 7 }).map((_, index) => (
          <div
            key={index}
            className="flex flex-col gap-4 bg-neutral-800 border-solid border-neutral-600 border-[1px] min-w-[84px] px-[10px] py-4 rounded-12 h-[166px]"
          >
          </div>
        ))}
      </div>
    </section>
  );
};

export default DailyForecastSkeleton;

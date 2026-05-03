const WeatherInfoSkeleton = () => {
  return (
    <section>
      <div className="flex justify-center items-center gap-4 px-6 py-20 rounded-16 h-[280px] bg-neutral-800">
        <p className="animate-pulse">Loading...</p>
      </div>
    </section>
  );
};
export default WeatherInfoSkeleton;

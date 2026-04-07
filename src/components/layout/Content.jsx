import WeatherInfo from "../weather/WeatherInfo";
import WeatherDetails from "../weather/WeatherDetails";
import DailyForecast from "../weather/DailyForecast";
import HourlyForecast from "../weather/HourlyForecast";
import DailyForecastSkeleton from "../weather/DailyForecastSkeleton";
import HourlyForecastSkeleton from "../weather/HourlyForecastSkeleton";
import WeatherDetailsSkeleton from "../weather/WeatherDetailsSkeleton";
import WeatherInfoSkeleton from "../weather/WeatherInfoSkeleton";


const Content = ({ data, selectedCity, loading, noResults }) => {

  if (noResults) {
    return (
      <div className="mt-12 text-center">
        <p className="text-preset-4">No search result found!</p>
      </div>
    );
  }

  return (
    <main className="grid grid-cols-1 pt-12 pb-12 lg:gap-8 lg:grid-cols-[2fr_1fr]">
      <div>
        {loading ? (
          <WeatherInfoSkeleton />
        ) : (
          <WeatherInfo data={data} selectedCity={selectedCity} />
        )}

        {loading ? <WeatherDetailsSkeleton /> : <WeatherDetails data={data} />}

        {loading ? (
          <DailyForecastSkeleton />
        ) : (
          <DailyForecast daily={data.daily} selectedCity={selectedCity} />
        )}
      </div>

      {loading ? (
        <HourlyForecastSkeleton />
      ) : (
        <HourlyForecast
          hourly={data.hourly}
          hourly_units={data.hourly_units}
          selectedCity={selectedCity}
        />
      )}
    </main>
  );
};

export default Content;

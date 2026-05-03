import WeatherInfo from "../weather/WeatherInfo";
import WeatherDetails from "../weather/WeatherDetails";
import DailyForecast from "../weather/DailyForecast";
import HourlyForecast from "../weather/HourlyForecast";
import DailyForecastSkeleton from "../skeletons/DailyForecastSkeleton";
import HourlyForecastSkeleton from "../skeletons/HourlyForecastSkeleton";
import WeatherDetailsSkeleton from "../skeletons/WeatherDetailsSkeleton";
import WeatherInfoSkeleton from "../skeletons/WeatherInfoSkeleton";
import { useContext } from "react";
import { WeatherContext } from "../../context/WeatherContext";

const Content = () => {
  const { data, loading } = useContext(WeatherContext);

  return (
    <main className="grid grid-cols-1 pt-12 pb-12 lg:gap-8 lg:grid-cols-[2fr_1fr]">
      <div>
        {loading ? (
          <div>
            <WeatherInfoSkeleton />
            <WeatherDetailsSkeleton />
            <DailyForecastSkeleton />
          </div>
        ) : (
          <div>
            <WeatherInfo />
            <WeatherDetails />
            <DailyForecast />

          </div>
        )}
      </div>

      {loading ? <HourlyForecastSkeleton /> : <HourlyForecast />}
    </main>
  );
};

export default Content;

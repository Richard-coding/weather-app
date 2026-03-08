import WeatherInfo from "../weather/WeatherInfo";
import WeatherDetails from "../weather/WeatherDetails";
import DailyForecast from "../weather/DailyForecast";
import HourlyForecast from "../weather/HourlyForecast";

const Content = ({ data, selectedCity }) => {
  return (
    <main className="grid grid-cols-1w pt-8 pb-12 lg:gap-8 lg:grid-cols-[2fr_1fr]">
      <div>
        <WeatherInfo data={data} selectedCity={selectedCity} />
        <WeatherDetails data={data} />
        <DailyForecast daily={data.daily} selectedCity={selectedCity} />
      </div>
      <HourlyForecast
        hourly={data.hourly}
        hourly_units={data.hourly_units}
        selectedCity={selectedCity}
      />
    </main>
  );
};

export default Content;

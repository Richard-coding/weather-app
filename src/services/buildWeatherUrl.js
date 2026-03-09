export function buildWeatherUrl(city, unit) {
  return `https://api.open-meteo.com/v1/forecast?latitude=${city.latitude}&longitude=${city.longitude}&daily=temperature_2m_max,temperature_2m_min,rain_sum,showers_sum,snowfall_sum,precipitation_sum,weather_code&hourly=apparent_temperature,rain,showers,snowfall,snow_depth,weather_code&current=temperature_2m,relative_humidity_2m,apparent_temperature,is_day,precipitation,rain,showers,snowfall,wind_speed_10m,weather_code&wind_speed_unit=${unit.windspeed}&temperature_unit=${unit.temperature}&precipitation_unit=${unit.precipitation}`;
}

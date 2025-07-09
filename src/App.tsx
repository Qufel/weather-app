"use client";

import CurrentWeatherPanel from "./components/CurrentWeatherPanel";
import HourlyForecastPanel from "./components/HourlyForecastPanel";
import WeeklyForecastPanel from "./components/WeeklyForecastPanel";

/* URL for fetching weather data
https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&daily=temperature_2m_mean,weather_code,precipitation_probability_mean,sunrise,sunset&hourly=temperature_2m,apparent_temperature,surface_pressure,wind_speed_10m,precipitation,precipitation_probability,weather_code,relative_humidity_2m,is_day
*/

function App() {
  return (
    <div className="app-container">
      <div className="today-weather-container">
        <CurrentWeatherPanel />
        <HourlyForecastPanel />
      </div>
      <WeeklyForecastPanel />
    </div>
  );
}

export default App;

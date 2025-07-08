import CurrentWeatherPanel from "./components/CurrentWeatherPanel";
import HourlyForecastPanel from "./components/HourlyForecastPanel";
import WeeklyForecastPanel from "./components/WeeklyForecastPanel";

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

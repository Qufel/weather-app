import LocationBar from "../location/LocationBar";
import TodayTimeInfo from "../TodayTimeInfo";

interface Props {
  weatherData: {};
  handleWeatherDataChange: (latitude: number, longitude: number) => void;
}

function CurrentWeatherPanel({ weatherData, handleWeatherDataChange }: Props) {
  console.log(weatherData);
  return (
    <div className="current-weather-container">
      <div className="data-container">
        <LocationBar handleWeatherDataUpdate={handleWeatherDataChange} />
        <TodayTimeInfo
          sunset={weatherData["sunset"]}
          sunrise={weatherData["sunrise"]}
        />
      </div>
      <div></div>
    </div>
  );
}

export default CurrentWeatherPanel;

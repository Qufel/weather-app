import LocationBar from "../LocationBar";

interface Props {
  weatherData: {};
  handleWeatherDataChange: (latitude: number, longitude: number) => void;
}

function CurrentWeatherPanel({ weatherData, handleWeatherDataChange }: Props) {
  console.log(weatherData);
  return (
    <div className="current-weather-container">
      <LocationBar handleWeatherDataUpdate={handleWeatherDataChange} />
    </div>
  );
}

export default CurrentWeatherPanel;

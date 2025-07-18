import LocationBar from "../LocationBar";

interface Props {
  handleWeatherDataChange: (latitude: number, longitude: number) => void;
}

function CurrentWeatherPanel({ handleWeatherDataChange }: Props) {
  return (
    <div className="current-weather-container">
      <LocationBar handleWeatherDataUpdate={handleWeatherDataChange} />
    </div>
  );
}

export default CurrentWeatherPanel;

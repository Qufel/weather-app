import LocationBar from "../LocationBar";

interface Props {}

function CurrentWeatherPanel(props: Props) {
  return (
    <div className="current-weather-container">
      <LocationBar />
    </div>
  );
}

export default CurrentWeatherPanel;

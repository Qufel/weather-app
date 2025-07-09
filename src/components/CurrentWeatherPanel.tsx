import WeatherIcon from "./WeatherIcon";

interface Props {}

function CurrentWeatherPanel(props: Props) {
  return (
    <div className="current-weather-container">
      <WeatherIcon code={1} isDay={true} width={200} height={200} />
    </div>
  );
}

export default CurrentWeatherPanel;

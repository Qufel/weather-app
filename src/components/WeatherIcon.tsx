import clear_night from "../assets/icons/clear_night.svg";
import cloudy_night from "../assets/icons/cloudy_night.svg";
import cloudy from "../assets/icons/cloudy.svg";
import rainy from "../assets/icons/rainy.svg";
import snowy from "../assets/icons/snowy.svg";
import sunny from "../assets/icons/sunny.svg";
import thunder from "../assets/icons/thunder.svg";
import foggy from "../assets/icons/foggy.svg";

interface Props {
  code: number;
  isDay: boolean;
  width?: number;
  height?: number;
}

function WeatherIcon({ code, isDay, width = 32, height = 32 }: Props) {
  switch (code) {
    case 0:
      return isDay ? (
        <img src={sunny} alt="Sunny" width={width} height={height} />
      ) : (
        <img
          src={clear_night}
          alt="Clear Night"
          width={width}
          height={height}
        />
      );
    case 1:
    case 2:
    case 3:
      return isDay ? (
        <img src={cloudy} alt="Cloudy" width={width} height={height} />
      ) : (
        <img
          src={cloudy_night}
          alt="Cloudy Night"
          width={width}
          height={height}
        />
      );
    case 45:
    case 48:
      return <img src={foggy} alt="Foggy" width={width} height={height} />;
    case 51:
    case 53:
    case 55:
    case 56:
    case 57:
    case 61:
    case 63:
    case 65:
    case 66:
    case 67:
    case 80:
    case 81:
    case 82:
      return <img src={rainy} alt="Rainy" width={width} height={height} />;
    case 71:
    case 73:
    case 75:
    case 77:
    case 85:
    case 86:
      return <img src={snowy} alt="Snowy" width={width} height={height} />;
    case 95:
    case 96:
    case 99:
      return <img src={thunder} alt="Thunder" width={width} height={height} />;
    default:
      console.error("Unknown weather code:", code);
  }
}

export default WeatherIcon;

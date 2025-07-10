import pin from "../assets/icons/pin.svg";
import { type Location } from "./LocationBar";

interface Props {
  key: number;
  location: any;
  handleSelect: () => void;
}

function SearchItem({ key, location, handleSelect }: Props) {
  return (
    <li key={key} className="search-item" onClick={handleSelect}>
      <img className="icon" src={pin} alt="Location Pin" />
      <p>
        <span>{location["display_name"]}</span>
      </p>
    </li>
  );
}

export default SearchItem;

import { type Location } from "./LocationBar";
import { LocationIcon } from "./Icons";

interface Props {
  index: number;
  location: any;
  handleSelect: () => void;
}

function SearchItem({ index, location, handleSelect }: Props) {
  return (
    <li key={index} className="search-item" onClick={handleSelect}>
      <LocationIcon />
      <p className="city">
        {location["address"]["city"] ||
          location["address"]["town"] ||
          location["address"]["village"]}
      </p>
      <p className="info">
        {location["address"]["state"] ||
          location["address"]["province"] ||
          location["address"]["state_district"]}
        , {location["address"]["country"]}
      </p>
    </li>
  );
}

export default SearchItem;

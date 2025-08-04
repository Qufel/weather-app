import { LocationIcon } from "../Icons";

interface Props {
  location: any;
  handleLocationChange: () => void;
}

function LocationDisplay({ location, handleLocationChange }: Props) {
  return (
    <div className="location-display">
      <button className="change-location-btn" onClick={handleLocationChange}>
        <LocationIcon width={28} height={28} />
      </button>
      <div className="address">
        <h4 className="city">
          {location["address"]["city"] ||
            location["address"]["town"] ||
            location["address"]["village"]}
        </h4>
        <p className="info">
          {location["address"]["state"] ||
            location["address"]["province"] ||
            location["address"]["state_district"]}
          , {location["address"]["country"]}
        </p>
      </div>
    </div>
  );
}

export default LocationDisplay;

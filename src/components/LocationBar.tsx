import React, {
  useEffect,
  useState,
  type ChangeEvent,
  type ChangeEventHandler,
} from "react";

import pin from "../assets/icons/pin.svg";
import search from "../assets/icons/search.svg";
import cancel from "../assets/icons/cancel.svg";

interface Location {
  name: string;
  state: string;
  country: string;
  latitude: number;
  longitude: number;
}

interface Props {}

function LocationBar() {
  const [isSearching, setIsSearching] = useState(false);
  const [location, setLocation] = useState(
    JSON.parse(localStorage.getItem("location") || "{}") || new Location()
  ); //TODO Implement a way to set location when app was never used (first run)

  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchToggle = () => {
    setIsSearching(true);
  };

  const handleSearchInput = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };

  if (isSearching) {
    return (
      <div className="location-bar-search">
        <img src={search} alt="Search" />
        <input
          id="search-input"
          className="search-input"
          type="text"
          onChange={handleSearchInput}
          value={searchQuery}
        />
        <button
          id="clear-input"
          className="clear-input"
          onClick={() => setSearchQuery("")}
        >
          <img src={cancel} alt="Clear Input" />
        </button>
      </div>
    );
  } else {
    return (
      <div className="location-bar-display" onClick={handleSearchToggle}>
        <img src={pin} alt="Location Pin" width={48} height={48} />
        <div className="location-description">
          <h3 className="fs-x-large color-white-100">{location.name}</h3>
          <p className="fs-small color-white-400">
            {location.state}, {location.country}
          </p>
        </div>
      </div>
    );
  }
}

export default LocationBar;

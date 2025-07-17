import React, { useState } from "react";
import { useCookies } from "react-cookie";

import LocationSearch from "./LocationSearch";
import LocationDisplay from "./LocationDisplay";

export interface Location {
  name: string;
  state: string;
  country: string;
  latitude: number;
  longitude: number;
}

interface Props {}

function LocationBar() {
  const [cookies, setCookies] = useCookies(["location"]);
  const [location, setLocation] = useState<any>(cookies["location"]);
  const [showSearch, setShowSearch] = useState<boolean>(false);

  const handleLocationChange = (location: any) => {
    setLocation(location);
    setShowSearch(false);
    setCookies("location", location, { path: "/" });
  };

  return (
    <div className="location-bar">
      {!showSearch ? (
        <LocationDisplay
          location={location}
          handleLocationChange={() => setShowSearch(true)}
        />
      ) : (
        <LocationSearch handleSetLocation={handleLocationChange} />
      )}
    </div>
  );
}

export default LocationBar;

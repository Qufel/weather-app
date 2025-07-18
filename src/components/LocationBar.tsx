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

interface Props {
  handleWeatherDataUpdate: (latitude: number, longitude: number) => void;
}

function LocationBar({ handleWeatherDataUpdate }: Props) {
  const [cookies, setCookies] = useCookies(["location"]);
  const [location, setLocation] = useState<any>(cookies["location"] || null);
  const [showSearch, setShowSearch] = useState<boolean>(false);

  const handleSetLocation = (location: any) => {
    // Update location and weather data
    const { lat, lon } = location;
    setLocation(location);
    handleWeatherDataUpdate(parseFloat(lat), parseFloat(lon));

    // Hide search bar
    setShowSearch(false);

    // Set location cookie
    const expiryDate: Date = new Date(Date.now());
    expiryDate.setTime(expiryDate.getTime() + 365 * 24 * 60 * 60 * 1000);
    setCookies("location", location, { path: "/", expires: expiryDate });
  };

  return (
    <div className="location-bar">
      {!showSearch && location !== null ? (
        <LocationDisplay
          location={location}
          handleLocationChange={() => setShowSearch(true)}
        />
      ) : (
        <LocationSearch handleSetLocation={handleSetLocation} />
      )}
    </div>
  );
}

export default LocationBar;

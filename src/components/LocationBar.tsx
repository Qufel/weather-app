import React, { useState } from "react";

import LocationSearch from "./LocationSearch";

export interface Location {
  name: string;
  state: string;
  country: string;
  latitude: number;
  longitude: number;
}

interface Props {}

function LocationBar() {
  const [location, setLocation] = useState<any | null>(null);

  return (
    <div className="location-bar">
      <LocationSearch
        handleSetLocation={(location: any) => {
          setLocation(location);
          console.log("Selected location:", location);
        }}
      />
    </div>
  );
}

export default LocationBar;

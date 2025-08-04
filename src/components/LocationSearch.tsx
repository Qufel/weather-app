import React, { use, useEffect, useState } from "react";
import { type Location } from "./LocationBar";

import { getLocations } from "../DataFetch";

import SearchItem from "./SearchItem";
import { useQuery } from "@tanstack/react-query";

import { LocationIcon, SearchIcon } from "./Icons";
import LoadingPanel from "./panels/LoadingPanel";

interface Props {
  handleSetLocation: (location: any) => void;
}

function LocationSearch({ handleSetLocation }: Props) {
  const [text, setText] = useState("");

  const {
    data: locations,
    isLoading,
    refetch,
  } = useQuery({
    queryFn: () => getLocations(text),
    queryKey: ["locations", text],
    refetchOnWindowFocus: false,
    enabled: false,
  });

  return (
    <div className="location-search">
      <div className="search-bar">
        <input
          type="text"
          className="search-input"
          name="search-input"
          id="search-input"
          placeholder="Search for a location..."
          onChange={(e) => setText(e.target.value)}
          value={text}
        />
        <button
          className="search-button"
          onClick={() => {
            setText(text);
            refetch();
          }}
        >
          <SearchIcon />
        </button>
      </div>
      {(locations !== undefined || isLoading) && (
        <ul className="search-results">
          {isLoading && <LoadingPanel />}
          {locations &&
            locations.map((location: any, index: number) => (
              <SearchItem
                index={index}
                location={location}
                handleSelect={() => {
                  handleSetLocation(location);
                }}
              />
            ))}
        </ul>
      )}
    </div>
  );
}

export default LocationSearch;

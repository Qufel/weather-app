import React, { use, useEffect, useState } from "react";
import { type Location } from "./LocationBar";

import { getLocations } from "../DataFetch";

import SearchItem from "./SearchItem";

import search from "../assets/icons/search.svg";
import { useQuery } from "@tanstack/react-query";

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
        <img className="icon" src={search} alt="Search" />
        <input
          type="text"
          name="search-input"
          id="search-input"
          placeholder="Search"
          onChange={(e) => setText(e.target.value)}
          value={text}
        />
        <button
          onClick={() => {
            setText(text);
            refetch();
          }}
        >
          Search
        </button>
      </div>
      <ul className="search-results">
        {isLoading && <li>Loading...</li>}
        {locations &&
          locations.map((location: any, index: number) => (
            <SearchItem
              key={index}
              location={location}
              handleSelect={() => {
                handleSetLocation(location);
              }}
            />
          ))}
      </ul>
    </div>
  );
}

export default LocationSearch;

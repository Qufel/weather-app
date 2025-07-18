"use client";

import { useState } from "react";
import { useCookies } from "react-cookie";
import { useQuery } from "@tanstack/react-query";
import { getWeather } from "./DataFetch";

import CurrentWeatherPanel from "./components/panels/CurrentWeatherPanel";
import HourlyForecastPanel from "./components/panels/HourlyForecastPanel";
import WeeklyForecastPanel from "./components/panels/WeeklyForecastPanel";

function App() {
  const [cookies, setCookies] = useCookies();
  const [latitude, setLatitude] = useState<number>(
    cookies["location"]["lat"] || 51.509865
  );
  const [longitude, setLongitude] = useState<number>(
    cookies["location"]["lon"] || -0.118092
  );

  const {
    data: weather,
    isLoading,
    refetch,
  } = useQuery({
    queryFn: () => getWeather(latitude, longitude),
    queryKey: ["latitude", latitude, "longitude", longitude],
    refetchOnWindowFocus: false,
    enabled: true,
  });

  const handleWeatherDataChange = (latitude: number, longitude: number) => {
    setLatitude(latitude);
    setLongitude(longitude);
    refetch();
  };

  return (
    <div className="app-container">
      {!isLoading ? (
        <>
          <div className="today-weather-container">
            <CurrentWeatherPanel
              handleWeatherDataChange={handleWeatherDataChange}
            />
            <HourlyForecastPanel />
          </div>
          <WeeklyForecastPanel />
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default App;

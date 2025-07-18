"use client";

import { useState } from "react";
import { useCookies } from "react-cookie";
import { useQuery } from "@tanstack/react-query";
import { getWeatherAtCurrentTime, getWeather } from "./DataFetch";

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
  // Defaults to London

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
    <>
      {!isLoading ? (
        <div className="app-container">
          <div className="today-weather-container">
            <CurrentWeatherPanel
              weatherData={getWeatherAtCurrentTime(weather)}
              handleWeatherDataChange={handleWeatherDataChange}
            />
            <HourlyForecastPanel />
          </div>
          <WeeklyForecastPanel />
        </div>
      ) : (
        <p>Loading...</p> // DIsplay loading panel
      )}
    </>
  );
}

export default App;

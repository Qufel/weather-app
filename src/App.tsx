"use client";

import { useState } from "react";
import { useCookies } from "react-cookie";
import { useQuery } from "@tanstack/react-query";
import { getWeatherAtCurrentTime, getWeather } from "./DataFetch";

import CurrentWeatherPanel from "./components/panels/CurrentWeatherPanel";
import HourlyForecastPanel from "./components/panels/HourlyForecastPanel";
import WeeklyForecastPanel from "./components/panels/WeeklyForecastPanel";
import LoadingPanel from "./components/panels/LoadingPanel";

function App() {
  const [cookies, setCookies] = useCookies();

  // Extract location, latitude and longitude from cookies
  var { location = {} } = cookies;
  var { lat = null, lon = null } = location;

  const [latitude, setLatitude] = useState<number>(lat || 51.509865);
  const [longitude, setLongitude] = useState<number>(lon || -0.118092);
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
    <div className="app-container">
      {!isLoading ? (
        <>
          <div className="today-weather-container">
            <CurrentWeatherPanel
              weatherData={getWeatherAtCurrentTime(weather)}
              handleWeatherDataChange={handleWeatherDataChange}
            />
            <HourlyForecastPanel />
          </div>
          <WeeklyForecastPanel />
        </>
      ) : (
        <LoadingPanel /> // DIsplay loading panel
      )}
    </div>
  );
}
export default App;

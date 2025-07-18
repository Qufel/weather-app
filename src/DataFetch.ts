export const getWeather = async (latitude: number, longitude: number) => {
  return fetch(
    `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&timezone=auto&daily=temperature_2m_max,temperature_2m_min,precipitation_sum,sunrise,sunset&hourly=temperature_2m,apparent_temperature,surface_pressure,wind_speed_10m,precipitation,precipitation_probability,weather_code,relative_humidity_2m,is_day`
  ).then((res) => res.json());
};

export const getLocations = async (query: string) => {
  return fetch(
    `https://nominatim.openstreetmap.org/search?q=${query}&format=json&polygon_kml=0&addressdetails=1&featureType=city`
  ).then((res) => res.json());
};

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

//region Weather Data Mainpulation

export const getWeatherAtCurrentTime = (data: any) => {
  const { index, date } = getClosestTime(getHourlyTimes(data), new Date()); // Get closest date to current date and time
  const { daily, hourly } = data;
  return {
    sunrise: new Date(daily["sunrise"][0]),
    sunset: new Date(daily["sunset"][0]),
    rainChance: hourly["precipitation_probability"][index] as number,
    temperature: hourly["temperature_2m"][index] as number,
    realFeelTemperature: hourly["apparent_temperature"][index] as number,
    pressure: hourly["surface_pressure"][index] as number,
    windSpeed: hourly["wind_speed_10m"][index] as number,
    precipitation: hourly["precipitation"][index] as number,
    humidity: hourly["relative_humidity_2m"][index] as number,
    weatherCode: hourly["weather_code"][index] as number,
    isDay: hourly["is_day"][index] as boolean,
  };
};

const getHourlyTimes = (data: any) => {
  const { hourly: { time = [] } = {} } = data;
  return time.map((time: string) => new Date(time)) as Date[];
};

const getClosestTime = (dates: Date[], searched: Date) => {
  let minIndex = 0;
  let minDistance = Math.abs(searched.getTime() - dates[0].getTime());
  for (let i = 1; i < dates.length; i++) {
    let distance = Math.abs(searched.getTime() - dates[i].getTime());
    if (distance < minDistance) {
      minIndex = i;
      minDistance = distance;
    }
  }
  return { index: minIndex, date: dates[minIndex] };
};

//endregion

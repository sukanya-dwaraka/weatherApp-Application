const API_KEY = "06f503f80aea0369c707591a6afd45ad";

const BASE_URL = "https://api.openweathermap.org/data/2.5/weather";

export const getWeather = async (city: string) => {
  const res = await fetch(
    `${BASE_URL}?q=${city}&units=metric&appid=${API_KEY}`
  );

  if (!res.ok) {
    throw new Error("City not found");
  }

  return res.json();
};
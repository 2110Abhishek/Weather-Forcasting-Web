const BASE_URL = "https://api.openweathermap.org/data/2.5";

const handleResponse = async (res: Response) => {
  if (!res.ok) {
    const error = await res.json();
    throw new Error(error.message || "Failed to fetch weather data");
  }
  return res.json();
};

export const fetchWeatherByCity = async (
  city: string,
  unit: "metric" | "imperial"
) => {
  const res = await fetch(
    `${BASE_URL}/weather?q=${city.trim()}&units=${unit}&appid=${process.env.NEXT_PUBLIC_WEATHER_API_KEY}`
  );
  return handleResponse(res);
};

export const fetchForecast = async (
  city: string,
  unit: "metric" | "imperial"
) => {
  const res = await fetch(
    `${BASE_URL}/forecast?q=${city.trim()}&units=${unit}&cnt=40&appid=${process.env.NEXT_PUBLIC_WEATHER_API_KEY}`
  );
  return handleResponse(res);
};

export const fetchWeatherByCoords = async (
  lat: number,
  lon: number,
  unit: "metric" | "imperial"
) => {
  const res = await fetch(
    `${BASE_URL}/weather?lat=${lat}&lon=${lon}&units=${unit}&appid=${process.env.NEXT_PUBLIC_WEATHER_API_KEY}`
  );
  return handleResponse(res);
};
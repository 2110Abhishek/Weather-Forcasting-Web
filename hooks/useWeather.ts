import { useEffect, useState, useCallback } from "react";
import {
  fetchWeatherByCity,
  fetchForecast,
  fetchWeatherByCoords,
} from "@/lib/api";
import {
  WeatherResponse,
  ForecastItem,
  ForecastResponse,
} from "@/types/weather";

export const useWeather = (city: string, unit: "metric" | "imperial") => {
  const [weather, setWeather] = useState<WeatherResponse | null>(null);
  const [forecast, setForecast] = useState<ForecastItem[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

const loadWeatherData = useCallback(
  async (cityName: string) => {
    if (!cityName.trim()) return;

    try {
      setLoading(true);
      setError(null);

      const weatherData: WeatherResponse = await fetchWeatherByCity(
        cityName,
        unit
      );

      const forecastData: ForecastResponse = await fetchForecast(
        cityName,
        unit
      );

      setWeather(weatherData);

      const dailyForecast = forecastData.list
        .reduce<ForecastItem[]>((acc, item: ForecastItem) => {
          const date = new Date(item.dt * 1000).toLocaleDateString();

          if (
            !acc.find(
              (f) =>
                new Date(f.dt * 1000).toLocaleDateString() === date
            )
          ) {
            acc.push(item);
          }
          return acc;
        }, [])
        .slice(1, 6);

      setForecast(dailyForecast);
    } catch (err) {
      setError((err as Error).message);
      setWeather(null);
      setForecast([]);
    } finally {
      setLoading(false);
    }
  },
  [unit]
);

  const loadWeatherByLocation = useCallback(async () => {
    if (!navigator.geolocation) {
      setError("Geolocation is not supported by your browser");
      return;
    }

    try {
      setLoading(true);
      setError(null);

      const position = await new Promise<GeolocationPosition>(
        (resolve, reject) => {
          navigator.geolocation.getCurrentPosition(resolve, reject);
        }
      );

      const weatherData: WeatherResponse = await fetchWeatherByCoords(
        position.coords.latitude,
        position.coords.longitude,
        unit
      );

      setWeather(weatherData);
    } catch (err) {
      setError((err as Error).message);
    } finally {
      setLoading(false);
    }
  }, [unit]);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (city) {
        loadWeatherData(city);
      }
    }, 500);

    return () => clearTimeout(timeoutId);
  }, [city, loadWeatherData]);

  return {
    weather,
    forecast,
    loading,
    error,
    loadWeatherByLocation,
    refetch: () => city && loadWeatherData(city),
  };
};

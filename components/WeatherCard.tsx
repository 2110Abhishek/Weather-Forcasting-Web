"use client";

import { WeatherResponse } from "@/types/weather";
import { 
  Thermometer, 
  Droplets, 
  Wind, 
  Eye, 
  Gauge, 
  Sunrise, 
  Sunset,
  Cloud,
  Navigation
} from "lucide-react";

interface WeatherCardProps {
  weather: WeatherResponse;
  unit: "metric" | "imperial";
}

export default function WeatherCard({ weather, unit }: WeatherCardProps) {
  const getWeatherIcon = (iconCode: string) => 
    `https://openweathermap.org/img/wn/${iconCode}@4x.png`;

  const formatTime = (timestamp: number, timezone: number) => {
    const date = new Date((timestamp + timezone) * 1000);
    return date.toUTCString().split(" ")[4].slice(0, 5);
  };

  const getWindDirection = (degrees: number) => {
    const directions = ["N", "NE", "E", "SE", "S", "SW", "W", "NW"];
    const index = Math.round((degrees % 360) / 45) % 8;
    return directions[index];
  };

  return (
    <div className="p-8 rounded-2xl bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-gray-800 dark:to-gray-900 shadow-xl border border-gray-200 dark:border-gray-700 backdrop-blur-sm">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <h2 className="text-3xl font-bold text-gray-800 dark:text-white">
              {weather.name}, {weather.sys.country}
            </h2>
            <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm font-medium">
              {weather.weather[0].main}
            </span>
          </div>
          <p className="text-gray-600 dark:text-gray-300 capitalize">
            {weather.weather[0].description}
          </p>
        </div>
        
        <div className="text-right mt-4 md:mt-0">
          <div className="flex items-center justify-end gap-2">
            <img 
              src={getWeatherIcon(weather.weather[0].icon)} 
              alt={weather.weather[0].main}
              className="w-20 h-20"
            />
            <div>
              <p className="text-5xl font-bold text-gray-800 dark:text-white">
                {Math.round(weather.main.temp)}°{unit === "metric" ? "C" : "F"}
              </p>
              <p className="text-gray-600 dark:text-gray-400">
                Feels like {Math.round(weather.main.feels_like)}°
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
        <div className="p-4 bg-white/50 dark:bg-gray-800/50 rounded-xl">
          <div className="flex items-center gap-2 mb-2">
            <Thermometer className="w-5 h-5 text-blue-600 dark:text-blue-400" />
            <span className="font-semibold text-gray-700 dark:text-gray-300">Temperature</span>
          </div>
          <p className="text-2xl font-bold text-gray-800 dark:text-white">
            {Math.round(weather.main.temp)}°
          </p>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            H: {Math.round(weather.main.temp_max)}° • L: {Math.round(weather.main.temp_min)}°
          </p>
        </div>

        <div className="p-4 bg-white/50 dark:bg-gray-800/50 rounded-xl">
          <div className="flex items-center gap-2 mb-2">
            <Droplets className="w-5 h-5 text-blue-600 dark:text-blue-400" />
            <span className="font-semibold text-gray-700 dark:text-gray-300">Humidity</span>
          </div>
          <p className="text-2xl font-bold text-gray-800 dark:text-white">
            {weather.main.humidity}%
          </p>
        </div>

        <div className="p-4 bg-white/50 dark:bg-gray-800/50 rounded-xl">
          <div className="flex items-center gap-2 mb-2">
            <Wind className="w-5 h-5 text-blue-600 dark:text-blue-400" />
            <span className="font-semibold text-gray-700 dark:text-gray-300">Wind</span>
          </div>
          <p className="text-2xl font-bold text-gray-800 dark:text-white">
            {weather.wind.speed} {unit === "metric" ? "m/s" : "mph"}
          </p>
          <p className="text-sm text-gray-600 dark:text-gray-400 flex items-center gap-1">
            <Navigation className="w-4 h-4" style={{ transform: `rotate(${weather.wind.deg}deg)` }} />
            {getWindDirection(weather.wind.deg)}
          </p>
        </div>

        <div className="p-4 bg-white/50 dark:bg-gray-800/50 rounded-xl">
          <div className="flex items-center gap-2 mb-2">
            <Gauge className="w-5 h-5 text-blue-600 dark:text-blue-400" />
            <span className="font-semibold text-gray-700 dark:text-gray-300">Pressure</span>
          </div>
          <p className="text-2xl font-bold text-gray-800 dark:text-white">
            {weather.main.pressure} hPa
          </p>
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        <div className="p-4 bg-white/50 dark:bg-gray-800/50 rounded-xl">
          <div className="flex items-center gap-2 mb-2">
            <Eye className="w-5 h-5 text-blue-600 dark:text-blue-400" />
            <span className="font-semibold text-gray-700 dark:text-gray-300">Visibility</span>
          </div>
          <p className="text-xl font-bold text-gray-800 dark:text-white">
            {(weather.visibility / 1000).toFixed(1)} km
          </p>
        </div>

        <div className="p-4 bg-white/50 dark:bg-gray-800/50 rounded-xl">
          <div className="flex items-center gap-2 mb-2">
            <Sunrise className="w-5 h-5 text-orange-500 dark:text-orange-400" />
            <span className="font-semibold text-gray-700 dark:text-gray-300">Sunrise</span>
          </div>
          <p className="text-xl font-bold text-gray-800 dark:text-white">
            {formatTime(weather.sys.sunrise, weather.timezone)}
          </p>
        </div>

        <div className="p-4 bg-white/50 dark:bg-gray-800/50 rounded-xl">
          <div className="flex items-center gap-2 mb-2">
            <Sunset className="w-5 h-5 text-purple-500 dark:text-purple-400" />
            <span className="font-semibold text-gray-700 dark:text-gray-300">Sunset</span>
          </div>
          <p className="text-xl font-bold text-gray-800 dark:text-white">
            {formatTime(weather.sys.sunset, weather.timezone)}
          </p>
        </div>
      </div>
    </div>
  );
}
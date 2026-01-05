"use client";

import { ForecastItem } from "@/types/weather";
import { Calendar, Thermometer, Droplets, Wind } from "lucide-react";

interface ForecastCardProps {
  item: ForecastItem;
  unit: "metric" | "imperial";
}

export default function ForecastCard({ item, unit }: ForecastCardProps) {
  const formatDate = (timestamp: number) => {
    const date = new Date(timestamp * 1000);
    return {
      day: date.toLocaleDateString("en-US", { weekday: "short" }),
      date: date.toLocaleDateString("en-US", { month: "short", day: "numeric" }),
      time: date.toLocaleTimeString("en-US", { hour: "numeric", hour12: true })
    };
  };

  const { day, date } = formatDate(item.dt);

  return (
    <div className="group p-4 rounded-xl bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 border border-gray-200 dark:border-gray-700 hover:border-blue-300 dark:hover:border-blue-700 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
      <div className="flex items-center justify-between mb-3">
        <div>
          <p className="font-bold text-lg text-gray-800 dark:text-white">{day}</p>
          <p className="text-sm text-gray-600 dark:text-gray-400">{date}</p>
        </div>
        <Calendar className="w-5 h-5 text-gray-400 group-hover:text-blue-500 transition-colors" />
      </div>

      <div className="flex items-center justify-center mb-4">
        <img 
          src={`https://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`}
          alt={item.weather[0].main}
          className="w-16 h-16"
        />
      </div>

      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Thermometer className="w-4 h-4 text-red-500" />
            <span className="text-sm text-gray-600 dark:text-gray-400">Temp</span>
          </div>
          <span className="font-bold text-gray-800 dark:text-white">
            {Math.round(item.main.temp)}°{unit === "metric" ? "C" : "F"}
          </span>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Droplets className="w-4 h-4 text-blue-500" />
            <span className="text-sm text-gray-600 dark:text-gray-400">Humidity</span>
          </div>
          <span className="font-bold text-gray-800 dark:text-white">{item.main.humidity}%</span>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Wind className="w-4 h-4 text-green-500" />
            <span className="text-sm text-gray-600 dark:text-gray-400">Wind</span>
          </div>
          <span className="font-bold text-gray-800 dark:text-white">
            {item.wind.speed} {unit === "metric" ? "m/s" : "mph"}
          </span>
        </div>
      </div>

      <div className="mt-4 pt-3 border-t border-gray-200 dark:border-gray-700">
        <p className="text-sm text-center text-gray-600 dark:text-gray-400 capitalize">
          {item.weather[0].description}
        </p>
        <div className="mt-2 flex justify-center">
          <div className="px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-xs">
            {(item.pop * 100).toFixed(0)}% precip
          </div>
        </div>
      </div>
    </div>
  );
}
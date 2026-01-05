"use client";

import { useState, useEffect } from "react";
import SearchBar from "@/components/SearchBar";
import WeatherCard from "@/components/WeatherCard";
import ForecastCard from "@/components/ForecastCard";
import Skeleton from "@/components/Skeleton";
import ThemeToggle from "@/components/ThemeToggle";
import { useWeather } from "@/hooks/useWeather";
import { 
  Thermometer, 
  AlertCircle, 
  RefreshCw,
  Cloud,
  Droplets,
  Wind,
  MapPin,
  Search,
  Sun,
  CloudRain,
  CloudSnow,
  Zap
} from "lucide-react";

export default function Home() {
  const [city, setCity] = useState("");
  const [unit, setUnit] = useState<"metric" | "imperial">("metric");
  const [isClient, setIsClient] = useState(false);
  const [hasSearched, setHasSearched] = useState(false);

  const { weather, forecast, loading, error, loadWeatherByLocation, refetch } = 
    useWeather(city, unit);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const handleSearch = (searchCity: string) => {
    setCity(searchCity);
    setHasSearched(true);
  };

  const handleLocationClick = async () => {
    await loadWeatherByLocation();
    setHasSearched(true);
  };

  const handleUnitToggle = () => {
    setUnit(prev => prev === "metric" ? "imperial" : "metric");
  };

  const exampleCities = ["London", "New York", "Tokyo", "Sydney", "Paris", "Dubai", "Mumbai", "Cairo"];

  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-cyan-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-full h-96 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 dark:from-blue-900/20 dark:to-cyan-900/20 -z-10" />
      
      <div className="container mx-auto px-4 py-8 max-w-6xl">
        {/* Theme Toggle - Top Right */}
        <div className="flex justify-end mb-4">
          <ThemeToggle />
        </div>

        {/* Main Content */}
        <div className="flex flex-col items-center justify-center">
          {/* Welcome/Empty State - Centered */}
          {!hasSearched && !loading && !weather && (
            <div className="w-full max-w-4xl text-center animate-fadeIn">
              {/* Animated Weather Icons */}
              <div className="flex justify-center space-x-8 mb-8 opacity-70">
                <Sun className="w-16 h-16 text-yellow-500 animate-pulse" />
                <CloudRain className="w-16 h-16 text-blue-500 animate-bounce" style={{ animationDelay: "0.2s" }} />
                <Cloud className="w-16 h-16 text-gray-500 animate-pulse" style={{ animationDelay: "0.4s" }} />
                <CloudSnow className="w-16 h-16 text-blue-300 animate-bounce" style={{ animationDelay: "0.6s" }} />
                <Zap className="w-16 h-16 text-yellow-400 animate-pulse" style={{ animationDelay: "0.8s" }} />
              </div>

              {/* Main Title */}
              <h1 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-blue-600 via-cyan-600 to-blue-600 bg-clip-text text-transparent animate-gradient">
                Weather Forecast
              </h1>
              
              {/* Subtitle */}
              <p className="text-xl text-gray-600 dark:text-gray-400 mb-10">
                Real-time weather updates and 5-day forecast
              </p>

              {/* Search Bar - Centered and Larger */}
              <div className="w-full max-w-2xl mx-auto mb-12">
                <SearchBar 
                  onSearch={handleSearch} 
                  onLocationClick={handleLocationClick}
                  loading={loading}
                />
              </div>

              {/* Quick Actions */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                <button
                  onClick={handleLocationClick}
                  className="flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-xl hover:from-blue-700 hover:to-cyan-700 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                >
                  <MapPin className="w-6 h-6" />
                  <span className="text-lg font-medium">Use My Location</span>
                </button>
              </div>

              {/* Popular Cities Grid */}
              <div className="mb-16">
                <h3 className="text-2xl font-semibold text-gray-700 dark:text-gray-300 mb-6">
                  Popular Cities
                </h3>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-2xl mx-auto">
                  {exampleCities.map((cityName) => (
                    <button
                      key={cityName}
                      onClick={() => handleSearch(cityName)}
                      className="px-6 py-4 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-xl hover:border-blue-500 dark:hover:border-blue-500 transition-all duration-200 hover:shadow-lg transform hover:-translate-y-1"
                    >
                      <span className="font-medium">{cityName}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Features */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto mt-12">
                <div className="p-6 bg-white/50 dark:bg-gray-800/50 rounded-2xl border border-gray-200 dark:border-gray-700">
                  <div className="flex items-center justify-center w-12 h-12 mb-4 mx-auto rounded-full bg-blue-100 dark:bg-blue-900">
                    <Sun className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <h4 className="font-bold text-lg mb-2">Real-time Updates</h4>
                  <p className="text-gray-600 dark:text-gray-400">Get instant weather data for any location worldwide</p>
                </div>
                
                <div className="p-6 bg-white/50 dark:bg-gray-800/50 rounded-2xl border border-gray-200 dark:border-gray-700">
                  <div className="flex items-center justify-center w-12 h-12 mb-4 mx-auto rounded-full bg-cyan-100 dark:bg-cyan-900">
                    <Cloud className="w-6 h-6 text-cyan-600 dark:text-cyan-400" />
                  </div>
                  <h4 className="font-bold text-lg mb-2">5-Day Forecast</h4>
                  <p className="text-gray-600 dark:text-gray-400">Plan ahead with detailed 5-day weather predictions</p>
                </div>
                
                <div className="p-6 bg-white/50 dark:bg-gray-800/50 rounded-2xl border border-gray-200 dark:border-gray-700">
                  <div className="flex items-center justify-center w-12 h-12 mb-4 mx-auto rounded-full bg-purple-100 dark:bg-purple-900">
                    <MapPin className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                  </div>
                  <h4 className="font-bold text-lg mb-2">Global Coverage</h4>
                  <p className="text-gray-600 dark:text-gray-400">Search weather for over 200,000 cities worldwide</p>
                </div>
              </div>
            </div>
          )}

          {/* Results State */}
          {hasSearched && (
            <div className="w-full animate-fadeIn">
              {/* Header with Search */}
              <div className="mb-8">
                <div className="flex flex-col items-center mb-8">
                  <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent mb-2">
                    Weather Forecast
                  </h1>
                  <p className="text-gray-600 dark:text-gray-400">
                    Real-time weather updates and 5-day forecast
                  </p>
                </div>
                
                <div className="max-w-2xl mx-auto">
                  <SearchBar 
                    onSearch={handleSearch} 
                    onLocationClick={handleLocationClick}
                    loading={loading}
                  />
                </div>
              </div>

              {/* Controls */}
              <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
                <div className="flex items-center gap-4">
                  <button
                    onClick={handleUnitToggle}
                    className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-500 transition-all duration-200 shadow-sm hover:shadow-md"
                  >
                    <Thermometer className="w-4 h-4" />
                    <span className="font-medium">
                      Switch to °{unit === "metric" ? "F" : "C"}
                    </span>
                  </button>
                  
                  <button
                    onClick={() => refetch()}
                    disabled={loading}
                    className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-500 transition-all duration-200 shadow-sm hover:shadow-md disabled:opacity-50"
                  >
                    <RefreshCw className={`w-4 h-4 ${loading ? "animate-spin" : ""}`} />
                    <span className="font-medium">Refresh</span>
                  </button>
                </div>

                <div className="flex items-center gap-3 text-sm text-gray-600 dark:text-gray-400">
                  <div className="flex items-center gap-1">
                    <Cloud className="w-4 h-4" />
                    <span>Clouds</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Droplets className="w-4 h-4" />
                    <span>Precipitation</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Wind className="w-4 h-4" />
                    <span>Wind</span>
                  </div>
                </div>
              </div>

              {/* Error Message */}
              {error && (
                <div className="mb-6 p-4 rounded-xl bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800">
                  <div className="flex items-center gap-2 text-red-600 dark:text-red-400">
                    <AlertCircle className="w-5 h-5" />
                    <span className="font-medium">Error: {error}</span>
                  </div>
                </div>
              )}

              {/* Loading State */}
              {loading && (
                <div className="flex justify-center">
                  <div className="w-full max-w-4xl">
                    <Skeleton />
                  </div>
                </div>
              )}

              {/* Weather Card */}
              {!loading && weather && (
                <div className="mb-8 flex justify-center">
                  <div className="w-full max-w-4xl">
                    <WeatherCard weather={weather} unit={unit} />
                  </div>
                </div>
              )}

              {/* 5-Day Forecast */}
              {!loading && forecast.length > 0 && (
                <div className="text-center">
                  <div className="flex items-center justify-between mb-4">
                    <h2 className="text-2xl font-bold text-gray-800 dark:text-white">
                      5-Day Forecast
                    </h2>
                    <span className="text-sm text-gray-600 dark:text-gray-400">
                      {unit === "metric" ? "°C" : "°F"} • {unit === "metric" ? "m/s" : "mph"}
                    </span>
                  </div>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 max-w-5xl mx-auto">
                    {forecast.map((item, index) => (
                      <ForecastCard key={index} item={item} unit={unit} />
                    ))}
                  </div>
                </div>
              )}

              {/* Quick Search Again */}
              {!loading && weather && (
                <div className="mt-12 text-center">
                  <h3 className="text-xl font-semibold text-gray-700 dark:text-gray-300 mb-4">
                    Search Another City
                  </h3>
                  <div className="flex flex-wrap justify-center gap-3">
                    {exampleCities.slice(0, 6).map((cityName) => (
                      <button
                        key={cityName}
                        onClick={() => handleSearch(cityName)}
                        className="px-4 py-2 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg hover:border-blue-500 dark:hover:border-blue-500 transition-all duration-200"
                      >
                        {cityName}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Footer */}
        <footer className="mt-12 pt-6 border-t border-gray-200 dark:border-gray-800 text-center">
          <div className="text-gray-600 dark:text-gray-400 text-sm">
            <p>Weather data provided by OpenWeatherMap • Updates every 10 minutes</p>
            <p className="mt-2">
              Made with ❤️ • {new Date().getFullYear()} Weather App
            </p>
          </div>
        </footer>
      </div>
    </main>
  );
}
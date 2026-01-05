"use client";

import { useState, FormEvent } from "react";
import { Search, Navigation } from "lucide-react";

interface SearchBarProps {
  onSearch: (city: string) => void;
  onLocationClick: () => void;
  loading: boolean;
}

export default function SearchBar({ onSearch, onLocationClick, loading }: SearchBarProps) {
  const [city, setCity] = useState("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (city.trim()) {
      onSearch(city);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-2xl mx-auto">
      <div className="relative">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <Search className="h-5 w-5 text-gray-400" />
        </div>
        <input
          type="text"
          className="block w-full pl-10 pr-24 py-4 text-lg rounded-xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-500 focus:ring-2 focus:ring-blue-500 focus:border-transparent shadow-sm transition-all duration-200"
          placeholder="Search for a city (e.g., Nagpur, Mumbai, Pune)"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          disabled={loading}
        />
        <div className="absolute inset-y-0 right-0 flex items-center pr-1">
          <button
            type="button"
            onClick={onLocationClick}
            className="p-2 mr-2 text-gray-500 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition-colors rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700"
            title="Use current location"
            disabled={loading}
          >
            <Navigation className="h-5 w-5" />
          </button>
          <button
            type="submit"
            disabled={loading || !city.trim()}
            className="px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-medium rounded-lg hover:from-blue-700 hover:to-cyan-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 shadow-md hover:shadow-lg"
          >
            {loading ? "Searching..." : "Search"}
          </button>
        </div>
      </div>
      <div className="mt-3 flex flex-wrap gap-2">
        <button
          type="button"
          onClick={() => { setCity("Nagpur"); onSearch("Nagpur"); }}
          className="px-3 py-1.5 text-sm bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-lg transition-colors"
        >
          Nagpur
        </button>
        <button
          type="button"
          onClick={() => { setCity("Mumbai"); onSearch("Mumbai"); }}
          className="px-3 py-1.5 text-sm bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-lg transition-colors"
        >
         Mumbai
        </button>
        <button
          type="button"
          onClick={() => { setCity("Pune"); onSearch("Pune"); }}
          className="px-3 py-1.5 text-sm bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-lg transition-colors"
        >
          Pune
        </button>
        <button
          type="button"
          onClick={() => { setCity("Hyderabad"); onSearch("Hyderabad"); }}
          className="px-3 py-1.5 text-sm bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-lg transition-colors"
        >
          Hyderabad
        </button>
      </div>
    </form>
  );
}
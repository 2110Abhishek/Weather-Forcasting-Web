"use client";

import { useTheme } from "next-themes";
import { Sun, Moon, Monitor } from "lucide-react";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="w-40 h-10 bg-gray-200 dark:bg-gray-700 rounded-lg animate-pulse"></div>
    );
  }

  return (
    <div className="flex items-center gap-1 p-1 bg-gray-100 dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700">
      <button
        onClick={() => setTheme("light")}
        className={`flex items-center gap-2 px-3 py-2 rounded-md transition-all ${
          theme === "light"
            ? "bg-white text-blue-600 shadow-sm"
            : "text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-300"
        }`}
      >
        <Sun className="w-4 h-4" />
        <span className="text-sm font-medium">Light</span>
      </button>
      
      <button
        onClick={() => setTheme("dark")}
        className={`flex items-center gap-2 px-3 py-2 rounded-md transition-all ${
          theme === "dark"
            ? "bg-gray-900 text-blue-400 shadow-sm"
            : "text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-300"
        }`}
      >
        <Moon className="w-4 h-4" />
        <span className="text-sm font-medium">Dark</span>
      </button>
      
      <button
        onClick={() => setTheme("system")}
        className={`flex items-center gap-2 px-3 py-2 rounded-md transition-all ${
          theme === "system"
            ? "bg-gray-200 dark:bg-gray-700 text-blue-600 dark:text-blue-400 shadow-sm"
            : "text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-300"
        }`}
      >
        <Monitor className="w-4 h-4" />
        <span className="text-sm font-medium">System</span>
      </button>
    </div>
  );
}